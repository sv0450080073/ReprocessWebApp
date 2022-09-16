import { FlowData } from "../Model/metrics_reprocess/flow-data";

export class TrackDataGrid {
  public  Index: number;
  public  IsChecked :boolean;
  public  InOutboxId :string;
  public  TransactionType :string;
  public  IntergrationStatus :string;
  public  FileName :string;
  public  Note :string;
  public  FilePath :string;
  public  IsDisable : boolean;
  public  CustomerId :string;
  public  YearQuarter : string;
  public Created :Date;
  public DateShow :string;
  public  FlowCombbData :FlowData = new FlowData();
  public Trans : string;
  public SenderId: string;
  public ReceiverId: string;
  public TrackingProcessId: string;

}
