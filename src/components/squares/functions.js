export const gunShot = (el, points, position, shot, blackShoots, redShoots, dropBlackCow, dropRedCow, activateCows, dispatch) => {
    if (shot.shotsRed || shot.shotsBlack) {
        const killedCow = document.getElementsByClassName(
            points[el].occupiedBy
        )[0];
        killedCow.remove();

        if (shot.shotsBlack) {
            dispatch(blackShoots());
            dispatch(dropRedCow(el));
        } else {
            dispatch(redShoots(el));
            dispatch(dropBlackCow(el));
        }

        let arr = points;
        arr[el].vacate();
        position(arr);
        dispatch(activateCows(false));
    }
}

export const movingStage = (el, playStage, points, cows, setCows, activateCows, dispatch, elel) => {
    if (playStage === 'moving') {
        if (points[el].isOccupied) {
            let cow = document.querySelector(".selectedCow")
            cow && cow.classList.remove('selectedCow');
            const selectCow = document.getElementsByClassName(points[el].occupiedBy)[0];
            selectCow.classList.add('selectedCow');

            dispatch(activateCows(points[el].occupiedBy))
            elel(el)
            return null
        }
    }
}