using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Common
{
    public static class Extension
    {
        public static string[] ParseFileName(string filePath)
        {
            return Path.GetFileNameWithoutExtension(((string)filePath)).Split(Constants.argsDelimiter);
        }
        public static string[] GetFiles(string files)
        {
            return files.Split('\n');
        }
    }
}
