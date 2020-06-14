function toBeRunInPageContext () {
    const tempThis = this;

    function getRequestString(peopleCount, daysLength, startDate, minorPermit) {
        var productId = $(".product-list-item.product-form")[0].attributes["data-product"].value;
        var lengthId = $("select.js-product-ticket.select2-hidden-accessible").find("option").toArray().find(elem => elem.dataset.minLength == daysLength && ( minorPermit == elem.text.includes("(alle 18-v)") )).value
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
            beginDate: new Date(2020, 7),
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
            // console.log(data)
            // console.log(textStatus)
            // console.log(jqXHR)
            this.eraluvat.app.functions.showDialog(data.html.modal);
        }
        t.addClass("disabled").attr("disabled", "disabled"); 
        return $.ajax({ url: "cart/add?ajax=1&include[modal]=add2cart_done", data: e, dataType: "json", type: "POST", success: successFunc})
    }

    function reserve() {
        console.log("in reserve!");
        console.log(this.window);
        console.log(this.eraluvat);
        console.log($("section.product-list-item.product-form").data("product"))
        
        function doneFunc() {
            modifiedAddToCart(getRequestString(1, 5, new Date(Date.UTC(2020, 8, 15)), false));
        }
        getDayInfo(doneFunc);
    }

    reserve();
}


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

function onPageLoad() {
    runInPageContext(toBeRunInPageContext);
}
window.addEventListener('load', onPageLoad);
// setTimeout(onPageLoad, 2000);
// onPageLoad();