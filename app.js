
//! Karanlık Mod //
const karanlikmod = {
    bottom: '60px', // aşşağıdan 60 px yuarda
    right: 'unset', // lefte göre hizalıyor
    left: '45px', // leftten 30 px içeride
    time: '0.9s', // karanlık modun açılıp kapanma süresi
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓',
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(karanlikmod);
  darkmode.showWidget();





    //! progess bar //

    // const circles = document.querySelectorAll('.circle');

    // circles.forEach(elem =>{
    //   var dots = elem.getAttribute('data-dots');
    //   var marked = elem.getAttribute('data-percent');
    //   var percent = Math.floor( dots * marked/100);
    //   var rotate = 360/dots;
    //   var points = "";
    //   for (let i = 0; i < dots; i++) {
    //     points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    //   }
    //   elem.innerHTML = points;
    //   const pointsMarked = elem.querySelectorAll('.points');
    //   for (let i = 0; i < percent; i++) {
    //     pointsMarked[i].classList.add('marked');
    //   }
    // })




const circles = document.querySelectorAll('.circle');

const options = {
  threshold: 0.5 // Halkaların yarısı görüldüğünde işlem yapılacak
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startRotation(entry.target);
      observer.unobserve(entry.target); // Halkayı gözlemlemeyi durdur
    }
  });
};

const observer = new IntersectionObserver(callback, options);

circles.forEach(circle => {
  observer.observe(circle); // Her bir halkayı gözlemle
});

function startRotation(circle) {
  var dots = circle.getAttribute('data-dots');
  var marked = circle.getAttribute('data-percent');
  var percent = Math.floor(dots * marked / 100);
  var rotate = 360 / dots;
  var points = "";
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
  }
  circle.innerHTML = points;
  const pointsMarked = circle.querySelectorAll('.points');
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked');
  }
}

window.addEventListener('scroll', function() {
  
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var scrollToTopButton = document.getElementById('scroll-to-top');
  
  if (scrollPosition > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
