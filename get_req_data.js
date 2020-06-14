function getRequestString(peopleCount, daysLength) {
    var productId = $(".product-list-item.product-form")[0].attributes["data-product"].value;
    var lengthId = $("select.js-product-ticket.select2-hidden-accessible").find("option").toArray().find(elem => elem.dataset.minLength == 5 && !elem.text.includes("(alle 18-v)")).value
    var categoryId = $("div.item-submit-controls").find("input[name*='category']")[0].value;
    var ticketId = getTicketId("2020-09-12", productId);

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

async function getDayInfo() {
    var i = eraluvat.app.functions.getFajaxURL({
        slots: 42,
        beginDate: new Date(2020, 9, 1),
        productIDArr: [$("section.product-list-item.product-form").data("product")]
    });
    return await $.getJSON(i, function(e) {
        eraluvat.STORE.CALENDAR_DATA = e
    })
}