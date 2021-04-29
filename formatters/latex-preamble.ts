/**
 * 
 * @param doc the input value, a string with no newlines
 * @returns a string with preamble and afteramble removed.
 */
function latexPreamble(doc:string) : string{
	if (!doc.includes('\\begin{document}') || !doc.includes('\\end{document}')) return doc;
	return doc.split('\\begin{document}')[1].split('\\end{document}')[0];
}

export default latexPreamble;