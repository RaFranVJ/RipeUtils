/**  Encode & Encrypt a RTON File. */

function encodeAndEncrypt(inputPath, outputPath, encoderCfg, encryptorCfg)
{
RtonUtil.EncodeAndEncryptFile(inputPath, outputPath, encoderCfg, encryptorCfg);
}

/** Decrypt & Decode a RTON File.  */

function decryptAndDecode(inputPath, outputPath, decryptorCfg, decoderCfg)
{
RtonUtil.DecryptAndDecodeFile(inputPath, outputPath, decryptorCfg, decoderCfg);
}