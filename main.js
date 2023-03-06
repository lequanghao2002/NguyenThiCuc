var imgs = [
    './assets/images/image1.jpg',
    './assets/images/image2.jpg',
    './assets/images/image3.jpg',
    './assets/images/image4.jpg',
    './assets/images/image5.jpg',
    './assets/images/image6.jpg',
    './assets/images/image7.jpg',
    './assets/images/image8.jpg',
    './assets/images/image9.jpg',
    './assets/images/image10.jpg',
    './assets/images/image11.jpg',
    './assets/images/image12.jpg',
]

var imgElement = document.querySelector('.img1');
var number = 0;

setInterval(function next() {
    number++;
    if (number >= imgs.length) {
        number = 0;
    }

    imgElement.setAttribute('src',imgs[number]);
}, 2500);

function giftFunction() {
    confirm("Bấm dô tấm ảnh á")
}



