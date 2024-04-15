var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var div=document.querySelector(".Residential-property");
  var display=0;
  function hideandShow(){
    if(display==1){
      div.style.display='block';
      display=0;
    }
    else{
      div.style.display='none';
      display=1;
    }
  }
  var div2=document.querySelector(".commericail-section");
  var display=0;
  function hideandShow2(){
    if(display==1){
      div2.style.display='block';
      display=0;
    }
    else{
      div2.style.display='none';
      display=1;
    }
  }

  var div3=document.querySelector(".industrial-section");
  function hideandShow3(){
    if(display==1){
      div3.style.display='block';
      display=0;
    }
    else{
      div3.style.display='none';
      display=1;
    }
  }

  var div4=document.querySelector(".agricultural-section");
  function hideandShow4(){
    if(display==1){
      div4.style.display='block';
      display=0;
    }
    else{
      div4.style.display='none';
      display=1;
    }
  }