import split from '../actions/splitter';

/**
 * @param doc The input value, a string with no newlines
 * @returns A string with \( and \[ math environments removed
 */
function latexPreamble(doc:string) : string{
	return split(split(doc, '\\\(', '\\\)', false), '\\\[', '\\\]', false);
}

export default latexPreamble;