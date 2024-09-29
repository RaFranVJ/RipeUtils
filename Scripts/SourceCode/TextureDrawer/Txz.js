/**  Encode a Image. */

function encode(inputPath, outputPath, compressLvl, bufferSize, format, endian, importCfg)
{
TxzParser.EncodeFile(inputPath, outputPath, compressLvl, bufferSize, format, endian, importCfg);
}

/** Decode a Tex File.  */

function decode(inputPath, outputPath, bufferSize, endian, exportCfg)
{
TxzParser.DecodeFile(inputPath, outputPath, bufferSize, endian, exportCfg);
}