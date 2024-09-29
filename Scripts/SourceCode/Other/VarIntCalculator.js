/** Calculates a DateTime from a given TimeStamp Value.

* @param {number} targetValue - The VarInt where the Integer will be Calculated from.
* @param {bool} treatValueAsSigned - Determines if the Integer calculated should be treated as Signed or not.
 
* @returns {number} - The Integer Calculated. */

function calculateInt(targetValue, treatValueAsSigned)
{
return VarIntCalculator.CalculateIntJS(targetValue, treatValueAsSigned);
}

/** Calculates a TimeStamp from a given DateTime Value.
 
* @param {number} targetValue - The VarInt where the Integer will be Calculated from.
* @param {bool} treatValueAsSigned - Determines if the Integer calculated should be treated as Signed or not. 

* @returns {number} - The VarInt Calculated. */

function calculateVarInt(targetValue, treatValueAsSigned)
{
return VarIntCalculator.CalculateVarIntJS(targetValue, treatValueAsSigned);
}