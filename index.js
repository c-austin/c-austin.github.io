const APPLE_LINK = document.getElementById('apple-link');
const USER_AGENT = navigator.userAgent;
if (USER_AGENT.includes('iPhone') || USER_AGENT.includes('iPad')) APPLE_LINK.click();
