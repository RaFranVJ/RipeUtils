/**  Compress a DZ File. */

function compress(inputPath, outputPath, encoding, endian, maxChunk, filter, flags, vInfo, entryParams, importCfg)
{
DzCompressor.PackDir(inputPath, outputPath, encoding, endian, maxChunk, filter, flags, vInfo, entryParams, importCfg);
}

/** Decompress a DZ File.  */

function decompress(inputPath, outputPath, encoding, endian, adaptVer, maxChunk, entryParams, exportCfg)
{
DzCompressor.UnpackFile(inputPath, outputPath, encoding, endian, adaptVer, maxChunk, entryParams, exportCfg);
}