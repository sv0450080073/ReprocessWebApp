using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Numerics;

namespace Reprocess.Common.Security
{
    public class RC4 : Cipher
    {
        public static string KEY = Constants.GetSystemKey();
        public static string INTERNAL_KEY = "DiDemandMaster2019";
        int x;
        int y;
        byte[] state = new byte[256];

        int arcfour_byte()
        {
            int x;
            int y;
            int sx, sy;

            x = (this.x + 1) & 0xff;
            sx = (int)state[x];
            y = (sx + this.y) & 0xff;
            sy = (int)state[y];
            this.x = x;
            this.y = y;
            state[y] = (byte)(sx & 0xff);
            state[x] = (byte)(sy & 0xff);
            return (int)state[((sx + sy) & 0xff)];
        }

        [MethodImpl(MethodImplOptions.Synchronized)]
        public override void encrypt(byte[] src, int srcOff, byte[] dest, int destOff, int len)
        {

            int end = srcOff + len;
            for (int si = srcOff, di = destOff; si < end; si++, di++)
                dest[di] = (byte)(((int)src[si] ^ arcfour_byte()) & 0xff);
        }

        public override void decrypt(byte[] src, int srcOff, byte[] dest, int destOff, int len)
        {
            encrypt(src, srcOff, dest, destOff, len);
        }

        public override void setKey(byte[] key)
        {
            int t, u;
            int keyindex;
            int stateindex;
            int counter;

            for (counter = 0; counter < 256; counter++)
                state[counter] = (byte)counter;
            keyindex = 0;
            stateindex = 0;
            for (counter = 0; counter < 256; counter++)
            {
                t = (int)state[counter];
                stateindex = (stateindex + key[keyindex] + t) & 0xff;
                u = (int)state[stateindex];
                state[stateindex] = (byte)(t & 0xff);
                state[counter] = (byte)(u & 0xff);
                if (++keyindex >= key.Length)
                    keyindex = 0;
            }
        }

        public string printHex(byte[] buf)
        {
            byte[] outD = new byte[buf.Length + 1];
            outD[0] = 0;
            Array.Copy(buf, 0, outD, 1, buf.Length);
            System.Numerics.BigInteger big = new BigInteger(outD.Reverse().ToArray());
            string strResult = big.ToString("x");
            return strResult.IndexOf("0") == 0 ? strResult.Substring(1, strResult.Length - 1) : strResult;
        }
    }
}
