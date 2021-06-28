const userAgent = navigator.userAgent;
const RAW_ANDROID_URL = 'https://ar-works.s3.ca-central-1.amazonaws.com/Test_Gazebo_01.glb'
const IOS_URL = 'https://ar-works.s3.ca-central-1.amazonaws.com/Test_Gazebo_01.usdz'
const LANDING_URL = 'landing.html'

if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    window.location.replace(IOS_URL);
} else if (userAgent.includes('iPhone')) {
    window.location.replace(ANDROID_URL);
} else {
    window.location.replace(LANDING_URL);
}
