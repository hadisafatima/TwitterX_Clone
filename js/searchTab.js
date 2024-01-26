function searchTabDisplay(){

    homeTabOpened = false;
    searchTabOpened = true ;
    communitiesTabOpened = false ;
    notificationsTabOpened = false ;
    messagesTabOpened = false ;

    homepage.style.display = "none" ;
    homeTab.style.display = "none";
    XLogo.style.display = "none";
    XIconForBlackTheme.style.display = "none" ;

    headerBottom.style.borderBottom = "solid 0.01px #3c3c3c3b";

    searchTab.style.display = "block" ;
    searchBar.style.display = "block" ;

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

    homeIcon.style.borderBottom = "none";
    searchIcon.style.borderBottom = "solid 0.1em rgb(0,172,237) !important";
    searchIcon2.style.borderBottom = "solid 0.1em rgb(0,172,237)" ;
    commIcon.style.borderBottom = "none";
    notiIcon.style.borderBottom = "none";
    msgIcon.style.borderBottom = "none";

    newTweetPortionForBiggerScreen.style.display = "none" ;

    sideTrends.style.marginLeft = "0em" ;

    sideTrendsForBiggerScreen.style.display = "none" ;

}