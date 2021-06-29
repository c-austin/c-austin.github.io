const ANDROID_LINK = document.getElementById('android-link');
const APPLE_LINK = document.getElementById('apple-link');
const USER_AGENT = navigator.userAgent;

if (USER_AGENT.includes('Android')) clickLink(ANDROID_LINK);
if (USER_AGENT.includes('iPhone') || USER_AGENT.includes('iPad')) clickLink(APPLE_LINK);

function clickLink(link) {
    var cancelled = false;

    if (document.createEvent) {
        var event = document.createEvent("MouseEvents");
        event.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0,
            false, false, false, false,
            0, null);
        cancelled = !link.dispatchEvent(event);
    }
    else if (link.fireEvent) {
        cancelled = !link.fireEvent("onclick");
    }
}
