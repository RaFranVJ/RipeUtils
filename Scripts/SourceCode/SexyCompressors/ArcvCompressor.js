/**  Compress a Brotli File.

* @param {string} sourcePath - The Path of the File where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function compress(inputPath, outputPath, bufferSize, endian, filter, styleInfo, importCfg)
{
ArcvCompressor.PackDir(inputPath, outputPath, bufferSize, endian, filter, styleInfo, importCfg);
}

/** Decompress a Brotli File.

* @param {string} sourcePath - The Path of the File to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function decompress(inputPath, outputPath, bufferSize, endian, binNames, workspace, styleInfo, exportCfg)
{
ArcvCompressor.UnpackFile(inputPath, outputPath, bufferSize, endian, binNames, workspace, styleInfo, exportCfg);
}