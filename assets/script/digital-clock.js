'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return[...parent.querySelectorAll(selector)];
}

function create(element, parent = document) {
    return parent.createElement(element);
}

function print(...args) {
    console.log(args.join(', '));
}

function clockChange() {
    let now = new Date();

    let hours = now.getHours(); 
    let minutes = now.getMinutes().toString().padStart(2, '0'); 
    let seconds = now.getSeconds().toString().padStart(2, '0'); 
    // minutes = minutes < 10 ? `0${minutes}` : minutes;
    // seconds = seconds < 10 ? `0${seconds}` : seconds;
    let ampm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12){
        hours -= 12;
    }
    hours = hours.toString().padStart(2, '0');
    let showHours = selectById('hours');
    let showMins = selectById('minutes');
    let showSecs = selectById('seconds');
    let showAMPM = selectById('ampm');
    showHours.innerText = hours;
    showMins.innerText = minutes;
    showSecs.innerText = seconds;
    showAMPM.innerText = ampm;
}

clockChange();

setInterval(clockChange, 1000);