using Moq;
using Reprocess.Data.Metrics.Repository.IRepository;
using Reprocess.Model.Metrics.Dto;
using Reprocess.Service.Metrics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Reprocess.Tests.Service
{
    public class MetricReprocessServiceTest
    {

        [Fact]
        public void GetNoteInbox()
        {
            //Arrage 
            bool expectRep = false;
            string expectedService = "";
            var trackData = new TrackSearchData
            {
                PToCustIdIndex = "26137",
                PInboxIdIndex = "132096",
                PTransactionIdIndex = "830",
                PYearQuaterIdIndex = "202104",
            };
            //Act
            var mtReprocessRep = new Mock<IMetricReprocessRepository>();
            mtReprocessRep.Setup(x => x.IsExistOnDiASCIIR9ByInbox(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Returns(expectRep);
            var service = new ReprocessService(mtReprocessRep.Object);
           // var actual = service.GetNoteInbox(trackData);
            //Assert
           //Assert.Equal(expectedService, actual);
        }
    }
}
