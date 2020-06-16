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

onButton.addEventListener("click", toggleOn);
offButton.addEventListener("click", toggleOff);

function onSettingChange() {
    if (isValidDate(dateDayInput.value, dateMonthInput.value, dateYearInput.value)) {
        browser.storage.local.set({"startDay": dateDayInput.value});
        browser.storage.local.set({"startMonth": dateMonthInput.value});
        browser.storage.local.set({"startYear": dateYearInput.value});
        dateDayInput.className = "numberElem"
        dateMonthInput.className = "numberElem"
        dateYearInput.className = "numberElem"
    } else {
        dateDayInput.className = "error numberElem"
        dateMonthInput.className = "error numberElem"
        dateYearInput.className = "error numberElem"
    }

    browser.storage.local.set({"days": daysInput.value});
    browser.storage.local.set({"people": peopleInput.value});
    browser.storage.local.set({"minor": minorInput.checked});
    browser.storage.local.get().then(o => console.log(o));
}

function isValidDate(day, month, year) {
    var testDate = new Date(`${year}-${month}-${day}`);
    return !isNaN(testDate.valueOf());
}

function isValid() {
    return inputIsSameAsMemory();
}

function inputIsSameAsMemory() {
    var isSame = true;
    browser.storage.local.get("days").then(o => {if (daysInput.value == o.days) {isSame = false}});
    browser.storage.local.get("people").then(o => {if (peopleInput.value == o.people) {isSame = false}});
    browser.storage.local.get("minor").then(o => {if (minorInput.checked == o.minor) {isSame = false}});
    browser.storage.local.get("startDay").then(o => {if (dateDayInput.value == o.startDay) {isSame = false}});
    browser.storage.local.get("startMonth").then(o => {if (dateMonthInput.value == o.startMonth) {isSame = false}});
    browser.storage.local.get("startYear").then(o => {if (dateYearInput.value == o.startYear) {isSame = false}});
    return isSame;
}

function toggleOn() {
    if (isValid()) {
        onButton.disabled = true;
        offButton.disabled = false;
        browser.storage.local.set({"scriptEnabled": true});
        statusText.textContent = "ON";
        statusText.className = "toggledOn";
    }
}

function toggleOff() {
    onButton.disabled = false;
    offButton.disabled = true;
    browser.storage.local.set({"scriptEnabled": false});
    statusText.textContent = "OFF";
    statusText.className = "toggledOff";
}

function init() {
    browser.storage.local.get("days").then(o => daysInput.value = o.days);
    browser.storage.local.get("people").then(o => peopleInput.value = o.people);
    browser.storage.local.get("minor").then(o => minorInput.checked = o.minor);
    browser.storage.local.get("startDay").then(o => dateDayInput.value = o.startDay);
    browser.storage.local.get("startMonth").then(o => dateMonthInput.value = o.startMonth);
    browser.storage.local.get("startYear").then(o => dateYearInput.value = o.startYear);
    browser.storage.local.get("scriptEnabled").then(o => {
        if (o.scriptEnabled) {
            toggleOn();
        } else {
            toggleOff();
        }
    });
}

init();