/**  Get Hash from File. */

function hash(inputPath, outputPath, hmac, provider, strCase, authCode)
{
GenericDigest.HashFile(inputPath, outputPath, hmac, provider, strCase, authCode);
}