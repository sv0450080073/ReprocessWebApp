import { isNgTemplate } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { isEmptyObject } from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { FlowData } from '../Model/metrics_reprocess/flow-data';
import { TrackSearchDataParams } from '../Model/metrics_reprocess/track-search-data-params';
import { MtReprocessDataGrid } from '../Model/metrics_reprocess/mt-reprocess-data-grid';

import { ReprocessSeaarchcondition } from '../Model/metrics_reprocess/reprocess-seaarchcondition';
import { ReprocessSearch } from '../Model/metrics_reprocess/reprocess-search';
import { MetricReprocessService } from '../Service/metric-reprocess.service';
import { TrackDataGrid } from '../shared/track-data-grid';
import { TrackSearch } from '../shared/track-search';

@Component({
  selector: 'app-metric-reprocess',
  templateUrl: './metric-reprocess.component.html',
  styleUrls: ['./metric-reprocess.component.scss']
})
export class MetricReprocessComponent implements OnInit {
  isLoading: boolean = false;
  rfTrackFile: FormGroup;
  rfSearchReprocess: FormGroup;
  trackSearch: TrackSearch;
  trackDataGrid: TrackDataGrid[];
  reprocessSearch: ReprocessSearch;
  mtReprocessGrid: MtReprocessDataGrid[];
  isChecked: boolean;
  isReprocess: boolean;
  trackSearchDataParams: TrackSearchDataParams;
  isIDEExtract: boolean = false;
  flowDatas: FlowData[];
  flowItemSelected: FlowData;
  @ViewChild('impInput')
  myInputVariable: ElementRef;
  itemsPerPageTrack = 10;
  totalItemsTrack = 0;
  pageTrack: number = 1;
  itemsPerPageReprocess = 6;
  totalItemsReprocess = 0;
  pageReprocess: number = 1;
  constructor(private trackForm: FormBuilder, private mtReprocessService: MetricReprocessService, private toastr: ToastrService) { }

  ngOnInit() {
    var today = new Date();
    this.rfTrackFile = this.trackForm.group({
      impFile: new FormControl('', null),
      flowCombb: new FormControl('', null),
      Year: new FormControl(today.getFullYear(), [Validators.required, Validators.max(9999)]),
      Quarter: new FormControl(Math.floor((today.getMonth() + 2) / 3), Validators.compose([Validators.required, Validators.pattern("[1-4]"), Validators.maxLength(2)])),
      InOutboxIDs: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[0-9]+(,[0-9]+)*$")])),
    });
    this.rfSearchReprocess = new FormGroup({
      isUseMTImportService: new FormControl(true, null)
    });
    this.flowDatas = [
      { Id: 1, Name: 'CIP', FlowInOutabox: 1, IsInbox: true, Year: today.getFullYear(), Quarter: Math.floor((today.getMonth() + 2) / 3) },
      { Id: 2, Name: 'EDI_Extract', FlowInOutabox: 1, IsInbox: true, Year: today.getFullYear(), Quarter: Math.floor((today.getMonth() + 2) / 3) },
    ];
    this.flowItemSelected = this.flowDatas ? this.flowDatas[0] : null;
  }

