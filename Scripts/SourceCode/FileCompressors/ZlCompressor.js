/**  Compress a ZLIB File. */

function compress(inputPath, outputPath, level, bufferSize)
{
ZLibCompressor.CompressFile(inputPath, outputPath, level, bufferSize);
}

/** Decompress a ZLIB File. */

function decompress(inputPath, outputPath, bufferSize)
{
ZLibCompressor.DecompressFile(inputPath, outputPath, bufferSize);
}