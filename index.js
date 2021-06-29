const TITLE = document.getElementById('title');
const ARTIST = document.getElementById('title');
const LINKS = document.getElementById('title');
const ANDROID_LINK = document.getElementById('android-link');
const APPLE_LINK = document.getElementById('android-link');
const USER_AGENT = navigator.userAgent;

if (USER_AGENT.includes('Android')) {
    ANDROID_LINK.click();
} else if (USER_AGENT.includes('iPhone') || USER_AGENT.includes('iPad')) {
    APPLE_LINK.click();
} else {
    TITLE.classList.remove('hidden');
    ARTIST.classList.remove('hidden');
    LINKS.classList.remove('hidden');
}

