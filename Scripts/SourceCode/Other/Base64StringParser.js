/** Encodes a Bytes Array as a Base64 String.

* @param {UInt8Array} inputBytes - The Bytes to Encode.
* @param {boolean} isWebSafe - Determines if the Base64 string will be Generated as a Web Safe string or not. */

function encode(inputBytes, isWebSafe)
{
return Base64StringParser.EncodeBytesJS(inputBytes, isWebSafe);
}

/** Decodes a Base64 String as a Bytes Array.

* @param {string} inputString - The String to Decode.
* @param {boolean} isWebSafe - Determines if the Base64 string will be Decoded as a Web Safe string or not. */

function decode(inputStr, isWebSafe)
{
return Base64StringParser.DecodeStringJS(inputStr, isWebSafe);
}