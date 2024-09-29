/** Encrypts an Integer value by Performing some bitwise Operations on it.

* @param {number} targetValue - The Value to be Encrypted.

* @returns {number} - The Encrypted Value. */

function encryptValue(targetValue)
{
return IntegersGuard.EncryptValueJS(targetValue);
}

/** Decrypts an Integer value by Performing some bitwise Operations on it.

* @param {number} targetValue - The Value to be Decrypted.

* @returns {number} - The Decrypted Value. */

function decryptValue(targetValue)
{
return IntegersGuard.DecryptValueJS(targetValue);
}