/**  Encode a Image. */

function encode(inputPath, outputPath, compressLvl, bufferSize, format, endian, verInfo, importCfg)
{
SexyTex.EncodeFile(inputPath, outputPath, compressLvl, bufferSize, format, endian, verInfo, importCfg);
}

/** Decode a Tex File.  */

function decode(inputPath, outputPath, bufferSize, endian, adaptVer, exportCfg)
{
SexyTex.DecodeFile(inputPath, outputPath, bufferSize, endian, adaptVer, exportCfg);
}