"use strict";

import dashboardData from "./data.json" with {type: 'json'};

const toggleDaily = document.getElementById('toggle-daily');
const toggleWeekly = document.getElementById('toggle-weekly');
const toggleMonthly = document.getElementById('toggle-monthly');
const workTime = document.getElementById('work-time');
const exerciseTime = document.getElementById('exercise-time');
const playTime = document.getElementById('play-time');
const socialTime = document.getElementById('social-time');
const studyTime = document.getElementById('study-time');
const selfCareTime = document.getElementById('self-care-time');

const eventTimes = [workTime, exerciseTime, playTime, socialTime, studyTime, selfCareTime];
const toggles = [toggleDaily, toggleWeekly, toggleMonthly];

(function () {
    toggleTime('weekly');
    removeActive();
    toggleWeekly.classList.add('active');
})();

function toggleTime (timeframe) {
    for (const time of eventTimes) {
        for (const data of dashboardData) {
            if (time.title === data.title) {
                let previousTime = time.parentElement.parentElement.querySelector('#previous-time');
                let previousTimeframe = time.parentElement.parentElement.querySelector('#previous-timeframe');

                time.innerHTML = data.timeframes[timeframe].current;
                previousTime.innerHTML = data.timeframes[timeframe].previous;

                switch (timeframe) {
                    case 'daily':
                        previousTimeframe.innerHTML = 'Yesterday';
                        break;
                    case 'weekly':
                        previousTimeframe.innerHTML = 'Last Week';
                        break;
                    case 'monthly':
                        previousTimeframe.innerHTML = 'Last Month';
                        break;
                    default:
                        break;
                }
            };
        };
    };
}

function removeActive () {
    for (const toggle of toggles) {
        toggle.classList.remove('active');
    }
}

toggleDaily.addEventListener('click', function () {
    toggleTime('daily');
    removeActive();
    toggleDaily.classList.add('active');
});
toggleWeekly.addEventListener('click', function () {
    toggleTime('weekly');
    removeActive();
    toggleWeekly.classList.add('active');
});
toggleMonthly.addEventListener('click', function () {
    toggleTime('monthly');
    removeActive();
    toggleMonthly.classList.add('active');
});
