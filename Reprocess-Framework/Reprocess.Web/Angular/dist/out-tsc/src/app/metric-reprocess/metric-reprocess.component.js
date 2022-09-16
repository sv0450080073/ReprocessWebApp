import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MetricReprocessService } from '../Service/metric-reprocess.service';
var MetricReprocessComponent = /** @class */ (function () {
    function MetricReprocessComponent(mtReprocessService, toastr) {
        this.mtReprocessService = mtReprocessService;
        this.toastr = toastr;
        this.isLoading = false;
        this.isSubmitFormReprocess = false;
    }
    MetricReprocessComponent.prototype.ngOnInit = function () {
        this.rfTrackFile = new FormGroup({
            files: new FormControl("", Validators.required)
        });
        this.rfSearchReprocess = new FormGroup({
            isUseMTImportService: new FormControl(true, null)
        });
    };
    MetricReprocessComponent.prototype.onSubmitBtnTrack = function () {
        try {
            if (this.rfTrackFile.valid && !this.isLoading) {
                var files = this.rfTrackFile.value.files;
                this.getStatusFileGrid(files);
            }
        }
        catch (_a) {
            // alert Catch
        }
    };
    MetricReprocessComponent.prototype.onSubmitReprocess = function () {
        var trackGridHaveItemChecked = [];
        if (this.trackDataGrid) {
            trackGridHaveItemChecked = this.trackDataGrid.filter(function (item, index) {
                return item.IsChecked === true;
            });
            var formValue = this.rfSearchReprocess.value;
            var searchCondition = {};
            searchCondition.FlowId = 1; // phase 1
            searchCondition.IsImportMetric = formValue.isUseMTImportService;
            var data = {};
            data.SearchCondition = searchCondition;
            data.TrackDataGrid = trackGridHaveItemChecked;
            this.reprocessSearch = data;
            this.checkValidFormBeforeSubmitReprocess(trackGridHaveItemChecked);
            if (this.isSubmitFormReprocess) {
                this.getReprocessGrid(this.reprocessSearch);
            }
        }
    };
    Object.defineProperty(MetricReprocessComponent.prototype, "files", {
        //#region  Property
        get: function () {
            return this.rfTrackFile.get('files');
        },
        enumerable: true,
        configurable: true
    });
    //#endregion
    //#region  Method
    MetricReprocessComponent.prototype.filesHandler = function (file, index) {
        var fileRemovePath = file.slice(file.trim().lastIndexOf("\\") + 1);
        var fieds = fileRemovePath.trim().split('_');
        var obj = {};
        obj.PTransKeyIdIndex = fieds[0];
        obj.PInboxIdIndex = fieds[1];
        obj.POutboxIdIndex = fieds[1];
        obj.PYearQuaterIdIndex = fieds[2];
        obj.PFromCustIdIndex = fieds[3];
        obj.PToCustIdIndex = fieds[4];
        obj.PTransactionIdIndex = fieds[5];
        obj.PVersionIndex = fieds[6];
        obj.PCodePage = fieds[7];
        obj.Item08 = fieds[8];
        obj.Item09 = fieds[9];
        obj.Item10 = fieds[10];
        obj.FlowId = 1;
        obj.EndItem = fieds[10].split('.')[0];
        obj.Files = file;
        return obj;
    };
    MetricReprocessComponent.prototype.trackDataGridHandler = function (item, index) {
        var trackGridItem = {};
        trackGridItem.InOutboxId = item.InOutboxId;
        trackGridItem.TransactionType = item.TransactionType;
        trackGridItem.IntergrationStatus = item.IntergrationStatus;
        trackGridItem.FileName = item.FileName;
        trackGridItem.Note = item.Note;
        trackGridItem.FilePath = item.FilePath;
        trackGridItem.Index = item.Index;
        trackGridItem.CustomerId = item.CustomerId;
        trackGridItem.YearQuarter = item.YearQuarter;
        var inteStatus = item.IntergrationStatus.toLowerCase();
        var note = item.Note.toLowerCase();
        var isCheckedItem = false;
        if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold" && inteStatus !== "importing"
            && !note.toLowerCase().includes("not exist in diasciir9 database")) {
            isCheckedItem = true;
        }
        trackGridItem.IsChecked = isCheckedItem;
        trackGridItem.IsDisable = isCheckedItem;
        return trackGridItem;
    };
    MetricReprocessComponent.prototype.trackFileReprocessItemHandler = function (item, index) {
        if (item) {
            var fieds = item.trim().split('_');
            var obj = {};
            obj.PTransKeyIdIndex = fieds[0];
            obj.PInboxIdIndex = fieds[1];
            obj.POutboxIdIndex = fieds[1];
            obj.PYearQuaterIdIndex = fieds[2];
            obj.PFromCustIdIndex = fieds[3];
            obj.PToCustIdIndex = fieds[4];
            obj.PTransactionIdIndex = fieds[5];
            obj.PVersionIndex = fieds[6];
            obj.PCodePage = fieds[7];
            obj.Item08 = fieds[8];
            obj.Item09 = fieds[9];
            obj.Item10 = fieds[10].split('_')[0];
            obj.FlowId = 1;
            obj.EndItem = fieds[10].split('.')[0];
            obj.Extension = fieds[10].split('.')[1];
            obj.IsReprocess = true;
            obj.Index = fieds[11];
            return obj;
        }
        else {
            return null;
        }
    };
    MetricReprocessComponent.prototype.getFilesChecked = function (accumulator, currentValue, currentIndex, originArray) {
        var infoReprocess = "_" + currentValue.Index;
        return accumulator += currentValue.FilePath + infoReprocess + "\n";
    };
    MetricReprocessComponent.prototype.onUnsuccessOrNotImpBtnClick = function () {
        if (this.trackDataGrid) {
            this.isLoading = true;
            this.trackDataGrid = this.trackDataGrid.map(this.trackDataGridHandler);
            this.isLoading = false;
        }
    };
    MetricReprocessComponent.prototype.isCheckedItem = function (inteStatus, note) {
        inteStatus = inteStatus.toLowerCase();
        if (inteStatus !== "success" && inteStatus !== "pass" && inteStatus !== "hold" && inteStatus !== "importing"
            && !note.toLowerCase().includes("not exist in diasciir9 database"))
            return true;
        else
            return false;
    };
    MetricReprocessComponent.prototype.isRunMultiThread = function (value) {
        if (value.trim().includes("multi") || value.trim().includes("parallel")) {
            if (value === "multi")
                return true;
            else
                return false;
        }
        else {
            return true;
        }
    };
    MetricReprocessComponent.prototype.getNumberFromForm = function (value, minValue, maxValue) {
        if (value > minValue && value <= maxValue) {
            return value;
        }
        return 0;
    };
    MetricReprocessComponent.prototype.getStringFromForm = function (value) {
        value = value.trim();
        if (value === "" || value === undefined || value === null)
            return "";
        else
            return value;
    };
    MetricReprocessComponent.prototype.checkValidFormBeforeSubmitReprocess = function (trackGridHaveItemChecked) {
        if (this.rfSearchReprocess.valid && !this.isLoading) {
            if (trackGridHaveItemChecked !== undefined && trackGridHaveItemChecked.length > 0
                && trackGridHaveItemChecked) {
                this.isSubmitFormReprocess = true;
            }
            else {
                this.isSubmitFormReprocess = false;
            }
        }
        else {
            this.isSubmitFormReprocess = false;
        }
    };
    MetricReprocessComponent.prototype.onCheckboxValue = function (ev, data) {
        if (data) {
            this.trackDataGrid.forEach(function (item, index) {
                if (!item.IsDisable) {
                    if (item.Index === data.Index) {
                        if (ev.target.checked) {
                            item.IsChecked = true;
                        }
                        else {
                            item.IsChecked = false;
                        }
                    }
                }
            });
        }
    };
    MetricReprocessComponent.prototype.onCheckboxAll = function (ev) {
        this.trackDataGrid.forEach(function (item, index) {
            if (ev.target.checked) {
                item.IsChecked = true;
            }
            else {
                item.IsChecked = false;
            }
        });
    };
    MetricReprocessComponent.prototype.isAllCheckBoxChecked = function () {
        if (this.trackDataGrid) {
            return this.trackDataGrid.every(function (p) { return p.IsChecked; });
        }
    };
    MetricReprocessComponent.prototype.updateStatusTrackGridThenReporcess = function (trackdataGridNew) {
        for (var _i = 0, trackdataGridNew_1 = trackdataGridNew; _i < trackdataGridNew_1.length; _i++) {
            var item = trackdataGridNew_1[_i];
            this.showUpdatedItem(item);
        }
    };
    MetricReprocessComponent.prototype.showUpdatedItem = function (newItem) {
        var updateItem = this.trackDataGrid.find(this.findIndexToUpdate, newItem.Index);
        var index = this.trackDataGrid.indexOf(updateItem);
        this.trackDataGrid[index] = newItem;
    };
    MetricReprocessComponent.prototype.findIndexToUpdate = function (newItem) {
        return newItem.Index === this;
    };
    //#endregion
    //#region  CALL Service
    MetricReprocessComponent.prototype.getStatusFileGrid = function (files) {
        var _this = this;
        if (files) {
            var cutStr = files.trim().split('\n');
            var datas = cutStr.map(this.filesHandler);
            if (datas) {
                this.isLoading = true;
                this.mtReprocessService.getStatusFiles(datas).subscribe(function (res) {
                    _this.isLoading = false;
                    _this.trackDataGrid = res;
                    if (_this.trackDataGrid && _this.trackDataGrid.length > 0) {
                        _this.alertSuccess("Track files success !");
                    }
                    else {
                        _this.alertError("Track files fail !");
                    }
                });
            }
            else {
                this.alertError("Track files fail !");
            }
        }
        else {
            this.alertError("Track files fail !");
        }
    };
    MetricReprocessComponent.prototype.getReprocessGrid = function (reprocessSearch) {
        var _this = this;
        if (reprocessSearch) {
            this.isLoading = true;
            this.mtReprocessService.mtReprocess(reprocessSearch).toPromise()
                .then(function (res) {
                _this.mtReprocessGrid = res;
                _this.isLoading = false;
                if (_this.mtReprocessGrid && _this.mtReprocessGrid.length > 0) {
                    _this.alertSuccess("Reprocess success !");
                }
                else {
                    _this.alertError("Reprocess fail !");
                }
            }).then(function (res) {
                if (_this.rfSearchReprocess.value.isUseMTImportService) {
                    var checkedFiles = reprocessSearch.TrackDataGrid.reduce(_this.getFilesChecked, "");
                    if (checkedFiles) {
                        var cutStr = checkedFiles.trim().split('\n');
                        var datas = cutStr.map(_this.trackFileReprocessItemHandler);
                        if (datas) {
                            _this.isLoading = true;
                            _this.mtReprocessService.getStatusFiles(datas).subscribe(function (res) {
                                _this.isLoading = false;
                                _this.updateStatusTrackGridThenReporcess(res);
                                _this.alertSuccess("Update status track view success !");
                            });
                        }
                        else {
                            // Fail alert
                        }
                    }
                    else {
                        //File error
                    }
                }
            });
        }
    };
    //#endregion
    //#region  Alert Toasrt
    MetricReprocessComponent.prototype.alertSuccess = function (message) {
        this.toastr.success(message, "Success");
    };
    MetricReprocessComponent.prototype.alertError = function (message) {
        this.toastr.error(message, "Fail");
    };
    MetricReprocessComponent = tslib_1.__decorate([
        Component({
            selector: 'app-metric-reprocess',
            templateUrl: './metric-reprocess.component.html',
            styleUrls: ['./metric-reprocess.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MetricReprocessService, ToastrService])
    ], MetricReprocessComponent);
    return MetricReprocessComponent;
}());
export { MetricReprocessComponent };
//# sourceMappingURL=metric-reprocess.component.js.map