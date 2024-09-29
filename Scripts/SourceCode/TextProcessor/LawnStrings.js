/**  Convert a LawnStrings File. */

function convert(inputPath, config)
{
LawnStrsConverter.ConvertFile(inputPath, config);
}

/** Sort a LawnStrings File.  */

function sort(inputPath, convertInfo, sortInfo)
{
LawnStrsSorter.SortFile(inputPath, convertInfo, sortInfo);
}

/** Normalize a LawnStrings File.  */

function normalize(inputPath, outputPath, config)
{
LawnStrsNormalizer.RemoveDuplicates(inputPath, outputPath, config);
}

/** Split a LawnStrings File into smaller ones.  */

function split(inputPath, config)
{
LawnStrsSplit.SplitFile(inputPath, config);
}

/** Merge splited LawnStrings.  */

function merge(inputPath, config)
{
LawnStrsSplit.MergeFiles(inputPath, config);
}

/** Compare two LawnStrings.  */

function compare(compareMode, outputFormat, sortStrs, fileInfoX, fileInfoY, sortInfo)
{
LawnStrsComparer.CompareFiles(compareMode, outputFormat, sortStrs, fileInfoX, fileInfoY, sortInfo);
}

/** Update a LawnStrings.  */

function update(outputFormat, sortStrs, fileInfoX, fileInfoY, sortInfo)
{
LawnStrsUpdater.UpdateFile(outputFormat, sortStrs, fileInfoX, fileInfoY, sortInfo);
}

