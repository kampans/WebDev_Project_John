const contactForm = document.querySelector('.contact-form form');
const contactStatus = contactForm.querySelector('.contact-status');

contactForm.addEventListener('submit', event => {
	event.preventDefault();

	const fields = new FormData(contactForm);
	const subject = encodeURIComponent(fields.get('topic'));
	const body = encodeURIComponent([
		fields.get('message'),
		'',
		'Name: ' + fields.get('name'),
		'Email: ' + fields.get('email')
	].join('\r\n'));

	contactStatus.textContent = 'Thanks for reaching out! Send the draft from your email app. When we reply, we will use the address you provided.';
	window.location.href = contactForm.action + '?subject=' + subject + '&body=' + body;
});
