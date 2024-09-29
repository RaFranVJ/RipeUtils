/**  Compress a Lzma File. */

function compress(inputPath, outputPath, useSizeInfo, inSize, outSize, ids, props, endian)
{
LzmaCompressor.CompressFile(inputPath, outputPath, useSizeInfo, inSize, outSize, ids, props, endian);
}

/** Decompress a Lzma File. */

function decompress(inputPath, outputPath, useSizeInfo, inSize, outSize, propsCount, endian)
{
LzmaCompressor.DecompressFile(inputPath, outputPath, useSizeInfo, inSize, outSize, propsCount, endian);
}