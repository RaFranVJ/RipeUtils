/**  Encode a Image. */

function encode(inputPath, outputPath, endian, importCfg)
{
PtxParser.EncodeFile(inputPath, outputPath, endian, importCfg);
}

/** Decode a Ptx File.  */

function decode(inputPath, outputPath, endian, exportCfg)
{
PtxParser.DecodeFile(inputPath, outputPath, endian, exportCfg);
}