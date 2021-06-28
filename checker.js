const userAgent = navigator.userAgent;
const BASE_URL = 'https://ar-works.s3.ca-central-1.amazonaws.com/Test_Gazebo_01'
const IOS_URL = `${BASE_URL}.usdz`
const ANDROID_URL = `intent://arvr.google.com/scene-viewer/1.0?file=${BASE_URL}.glb?raw=true#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;`
const LANDING_URL = 'landing.html'


if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    window.location.replace(IOS_URL);
} else if (userAgent.includes('Android')) {
    window.location.replace(ANDROID_URL);
} else {
    window.location.replace(LANDING_URL);
}
