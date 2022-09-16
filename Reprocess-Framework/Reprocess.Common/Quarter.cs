using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Common
{
    public class Quarter
    {
        public const string InboxTablePrefix = "Inbox_Qr";
        public const string OutboxTablePrefix = "Outbox_Qr";
        public static List<int> GetQuarters(DateTime dt1, DateTime dt2)
        {
            List<int> yearQuarters = new List<int>();
            int quarter = GetQuarter(dt1.Month);
            yearQuarters.Add(quarter);
            while (dt1.AddDays(1) <= dt2)
            {
                dt1 = dt1.AddMonths(3);
                quarter = GetQuarter(dt1.Month);
                yearQuarters.Add(quarter);
            }
            return yearQuarters;
        }

        //public static List<string> GetInboxTables(DateTime dt1, DateTime dt2)
        //{
        //    List<string> yearQuarters = new List<string>();
        //    int quarter = GetQuarter(dt1.Month);
        //    string yearQuarter = OutboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(dt1.Year);
        //    yearQuarters.Add(yearQuarter);
        //    while (dt1.AddDays(1) <= dt2)
        //    {
        //        dt1 = dt1.AddMonths(3);
        //        quarter = GetQuarter(dt1.Month);
        //        yearQuarter = OutboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(dt1.Year);
        //        yearQuarters.Add(yearQuarter);
        //    }
        //    return yearQuarters;
        //}

        public static string GetQuarter(DateTime? date)
        {
            if (date != null)
            {
                var date1 = Convert.ToDateTime(date);
                string yearQuarter = date1.Year + ((date1.Month + 2) / 3).ToString().PadLeft(2, '0');
                return yearQuarter;
            }
            return "";
        }

        public static List<string> GetYearQuarters(DateTime? dt1, DateTime? dt2)
        {
            var date1 = Convert.ToDateTime(dt1);
            var date2 = Convert.ToDateTime(dt2);
            List<string> yearQuarters = new List<string>();
            int quarter = GetQuarter(date1.Month);
            //string yearQuarter = Convert.ToString(date1.Year) + "0" + Convert.ToString(quarter) ;
            string yearQuarter = date1.Year + ((date1.Month + 2) / 3).ToString().PadLeft(2, '0');
            yearQuarters.Add(yearQuarter);
            if ((date1.AddMonths(3) > date2))
            {
                int quarter2 = GetQuarter(date2.Month);
                if (!quarter.Equals(quarter2))
                {
                    //string yearQuarter2 = Convert.ToString(date2.Year) + "0" + Convert.ToString(quarter2);
                    string yearQuarter2 = date2.Year + ((date2.Month + 2) / 3).ToString().PadLeft(2, '0');
                    yearQuarters.Add(yearQuarter2);
                }
            }
            else
            {
                while (date1.AddMonths(3) <= date2)
                {
                    date1 = date1.AddMonths(3);
                    quarter = GetQuarter(date1.Month);
                    //yearQuarter = Convert.ToString(date1.Year) + "0" + Convert.ToString(quarter);
                    yearQuarter = date1.Year + ((date1.Month + 2) / 3).ToString().PadLeft(2, '0');
                    yearQuarters.Add(yearQuarter);
                }
            }
            return yearQuarters;
        }

        public static List<string> GetInboxTables(DateTime? dt1, DateTime? dt2)
        {
            var date1 = Convert.ToDateTime(dt1);
            var date2 = Convert.ToDateTime(dt2);
            List<string> yearQuarters = new List<string>();
            int quarter = GetQuarter(date1.Month);
            string yearQuarter = InboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(date1.Year);
            yearQuarters.Add(yearQuarter);
            if ((date1.AddMonths(3) > date2))
            {
                int quarter2 = GetQuarter(date2.Month);
                if (!quarter.Equals(quarter2))
                {
                    string yearQuarter2 = InboxTablePrefix + Convert.ToString(quarter2) + "_" + Convert.ToString(date2.Year);
                    yearQuarters.Add(yearQuarter2);
                }
            }
            else
            {
                while (date1.AddMonths(3) <= date2)
                {
                    date1 = date1.AddMonths(3);
                    quarter = GetQuarter(date1.Month);
                    yearQuarter = InboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(date1.Year);
                    yearQuarters.Add(yearQuarter);
                }
            }
            return yearQuarters;
        }

        public static List<string> GetOutboxTables(DateTime? dt1, DateTime? dt2)
        {
            var date1 = Convert.ToDateTime(dt1);
            var date2 = Convert.ToDateTime(dt2);
            List<string> yearQuarters = new List<string>();
            int quarter = GetQuarter(date1.Month);
            string yearQuarter = OutboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(date1.Year);
            yearQuarters.Add(yearQuarter);
            if ((date1.AddMonths(3) > date2))
            {
                int quarter2 = GetQuarter(date2.Month);
                if (!quarter.Equals(quarter2))
                {
                    string yearQuarter2 = OutboxTablePrefix + Convert.ToString(quarter2) + "_" + Convert.ToString(date2.Year);
                    yearQuarters.Add(yearQuarter2);
                }
            }
            else
            {
                while (date1.AddMonths(3) <= date2)
                {
                    date1 = date1.AddMonths(3);
                    quarter = GetQuarter(date1.Month);
                    yearQuarter = OutboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(date1.Year);
                    yearQuarters.Add(yearQuarter);
                }
            }
            return yearQuarters;
        }

        public static string GetOutboxTable(string yearquarter)
        {
            string quarter = yearquarter.Substring(yearquarter.Length - 1);
            string year = yearquarter.Substring(0, 4);
            string yearQuarterTable = OutboxTablePrefix + quarter + "_" + year;
            return yearQuarterTable;
        }
        public static string GetInboxTable(string yearquarter)
        {
            string quarter = yearquarter.Substring(yearquarter.Length - 1);
            string year = yearquarter.Substring(0, 4);
            string yearQuarterTable = InboxTablePrefix + quarter + "_" + year;
            return yearQuarterTable;
        }

        public static int CountQuarters(DateTime dt1, DateTime dt2)
        {
            int count = 1;
            int quarter = GetQuarter(dt1.Month);
            while (dt1.AddDays(1) <= dt2)
            {
                dt1 = dt1.AddMonths(3);
                count++;
            }
            return count;
        }

        public static int GetQuarter(int nMonth)
        {
            return (nMonth + 2) / 3;
        }

        private static long Round(double dVal)
        {
            if (dVal >= 0)
                return (long)Math.Floor(dVal);
            return (long)Math.Ceiling(dVal);
        }

        public static Dictionary<int, string> GetYearQuarterAndTables(string PrefixTable, DateTime? dt1, DateTime? dt2)
        {
            var date1 = Convert.ToDateTime(dt1);
            var date2 = Convert.ToDateTime(dt2);
            Dictionary<int, string> yearQuarters = new Dictionary<int, string>();
            int quarter = GetQuarter(date1.Month);
            int yearQuarter = Convert.ToInt32(Convert.ToString(date1.Year) + "0" + Convert.ToString(quarter));
            string tableQuarter = PrefixTable + Convert.ToString(quarter) + "_" + Convert.ToString(date1.Year);
            yearQuarters.Add(yearQuarter, tableQuarter);
            if ((date1.AddMonths(3) > date2))
            {
                int quarter2 = GetQuarter(date2.Month);
                if (!quarter.Equals(quarter2))
                {
                    int yearQuarter2 = Convert.ToInt32(Convert.ToString(date2.Year) + "0" + Convert.ToString(quarter2));
                    string tableQuarter2 = PrefixTable + Convert.ToString(quarter2) + "_" + Convert.ToString(date2.Year);
                    yearQuarters.Add(yearQuarter2, tableQuarter2);
                }
            }
            else
            {
                while (date1.AddMonths(3) <= date2)
                {
                    date1 = date1.AddMonths(3);
                    quarter = GetQuarter(date1.Month);
                    yearQuarter = Convert.ToInt32(Convert.ToString(date1.Year) + "0" + Convert.ToString(quarter));
                    tableQuarter = PrefixTable + Convert.ToString(quarter) + "_" + Convert.ToString(date1.Year);
                    yearQuarters.Add(yearQuarter, tableQuarter);
                }
            }
            return yearQuarters;
        }

        public static string GetOutboxTableFollowQuarter(int? YearQuarter)
        {
            List<string> yearQuarters = new List<string>();
            int quarter = GetQuarterFromYearQuarter(YearQuarter);
            int year = GetYearFromYearQuarter(YearQuarter);
            string yearQuarter = OutboxTablePrefix + Convert.ToString(quarter) + "_" + Convert.ToString(year);

            return yearQuarter;
        }
        public static int GetQuarterFromYearQuarter(int? YearQuarter)
        {
            return Convert.ToInt32(Convert.ToString(YearQuarter).Substring(4));
        }
        public static int GetYearFromYearQuarter(int? YearQuarter)
        {
            return Convert.ToInt32(Convert.ToString(YearQuarter).Substring(0, 4));
        }
    }
}
