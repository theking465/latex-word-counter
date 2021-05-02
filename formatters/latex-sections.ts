/**
 * @param {string} doc the input value, a string with no newlines
 * @returns {string} input with the LaTeX section code stripped
 */
function latexSections(doc : string) : string {
	const matches = doc.match(/(\\(sub)*?section{).*?([}])/g);
	if (matches === null) return doc;
	matches.forEach(m => {
		doc = doc.replace(m, m.replace(/(\\.*?section{)/g, '').slice(0,-1));
	});
	return doc;
}

export default latexSections;