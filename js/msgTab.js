function messageTabDisplay(){
    homeTabOpened = false;
    searchTabOpened = false ;
    communitiesTabOpened = false ;
    notificationsTabOpened = false ;
    messagesTabOpened = true ;


    homepage.style.display = "none" ;
    homeTab.style.display = "none";
    XLogo.style.display = "none";
    XIconForBlackTheme.style.display = "none" ;
    searchTab.style.display = "none";

    headerBottom.style.borderBottom = "solid 0.01px #3c3c3c3b";

    communitiesTab.style.display = "none" ;
    settingIcon.style.display = "inline-block" ;

    notificationTab.style.display = "none";
    notiOptions.style.display = "none" ;

    messagesTab.style.display = "block" ;
    searchBarForMsgTab.style.display = "block";
    mesgReqs.style.display = "flex" ;
    messages.style.display = "block" ;

    plusIcon.style.display = "none" ;
    connectNewPpl.style.display = "block" ;
    connectNewPpl.style.transform = "rotate(0deg)";
    connectNewPpl.style.transition = "transform 0.5s ease 2s" ;

    homeIcon.style.borderBottom = "none";
    searchIcon.style.borderBottom = "none";
    searchIcon2.style.borderBottom = "none" ;
    commIcon.style.borderBottom = "none";
    notiIcon.style.borderBottom = "none";
    msgIcon.style.borderBottom = "solid 0.1em rgb(0,172,237)";

    newTweetPortionForBiggerScreen.style.display = "none" ;

    let screenWidth = window.innerWidth ;
    sideTrends.style.left = "5em" ;
    if(screenWidth <= 1024){
        sideTrends.style.marginLeft = "5em" ;
    }else if(screenWidth <= 1440){
        sideTrends.style.marginLeft = "11em" ;
    }else if(screenWidth <= 1536){
        sideTrends.style.marginLeft = "12em" ;
    }
    
    sideTrendsForBiggerScreen.style.display = "block" ;

}