import { Component, OnInit } from '@angular/core';
import { ErrorCodeService } from '../Service/error-code.service';

@Component({
  selector: 'app-error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.scss']
})
export class ErrorCodeComponent implements OnInit {
  
  data: any[];
  page = 1;
  pageSize = 10;
  count = 0;
  pageSizes = [10, 50, 100];
  isLoading: boolean;
  constructor(private errorCodeService: ErrorCodeService) { }

  ngOnInit() {
    this.GetData();
  }
  GetData() {
    this.isLoading = true;
    this.errorCodeService.GetErrors(this.page, this.pageSize)
      .subscribe((data: any[]) => {
        if (data.length > 0) {
          this.data = data;
          this.count = data[0].TotalRows;
        }
        else {
          this.count = 0;
        }
        this.isLoading = false;
      });
  }
  handlePageChange(event) {
    this.page = event;
    this.GetData(); 
  }

  handlePageSizeChange(event) {

    this.pageSize = event;
    console.log(this.pageSize);
    this.page = 1;
    this.GetData();
  }
  ShowDescription(message: string) {
    alert(message);
  }
}
