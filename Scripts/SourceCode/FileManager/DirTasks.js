/**  Display the Properties of the Specified Folder.

* @param {string} sourcePath - The Path of the Folder where the Props will be Obtained from.
* @param {object} fileOptions - The options for file management. */

function displayProps(sourcePath, dirPropsCfg)
{
DirUtils.DisplayDirProps(sourcePath, dirPropsCfg);
}

/** Creates a Direct Access of the Specified Folder.

* @param {string} sourcePath - The Path of the Folder to Link.
* @param {string} targetPath - The Path where the Link will be Saved. */

function link(sourcePath, targetPath)
{
DirManager.CreateDirectAccess(sourcePath, targetPath);
}

/** Creates a new Folder in the Specified Path.

* @param {string} targetPath - The Path where the Folder will be Created. */

function createNew(targetPath)
{
DirManager.CreateFolder(targetPath);
}

/**  Renames the Specified Folder.

* @param {string} sourcePath - The Path to the Folder that will be Renamed.
* @param {object} fileOptions - The options for file management. */
 
function rename(sourcePath, newName)
{
DirManager.RenameFolder(sourcePath, newName);
}

/** Copies the Specified Folder to a new Location.

* @param {string} sourcePath - The Path to the Folder that will be Copied.
* @param {string} destPath - The Destination of the new Folder. */

function copy(sourcePath, destPath, filter)
{
DirManager.CopyFolder(sourcePath, destPath, filter);
}

/** Moves the Specified Folder to a new Location.

* @param {string} sourcePath - The Path to the Folder that will be Moved.
* @param {string} destPath - The new Destination of the Folder.
* @param {object} fileOptions - The options for file management. */

function move(sourcePath, destPath)
{
DirManager.MoveFolder(sourcePath, destPath);
}

/** Delete the Specified Folder.

* @param {string} targetPath - The Path to the Folder that will be Deleted. */

function deleteFolder(targetPath, recursiveDeletion)
{
DirManager.DeleteFolder(targetPath, recursiveDeletion);
}