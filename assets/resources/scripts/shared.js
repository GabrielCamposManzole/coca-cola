$(function () {
    let isLoggedIn = localStorage.getItem(LOGGER_IN_KEY);

    let menu = isLoggedIn ? "n/avbar.html" : "/navbar.html";
    $("#navbar").load(navbar);
    $("footer").load("/footer.html");
});