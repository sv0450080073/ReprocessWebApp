import { async, TestBed } from '@angular/core/testing';
import { MetricReprocessComponent } from './metric-reprocess.component';
describe('MetricReprocessComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MetricReprocessComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MetricReprocessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=metric-reprocess.component.spec.js.map