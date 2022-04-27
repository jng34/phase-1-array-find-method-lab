// code your solution here
function superbowlWin(arr) {
    const findWin = arr.find( win => win.result === 'W');
    if (findWin) {
        return findWin.year;
    } else {
        return findWin;
    }
}
