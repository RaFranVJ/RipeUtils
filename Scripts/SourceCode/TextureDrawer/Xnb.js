/**  Encode a Image. */

function encode(inputPath, outputPath, platform, format, endian, xnbVer, ddsVer, importCfg)
{
XnbParser.EncodeFile(inputPath, outputPath, platform, format, endian, xnbVer, ddsVer, importCfg);
}

/** Decode a Xnb File.  */

function decode(inputPath, outputPath, endian, adaptVerX, adaptVerY, integrityCfg, exportCfg)
{
XnbParser.DecodeFile(inputPath, outputPath, endian, adaptVerX, adaptVerY, integrityCfg, exportCfg);
}

/* Check Xnb Integrity */

function integrityChk(targetPath, analisisType, endian, adaptVerX, adaptVerY)
{
XnbParser.CheckFileIntegrity(targetPath, analisisType, endian, adaptVerX, adaptVerY);
}