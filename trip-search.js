/**
 * Plan-your-trip search: filter tour cards on destination pages,
 * or open a country URL with query params from the destinations hub.
 */
(function () {
  function cardMatches(card, month, type, region) {
    var months = (card.getAttribute("data-months") || "any").toLowerCase();
    var types = (card.getAttribute("data-types") || "any").toLowerCase();
    var cardRegion = (card.getAttribute("data-region") || "").toLowerCase();

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

    if (region && region !== "any") {
      if (!cardRegion || cardRegion !== region) {
        return false;
      }
    }

    return true;
  }

  function filterInScope(scope, month, type, region) {
    var reg = region || "any";
    var cards = scope.querySelectorAll("[data-search-card]");
    var visible = 0;
    cards.forEach(function (card) {
      var ok = cardMatches(card, month, type, reg);
      card.hidden = !ok;
      if (ok) visible += 1;
    });
    var status = scope.querySelector("[data-search-results]");
    if (status) {
      if (cards.length === 0) {
        status.textContent = "";
      } else if (visible === 0) {
        status.textContent =
          "No tours match those filters — try “Any month”, “Any style”, or “Any focus”.";
      } else if (month === "any" && type === "any" && reg === "any") {
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
    var region = q.get("f");
    if (month && form.elements.month) form.elements.month.value = month;
    if (type && form.elements.type) form.elements.type.value = type;
    if (dest && form.elements.destination) form.elements.destination.value = dest;
    if (region && form.elements.region) form.elements.region.value = region;
  }

  function buildQuery(form) {
    var fd = new FormData(form);
    var q = new URLSearchParams();
    var month = fd.get("month");
    var type = fd.get("type");
    var dest = fd.get("destination");
    var region = fd.get("region");
    if (month && month !== "any") q.set("m", String(month));
    if (type && type !== "any") q.set("t", String(type));
    if (dest && dest !== "any") q.set("d", String(dest));
    if (region && region !== "any") q.set("f", String(region));
    return q;
  }

  function getRegionFromForm(form) {
    if (form.elements.region) {
      return form.elements.region.value || "any";
    }
    return "any";
  }

  function initForm(form) {
    var mode = form.getAttribute("data-search-mode") || "filter";
    var scope =
      form.closest("[data-search-scope]") || document.getElementById("main") || document.body;

    applyQueryToForm(form);
    var q = readQuery();
    filterInScope(scope, q.get("m") || "any", q.get("t") || "any", q.get("f") || "any");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var dest = fd.get("destination");
      var month = fd.get("month") || "any";
      var type = fd.get("type") || "any";
      var region = getRegionFromForm(form);

      if (mode === "navigate") {
        if (dest && dest !== "any") {
          var qs = buildQuery(form).toString();
          window.location.href =
            "/destination/" + encodeURIComponent(dest) + (qs ? "?" + qs : "");
          return;
        }
        filterInScope(scope, month, type, region);
        return;
      }

      var qs = buildQuery(form).toString();
      var base = window.location.pathname;
      if (qs) {
        window.history.replaceState({}, "", base + "?" + qs);
      } else {
        window.history.replaceState({}, "", base);
      }
      filterInScope(scope, month, type, region);
    });

    form.addEventListener("change", function () {
      var fd = new FormData(form);
      if (mode === "navigate") {
        var destNav = fd.get("destination");
        if (!destNav || destNav === "any") {
          filterInScope(
            scope,
            fd.get("month") || "any",
            fd.get("type") || "any",
            getRegionFromForm(form)
          );
        }
        return;
      }
      filterInScope(
        scope,
        fd.get("month") || "any",
        fd.get("type") || "any",
        getRegionFromForm(form)
      );
    });
  }

  document.querySelectorAll("[data-trip-search-form]").forEach(initForm);
})();
