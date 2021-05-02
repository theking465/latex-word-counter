/**
 * @param {string} input 
 * @returns {string} The input with special regex characters escaped
 */
function escapeRegex(input : string) : string {
	return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export default escapeRegex;