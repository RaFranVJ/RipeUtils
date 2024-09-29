/**  Encode a RTON File. */

function encode(inputPath, outputPath, useRefStr, endian, verInfo, encoderCfg)
{
RtonParser.EncodeFile(inputPath, outputPath, useRefStr, endian, verInfo, encoderCfg);
}

/** Decode a RTON File.  */

function decode(inputPath, outputPath, useRefStr, endian, adaptVer, decoderCfg)
{
RtonParser.DecodeFile(inputPath, outputPath, useRefStr, endian, adaptVer, decoderCfg);
}