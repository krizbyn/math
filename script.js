
    var random_number = '';
    var random_number2 = '';
    var random_limit = 15;
    for (var i = 2; i <= random_limit; i++) {
        random_number = Math.floor(Math.random() * random_limit);
        random_number2= Math.floor(Math.random() * random_limit + 1);
      
    }

    document.getElementById('num1').textContent = random_number;
    document.getElementById('num2').textContent = random_number2;
    var options_arr = ['option1','option2','option3'];
    var random_options = options_arr[Math.floor(Math.random() * options_arr.length)];
    




    document.getElementById(random_options).textContent = random_number2 + random_number;
    options();
    function options() {
    var options = document.getElementsByClassName('options');
    var option = '';   

    for (var i = 0; i < options.length; i++) {
        option = Math.round(Math.random() * options.length);

      

    }
     
    }



   var answerOptions = document.querySelector('.answer-options');
  
       answerOptions.addEventListener('click',function(e) {
           opt(e);
       },false);
  
       function getTarget(e) {
           if (!e) {
               e = window.event;
           }
           return e.target || e.srcElement;
       }

   function opt(e) {
       var target,elParent;
       var x = document.getElementById("myAudio");
       target = getTarget(e);
       elParent= target.parentNode;

        if (target.innerHTML == random_number2 + random_number) {
            console.log('yes');
            window.location.reload();

        } else {
            console.log('no');
            x.play();
        }

   }


