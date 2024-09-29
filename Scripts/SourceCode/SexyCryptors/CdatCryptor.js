/**  Encrypt a CDAT File. */

function encrypt(inputPath, outputPath, key, bufferSize, endian, cBytes, dKey, salt, hash, ipp, importCfg)
{
CdatCryptor.EncryptFile(inputPath, outputPath, key, bufferSize, endian, cBytes, dKey, salt, hash, ipp, importCfg);
}

/** Decrypt a CDAT File.  */

function decrypt(inputPath, outputPath, key, bufferSize, endian, compareSize, useSizeInfo, cBytes, dKey, salt, hash, ipp, exportCfg)
{
CdatCryptor.DecryptFile(inputPath, outputPath, key, bufferSize, endian, compareSize, useSizeInfo, cBytes, dKey, salt, hash, ipp, exportCfg);
}

/** Check CDAT Size.  */

function sizeChk(targetPath, importCfg)
{
CdatCryptor.CheckFileSize(targetPath, importCfg);
}