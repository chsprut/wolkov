var jumpDefaults = {
    duration: 75,
    offset: -25,
    callback: () => toggleScrollState(false)
}
var scrollNow = false;

var elements = document.querySelectorAll(".col-numero");
var paragraphs = [];
Array.prototype.forEach.call(elements, function(e) {
    paragraphs.push(e);
});

window.onscroll = scrollSpy;

document.addEventListener("keydown", function(e) {
    if (scrollNow) return;
    if (e.code == "KeyJ") {
        if (paragraphs[currentParagraphNumber + 1]) {
            scrollToElement(paragraphs[currentParagraphNumber + 1]);
        }
    }
    if (e.code == "KeyU") {
        if (paragraphs[currentParagraphNumber - 1]) {
            scrollToElement(paragraphs[currentParagraphNumber - 1]);
        }
    }
}, false);

function scrollSpy() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    currentParagraphNumber = null;
    for (i in paragraphs) {
        if ( paragraphs[i].offsetTop > scrollPosition + 20 ) {
            currentParagraphNumber = i*1;
            break;
        }
    }
    if (!currentParagraphNumber) {
        currentParagraphNumber = 0 * 1;
    }
}

function toggleScrollState(state) {
    window.scrollNow = state;
}

function scrollToElement(element) {
    toggleScrollState(true);
    Jump(element, jumpDefaults);
}

scrollSpy();