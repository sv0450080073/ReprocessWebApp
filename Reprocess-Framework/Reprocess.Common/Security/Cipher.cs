using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Reprocess.Common.Security
{
    public abstract class Cipher
    {
        public byte[] encrypt(byte[] src)
        {
            byte[] dest = new byte[src.Length];
            encrypt(src, 0, dest, 0, src.Length);
            return dest;
        }

        public abstract void encrypt(byte[] src, int srcOff, byte[] dest,
                int destOff, int len);

        public byte[] decrypt(byte[] src)
        {
            byte[] dest = new byte[src.Length];
            decrypt(src, 0, dest, 0, src.Length);
            return dest;
        }

        public abstract void decrypt(byte[] src, int srcOff, byte[] dest,
                int destOff, int len);

        public abstract void setKey(byte[] key);

        public void setKey(string key)
        {
            byte[] mdKey = new byte[32];
            try
            {
                MD5CryptoServiceProvider hashmd5 = new MD5CryptoServiceProvider();
                byte[] digest = hashmd5.ComputeHash(UTF8Encoding.UTF8.GetBytes(key));
                hashmd5.Clear();
                Array.Copy(digest, 0, mdKey, 0, 16);
                Array.Copy(digest, 0, mdKey, 16, 16);
            }
            catch (Exception ex)
            {
                LogHelper.Error(ex.GetType(), ex.Message, ex);
                // !!!
                System.Console.WriteLine("MD5 not implemented, can't generate key out of string!");
            }
            setKey(mdKey);
        }
    }
}
