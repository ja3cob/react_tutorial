export function isNullOrEmpty(target) {
    if(typeof(target) === "undefined" || target === null || target.length === 0) {
        return true;
    }
    return false;
}