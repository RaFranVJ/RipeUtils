/**  Encrypt a RTON File. */

function encrypt(inputPath, outputPath, rtonCfg)
{
RtonCryptor.EncryptFile(inputPath, outputPath, rtonCfg);
}

/** Decrypt a RTON File.  */

function decrypt(inputPath, outputPath, rsaCfg)
{
RtonCryptor.DecryptFile(inputPath, outputPath, rtonCfg);
}