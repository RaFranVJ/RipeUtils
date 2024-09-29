/**  Encrypt a Rijndael File. */

function encrypt(inputPath, outputPath, key, dKey, salt, hash, ipp, blockCipher, cipherPadding)
{
RijndaelCryptor.EncryptFile(inputPath, outputPath, key, dKey, salt, hash, ipp, blockCipher, cipherPadding);
}

/** Decrypt a Rijndael File.  */

function decrypt(inputPath, outputPath, key, dKey, salt, hash, ipp, blockCipher, cipherPadding)
{
RijndaelCryptor.DecryptFile(inputPath, outputPath, key, dKey, salt, hash, ipp, blockCipher, cipherPadding);
}