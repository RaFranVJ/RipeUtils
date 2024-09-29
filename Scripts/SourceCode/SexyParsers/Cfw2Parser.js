/**  Encode a FontWidget. */

function encode(inputPath, outputPath, endian, verInfo)
{
Cfw2Parser.EncodeFile(inputPath, outputPath, endian, verInfo);
}

/** Decode a CFW2 File.  */

function decode(inputPath, outputPath, endian, adaptVer)
{
Cfw2Parser.DecodeFile(inputPath, outputPath, endian, adaptVer);
}