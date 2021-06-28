const userAgent = navigator.userAgent;
const ANDROID_URL = 'https://android.android'
const IOS_URL = 'https://ios.ios'
const LANDING_URL = 'https://landing.landing'

if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    window.location.replace(IOS_URL);
} else if (userAgent.includes('iPhone')) {
    window.location.replace(ANDROID_URL);
} else {
    window.location.replace(LANDING_URL);
}
