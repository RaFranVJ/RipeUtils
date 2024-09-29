/**  Compress a ZIP File. */

function compress(inputPath, outputPath, mode, encoding, comment, entriesInfo, filter)
{
ZipCompressor.CompressFile(inputPath, outputPath, mode, encoding, comment, entriesInfo, filter);
}

/** Decompress a ZIP File. */

function decompress(inputPath, outputPath, mode, encoding, bufferSize)
{
ZipCompressor.DecompressFile(inputPath, outputPath, mode, encoding, bufferSize);
}