/**  Encode a Image. */

function encode(inputPath, outputPath, format, endian, pathToInfo)
{
PtxParser.EncodeFile(inputPath, outputPath, format, endian, pathToInfo);
}

/** Decode a Ptx File.  */

function decode(inputPath, outputPath, endian, pathToInfo)
{
PtxParser.DecodeFile(inputPath, outputPath, endian, pathToInfo);
}