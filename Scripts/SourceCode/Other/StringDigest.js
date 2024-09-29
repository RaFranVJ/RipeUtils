/** Hashes an Array of Bytes by using a Generic Digest

* @param {UInt8Array} inputBytes - The Bytes to Cipher
* @param {UInt8Array} cipherKey - The Cipher Key
 
* @returns {string} - The String Digest. */

function digest(inputBytes, isHmac, provider, strCase, key)
{
return StringDigest.DigestDataJS(inputBytes, isHmac, provider, strCase, key);
}