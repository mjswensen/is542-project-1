document.addEventListener("DOMContentLoaded", function() {

	// Requirement one: insert header and footer dynamically
	(function() {

		var el = function(str) { return document.createElement(str); },
			getTitle = function(text) {
				return 'IS 542 Project 1 | Matt Swensen | ' + text;
			},
			header = document.getElementsByTagName('header')[0],
			footer = document.getElementsByTagName('footer')[0],
			title = document.getElementsByTagName('title')[0],
			div = el('div'),
			h1 = el('h1'),
			span = el('span'),
			nav = el('nav'),
			ul = el('ul'),
			liScala = el('li'),
			liContact = el('li'),
			a = el('a'),
			contact = 'Contact',
			scala = 'Scala';

		// Set text for header elements and title element
		h1.innerText = 'IS 542 Projet 1';
		span.innerText = 'By Matt Swensen';

		if(/contact/.test(window.location.pathname)) {
			// Add the link to the nav
			a.href = 'index.html';
			a.innerText = scala;
			liScala.appendChild(a);
			liContact.innerText = contact;
			// Update title
			title.innerText = getTitle('The Scala Language');
		} else {
			// Add the link to the nav
			a.href = 'contact.html';
			a.innerText = contact;
			liContact.appendChild(a);
			liScala.innerText = scala;
			// Update title
			title.innerText = getTitle(contact);
		}

		// Construct the header
		div.appendChild(h1);
		div.appendChild(span);

		ul.appendChild(liContact);
		ul.appendChild(liScala);

		nav.appendChild(ul);

		header.appendChild(div);
		header.appendChild(nav);

		// Construct the footer
		footer.textContent = 'Copyright ' + (new Date()).getFullYear() + ' Matt Swensen';

	})();

	// Requirement two: prompt user to maintain session every 10 seconds
	(function() {
		function sessionReminder() {
			if(confirm('Would you like to extend your session?')) {
				setTimeout(sessionReminder, 10000);
			} else {
				window.location.href = 'http://www.google.com';
			}
		}
		setTimeout(sessionReminder, 10000);
	})();

}, false);
