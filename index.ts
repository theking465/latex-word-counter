import * as formatters from './formatters/formatters';
import { readFileSync } from 'fs';

const input : string  = readFileSync('input.tex', 'utf-8').replace(/\r|\n|\r\n/g, ' ');

/**
 * 
 * @param document the input, formatted as a single string with no newlines
 * @returns Word count of the document after applying all formatters
 */
function main(document : string) : number{
	for (const f in formatters){
		document = formatters[f](document);
	}
	return VanillaWordCount(document);
}

/**
 * 
 * @param doc input value formatted as a single string of words
 * @returns Amount of words. A word is a non empty substring seperated with spaces from other words.
 */
const VanillaWordCount = (doc : string) => {
	return doc.split(' ').filter(word => word.length != 0).length;
};

console.log(main(input));