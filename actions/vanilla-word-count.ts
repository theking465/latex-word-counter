/**
 * @param doc input value formatted as a single string of words
 * @returns Amount of words. A word is a non empty substring seperated with spaces from other words.
 */
function VanillaWordCount(doc : string) : number {
	return doc.split(' ').filter(word => word.length != 0).length;
}

export default VanillaWordCount;
