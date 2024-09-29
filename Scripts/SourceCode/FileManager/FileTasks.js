/**  Display the Properties of the Specified File.

* @param {string} sourcePath - The Path of the File where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function displayProps(sourcePath, filePropsCfg)
{
FileUtils.DisplayFileProps(sourcePath, filePropsCfg);
}

/** Creates a Direct Access of the Specified File.

* @param {string} sourcePath - The Path of the File to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function link(sourcePath, targetPath)
{
FileManager.CreateDirectAccess(sourcePath, targetPath);
}

/** Creates a new File in the Specified Path.

* @param {string} targetPath - The Path where the File will be Created.
* @param {object} fileOptions - The options for file management. */

function createNew(targetPath, newFilesCfg, replaceFiles)
{
FileManager.CreateFile(targetPath, newFilesCfg, replaceFiles);
}

/**  Renames the Specified File.

* @param {string} sourcePath - The Path to the File that will be Renamed.
* @param {object} fileOptions - The options for file management. */
 
function rename(sourcePath, newName)
{
FileManager.RenameFile(sourcePath, newName);
}

/** Copies the Specified File to a new Location.

* @param {string} sourcePath - The Path to the File that will be Copied.
* @param {string} destPath - The Destination of the new File.
* @param {object} fileOptions - The options for file management. */

function copy(sourcePath, destPath, replaceFiles)
{
FileManager.CopyFile(sourcePath, destPath, replaceFiles);
}

/** Moves the Specified File to a new Location.

* @param {string} sourcePath - The Path to the File that will be Moved.
* @param {string} destPath - The new Destination of the File.
* @param {object} fileOptions - The options for file management. */

function move(sourcePath, destPath, replaceFiles)
{
FileManager.MoveFile(sourcePath, destPath, replaceFiles);
}

/** Delete the Specified File.

* @param {string} targetPath - The Path to the File that will be Deleted. */

function deleteFile(targetPath)
{
FileManager.DeleteFile(targetPath);
}