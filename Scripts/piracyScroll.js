// Source for scroll calculation script: http://www.javascriptkit.com/javatutors/detect-user-scroll-amount.shtml
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
var docheight = getDocHeight();


function amountscrolled() {
    var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop / trackLength * 100)
    document.getElementById('ship').style.marginRight = ((pctScrolled * 0.8) - 15) + '%';
    if (pctScrolled > 2) {
        document.getElementById('navContainer').classList.add("scrolledNav");
        document.getElementById('goup').classList.add("scrolledupimg");
    } else if (pctScrolled <= 2) {
        document.getElementById('navContainer').classList.remove("scrolledNav");
        document.getElementById('goup').classList.remove("scrolledupimg");
    }
}

window.addEventListener("scroll", function() {
    amountscrolled()
}, false)