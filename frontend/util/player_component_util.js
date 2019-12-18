export const formatTime = (timeInSeconds) => {
    if (typeof timeInSeconds !== 'number') return '0:00';
    let minutesStr = Math.floor(timeInSeconds / 60).toString();
    let seconds = timeInSeconds % 60;
    let secondsStr = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesStr + ':' + secondsStr;
}