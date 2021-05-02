import * as formatters from './formatters/formatters';
import { readFileSync } from 'fs';
import VanillaWordCount from './actions/vanilla-word-count';

//read input file and standardize newlines
const input : string  = readFileSync('input.tex', 'utf-8').replace(/\r|\n|\r\n/g, '\n');

/**
 * 
 * @param document the input, formatted as a single string with no newlines
 * @returns Word count of the document after applying all formatters
 */
function main(document : string) : number{

	//remove comments
	const tempDocument: string[] = [];
	document.split('\n').forEach(line => {
		line = line.replace(/(?<!\\)%.*/g, ' ');
		tempDocument.push(line);
	});

	//remove newlines
	document = tempDocument.join(' ');

	//runs all formatters 
	for (const f in formatters){
		document = formatters[f](document);
	}
	return VanillaWordCount(document);
}

console.log(main(input));