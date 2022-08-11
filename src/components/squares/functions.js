import { activateCows } from "../../Redux/activeCow";

export const gunShot = (el, points, position, shot, blackShoots, redShoots, dropBlackCow, dropRedCow, dispatch, cows, setCows) => {
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
        let obj = cows;
        obj[points[el].occupiedBy].isOnBoard = false;
        setCows(obj);
        changeArrayState(false, el, points, position)
        dispatch(activateCows(false))
    }
}

export const movingStage = (el, playStage, points, cows, setCows, activateCows, dispatch) => {
    if (points[el].isOccupied) {
        let cow = document.querySelector(".selectedCow")
        cow && cow.classList.remove('selectedCow');
        const selectCow = document.getElementsByClassName(points[el].occupiedBy)[0];
        selectCow.classList.add('selectedCow');

        dispatch(activateCows(points[el].occupiedBy))
    }
}

export const changeArrayState = (occupyOrVacate, el, points, position, isActive) => {
    let arr = points;
    occupyOrVacate ? arr[el].occupy(isActive) : arr[el].vacate();
    position(arr);
}
export const placeCow = (el, points, cows, setCows, isActive) => {
    const { x, y } = points[el];
    const obj = {...cows };
    obj[isActive].setPosition(x, y);
    obj[isActive].isOnBoard = true;
    setCows(obj);
}