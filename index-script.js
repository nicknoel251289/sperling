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


      window.addEventListener('scroll', function(){
        var reveal = document.getElementsByClassName('reveal');
        var topPosition = window.pageYOffset;
        var bottomPosition = window.innerHeight + topPosition;

        for(var i = 0; i < reveal.length; i++){
            var a = reveal[i];
            if(a.offsetTop + 75.59 < bottomPosition){
              a.style.opacity = "1";
            }
          }
        });



    }
}
