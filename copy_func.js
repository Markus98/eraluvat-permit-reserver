function() {
    var e = $(this),
      t = e.closest(".product-list-item"),
      a = (t.find("input[required], select[required]"), ""),
      i = "";
    (a = eraluvat.app.functions.beforeAddtoCart(t)) ? 
      eraluvat.app.functions.showDialog(a)
      : 
      (
        i = t.find("input, select").serialize(), 
        t.find(".js-slot.ui-selected, .js-hour-slot.ui-selected").length 
        && (i += "&ticket=" + t.find(".js-slot.ui-selected, .js-hour-slot.ui-selected").first().data("id"), 
        i += "&ticket_options[seq_count]=" + t.find(".js-product-ticket option:selected").data("min-length")), 
        eraluvat.add2cart(i, e).done(
          function(e) {
            e instanceof Array && e.length > 0 && eraluvat.app.functions.showDialog(e.join("<br />"))
          }))
  }


function() {
    return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
}


addToCart: function(e, t) { 
    var a = $.Deferred(), i = []; 
    t.addClass("disabled").attr("disabled", "disabled"); 
    return $.ajax({ url: "cart/add?ajax=1&include[modal]=add2cart_done", data: e, dataType: "json", type: "POST", beforeSend: function () { eraluvat.app.functions.showLoadingAnimation()}
}

beforeAddtoCart: function (e) { 
  var t = "", 
  a = e.find(".js-product-ticket option:selected").data("start-weekday"), 
  i = e.find(".js-slot.ui-selected, .js-hour-slot.ui-selected").first(), 
  n = e.find(".js-slot.slot-disabled.ui-selected, .js-hour-slot.slot-disabled.ui-selected"), 
  r = []; 
  return e.find("[required]").each(
    function (e, a) {
       var i = $(a); return "" === i.val() && (i.addClass("error-field"), t = i.closest(".controller").prev().find("label").text().replace(/:/g, "").trim() + " " + Store.translations.fieldIsRequired), "" !== i.val() 
    }), 
  "" !== t || !a && 0 !== a || this.dateFromString(i.data("time-from")).getDay() === a 
    || (t = Store.translations.booking_must_start_on_weekday + ' "' + Store.translations.days[a].charAt(0).toUpperCase() + Store.translations.days[a].substring(1) + '"'), 
  "" === t && n.length > 0 && (
    n.each(
      function (t, a) { 
        var i = $(a).data("time-from").split("T"); e.data("is-hourproduct") ? r.push(eraluvat.app.functions.changeDateFormat($(a).data("time-from"), !1, !0, !1, !0) + " " + i[1]) : r.push(eraluvat.app.functions.changeDateFormat($(a).data("time-from"), !1, !0, !1, !0)) 
      }), 
    t = Store.translations.licence_reservation_fails_not_enought_certain_days + "<br>" + r.join("<br>")
  ), 
  t 
}