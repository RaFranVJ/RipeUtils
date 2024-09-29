/**  Compress a RSG File */

function compress(inputPath, outputPath, bufferSize, endian)
{
RsgCompressor.PackDir(inputPath, outputPath, bufferSize, endian);
}

/** Decompress a RSG File.  */

function decompress(inputPath, outputPath, bufferSize, strCase, endian, adaptVer)
{
RsgCompressor.UnpackFile(inputPath, outputPath, bufferSize, strCase, endian, adaptVer);
}