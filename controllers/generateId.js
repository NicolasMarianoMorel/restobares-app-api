// generateId controller
//

module.exports = function generateId(email) {
	let mixed = '';
	let i = 0;
	let j = email.length;
	while (i<=j) {
		mixed += String.fromCharCode(email.charCodeAt(i) + email.charCodeAt(j));
		i++;
		j--; 
	}
	return btoa(mixed);
} 
