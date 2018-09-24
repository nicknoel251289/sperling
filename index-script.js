$("document").ready(function(){
  $('.quotes').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      slidesToShow: 1,
      arrows: false
    });
})

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {


      var hamburger = document.getElementById('hamburger');
      var hamburgLine = document.getElementById('line');
      var navTop = document.getElementById('top-nav');
      var main = document.getElementById('main');
      var sectOne = document.getElementById('section-1');

      function openTopNav(){
        if(window.innerWidth > 736){
          navTop.style.width = "300px";
          main.style.marginRight = "300px";
          main.style.transitionDuration = ".5s";
        }else if(window.innerWidth < 736){
          navTop.style.width = "100%";
          main.style.display = "block";
          main.style.transitionDuration = ".5s";
        }
      }
      function closeTopNav(){
        navTop.style.width = "0";
        main.style.marginRight = "0";
      }

      hamburger.addEventListener("click", function(){
        hamburger.classList.toggle('active');
        if(hamburger.classList.contains('active')){
          openTopNav();
        }else{
          closeTopNav();
        }
      });

      window.addEventListener('resize', function(){
        if(window.innerWidth >= 1){
          sectOne.style.width = '100%';
        }

        if(window.innerWidth >= 1115){
          navTop.style.width = "auto";
          if(hamburger.classList.contains('active')){   //if hamburg menu has been clicked and shows an X
            hamburger.classList.toggle('active');       //when resizing less than 950 it will still be toggled open and show
            main.style.marginRight = "0";               //want to reset the tag/element of main that was push 300px
          }
        }else{//else if window.innerWidth < 950
          if(!hamburger.classList.contains('active')){
            navTop.style.width = "0"; //the nav is set to auto (above) on window resize > 950
                                      //this resets its width to 0 and hides it for when < 950
                                      //otherwise you see the nav because its still set to atuo from above
          }else if(hamburger.classList.contains('active') && window.innerWidth < 736){
            openTopNav();
          }else if(hamburger.classList.contains('active') && window.innerWidth > 736 && window.innerWidth < 950){
            navTop.style.width = "300px";
            main.style.marginRight = "300px";
            main.style.transitionDuration = ".5s";
          }
        }
      });


      /*window.addEventListener('scroll', function(){
        var reveal = document.getElementsByClassName('reveal');
        var topPosition = window.pageYOffset;
        var bottomPosition = window.innerHeight + topPosition;

        for(var i = 0; i < reveal.length; i++){
            var a = reveal[i];
            if(a.offsetTop + 75.59 < bottomPosition){
              a.style.opacity = "1";
            }
          }
        });*/

        /*var reveal = document.getElementsByClassName('reveal'); THIS RETURNS A NODE LIST
        console.log(reveal);
        console.log(reveal.splice(0, 1)); THIS DOES NOT WORK ON NODE LISTS */


        var reveal = [].slice.call(document.querySelectorAll(".reveal"));

        var scrollReveal = function(){

          var topPosition = window.pageYOffset;
          var bottomPosition = window.innerHeight + topPosition;

          // Checks to see if elements with the class reveal are in view
          for(var i = 0; i < reveal.length; i++){
            if(reveal[i].offsetTop + 75.59 < bottomPosition){
              reveal[i].style.opacity = "1";
              reveal[i].style.bottom = "0";
              reveal.splice(i, 1);
            }
          }

          // Keeps the function running as long as the length of reveal is greater than 0
          if(reveal.length != 0){
            requestAnimationFrame(scrollReveal);
          }

        }

        requestAnimationFrame(scrollReveal);

        //CAROUSEL
        var click = document.getElementById('click');
        var slide = document.getElementById('slide');
        var reviewArray = ['MAXX', 'NICK', 'KATE', 'CUPCAKE', 'CHEWY', "DONE"];
        var f = ["red", 'orange', 'yellow', 'green', 'teal', "magenta"];
        var a = 0;
        var i = 0;


        var changeReviewSlide = function() {
          slide.innerHTML = reviewArray[a];
          slide.style.background = f[i];
          i++;
          reviewArray.push(reviewArray[a]);
          console.log(a);
          reviewArray.splice(a, 1);
          if(i >= 6){
            i = 0;
          }
        }

        click.addEventListener('click', function(){
          setInterval(changeReviewSlide, 1000);
        })


    }
}
