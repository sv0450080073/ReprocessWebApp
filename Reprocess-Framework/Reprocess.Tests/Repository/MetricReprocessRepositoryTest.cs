using Reprocess.Data.Metrics.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Reprocess.Tests.Repository
{
    public class MetricReprocessRepositoryTest
    {
        #region TRACK FILES
        [Fact]
        public void GetIntegrationStatusInboxTest()
        {
            //Arrage 
            string expected = "P1_MT_3";
            string yearQuarter = "202104";
            string inboxID = "132096";
            string customerID = "26137";
            //Act
            var repository = new MetricReprocessRepository();
            var actual = repository.GetIntegrationStatusInbox(yearQuarter, inboxID, customerID);
            //Assert
            Assert.Equal(expected, actual);
        }
        [Fact]
        public void IsExistOnDiASCIIR9ByInbox()
        {
            //Arrage 
            bool  expected = true;
            string yearQuarter = "202104";
            string inboxID = "132096";
            string doctype = "830";
            //Act
            var repository = new MetricReprocessRepository();
            var actual = repository.IsExistOnDiASCIIR9ByInbox( inboxID, doctype, yearQuarter);
            //Assert
            Assert.Equal(expected, actual);
        }
        [Fact]
        public void IsExistOnDiMetrics()
        {
            //Arrage 
            bool expected = true;
            string transactionType = "830";
            int inoutboxID = 132096;
            string yearQuarter = "202104";
            string hubid = "26137";
            //Act
            var repository = new MetricReprocessRepository();
            var actual = repository.IsExistOnDiMetrics(transactionType, inoutboxID, yearQuarter, hubid);
            //Assert
            Assert.Equal(expected, actual);
        }
        #endregion

        #region REPROCESS 
        [Fact]
        public void ImportFile()
        {
            //Arrage 
            int expected =3;
            string fileName = "2044d75f-cbab-4a42-800a-aeb60dfeec4e_132096_202104_9109_26137_830_002003_1252_inbox_131235246042877646_inbox.ascii";
            string exception = "";
            //Act
            var repository = new MetricReprocessRepository();
            var actual = repository.ImportFile(fileName, out exception);
            //Assert
            Assert.Equal(expected, actual);
        }
        #endregion

    }
}
