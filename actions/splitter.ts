import escapeRegex from '../actions/regex';

/**
 * Modifies the input string. If @include is true it returns a substring (begin - end) granted that @begin and @end only occur once.
 * If @include is false it removes all substrings that start with @begin and terminates with @end.
 * 
 * @param doc The input document
 * @param begin The begin string to split on
 * @param end The end string to split on
 * @param include If false removes end-begin, if true returns end-begin
 * @returns {string} String with specified substrings removed
 */
function split(doc : string, begin : string, end : string, include  = true) : string{
	if (!doc.includes(begin) || !doc.includes(end)) return doc;
	if (include) return doc.split(begin)[1].split(end)[0];
	if (!include) return doc.replace(new RegExp(escapeRegex(begin) + '(.*?)' + escapeRegex(end), 'g'), '');
}

export default split;