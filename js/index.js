function navBar(){
    navigationBar.style.transform = "translateX(0px)";
    navigationBar.style.transition = "transform 0.5s ease" ;
}

function visibleSettingOptions(){
    upArrow.style.display = "inline" ;
    downArrow.style.display = " none" ;

    setOptions.style.display = "block" ;
    setOptions.style.transform = "translateY(0px)";
    setOptions.style.zIndex = "1" ;

    scrollControl.style.overflow = "scroll";
}

function hideSettingOptions(){
    upArrow.style.display = "none" ;
    downArrow.style.display = "inline" ;

    setOptions.style.display = "none" ;
    setOptions.style.transform = "translateY(-80px)";
    setOptions.style.zIndex = "-1" ;

    scrollControl.style.overflow = "hidden";
}


function hideNavBar(){
    if(screenWidth <= 375){
        navigationBar.style.transform = "translateX(-380px)";
    }else if(screenWidth > 375 && screenWidth <= 426){
        navigationBar.style.transform = "translateX(-430px)" ;
    }
    navigationBar.style.transition = "transform 0.5s ease" ;
}

document.addEventListener("DOMContentLoaded" , function(){
    clickablePart.addEventListener("click" , hideNavBar);
});