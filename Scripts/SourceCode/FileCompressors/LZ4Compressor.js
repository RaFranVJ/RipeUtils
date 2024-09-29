/**  Compress a LZ4 File.

* @param {string} sourcePath - The Path of the File where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function compress(inputPath, outputPath, settings, bufferSize)
{
LZ4Compressor.CompressFile(inputPath, outputPath, settings, bufferSize);
}

/** Decompress a LZ4 File.

* @param {string} sourcePath - The Path of the File to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function decompress(inputPath, outputPath, settings, bufferSize)
{
LZ4Compressor.DecompressFile(inputPath, outputPath, settings, bufferSize);
}