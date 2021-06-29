const ANDROID_LINK = document.getElementById('android-link');
const APPLE_LINK = document.getElementById('android-link');
const USER_AGENT = navigator.userAgent;

if (USER_AGENT.includes('Android')) ANDROID_LINK.click();
if (USER_AGENT.includes('iPhone') || USER_AGENT.includes('iPad')) APPLE_LINK.click();
