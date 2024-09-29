/**  Encrypt a File. */

function encrypt(inputPath, outputPath, cryptoCfg)
{
GeneriCryptor.Encrypt(inputPath, outputPath, cryptoCfg);
}

/** Decrypt a File.  */

function decrypt(inputPath, outputPath, cryptoCfg)
{
GeneriCryptor.Decrypt(inputPath, outputPath, cryptoCfg);
}