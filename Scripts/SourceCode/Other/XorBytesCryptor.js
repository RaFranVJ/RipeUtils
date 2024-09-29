/** Ciphers the given Array of Bytes by using XOR

* @param {UInt8Array} inputBytes - The Bytes to Cipher
* @param {UInt8Array} cipherKey - The Cipher Key
 
* @returns {UInt8Array} - The Bytes Ciphered. */

function cipher(inputBytes, cipherKey, isHex)
{
return XorBytesCryptor.CipherDataJS(inputBytes, cipherKey, isHex);
}