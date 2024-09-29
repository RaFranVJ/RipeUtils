/** Saves the Environment Info of this Program to a new File

* @param {string} outputPath - The Path where the Environment Info will be Saved. */

function getEnvInfo(outputPath)
{
Features.SaveEnvironmentInfo(outputPath);
}

/** Displays info about the User who is running the Program. */

function getUserInfo()
{
Features.DisplayUserInfo();
}

/** Displays info related to this Program. */

function getProgramInfo()
{
Features.DisplayProgramInfo();
}

/** Displays the Settings of this Program. */

function displaySettings()
{
Features.DisplayAppSettings();
}

/** Allows the User to comit Changes to the ParamsGroup of this Program. */

function editParamsGp()
{
Features.EditParamsGroup();
}