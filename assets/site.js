// Builds email links in the browser, so the address isn't sitting in the page source for spam bots.
// <a data-email>Email</a> becomes a mailto link; add data-email="show" to display the address itself.
(function () {
  document.querySelectorAll("[data-email]").forEach(function (link) {
    var user = link.getAttribute("data-user") || "cornel.m.nesseler";
    var domain = link.getAttribute("data-domain") || "uis.no";
    var address = user + "@" + domain;
    link.href = "mailto:" + address;
    if (link.getAttribute("data-email") === "show") link.textContent = address;
  });
})();
