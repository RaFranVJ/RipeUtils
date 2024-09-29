/**  Compress a Lzma File. */

function compress(inputPath, outputPath, blockFactor, bufferSize, filter)
{
TarCompressor.CompressFile(inputPath, outputPath, blockFactor, bufferSize, filter);
}

/** Decompress a Lzma File. */

function decompress(inputPath, outputPath, bufferSize)
{
TarCompressor.DecompressFile(inputPath, outputPath, bufferSize);
}