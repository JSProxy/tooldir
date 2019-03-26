import CryptoJS from 'crypto-js';
/* 加密工具类 */
export const AES = {
  encrypt(data, secretKey) {
    let utf8Data = CryptoJS.enc.Utf8.parse(data);
    let utf8SecretKey  = CryptoJS.enc.Utf8.parse(secretKey);
    var encrypted = CryptoJS.AES.encrypt(utf8Data, utf8SecretKey, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
  },
  decrypt(data, secretKey) {
    var utf8SecretKey  = CryptoJS.enc.Utf8.parse(secretKey);
    var decrypt = CryptoJS.AES.decrypt(data, utf8SecretKey, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }
}

export const MD5 = {
   encrypt(data) {
     return CryptoJS.MD5(data).toString();/* toString后会变成Hex 32位字符串*/
   }
}

export default {
  MD5,
  AES
}
