using Moq;
using Reprocess.Model.Metrics.Dto;
using Reprocess.Service.Metrics.IService;
using Reprocess.Web.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using System.Web.Mvc;

namespace Reprocess.Tests.Controller
{
    public class MetricsReprocessControllerTest
    {
        [Fact]
        public void TrackStatusFileTest()
        {
            var paramList = new List<TrackSearchData>();
            paramList.Add(new TrackSearchData()
            {
                EndItem = "inbox",
                FlowId = 1,
                Item08 = "inbox",
                Item09 = "131235246042877646",
                Item10 = "inbox.ascii",
                PCodePage = "1252",
                PFromCustIdIndex = "9109",
                PInboxIdIndex = "132096",
                POutboxIdIndex = "132096",
                PToCustIdIndex = "26137",
                PTransKeyIdIndex = "2044d75f-cbab-4a42-800a-aeb60dfeec4e",
                PTransactionIdIndex = "830",
                PVersionIndex = "002003",
                PYearQuaterIdIndex = "202104",
            });
            var expected = new List<TrackDataGrid>();
            expected.Add(new TrackDataGrid()
            {
                InOutboxId = "132096",
                TransactionType = "830",
                IntergrationStatus = "Success",
                FileName = "2044d75f-cbab-4a42-800a-aeb60dfeec4e_132096_202104_9109_26137_830_002003_1252_inbox_131235246042877646_inbox.ascii",
                Note = "Exist in DiASCIIR9 database & Exist in DiMetrics database"
            });       
            var reprocessService = new Mock<IReprocessService>();
            //reprocessService.Setup(x => x.GetTrackDataGrid(It.IsAny<List<TrackSearchData>>())).Returns(expected);
            var metricController = new MetricsReprocessController(reprocessService.Object);
           // var result = metricController.TrackStatusFile(paramList);
          //  var actual = result.Data;
            //Assert
            //Assert.Equal(expected, actual);
        }


    }
}
