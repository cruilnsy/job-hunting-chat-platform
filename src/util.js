
export function getRedirectPath({type, avatar}) {
    // based on the user info, return the redirect address
    // user.type    boss/genius
    // user.avatar  bossinfo/geniusinfo
    let url = (type === 'boss') ? '/boss': '/genius';
    if (!avatar) {
        url += 'info';
    }
    return url;
}