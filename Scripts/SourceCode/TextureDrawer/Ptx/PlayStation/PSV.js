/**  Encode a Image. */

function encode(inputPath, outputPath, endian, verInfo, importCfg)
{
PtxParser.EncodeFile(inputPath, outputPath, endian, verInfo, importCfg);
}

/** Decode a Ptx File.  */

function decode(inputPath, outputPath, endian, adaptVer, compareSize, exportCfg)
{
PtxParser.DecodeFile(inputPath, outputPath, endian, adaptVer, compareSize, exportCfg);
}

/** Check Ptx Size.  */

function sizeChk(targetPath, endian, adaptVer)
{
PtxParser.CheckTextureSize(targetPath, endian, adaptVer);
}