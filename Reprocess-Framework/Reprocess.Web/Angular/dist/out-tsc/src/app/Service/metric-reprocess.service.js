import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var MetricReprocessService = /** @class */ (function () {
    function MetricReprocessService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "http://192.168.203.33:2001"; //environment.API_URL;
        this.url = this.API_URL + "/MetricsReprocess";
    }
    MetricReprocessService.prototype.getStatusFiles = function (trackSearch) {
        return this.httpClient.post(this.url + "/TrackStatusFile", trackSearch);
    };
    MetricReprocessService.prototype.mtReprocess = function (reprocessSearch) {
        return this.httpClient.post(this.url + "/MTReprocess", reprocessSearch);
    };
    MetricReprocessService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MetricReprocessService);
    return MetricReprocessService;
}());
export { MetricReprocessService };
//# sourceMappingURL=metric-reprocess.service.js.map