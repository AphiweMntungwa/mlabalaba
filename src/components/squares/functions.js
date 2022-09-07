import { activateCows } from "../../Redux/activeCow";
import { activatePlayer } from "../../Redux/activePlayer";
import { display } from "../../Redux/infobar";
import { guns } from "../../Utils/positions/gunPositions";

export const gunShot = (el, points, position, shot, blackShoots, redShoots, dropBlackCow, dropRedCow, dispatch, cows, setCows) => {
    'use strict'
    if (shot.shotsRed || shot.shotsBlack) {
        const occupiedBy = points[el].occupiedBy
        const obj = cows;

        function remover() {
            delete obj[occupiedBy]
            setCows(obj);
            changeArrayState(false, el, points, position)
            dispatch(activateCows(false))
        }
        //functionality for making sure a user cannot take his own piece after shooting a gun
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

export const movingStage = (el, setPreviousActive, points, cows, activePlayer, activateCows, dispatch) => {
    if (points[el].isOccupied) {
        if (cows[points[el].occupiedBy].redOrBlack != activePlayer) {
            return null;
        }
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
    obj[isActive].position(el);
    obj[isActive].isOnBoard = true;
    setCows(obj);
}

export const fillGun = (filledGuns, dispatch, points, removeGun, shots, reload, play, soundEffects) => {
    let gunObj = guns()
    for (let i in filledGuns) {
        const gunArr = gunObj[filledGuns[i]].gunArr
        if (!points[gunArr[0]].isOccupied || !points[gunArr[1]].isOccupied || !points[gunArr[2]].isOccupied) {
            dispatch(removeGun(i))
            dispatch(display('Gun Loaded!'))
            soundEffects && play();
            reload({
                ...shots,
                ... {
                    [i]: gunObj[i]
                }
            })
        }
    }
    /** fillGun() when a player shoots the gun is removed from the guns array so it won't shoot itself repeatedly so,
     * to check whether the gun positions are still occupied after the play I have to loop through the guns 
     * that were previously occupied and run isOccupied method on them and if any of them is not occupied 
     * I return the gun back to the guns array so that it can be shoot(able) again.
     */
}

function getNeighbors(cowType, points) {
    let neighbors = {}
    let object = {...cowType }
    for (let i in object) {
        neighbors = {...neighbors, ...points[i].neighbors }
    }
    return neighbors;
}

function confirmNeighbors(points, neighbors) {
    let confirm = false;
    for (let i in neighbors) {
        if (!points[i].isOccupied) {
            confirm = true;
            break;
        }
    }
    return confirm;
}

function useConfirm(confirm, dispatch, cowType, playTrap) {
    if (!confirm) {
        if (cowType === "playingBlackCows") {
            dispatch(activatePlayer("red"));
            dispatch(display('Black is blocked!!'))
        } else {
            dispatch(activatePlayer("#4c2b2b"));
            dispatch(display('Red is blocked!!!'))
        }
        playTrap()
    } else dispatch(display('moving'));
}

export const checkOccupied = (playingCows, points, cowType, dispatch, playTrap) => {
    let neighbors = {}
    let confirm = false;

    neighbors = getNeighbors(playingCows, points)
    confirm = confirmNeighbors(points, neighbors)
    useConfirm(confirm, dispatch, cowType, playTrap)
}

export const checkFlying = (playingCows, cowType, setFlyingRed, setFlyingBlack, dispatch) => {
    if (Object.keys(playingCows).length > 3) {
        return null
    }

    if (cowType === "playingBlackCows") {
        setFlyingBlack(true)
        dispatch(display("Black is Flying"))
    } else {
        dispatch(display("Red is Flying"))
        setFlyingRed(true);
    }
}

export const ls = (a, b, remove) => {
    if (remove) {
        localStorage.removeItem(remove)
    } else if (b) {
        localStorage.setItem(a, b);
    } else {
        return localStorage.getItem(a)
    }
}