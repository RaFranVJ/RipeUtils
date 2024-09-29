/**  Compress a RSB File (TO DO). */

function compress(inputPath, outputPath, level, bufferSize, endian, hexLen, adler32Cfg, tagInfo, importCfg)
{
RsbCompressor.PackDir(inputPath, outputPath, level, bufferSize, endian, hexLen, adler32Cfg, tagInfo, importCfg);
}

/** Decompress a RSB File.  */

function decompress(inputPath, outputPath, bufferSize, endian, adaptVer, strCase, extractParams, exportCfg)
{
RsbCompressor.UnpackFile(inputPath, outputPath, bufferSize, endian, adaptVer, strCase, extractParams, exportCfg);
}