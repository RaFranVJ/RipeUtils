/**  Compress a GZIP File.

* @param {string} sourcePath - The Path of the File where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function compress(inputPath, outputPath, level, bufferSize)
{
GZipCompressor.CompressFile(inputPath, outputPath, level, bufferSize);
}

/** Decompress a GZIP File.

* @param {string} sourcePath - The Path of the File to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function decompress(inputPath, outputPath, bufferSize)
{
GZipCompressor.DecompressFile(inputPath, outputPath, bufferSize);
}