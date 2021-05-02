/**
 * @param {string} doc the input value, a string with no newlines
 * @returns {string} input with the LaTeX paragraph code stripped
 */
function latexParagraphs(doc : string) : string {
	const matches = doc.match(/(\\(sub)*?paragraph{).*?([}])/g);
	if (matches === null) return doc;
	matches.forEach(m => {
		doc = doc.replace(m, m.replace(/(\\.*?paragraph{)/g, '').slice(0,-1));
	});
	return doc;
}

export default latexParagraphs;