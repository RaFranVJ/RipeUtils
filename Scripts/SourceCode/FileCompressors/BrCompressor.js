/**  Compress a Brotli File.

* @param {string} sourcePath - The Path of the File where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function compress(inputPath, outputPath, level, bufferSize)
{
BrotliCompressor.CompressFile(inputPath, outputPath, level, bufferSize);
}

/** Decompress a Brotli File.

* @param {string} sourcePath - The Path of the File to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function decompress(inputPath, outputPath, bufferSize)
{
BrotliCompressor.DecompressFile(inputPath, outputPath, bufferSize);
}