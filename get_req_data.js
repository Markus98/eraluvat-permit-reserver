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
  
  function modifiedAddToCart(e) {
      var t = $(this);
      var successFunc = (data, textStatus, jqXHR) => {
          // console.log(data)
          // console.log(textStatus)
          // console.log(jqXHR)
          eraluvat.app.functions.showDialog(data.html.modal);
      }
      t.addClass("disabled").attr("disabled", "disabled"); 
      return $.ajax({ url: "cart/add?ajax=1&include[modal]=add2cart_done", data: e, dataType: "json", type: "POST", success: successFunc})
  }
  
  function reserve() {
      getDayInfo(() => {
          modifiedAddToCart(getRequestString(1, 5, new Date(Date.UTC(2020, 8, 15)), false));
      });
  }
  
  reserve();