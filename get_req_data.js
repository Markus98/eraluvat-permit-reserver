function getRequestString(peopleCount, daysLength) {
    var productId = $(".product-list-item.product-form")[0].attributes["data-product"].value;
    var lengthId = $("select.js-product-ticket.select2-hidden-accessible").find("option").toArray().find(elem => elem.dataset.minLength == daysLength && !elem.text.includes("(alle 18-v)")).value
    var categoryId = $("div.item-submit-controls").find("input[name*='category']")[0].value;
    var ticketId = getTicketId("2020-09-14", productId);

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
    var i = eraluvat.app.functions.getFajaxURL({
        slots: 100,
        beginDate: new Date(2020, 7),
        productIDArr: [$("section.product-list-item.product-form").data("product")]
    });
    $.getJSON(i, function(e) {
        eraluvat.STORE.CALENDAR_DATA = e;
      	doneFunc();
    });
}

function modifiedAddToCart(e, t) {
    t.addClass("disabled").attr("disabled", "disabled"); 
    return $.ajax({ url: "cart/add?ajax=1&include[modal]=add2cart_done", data: e, dataType: "json", type: "POST"})
}

function reserve() {
    getDayInfo(() => {
        console.log(getRequestString(1, 5))

        modifiedAddToCart(getRequestString(1, 5), $(this)).done(
            function(e) {
            e instanceof Array && e.length > 0 && eraluvat.app.functions.showDialog(e.join("<br />"));
            }
        );
    });
}

reserve();