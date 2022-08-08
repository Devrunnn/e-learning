var images = ["images/back2.jpeg","images/back3.jpg","images/back4.png"],  
    cnt = 0, 
    tId = setInterval(function() { 
      if (cnt>=images.length) cnt=0; 
      document.querySelector('.header').style.backgroundImage = 'url('+images[cnt++]+')'; 
    },5000); 
