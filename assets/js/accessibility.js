const accessibilityToggle = document.querySelector('.accessibility-toggle');
const preferenceKey = 'accessibility-mode';

function setAccessibilityMode(enabled) {
	document.documentElement.classList.toggle('accessibility-mode', enabled);
	accessibilityToggle.setAttribute('aria-pressed', String(enabled));
}

let accessibilityEnabled = false;
try {
	accessibilityEnabled = localStorage.getItem(preferenceKey) === 'true';
} catch {
	// The toggle still works when browser storage is unavailable.
}

setAccessibilityMode(accessibilityEnabled);
accessibilityToggle.hidden = false;

accessibilityToggle.addEventListener('click', () => {
	accessibilityEnabled = !accessibilityEnabled;
	setAccessibilityMode(accessibilityEnabled);

	try {
		localStorage.setItem(preferenceKey, String(accessibilityEnabled));
	} catch {
		// Keep the current page's setting when browser storage is unavailable.
	}
});
