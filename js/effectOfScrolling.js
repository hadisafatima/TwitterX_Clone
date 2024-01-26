let lastScrollTop = 0 ;
let screenWidth = window.innerWidth ;

window.addEventListener("scroll", function(){
    let currentScroll =  this.document.documentElement.scrollTop ;

    
    if (currentScroll < lastScrollTop) {
        header.style.position = "relative" ;
        header.style.top = "-100%" ;
        header.style.transition = "top 4s ease";
        
        pp.style.display = "inline-block" ;
        pp.style.transition = "display 4s ease" ;


        if(homeTabOpened == true && whiteThemeVar == true){
            xIcon.style.display = "inline-block" ;
            XIconForBlackTheme.style.display = "none" ;
            xIcon.style.transition = "display 4s ease";
            XIconForBlackTheme.style.transition = "display 4s ease" ;

        }else if(homeTabOpened == true && blackThemeVar == true){
            xIcon.style.display = "none" ;
            xIcon.style.transition = "display 4s ease" ;
            XIconForBlackTheme.style.display = "inline-block" ;
            XIconForBlackTheme.style.transition = "display 4s ease" ;

        }else{
            xIcon.style.display = "none";
            XIconForBlackTheme.style.display = "none" ;
        }      
        
        if(screenWidth < 768){
            settingIcon.style.display = "inline-block" ;
            settingIcon.style.transition = "display 4s ease" ;
            homepage.style.position = "fixed" ;
            homepage.style.top = "8vh" ;
            homepage.style.transition = "top 0.3s ease" ;
        }

        notiOptions.style.top = "100%" ;
        
        footer.style.position = "fixed";
        footer.style.bottom = "0vh" ;
        footer.style.transition = "bottom 0.7s ease" ;

    }else{
        header.style.position = "fixed";
        header.style.top = "100%";
        header.style.transition = "top 1s ease";
        header.style.transitionDelay = "0.5s";
        
        pp.style.display = "none" ;
        pp.style.transition = "display 3s ease" ;

        if(homeTabOpened == true){
            xIcon.style.display = "none" ;
            xIcon.style.transition = "display 4s ease" ;
            XIconForBlackTheme.style.display = "none" ;
            XIconForBlackTheme.style.transition = "display 4s ease" ;
        }

        settingIcon.style.display = "none" ;
        settingIcon.style.transition = "display 3s ease" ;
        
        if(screenWidth < 768){
            homepage.style.position = "relative" ;
            homepage.style.top = "-15vh" ;
            homepage.style.transition = "top 1s ease" ;
        }

        notiOptions.style.top = "-100%" ;
        
        footer.style.position = "fixed" ;
        footer.style.bottom = "-20vh" ;
        footer.style.transition = "bottom 0.5s ease" ;
        
    }

    lastScrollTop = currentScroll ;
});