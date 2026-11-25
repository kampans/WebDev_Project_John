const footerCommit = document.querySelector('.footer-commit');
const repository = 'kampans/WebDev_Project_John';
const latestCommitUrl = `https://api.github.com/repos/${repository}/commits?sha=main&per_page=1`;

async function showLatestCommit() {
	try {
		const response = await fetch(latestCommitUrl, { cache: 'no-cache' });
		if (!response.ok) return;

		const [latestCommit] = await response.json();
		const subject = latestCommit?.commit?.message?.split('\n', 1)[0].trim();
		const hash = latestCommit?.sha;
		if (!subject || !/^[a-f0-9]{40}$/i.test(hash)) return;

		footerCommit.textContent = `${subject} · ${hash.slice(0, 7)}`;
		footerCommit.href = `https://github.com/${repository}/commit/${hash}`;
		footerCommit.hidden = false;
	} catch {
		// Keep the footer usable when GitHub is unavailable.
	}
}

showLatestCommit();