  //#region  Submit form
  onSubmitBtnTrack() {
    try {
      if (this.rfTrackFile.valid && !this.isLoading) {
        this.trackSearchDataParams = { FlowCombbData: {}, TrackSearchDatas: [] } as TrackSearchDataParams;
        this.trackSearchDataParams.FlowCombbData = this.flowItemSelected;
        this.trackSearchDataParams.FlowCombbData.Year = this.rfTrackFile.value.Year;
        this.trackSearchDataParams.FlowCombbData.Quarter = this.rfTrackFile.value.Quarter;
        var files = this.rfTrackFile.value.InOutboxIDs;
        if (this.trackSearchDataParams.FlowCombbData && this.trackSearchDataParams.FlowCombbData.Id == 2) {
          this.getTrackFileStatusGrid(this.trackSearchDataParams);
        }
        else if (this.trackSearchDataParams.FlowCombbData && this.trackSearchDataParams.FlowCombbData.Id == 1) //CIP FLOW
        {
          if(this.rfTrackFile.valid)
          {
            this.trackSearchDataParams.TrackSearchDatas = this.getTrackSearchs(files)
            if (this.trackSearchDataParams && this.trackSearchDataParams.TrackSearchDatas && this.trackSearchDataParams.TrackSearchDatas.length > 0) {
              this.getTrackFileStatusGrid(this.trackSearchDataParams);
            }
          }
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  onSubmitReprocess() {
    var trackGridHaveItemChecked: TrackDataGrid[] = [];
    if (this.trackDataGrid) {
      trackGridHaveItemChecked = this.trackDataGrid.filter(function (item, index) {
        return item.IsChecked === true;
      })
      var formValue = this.rfSearchReprocess.value;
      let searchCondition = {} as ReprocessSeaarchcondition;
      if (trackGridHaveItemChecked) {
        searchCondition.FlowCombbData = trackGridHaveItemChecked[0].FlowCombbData; // phase 1
      }
      searchCondition.IsImportMetric = formValue.isUseMTImportService;
      let data = {} as ReprocessSearch;
      data.SearchCondition = searchCondition;
      data.TrackDataGridNeedReprocess = trackGridHaveItemChecked;
      this.reprocessSearch = data;

      if (this.isValidFormBeforeSubmitReprocess(trackGridHaveItemChecked)) {
        this.getReprocessGrid(this.reprocessSearch);
      }
    }
  }

  //#endregion
  //#region  Property
  get files() {
    return this.rfTrackFile.get('files');
  }
  get inOutboxIDs() {
    return this.rfTrackFile.get('InOutboxIDs');
  }
  //#endregion
  //#region  Method
  filesHandler(file, index) {
    let obj = {} as TrackSearch;
    obj.InOutBoxId = file ? file : 0;
    return obj;
  }

  handlerChooseItemToReprocessCIPFlow(item, index) {
    let trackGridItem = {} as TrackDataGrid;
    trackGridItem.InOutboxId = item.InOutboxId;
    trackGridItem.IntergrationStatus = item.IntergrationStatus;
    trackGridItem.Note = item.Note;
    trackGridItem.Index = item.Index;
    trackGridItem.YearQuarter = item.YearQuarter;
    trackGridItem.DateShow = item.DateShow;
    var inteStatus = item.IntergrationStatus.toLowerCase();
    var note = item.Note.toLowerCase();
    var isCheckedItem = false;
    if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold") {
      isCheckedItem = true;
    }
    trackGridItem.IsChecked = isCheckedItem;
    trackGridItem.IsDisable = isCheckedItem;
    trackGridItem.FlowCombbData = item.FlowCombbData;
    return trackGridItem;
  }
  handlerChooseItemToReprocessEDIExtractFlow(item, index) {
    let trackGridItem = {} as TrackDataGrid;
    trackGridItem.InOutboxId = item.InOutboxId;
    trackGridItem.IntergrationStatus = item.IntergrationStatus;
    trackGridItem.Note = item.Note;
    trackGridItem.Index = item.Index;
    trackGridItem.YearQuarter = item.YearQuarter;
    trackGridItem.DateShow = item.DateShow;
    var inteStatus = item.IntergrationStatus.toLowerCase();
    var note = item.Note.toLowerCase();
    var isCheckedItem = false;
    if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold") {
      isCheckedItem = true;
    }
    trackGridItem.Trans = item.Trans;
    trackGridItem.SenderId = item.SenderId;
    trackGridItem.ReceiverId = item.ReceiverId;
    trackGridItem.TrackingProcessId = item.TrackingProcessId;

    trackGridItem.IsChecked = isCheckedItem;
    trackGridItem.IsDisable = isCheckedItem;
    trackGridItem.FlowCombbData = item.FlowCombbData;
    return trackGridItem;
  }
  trackFileReprocessItemHandler(item, index) {
    if (item) {
      var fieds = item.trim().split('_');
      let obj = {} as TrackSearch;

      obj.IsReprocess = true;
      obj.Index = fieds[11];
      return obj;
    }
    else {
      return null;
    }

  }
  getFilesChecked(accumulator, currentValue, currentIndex, originArray) {
    let infoReprocess = "_" + currentValue.Index;
    return accumulator += currentValue.FilePath + infoReprocess + "\n";
  }
  onUnsuccessOrNotImpBtnClick() {
    if (this.trackDataGrid) {
      this.isLoading = true;
      try {
        if (this.flowItemSelected.Id == 1) //CIP Flow
        {
          this.trackDataGrid = this.trackDataGrid.map(this.handlerChooseItemToReprocessCIPFlow);
        }
        else if (this.flowItemSelected.Id == 2) //Extract
        {
          this.trackDataGrid = this.trackDataGrid.map(this.handlerChooseItemToReprocessEDIExtractFlow);
        }
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    }
  }

  isCheckedItem(inteStatus: string, note: string) {
    inteStatus = inteStatus.toLowerCase();
    if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold" && inteStatus !== "importing"
      && !note.toLowerCase().includes("not exist in diasciir9 database"))
      return true;
    else
      return false;
  }

  getNumberFromForm(value: number, minValue: number, maxValue: number) {
    if (value > minValue && value <= maxValue) {
      return value;
    }
    return 0;
  }
  getStringFromForm(value: string) {
    value = value.trim();
    if (value === "" || value === undefined || value === null)
      return "";
    else
      return value;
  }
  isValidFormBeforeSubmitReprocess(trackGridHaveItemChecked) {
    if (this.rfSearchReprocess.valid && !this.isLoading) {
      if (trackGridHaveItemChecked !== undefined && trackGridHaveItemChecked.length > 0
        && trackGridHaveItemChecked) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  onCheckboxAll(ev) {
    this.trackDataGrid.forEach(function (item, index) {
      if (ev.target.checked) {
        item.IsChecked = true;
      }
      else {
        item.IsChecked = false;
      }
    });

  }
  isAllCheckBoxChecked() {
    if (this.trackDataGrid) {
      return this.trackDataGrid.every(p => p.IsChecked);
    }
  }
  updateStatusTrackGridThenReporcess(trackdataGridNew: TrackDataGrid[]) {
    for (const item of trackdataGridNew) {
      this.showUpdatedItem(item);
    }
  }
  showUpdatedItem(newItem) {
    let updateItem = this.trackDataGrid.find(this.findIndexToUpdate, newItem.Index);
    let index = this.trackDataGrid.indexOf(updateItem);
    this.trackDataGrid[index] = newItem;
  }
  findIndexToUpdate(newItem) {
    return newItem.Index === this;
  }
  //#endregion
//#region On change Combobox
onChangeNumberPerPageSelected(value, isChangeNumberTrackGrid: boolean) {
  if (value > 0) {
    if (isChangeNumberTrackGrid) {
      this.itemsPerPageTrack = value;
    }
    else {
      this.itemsPerPageReprocess = value;
    }
  }
}
onChangeCombbFlow(itemSelected) {
  var today = new Date();
 // this.flowItemSelected.FlowInOutabox = 1;
  if (itemSelected) {
    if (itemSelected && itemSelected.Id == 2) {
      this.isIDEExtract = true;
      this.rfTrackFile.controls['InOutboxIDs'].clearValidators();
    }
    else {
      this.rfTrackFile.controls['InOutboxIDs'].setValidators(Validators.compose([Validators.required, Validators.pattern("^[0-9]+(,[0-9]+)*$")]));
      this.isIDEExtract = false;
    }
  }
  this.flowItemSelected = itemSelected;
  this.onChangeCombbFlowOption( this.isInbox ? 1 : 2);
  this.rfTrackFile.controls['InOutboxIDs'].updateValueAndValidity();
}
isInbox : boolean =true;
onChangeCombbFlowOption(value) {
  if (value > 0) {
    this.flowItemSelected.FlowInOutabox = value;
    if (value === '1' || value ==1) {
      this.flowItemSelected.IsInbox = true;
      this.isInbox =true;
    }
    else {
      this.flowItemSelected.IsInbox = false;
      this.isInbox =false;
    }
  }
}



//#endregion
  //#region  CALL Service
  getTrackSearchs(files) {
    if (files) {
      var cutStr = files.trim().split(',');
      var datas = cutStr.map(this.filesHandler) as TrackSearch[];
      datas.forEach(e => {
        e.Year = this.rfTrackFile.value.Year;
        e.Quarter = this.rfTrackFile.value.Quarter;
        e.IsInbox = this.flowItemSelected.IsInbox;
      });
      return datas;
    }
    else {
      return null;
    }
  }
  getTrackFileStatusGrid(datas: TrackSearchDataParams) {
    if (this.trackSearchDataParams.FlowCombbData && this.trackSearchDataParams.FlowCombbData.Id == 2) {
      this.isLoading = true;
      this.mtReprocessService.getTrackStatusFiles(datas).subscribe(res => {
        this.isLoading = false;
        this.trackDataGrid = res;
        if (this.trackDataGrid && this.trackDataGrid.length > 0) {
          this.alertSuccess("Track " + (this.trackDataGrid ? this.trackDataGrid.length : 0) + " files success !");
        }
        else {
         // this.alertError("Track files fail !");
        }
      })
    }
    else {
      if (datas) {
        this.isLoading = true;
        this.mtReprocessService.getTrackStatusFiles(datas).subscribe(res => {
          this.isLoading = false;
          this.trackDataGrid = res;
          console.log(this.trackDataGrid);

          if (this.trackDataGrid && this.trackDataGrid.length > 0) {
            this.alertSuccess("Track " + (this.trackDataGrid ? this.trackDataGrid.length : 0) + "/" + datas.TrackSearchDatas.length + " files success !");
          }
          else {
            this.alertError("Track files fail !");
          }
        })
      }
      else {
        this.alertError("Track files fail !");
      }
    }

  }
  getReprocessGrid(reprocessSearch: ReprocessSearch) {
    if (reprocessSearch) {
      this.isLoading = true;
      this.totalItemsReprocess = 0;
      this.mtReprocessService.mtReprocess(reprocessSearch).toPromise()
        .then(res => {
          this.mtReprocessGrid = res;
          this.isLoading = false;
          if (this.mtReprocessGrid && this.mtReprocessGrid.length > 0) {
            this.totalItemsReprocess = this.mtReprocessGrid.length;
            this.alertSuccess("Reprocess " + this.mtReprocessGrid.length + "/" + reprocessSearch.TrackDataGridNeedReprocess.length + " files success !");
          }
          else {
            this.alertError("Reprocess fail !");
          }
        })
      //.then(res => {
      //   if (this.rfSearchReprocess.value.isUseMTImportService) {


      //     var checkedFiles = reprocessSearch.TrackDataGrid.reduce(this.getFilesChecked, "");
      //     if (checkedFiles) {
      //       var cutStr = checkedFiles.trim().split('\n');
      //       var datas = cutStr.map(this.trackFileReprocessItemHandler);
      //       if (datas) {
      //         this.isLoading = true;
      //         this.mtReprocessService.getStatusFiles(datas).subscribe(res => {
      //           this.isLoading = false;
      //           this.updateStatusTrackGridThenReporcess(res);
      //           this.alertSuccess("Update status track view success!");
      //         })
      //       }
      //       else {
      //         // Fail alert
      //       }
      //     }
      //     else {
      //       //File error
      //     }
      //   }
      // })
    }
  }
  //#endregion
  //#region  Alert Toasrt
  alertSuccess(message: string) {
    this.toastr.success(message, "Success");
  }
  alertError(message: string) {
    this.toastr.error(message, "Fail");
  }
  //#endregion
}
