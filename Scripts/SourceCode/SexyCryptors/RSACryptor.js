/**  Encrypt a RSA File. */

function encrypt(inputPath, outputPath, rsaCfg)
{
RSACryptor.EncryptFile(inputPath, outputPath, rsaCfg);
}

/** Decrypt a RSA File.  */

function decrypt(inputPath, outputPath, rsaCfg)
{
RSACryptor.DecryptFile(inputPath, outputPath, rsaCfg);
}