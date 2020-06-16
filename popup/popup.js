var dateDayInput = document.getElementById("startTimeDayInput");
var dateMonthInput = document.getElementById("startTimeMonthInput");
var dateYearInput = document.getElementById("startTimeYearInput");
var daysInput = document.getElementById("daysInput");
var peopleInput = document.getElementById("peopleInput");
var minorInput = document.getElementById("minorInput");

daysInput.addEventListener("change", onSettingChange);
peopleInput.addEventListener("change", onSettingChange);
minorInput.addEventListener("change", onSettingChange);
dateDayInput.addEventListener("change", onSettingChange);
dateMonthInput.addEventListener("change", onSettingChange);
dateYearInput.addEventListener("change", onSettingChange);

var statusText = document.getElementById("statusText");

var onButton = document.getElementById("onButton");
var offButton = document.getElementById("offButton");

var settingsVerifiedAsValid = false;

onButton.addEventListener("click", toggleOn);
offButton.addEventListener("click", toggleOff);

function onSettingChange() {
    if (isValidDate(dateDayInput.value, dateMonthInput.value, dateYearInput.value)) {
        browser.storage.local.set({
            "startDay": dateDayInput.value,
            "startMonth": dateMonthInput.value,
            "startYear": dateYearInput.value
        });
        dateDayInput.className = "numberElem"
        dateMonthInput.className = "numberElem"
        dateYearInput.className = "numberElem"
    } else {
        dateDayInput.className = "error numberElem"
        dateMonthInput.className = "error numberElem"
        dateYearInput.className = "error numberElem"
    }
    browser.storage.local.set({
        "days": daysInput.value,
        "people": peopleInput.value,
        "minor": minorInput.checked
    });
    
    validateInputs();
}

function isValidDate(day, month, year) {
    var testDate = new Date(`${year}-${month}-${day}`);
    return !isNaN(testDate.valueOf());
}

function validateInputs() {
    var isSame = true;
    // Check if input and stored values are the same
    return browser.storage.local.get().then(o => {
        if (daysInput.value != o.days ||
            peopleInput.value != o.people ||
            minorInput.checked != o.minor ||
            dateDayInput.value != o.startDay ||
            dateMonthInput.value != o.startMonth ||
            dateYearInput.value != o.startYear) 
        {
            isSame = false
        }
        settingsVerifiedAsValid = isSame;
    });
}

function toggleOn() {
    if (settingsVerifiedAsValid) {
        onButton.disabled = true;
        offButton.disabled = false;
        browser.storage.local.set({"scriptEnabled": true});
        statusText.textContent = "ON";
        statusText.className = "toggledOn";
        browser.browserAction.setIcon({path: "../icons/border-48-on.png"});
    }
}

function toggleOff() {
    onButton.disabled = false;
    offButton.disabled = true;
    browser.storage.local.set({"scriptEnabled": false});
    statusText.textContent = "OFF";
    statusText.className = "toggledOff";
    browser.browserAction.setIcon({path: "../icons/border-48.png"});
}

function init() {
    browser.storage.local.get().then(o => {
        daysInput.value = o.days
        peopleInput.value = o.people
        minorInput.checked = o.minor
        dateDayInput.value = o.startDay
        dateMonthInput.value = o.startMonth
        dateYearInput.value = o.startYear
        validateInputs().then(() => {
            if (o.scriptEnabled) {
                toggleOn();
            } else {
                toggleOff();
            }
        });
    });
}

init();