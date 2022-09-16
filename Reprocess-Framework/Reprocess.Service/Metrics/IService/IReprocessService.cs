using Reprocess.Model.Metrics.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Service.Metrics.IService
{
    public interface IReprocessService
    {

        #region MT REPROCESS    
        /// <summary>
        /// This method reprocess CIP Flow and EDI Extract Flow then get status files  did reprocess
        /// </summary>
        /// <param name="reprocessSearchData">Param from reprocess screen and track data grid  </param>
        /// <returns>return List<ReprocessDataGrid> show grid </returns>
        List<ReprocessDataGrid> GetMTReprocessDataGrid(ReprocessSearchData reprocessSearchData);
        int ImportFile(string fileName, out string exception);
        /// <summary>
        /// This method will check input value from  reprocess screen 
        /// </summary>
        /// <param name="reprocessSearchData"> params are posted from client to server </param>
        /// <returns> if input value valid : return true else return false </returns>
        bool CheckInputReprocessData(ReprocessSearchData reprocessSearchData);
        #endregion MT REPROCESS

        #region Track Files
        /// <summary>
        /// This method handle track file : CIP flow and EDI_Extract flow
        /// </summary>
        /// <param name="searchParams"></param>
        /// <returns> List<TrackDataGrid>  </returns>
        List<TrackDataGrid> GetTrackStatusDataGrid(TrackSearchDataParams searchParams);
        /// <summary>
        /// Get info data from file name 
        /// </summary>
        /// <param name="fileName">
        /// 
        /// </param>
        /// <returns> data in filename</returns>
        FileNameData GetInfoByFileName(string fileName);

        #endregion

    }
}
