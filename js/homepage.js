function homeTabDisplay(){

    homeTabOpened = true;
    searchTabOpened = false ;
    communitiesTabOpened = false ;
    notificationsTabOpened = false ;
    messagesTabOpened = false;

    homepage.style.display = "flex" ;
    homeTab.style.display = "block" ;

    if(whiteThemeVar == true){
        XLogo.style.display = "inline-block" ;
        XIconForBlackTheme.style.display = "none" ;
    }else{
        xIcon.style.display = "none";
        XIconForBlackTheme.style.display = "inline-block" ;
    }

    searchTab.style.display = "none" ;
    searchBar.style.display = "none";

    communitiesTab.style.display = "none" ;
    settingIcon.style.display = "inline-block" ;

    notificationTab.style.display = "none";
    notiOptions.style.display = "none" ;

    messagesTab.style.display = "none" ;
    searchBarForMsgTab.style.display = "none";

    plusIcon.style.display = "block" ;
    connectNewPpl.style.display = "none" ;
    connectNewPpl.style.transform = "rotate(180deg)";
    connectNewPpl.style.transition = "transform 0.5s ease 2s" ;

    homeIcon.style.borderBottom = "solid 0.1em rgb(0,172,237)";
    searchIcon.style.borderBottom = "none";
    searchIcon2.style.borderBottom = "none" ;
    commIcon.style.borderBottom = "none";
    notiIcon.style.borderBottom = "none";
    msgIcon.style.borderBottom = "none";

    let screenWidth = window.innerWidth ; 
    
    sideTrends.style.left = "0em" ;
    sideTrends.style.marginLeft = "0em" ;
    if(screenWidth > 1024 && screenWidth <= 1440){
        sideTrends.style.marginLeft = "60em" ;
    }else if (screenWidth <= 1536){
        sideTrends.style.marginLeft = "63em" ; 
    }

    if(screenWidth > 768){
        newTweetPortionForBiggerScreen.style.display = "flex" ;
    }

    sideTrendsForBiggerScreen.style.display = "block" ;
    
}