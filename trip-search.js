/**
 * Plan-your-trip search: filter tour cards on destination pages,
 * or open a country URL with query params from the destinations hub.
 */
(function () {
  function cardMatches(card, month, type) {
    var months = (card.getAttribute("data-months") || "any").toLowerCase();
    var types = (card.getAttribute("data-types") || "any").toLowerCase();

    if (month && month !== "any") {
      if (months !== "any" && months.split(/[,\s]+/).indexOf(month) === -1) {
        return false;
      }
    }

    if (type && type !== "any") {
      if (types !== "any" && types.split(/[,\s]+/).indexOf(type) === -1) {
        return false;
      }
    }

    return true;
  }

  function filterInScope(scope, month, type) {
    var cards = scope.querySelectorAll("[data-search-card]");
    var visible = 0;
    cards.forEach(function (card) {
      var ok = cardMatches(card, month, type);
      card.hidden = !ok;
      if (ok) visible += 1;
    });
    var status = scope.querySelector("[data-search-results]");
    if (status) {
      if (cards.length === 0) {
        status.textContent = "";
      } else if (visible === 0) {
        status.textContent =
          "No tours match those filters — try “Any month” or a different style.";
      } else if (month === "any" && type === "any") {
        status.textContent = "";
      } else {
        status.textContent = visible + " tour" + (visible === 1 ? "" : "s") + " shown.";
      }
    }
  }

  function readQuery() {
    return new URLSearchParams(window.location.search);
  }

  function applyQueryToForm(form) {
    var q = readQuery();
    var month = q.get("m");
    var type = q.get("t");
    var dest = q.get("d");
    if (month && form.elements.month) form.elements.month.value = month;
    if (type && form.elements.type) form.elements.type.value = type;
    if (dest && form.elements.destination) form.elements.destination.value = dest;
  }

  function buildQuery(form) {
    var fd = new FormData(form);
    var q = new URLSearchParams();
    var month = fd.get("month");
    var type = fd.get("type");
    var dest = fd.get("destination");
    if (month && month !== "any") q.set("m", String(month));
    if (type && type !== "any") q.set("t", String(type));
    if (dest && dest !== "any") q.set("d", String(dest));
    return q;
  }

  function initForm(form) {
    var mode = form.getAttribute("data-search-mode") || "filter";
    var scope =
      form.closest("[data-search-scope]") || document.getElementById("main") || document.body;

    applyQueryToForm(form);
    var q = readQuery();
    filterInScope(scope, q.get("m") || "any", q.get("t") || "any");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var dest = fd.get("destination");
      var month = fd.get("month") || "any";
      var type = fd.get("type") || "any";

      if (mode === "navigate") {
        if (dest && dest !== "any") {
          var qs = buildQuery(form).toString();
          window.location.href =
            "/destination/" + encodeURIComponent(dest) + (qs ? "?" + qs : "");
          return;
        }
        filterInScope(scope, month, type);
        return;
      }

      var qs = buildQuery(form).toString();
      var base = window.location.pathname;
      if (qs) {
        window.history.replaceState({}, "", base + "?" + qs);
      } else {
        window.history.replaceState({}, "", base);
      }
      filterInScope(scope, month, type);
    });

    form.addEventListener("change", function () {
      var fd = new FormData(form);
      if (mode === "navigate") {
        var dest = fd.get("destination");
        if (!dest || dest === "any") {
          filterInScope(scope, fd.get("month") || "any", fd.get("type") || "any");
        }
        return;
      }
      filterInScope(scope, fd.get("month") || "any", fd.get("type") || "any");
    });
  }

  document.querySelectorAll("[data-trip-search-form]").forEach(initForm);
})();
