/** Calculates a DateTime from a given TimeStamp Value.

* @param {number} timeStamp - The TimeStamp where the DateTime will be Calculated from.
 
* @returns {Date} - The DateTime Calculated. */

function calculateDT(timeStamp)
{
return TimeCalculator.CalculateDateTimeJS(timeStamp);
}

/** Calculates a TimeStamp from a given DateTime Value.
 
* @param {Date} dateTime - The DateTime where the TimeStamp will be Calculated from.
 
* @returns {number} - The TimeStamp Calculated. */

function calculateTS(dateTime)
{
return TimeCalculator.CalculateTimeStampJS(dateTime);
}