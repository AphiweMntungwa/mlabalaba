import { activateCows } from "../../Redux/activeCow";

export const gunShot = (el, points, position, shot, blackShoots, redShoots, dropBlackCow, dropRedCow, dispatch, cows, setCows) => {
    'use strict'
    if (shot.shotsRed || shot.shotsBlack) {
        const occupiedBy = points[el].occupiedBy
        const killedCow = document.getElementsByClassName(occupiedBy)[0];
        const obj = cows;

        function remover() {
            killedCow.remove();
            obj[points[el].occupiedBy].isOnBoard = false;
            setCows(obj);
            changeArrayState(false, el, points, position)
            dispatch(activateCows(false))
        }
        if (shot.shotsBlack) {
            if (cows[occupiedBy].redOrBlack === "red") {
                remover()
                dispatch(blackShoots());
                dispatch(dropRedCow(el));
            }
        } else if (cows[occupiedBy].redOrBlack === "#4c2b2b") {
            remover()
            dispatch(redShoots());
            dispatch(dropBlackCow(el));
        }
    }
}

export const movingStage = (el, setPreviousActive, points, cows, setCows, activateCows, dispatch) => {
    if (points[el].isOccupied) {
        let cow = document.querySelector(".selectedCow")
        cow && cow.classList.remove('selectedCow');
        const selectCow = document.getElementsByClassName(points[el].occupiedBy)[0];
        selectCow.classList.add('selectedCow');

        dispatch(activateCows(points[el].occupiedBy))
        setPreviousActive(el);
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