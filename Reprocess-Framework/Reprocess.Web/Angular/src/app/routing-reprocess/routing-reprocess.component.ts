import { Component, OnInit } from '@angular/core';
import { RoutingReprocessService } from '../Service/routing-reprocess.service';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RoutingReprocessData } from '../Model/metrics_reprocess/routing-reprocess-data';
@Component({
  selector: 'app-routing-reprocess',
  templateUrl: './routing-reprocess.component.html',
  styleUrls: ['./routing-reprocess.component.scss']
})
export class RoutingReprocessComponent implements OnInit {
  rfRoutingReprocess: FormGroup;
  ErrorMsgDisplay: string;
  ResultMsgDisplay: string;
  constructor(private rtReprocessService: RoutingReprocessService, private toastr: ToastrService) { }

  ngOnInit() {
    var today = new Date();
    this.rfRoutingReprocess = new FormGroup({
      ProcessingType: new FormControl("DownloadInboundDocument", Validators.required),
      Year: new FormControl(today.getFullYear(), Validators.compose([Validators.required,])),
      Quarter: new FormControl(Math.floor((today.getMonth() + 2) / 3), Validators.compose([Validators.required, Validators.pattern("[1-4]")])),
      InOutboxIDs: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[0-9]+(,[0-9]+)*$")])),
      Bundle: new FormControl(10, Validators.compose([Validators.required,])),
      Interval: new FormControl(20, Validators.compose([Validators.required,])),
    });
  }

  onSubmitBtnStart() {
    var f = document.forms[0];
    // check validity input form
    if (f.checkValidity()) {
      var data = this.rfRoutingReprocess.value;
      this.procSendRequestReprocess(data);
    }
    else {
      f.reportValidity();
    }
  }

  async procSendRequestReprocess(data) {
    this.ErrorMsgDisplay = "";
    this.ResultMsgDisplay = "";
    let routingReprocessData = {} as RoutingReprocessData;
    routingReprocessData.ProcessingType = data.ProcessingType;
    routingReprocessData.Year = data.Year;
    routingReprocessData.Quarter = data.Quarter;
    routingReprocessData.Bundle = data.Bundle;
    routingReprocessData.Interval = data.Interval;

    this.openPopup("1/5"); routingReprocessData.IDs = data.InOutboxIDs;
    var inoutboxIDs = data.InOutboxIDs.split(",");
    var strErrMsg = "";
    var strResultMsg = "";
    for (let i = 0; i < inoutboxIDs.length; i = (i + data.Bundle)) {
      // update current progressing
      this.updateMessagePopup((i + 1) + "/" + inoutboxIDs.length);
      await sleep(100);

      //get Ids by bundle in
      var count = 0;
      var currIndex = i;
      var ids = ""; // ids in one request
      if (inoutboxIDs.length > data.Bundle) {
        while (count < data.Bundle && currIndex < inoutboxIDs.length) {
          ids = ids + "," + inoutboxIDs[currIndex];
          currIndex++;
          count++;
        }
        // remove character "," in the first place
        ids = ids.substring(1, ids.length);
      }
      // check if length of ID list less than Bundle in, send once with total ids inputed
      else {
        ids = data.InOutboxIDs;
        currIndex = inoutboxIDs.length;
      }
      // post request
      routingReprocessData.IDs = ids;
      let res = await this.rtReprocessService.startRoutingReprocess(routingReprocessData).toPromise();

      if (res.ErrorMessage)
        strErrMsg = strErrMsg + "\r\nAn error occurred while process with IDs=" + res.IDs + ". error message: " + res.ErrorMessage;
      else
        strResultMsg = strResultMsg + "\r\n" + res.Message;

      // sleep by interval time to run next request
      if (currIndex < inoutboxIDs.length)
        await sleep(data.Interval * 1000);
    }

    this.closePopup();
    if (strErrMsg)
      this.ErrorMsgDisplay = strErrMsg;
    // show result  message
    if (strResultMsg)
      this.ResultMsgDisplay = strResultMsg;
  }

  openPopup(message: string) {
    document.getElementById("progressPopup").style.display = "inline";
    this.updateMessagePopup(message);
  }
  updateMessagePopup(message: string) {
    document.getElementById("msgCurrProgressPopup").textContent = message;
  }
  closePopup() {
    document.getElementById("msgCurrProgressPopup").textContent = "";
    document.getElementById("progressPopup").style.display = "none";
  }
}
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Implement pattern for textarea tag to check native HTML form
$(document).ready(function () {
  var errorMessage = "Please check the requested format.";

  $(this).find("textarea").on("input change propertychange", function () {

    var pattern = $(this).attr("pattern");

    if (pattern) {
      var patternRegex = new RegExp("^" + pattern.replace(/^\^|\$$/g, '') + "$", "g");

      var hasError = !$(this).val().toString().match(patternRegex);

      if (typeof this.setCustomValidity === "function") {
        this.setCustomValidity(hasError ? errorMessage : "");
      }
      else {
        $(this).toggleClass("error", !!hasError);
        $(this).toggleClass("ok", !hasError);

        if (hasError) {
          $(this).attr("title", errorMessage);
        }
        else {
          $(this).removeAttr("title");
        }
      }
    }
  });
});
