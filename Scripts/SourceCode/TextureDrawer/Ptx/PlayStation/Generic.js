/**  Encode a Image. */

function encode(inputPath, outputPath, format, endian, importCfg)
{
PtxParser.EncodeFile(inputPath, outputPath, format, endian, importCfg);
}

/** Decode a Ptx File.  */

function decode(inputPath, outputPath, endian, compareSize, exportCfg)
{
PtxParser.DecodeFile(inputPath, outputPath, endian, compareSize, exportCfg);
}

/** Check Ptx Size.  */

function sizeChk(targetPath, endian)
{
PtxParser.CheckTextureSize(targetPath, endian);
}