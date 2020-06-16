function toBeRunInPageContext (paramObj) {
    const tempThis = this;

    function getRequestString(peopleCount, daysLength, startDate, minorPermit) {
        var productIds = $(".product-list-item.product-form").toArray().map(e => e.attributes["data-product"].value);
        var storeProductIds = Object.keys(this.eraluvat.STORE.CALENDAR_DATA);
        var validProductIds = productIds.filter(id => storeProductIds.includes(id));
        var productId = validProductIds[0]; // TODO: Implement selection of type of ticket here. Currently takes first one from top.
        var lengthId = $("select.js-product-ticket.select2-hidden-accessible").find("option").toArray().find(elem => elem.dataset.minLength == daysLength 
            && ( minorPermit == elem.text.includes("(alle 18-v)") ) 
            && elem.dataset.productId == productId).value;
        var categoryId = $("div.item-submit-controls").find("input[name*='category']")[0].value;
        var ticketId = getTicketId(startDate.toISOString().substring(0,10), productId);

        var payload = `variation[${productId}][x]=${lengthId}&amount[${productId}]=${peopleCount}&category[${productId}]=${categoryId}`
            + `&add_to_cart[${productId}]=${productId}&ticket=${ticketId}&ticket_options[seq_count]=${daysLength}`;
        return payload;
    }
    
    function getTicketId(date, productId) {
        var ticketElem = this.eraluvat.STORE.CALENDAR_DATA[productId].find(elem => isSameDate(elem, date));
        return ticketElem[date][0].id;
    }

    function isSameDate(listElem, date) {
        var dateStr = Object.keys(listElem)[0];
        return dateStr == date;
    }

    function getDayInfo(doneFunc) {
        var i = this.eraluvat.app.functions.getFajaxURL({
            slots: 100,
            beginDate: new Date(Date.UTC(paramObj.startYear, paramObj.startMonth-2)),
            productIDArr: [$("section.product-list-item.product-form").data("product")]
        });
        function jsonFunc(e) {
            tempThis.eraluvat.STORE.CALENDAR_DATA = e;
            doneFunc();
        }
        
        $.getJSON(i, jsonFunc);
    }

    function modifiedAddToCart(e) {
        var t = $(this);
        var successFunc = (data, textStatus, jqXHR) => {
            this.eraluvat.app.functions.showDialog(data.html.modal);
        }
        t.addClass("disabled").attr("disabled", "disabled"); 
        return $.ajax({ url: "cart/add?ajax=1&include[modal]=add2cart_done", data: e, dataType: "json", type: "POST", success: successFunc})
    }

    function reserve() {
        function doneFunc() {
            modifiedAddToCart(getRequestString(paramObj.people, 
                paramObj.days, 
                new Date(Date.UTC(paramObj.startYear, paramObj.startMonth - 1, paramObj.startDay)), 
                paramObj.minor));
        }
        getDayInfo(doneFunc);
    }

    reserve();
}

// Needed to run methods defined by the page.
function runInPageContext (method, ...args) {
    // The stringified method which will be parsed as a function object.
    const stringifiedMethod = method instanceof Function
    ? method.toString()
    : `() => { ${method} }`;
    
    // The stringified arguments for the method as JS code that will reconstruct the array.
    const stringifiedArgs = JSON.stringify(args);
    
    // The full content of the script tag.
    const scriptContent = `
    // Parse and run the method with its arguments.
    (${stringifiedMethod})(...${stringifiedArgs});
    
    // Remove the script element to cover our tracks.
    document.currentScript.parentElement
    .removeChild(document.currentScript);
    `;
    
    // Create a script tag and inject it into the document.
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = scriptContent;
    document.documentElement.prepend(scriptElement);
};

var scriptHasRan = false;

function onPageLoad() {
    browser.storage.local.get("scriptEnabled").then(o => {
        if (!scriptHasRan && o.scriptEnabled) {
            scriptHasRan = true;
            browser.storage.local.get().then(params => {
                runInPageContext(toBeRunInPageContext, params);
            })
        }
    })
}
// Run script after page has loaded.
window.addEventListener('load', onPageLoad);
// In case the 'load' even isn't emitted, also set a timer
setTimeout(onPageLoad, 1000);