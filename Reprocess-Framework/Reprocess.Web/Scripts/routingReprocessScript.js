// Implement pattern for textarea tag
$(document).ready(function () {
    var errorMessage = "Please check the requested format.";

    $(this).find("textarea").on("input change propertychange", function () {

        var pattern = $(this).attr("pattern");

        if (typeof pattern !== typeof undefined && pattern !== false) {
            var patternRegex = new RegExp("^" + pattern.replace(/^\^|\$$/g, '') + "$", "g");

            hasError = !$(this).val().match(patternRegex);

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

$(function () {
    $('#btnStart').click(function (ev) {
        ev.preventDefault();
        //reset message result and exception
        $("#Message").val("");
        $("#ErrorMessage").val("");

        var f = document.forms[0];
        if (f.checkValidity())
        {
            procSendRequestReprocess(f);
        }
        else
            //Validate Form
            f.reportValidity();
    });
});

function onloadRoutingReprocess() {
    var today = new Date();
    $("#Year").val(today.getFullYear());
    $("#Quarter").val(Math.floor((today.getMonth() + 2) / 3));
}

async function procSendRequestReprocess(form) {
    //open popup processing
    openPopup();
    await sleep(100);

    var inoutboxIDs = form.elements['InOutboxIDs'].value.split(",");
    $('input[name="InOutboxIDs"]').prop('disabled', true);
    var bundleIn = parseInt(form.elements['Bundle'].value);
    var waitTime = parseInt(form.elements['Interval'].value);
    var strErrMsg = "";
    var strResultMsg = "";
    for (i = 0; i < inoutboxIDs.length; i = (i + bundleIn)) {

        // update current progressing
        updateMessagePopup((i + 1) + "/" + inoutboxIDs.length);
        await sleep(100);

        //get Ids by bundle in
        var count = 0;
        var currIndex = i;
        var ids = "";
        if (inoutboxIDs.length > bundleIn) {
            while (count < bundleIn && currIndex < inoutboxIDs.length) {
                ids = ids + "," + inoutboxIDs[currIndex];
                currIndex++;
                count++;
            }
            // remove character "," in the first place
            ids = ids.substring(1, ids.length);
        }
        // check if length of ID list less than Bundle in, send once with total ids inputed
        else {
            ids = form.elements['InOutboxIDs'].value;
            currIndex = inoutboxIDs.length;
        }

        // convert data to model object
        var dataObject = JSON.stringify({
            'IDs': ids,
            'ProcessingType': form.elements['ProcessingType'].value,
            'Year': form.elements['Year'].value,
            'Quarter': form.elements['Quarter'].value,
            'Bundle': bundleIn,
            'Interval': waitTime,
            'ErrorMessage': "",
        });

        $.ajax({
            method: "post",
            url: "/RoutingReprocess/Index",
            contentType: 'application/json',
            cache: false,
            async: false,
            data: dataObject,
            success: function (data) {
                if (!String.isNullOrEmpty(data.ErrorMessage))
                    strErrMsg = strErrMsg + "\r\nAn error occurred while process with IDs=" + data.IDs + ". error message: " + data.ErrorMessage;
                else
                    strResultMsg = strResultMsg + "\r\n" + data.Message;
            }
        });
        
        // sleep by interval time to run next request
        if (currIndex < inoutboxIDs.length)
            await sleep(waitTime * 1000);
    }
    closePopup();
    // show errors message
    if (!String.isNullOrEmpty(strErrMsg))
        document.getElementById("ErrorMessage").value = strErrMsg;
    // show result  message
    if (!String.isNullOrEmpty(strResultMsg))
        document.getElementById("Message").value = strResultMsg;
}

function openPopup(message) {
    document.getElementById("progressPopup").style.display = "inline";
    updateMessagePopup(message);
}
function updateMessagePopup(message) {
    document.getElementById("msgCurrProgressPopup").textContent  = message;
}
function closePopup() {
    document.getElementById("msgCurrProgressPopup").textContent = "";
    document.getElementById("progressPopup").style.display = "none";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function AllIndexsOf(string, substring) {
    var a = [], i = -1;
    while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i);
    return a;
}
String.isNullOrEmpty = function (value) {
    return (!value || value == undefined || value == "" || value.length == 0);
}