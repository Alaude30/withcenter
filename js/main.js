var index = 0;
showSlide(index);

function controlSlide(n) {
    showSlide(index += n);
}

function currentSlide(n) {
    showSlide(index = n);
}

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("slide-item");
    var items = document.getElementsByClassName("dot");
    index++;
    if (index > slides.length) {
        index = 1;
    }
    if (index < 1) {
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" slide", "");
    }
    for (i = 0; i < items.length; i++) {
        items[i].className = items[i].className.replace(" active", "");
    }
    slides[index-1].className += " slide";
    items[index-1].className += " active";
    setTimeout(showSlide, 5000);
}