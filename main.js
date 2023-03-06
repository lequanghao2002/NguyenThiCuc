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

Audio.prototype.play = (function(play) {
    return function () {
      var audio = this,
          args = arguments,
          promise = play.apply(audio, args);
      if (promise !== undefined) {
        promise.catch(_ => {
          var el = document.createElement("button");
          el.innerHTML = "Play";
          el.addEventListener("click", function(){play.apply(audio, args);});
          this.parentNode.insertBefore(el, this.nextSibling)
        });
      }
    };
    })(Audio.prototype.play);
    
    document.getElementById('MyAudioElement').play()


