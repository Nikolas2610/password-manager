import cryoptojs from 'crypto-js'

const secret = process.env.REACT_APP_SECRET_DECRYPT_PASSWORD;

export const decrypt = (data, key_iv) => {
    var Utf8 = cryoptojs.enc.Utf8;
    const secret_key = secret;
    const secret_iv = cryoptojs.enc.Base64.parse(key_iv);
    const key = cryoptojs.SHA256(secret_key).toString(cryoptojs.enc.Hex).substring(0, 32);
    let iv = cryoptojs.SHA256(secret_iv).toString(cryoptojs.enc.Hex).substring(0, 16);
    const encrypt = cryoptojs.enc.Base64.parse(data).toString(cryoptojs.enc.Utf8);
    const decrypt = cryoptojs.AES.decrypt(encrypt, Utf8.parse(key), { iv: Utf8.parse(iv) }).toString(Utf8);
    return decrypt;
}