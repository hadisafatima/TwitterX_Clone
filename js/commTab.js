function communitiesTabDisplay(){
    homeTabOpened = false;
    searchTabOpened = false ;
    communitiesTabOpened = true ;
    notificationsTabOpened = false ;
    messagesTabOpened = false ;


    homepage.style.display = "none" ;
    homeTab.style.display = "none";
    XLogo.style.display = "none";
    XIconForBlackTheme.style.display = "none" ;
    searchTab.style.display = "none";

    headerBottom.style.borderBottom = "solid 0.01px #3c3c3c3b";

    communitiesTab.style.display = "block" ;
    settingIcon.style.display = "none" ;

    notificationTab.style.display = "none";
    notiOptions.style.display = "none" ;

    messagesTab.style.display = "none" ;
    searchBarForMsgTab.style.display = "none";

    plusIcon.style.display = "block" ;
    connectNewPpl.style.display = "none" ;
    connectNewPpl.style.transform = "rotate(180deg)";
    connectNewPpl.style.transition = "transform 0.5s ease 2s" ;

    homeIcon.style.borderBottom = "none";
    searchIcon.style.borderBottom = "none";
    searchIcon2.style.borderBottom = "none" ;
    commIcon.style.borderBottom = "solid 0.1em rgb(0,172,237)";
    notiIcon.style.borderBottom = "none";
    msgIcon.style.borderBottom = "none";

    newTweetPortionForBiggerScreen.style.display = "none" ;

    let screenWidth = window.innerWidth ;
    sideTrends.style.left = "5em" ;
    sideTrends.style.marginLeft = "5em" ;

    if(screenWidth <= 1440){
        sideTrends.style.marginLeft = "11em" ;
    }else if(screenWidth <= 1536){
        sideTrends.style.marginLeft = "12em" ;
    }

    sideTrendsForBiggerScreen.style.display = "block" ;

}