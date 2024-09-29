/** Sorts an ObjTable by objname. */

function sort(inputPath, sortInfo)
{
SexyObjSorter.SortFile(inputPath, sortInfo);
}

/** Remove Duplicates from ObjTable. */

function normalize(inputPath, outputPath)
{
SexyObjNormalizer.RemoveDuplicates(inputPath, outputPath);
}

/** Split ObjTable. */

function split(inputPath)
{
SexyObjSplit.SplitFile(inputPath);
}

/** Merge Objs into Table. */

function merge(inputDir)
{
SexyObjSplit.MergeFiles(inputDir);
}

/** Compare two ObjTables. */

function compare(compareMode, sortTable, diffCriteria, filePathX, filePathY, sortInfo)
{
SexyObjComparer.CompareFiles(compareMode, sortTable, diffCriteria, filePathX, filePathY, sortInfo);
}

/** Update a ObjTables by Comparing it with a new one. */

function update(sortTable, filePathX, filePathY, sortInfo)
{
SexyObjUpdater.UpdateFile(sortTable, filePathX, filePathY, sortInfo);
}