/**  Get Hash from File. */

function hash(inputPath, outputPath, config)
{
Adler32.DigestFile(inputPath, outputPath, config);
}