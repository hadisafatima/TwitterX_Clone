function newTweet(){
    newTweetOptions.style.display = "block" ;
    newTweetOptions.style.transition = "diaplay 1s ease" ;

    plusIcon.style.transform = "rotate(180deg)" ;
    plusIcon.style.transition = "transform 0.5s ease" ;

    newTweetIcon.style.transform = "rotateY(360deg)" ;
    newTweetIcon.style.transition = "transform 1s ease" ;

    camera.style.transform = "rotate(360deg)";
    camera.style.transition = "transform 1s ease" ;

    microphone.style.transform = "rotate(360deg)";
    microphone.style.transition = "transform 1s ease" ;

    picture.style.transform = "rotate(360deg)";
    picture.style.transition = "transform 1s ease";

    newTweetOptions.addEventListener("click" , match); // here method itself is not calledd !!
}

function match(){
    newTweetOptions.style.display = "none" ;
    newTweetOptions.style.transition = "display 1s ease" ;

    plusIcon.style.transform = "rotate(0deg)" ;
    plusIcon.style.transition = "transform 0.5s ease" ;

    newTweetIcon.style.transform = "rotateY(0deg)" ;
    newTweetIcon.style.transition = "transform 1s ease" ;

    camera.style.transform = "rotate(0deg)";
    camera.style.transition = "transform 1s ease" ;
    
    microphone.style.transform = "rotate(0deg)";
    microphone.style.transition = "transform 1s ease" ;
    
    picture.style.transform = "rotate(0deg)";
    picture.style.transition = "transform 1s ease" ;
}