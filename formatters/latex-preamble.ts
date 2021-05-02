import split from '../actions/splitter';

/**
 * @param {string} doc the input value, a string with no newlines
 * @returns {string} String with preamble and afteramble removed.
 */
function latexPreamble(doc:string) : string{
	return split(doc, '\\begin{document}', '\\end{document}');
}

export default latexPreamble;