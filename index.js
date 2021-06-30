const APPLE_LINK = document.getElementById('apple-link');
const MAIN = document.getElementById('main');
const USER_AGENT = navigator.userAgent;

if (USER_AGENT.includes('iPhone') || USER_AGENT.includes('iPad')) APPLE_LINK.click();
else MAIN.classList.remove('hidden');
