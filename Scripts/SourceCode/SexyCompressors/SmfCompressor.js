/**  Compress a SMF File. */

function compress(inputPath, outputPath, level, bufferSize, endian, hexLen, adler32Cfg, tagInfo, importCfg)
{
SmfCompressor.CompressFile(inputPath, outputPath, level, bufferSize, endian, hexLen, adler32Cfg, tagInfo, importCfg);
}

/** Decompress a SMF File.  */

function decompress(inputPath, outputPath, bufferSize, endian, hexLen, intetrityCfg, adler32Cfg, tagInfo, exportCfg)
{
SmfCompressor.DecompressFile(inputPath, outputPath, bufferSize, endian, hexLen, intetrityCfg, adler32Cfg, tagInfo, exportCfg);
}

/** Generate SMF Tag.  */

function createTag(inputPath, outputPath, strCase)
{
SmfCompressor.CreateTagFile(inputPath, outputPath, strCase);
}

/** Check SMF Integrity.  */

function integrityChk(targetPath, analisisType, importCfg, tagInfo, adler32Cfg)
{
SmfCompressor.CheckFileIntegrity(targetPath, analisisType, importCfg, tagInfo, adler32Cfg);
}