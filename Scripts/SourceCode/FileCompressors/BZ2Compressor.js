/**  Compress a Brotli File.

* @param {string} sourcePath - The Path of the File where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function compress(inputPath, outputPath, blockSize, bufferSize)
{
BZip2Compressor.CompressFile(inputPath, outputPath, blockSize, bufferSize);
}

/** Decompress a Brotli File.

* @param {string} sourcePath - The Path of the File to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function decompress(inputPath, outputPath, bufferSize)
{
BZip2Compressor.DecompressFile(inputPath, outputPath, bufferSize);
}