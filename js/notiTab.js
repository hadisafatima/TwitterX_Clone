let screenWidthForNotiTab = window.innerWidth ;

function notificationsTabDisplay(){
    homeTabOpened = false;
    searchTabOpened = false ;
    communitiesTabOpened = false ;
    notificationsTabOpened = true ;
    messagesTabOpened = false ;


    homepage.style.display = "none" ;
    homeTab.style.display = "none";
    XLogo.style.display = "none";
    XIconForBlackTheme.style.display = "none" ;
    searchTab.style.display = "none";

    headerBottom.style.borderBottom = "none !important";

    newTweetOptions.style.marginTop = "-80em" ;

    communitiesTab.style.display = "none" ;
    settingIcon.style.display = "inline-block" ;

    notificationTab.style.display = "block";
    notiOptions.style.display = "flex" ;

    messagesTab.style.display = "none" ;
    searchBarForMsgTab.style.display = "none";

    plusIcon.style.display = "block" ;
    connectNewPpl.style.display = "none" ;
    connectNewPpl.style.transform = "rotate(180deg)";
    connectNewPpl.style.transition = "transform 0.5s ease 2s" ;

    homeIcon.style.borderBottom = "none";
    searchIcon.style.borderBottom = "none";
    searchIcon2.style.borderBottom = "none" ;
    commIcon.style.borderBottom = "none";
    notiIcon.style.borderBottom = "solid 0.1em rgb(0,172,237)";
    msgIcon.style.borderBottom = "none";

    newTweetPortionForBiggerScreen.style.display = "none" ;

    let screenWidth = window.innerWidth ;
    sideTrends.style.marginLeft = "5em" ;
    if(screenWidth <= 1024){
    }

    sideTrendsForBiggerScreen.style.display = "block" ;
    
}

// notifications types

function allNotifications(){
    allNotiOpened = true ;
    verifiedNotiOpened = false;
    mentionNotiOpened = false ;
    
    if(whiteThemeVar == true){
        allNotis.style.fontWeight = "bolder" ;
        allNotis.style.color = "black" ;
        verifiedNotis.style.fontWeight = "100";
        verifiedNotis.style.color = "gray";
        mentionNotis.style.fontWeight = "100";
        mentionNotis.style.color = "gray";
    }else {
        allNotis.style.fontWeight = "bolder" ;
        allNotis.style.color = "white" ;
        verifiedNotis.style.fontWeight = "100";
        verifiedNotis.style.color = "#ffffff94";
        mentionNotis.style.fontWeight = "100";
        mentionNotis.style.color = "#ffffff94";
    }

    slider.style.transform = "translateX(0px)";
    slider.style.transition = "transform 0.5s ease";

    allTab.style.display = "block";
    verifiedTab.style.display = "none" ;
    mentionTab.style.display = "none" ;
}

function verifiedNotifications(){
    allNotiOpened = false ;
    verifiedNotiOpened = true;
    mentionNotiOpened = false ;

    if(whiteThemeVar == true){
        allNotis.style.fontWeight = "100";
        allNotis.style.color = "gray" ;
        verifiedNotis.style.fontWeight = "bolder" ;
        verifiedNotis.style.color = "black" ;
        mentionNotis.style.fontWeight = "100";
        mentionNotis.style.color = "gray" ;
    }else{
        allNotis.style.fontWeight = "100";
        allNotis.style.color = "#ffffff94" ;
        verifiedNotis.style.fontWeight = "bolder" ;
        verifiedNotis.style.color = "white" ;
        mentionNotis.style.fontWeight = "100";
        mentionNotis.style.color = "#ffffff94" ;
    }


    console.log("screenWidth : " , screenWidthForNotiTab) ;
    if(screenWidthForNotiTab <= 320){
        slider.style.transform = "translateX(104px)";
    } else if(screenWidthForNotiTab <= 355){
        slider.style.transform = "translateX(108px)";
    } else if(screenWidthForNotiTab <= 362){
        slider.style.transform = "translateX(119px)";
    } else if(screenWidthForNotiTab <= 374){
        slider.style.transform = "translateX(125px)";
    } else if(screenWidthForNotiTab < 376){ 
        slider.style.transform = "translateX(127px)";
    } else if(screenWidthForNotiTab <= 426){
        slider.style.transform = "translateX(142px)";
    }else if(screenWidthForNotiTab < 903){
        slider.style.transform = "translateX(210px)" ;
    } else if(screenWidthForNotiTab <= 1158){
        slider.style.transform = "translateX(210px)" ;
    }else if(screenWidthForNotiTab <= 1440){
        slider.style.transform = "translateX(220px)" ;
    }else if(screenWidthForNotiTab <= 1536){
        slider.style.transform = "translateX(240px)" ;
    }

    slider.style.transition = "transform 0.5s ease";
    
    allTab.style.display = "none" ;
    verifiedTab.style.display = "block" ;
    mentionTab.style.display = "none" ;

}

function mentionsNotifications(){
    allNotiOpened = false ;
    verifiedNotiOpened = false;
    mentionNotiOpened = true ;

    if(whiteThemeVar == true){
        allNotis.style.fontWeight = "100";
        allNotis.style.color = "gray" ;
        verifiedNotis.style.fontWeight = "100";
        verifiedNotis.style.color = "gray" ;
        mentionNotis.style.fontWeight = "bolder" ;
        mentionNotis.style.color = "black" ;
    }else{
        allNotis.style.fontWeight = "100";
        allNotis.style.color = "#ffffff94" ;
        verifiedNotis.style.fontWeight = "100";
        verifiedNotis.style.color = "#ffffff94" ;
        mentionNotis.style.fontWeight = "bolder" ;
        mentionNotis.style.color = "white" ;
    }

    if(screenWidthForNotiTab <= 320){
        slider.style.transform = "translateX(211px)";
    } else if(screenWidthForNotiTab <= 362){
        slider.style.transform = "translateX(218px)";
    } else if(screenWidthForNotiTab <= 374){
        slider.style.transform = "translateX(248px)";
    } else if(screenWidthForNotiTab <= 375){
        slider.style.transform = "translateX(250px)";
    } else if(screenWidthForNotiTab <= 426){
        slider.style.transform = "translateX(285px)";
    } else if(screenWidthForNotiTab < 903){
        slider.style.transform = "translateX(420px)" ;
    }else if(screenWidthForNotiTab <= 1158){
        slider.style.transform = "translateX(425px)" ;
    }else if(screenWidthForNotiTab <= 1440){
        slider.style.transform = "translateX(430px)" ;
    }else if(screenWidthForNotiTab <= 1536){
        slider.style.transform = "translateX(465px)" ;
    }
    slider.style.transition = "transform 0.5s ease";
    
    allTab.style.display = "none" ;
    verifiedTab.style.display = "none" ;
    mentionTab.style.display = "block" ;
}