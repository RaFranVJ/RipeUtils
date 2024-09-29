/**  Encode a Image. */

function encode(inputPath, outputPath, format, endian, importCfg)
{
UTexParser.EncodeFile(inputPath, outputPath, format, endian, importCfg);
}

/** Decode a Tex File.  */

function decode(inputPath, outputPath, endian, exportCfg)
{
UTexParser.DecodeFile(inputPath, outputPath, endian, exportCfg);
}