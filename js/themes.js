function blackTheme(){
    blackThemeVar = true ;
    whiteThemeVar = false ;

    sun.style.display = "none" ;
    sunB.style.display = "none" ;
    moon.style.opacity = "1";
    moonB.style.opacity = "1" ;
    
    //                  B A C K - G R O U N D S
    naviBar.style.backgroundColor = "rgb(24 49 83)" ; // dark theme black color
    themeOPtionDiv.style.backgroundColor = "rgb(24 49 83)" ;
    body.style.backgroundColor = "rgb(24 49 83)";
    header.style.backgroundColor = "rgb(24 49 83)" ;


    //                            T E X T S
    navOptIcon.style.color = "white" ;
    nameColor.style.color = "white" ;

    profile.style.color = "white" ;
    bookmark.style.color = "white" ;
    lists.style.color = "white" ;
    spaces.style.color = "white" ;
    monetisation.style.color = "white" ;

    firstHeading.style.color = "white" ;
    premiumHeading.style.color = "white" ;
    secondHeading.style.color = "white" ;
    thirdHeading.style.color = "white" ;
    fourthHeading.style.color = "white" ;
    fifthHeading.style.color = "white" ;
    
    paragraphsOfNav.style.color = "white" ;
    setNSup.style.color = "white" ;
    settingOption1.style.color = "white" ;
    settingOption2.style.color = "white" ;

    displayNames.forEach( displayName => {
        displayName.style.color = "white" ;
    });

    userNames.forEach( userName => {
        userName.style.color = "#ffffff94" ;
    });

    tweetTimes.forEach( tweetTime => {
        tweetTime.style.color = "#ffffff94"
    });

    retweetComments.forEach( retweetComment => {
        retweetComment.style.color = "white" ;
    });

    retweetedTweets.forEach( retweetedTweet => {
        retweetedTweet.style.color = "white" ;
        retweetedTweet.style.border = "solid 0.1em rgb(249 242 242 / 15%)" ;
    });

    repliedNOwnedTweets.forEach( repliedNOwnedTweet => {
        repliedNOwnedTweet.style.color = "white" ;
    });

    reactions.forEach( reaction => {
        reaction.style.color = "rgb(249 242 242 / 61%)" ;
    });

    replies.forEach( reply => {
        reply.style.color = "rgba(255, 255, 255, 65%)" ;
    });

    tweets.forEach( tweet => {
        tweet.style.borderBottom = "solid 0.1em #f1ebeb17" ;
    });

    headerBottom.style.backgroundColor = "rgb(24 49 83)" ;

    cogIcons.forEach(cogIcon => {
        cogIcon.style.color = "white";
    });

    tweetChoices.style.backgroundColor = "rgb(24 49 83)" ;
    tweetChoices.style.borderBottom = "solid 0.1em rgb(255 255 255 / 8%)";

    if(forYouTabOpened == true){
        forYouTab.style.color = "white" ;
        followingTab.style.color = "gray" ;
    }else{
        forYouTab.style.color = "gray" ;
        followingTab.style.color = "white" ;
    }

    tabs.style.backgroundColor = "rgb(24 49 83)" ;
    tabs.style.borderTop = "solid 0.1px rgb(255 255 255 / 8%)";

    tabIcons.forEach(tabIcon => {
        tabIcon.style.color = "white" ;
    });

    trendsHeading.style.color = "white" ;
    trendHeads.forEach(trendHead => {
        trendHead.style.color = "#b4afaf" ;
    });
    trendItself.forEach( trend => {
        trend.style.color = "white" ;
    });
    trendPosts.forEach( trendPost => {
        trendPost.style.color = "#b4afaf" ;
    });

    videoPartHeading.style.color = "white" ;
    videocheckMsg.style.color = "#ffffff54"

    commHeading.style.color = "white" ;
    innerHeading.style.color = "white" ;
    communities.forEach( community => {
        community.style.color = "white" ;
    });

    comMemImgs.forEach( comMemImg => {
        comMemImg.style.border ="solid 0.1em black" ;
    });

    searchIconForCommTab.style.color = "white" ;
    userIconForCommTab.style.color = "white"

    notiTabHeading.style.color = "white" ;

    notiTab.style.borderBottom = "solid 0.1em rgba(255, 255, 255, 0.08)" ;

    newNotiBgColor.forEach(newNoti => {
        newNoti.style.backgroundColor = "rgb(37 68 127)" ;
    });

    notifications.forEach(noti => {
        noti.style.color = "white" ;
    });

    repliedTweetNoti.style.color = "white" ;

    notis.forEach(noti => {
        noti.style.borderBottom = "solid 0.1em rgba(255, 255, 255, 0.08)";
    });


    if(allNotiOpened == true){
        allNotis.style.fontWeight = "600" ;
        allNotis.style.color = "white" ;

        verifiedNotis.style.fontWeight = "100";
        verifiedNotis.style.color = "#ffffff94" ;

        mentionNotis.style.fontWeight = "100" ;
        mentionNotis.style.color = "#ffffff94" ;

    }else if(verifiedNotiOpened == true){
        allNotis.style.fontWeight = "100" ;
        allNotis.style.color = "#ffffff94" ;

        verifiedNotis.style.fontWeight = "600" ;
        verifiedNotis.style.color = "white" ;


        mentionNotis.style.fontWeight = "100" ;
        mentionNotis.style.color = "#ffffff94" ;

    }else if(mentionNotiOpened == true) {
        allNotis.style.fontWeight = "100" ;
        allNotis.style.color = "#ffffff94" ;

        verifiedNotis.style.fontWeight = "100" ;
        verifiedNotis.style.color = "#ffffff94" ;


        mentionNotis.style.fontWeight = "600" ;
        mentionNotis.style.color = "white" ;
    }


    msgReqIcon.style.color = "white" ;
    msgReqHeading.style.color = "white" ;

    searchBarForSearchTab.style.border = "solid 0.1em rgb(124 119 119)";
    searchBarForMsgsTab.style.border = "solid 0.1em rgb(124 119 119)" ;

    newTweetOptions.style.backgroundColor = "#0000006b" ;

    if(homeTabOpened == true) {
        xIcon.style.display = "none" ;
        XIconForBlackTheme.style.display = "inline-block" ;
    }else{
        xIcon.style.display = "none";
        XIconForBlackTheme.style.display = "none" ;
    }

    whiteXLogoForNav.style.display = "none" ;
    blackXLogoForNav.style.display = "block" ;

    newTweetOptionscolor.forEach( newTweetOptioncolor => {
        newTweetOptioncolor.style.color = "white" ;
    });

    newTweetOptions.style.backgroundColor = "rgb(0 0 0 / 63%)";

    footerIcons.forEach(footerIcon => {
        footerIcon.style.color = "white" ;
    });

    navBarForBigScreen.style.backgroundColor = "rgb(24 49 83)";

    navBarIcons.forEach(navBarIcon => {
        navBarIcon.style.color = "white" ;
    });
    
    bgOfTweetIcon.style.top = "1.2em" ;

    whiteThemeLogo.style.display = "none" ;
    darkThemeLogo.style.display = "block" ;

    searchBarBg.style.backgroundColor = "rgb(24 49 83)" ;

    grays.forEach(gray => {
        gray.style.backgroundColor = "darkgray" ;
    });

    grayColoured.forEach(gray => {
        gray.style.color = "#323232" ;
    });

    themeTab.style.top = "-0.4em" ;

    profileUser.style.color = "darkgray" ;

}

function whiteTheme(){
    blackThemeVar = false ;
    whiteThemeVar = true ;


    sun.style.display = "block";
    sunB.style.display = "block" ;
    moon.style.opacity = "0" ;
    moonB.style.opacity = "0" ;
    
    //                  B A C K - G R O U N D S
    naviBar.style.backgroundColor = "white" ; // light theme white color
    themeOPtionDiv.style.backgroundColor = "white" ;
    body.style.backgroundColor = "white";
    header.style.backgroundColor = "white" ;


    //                            T E X T S
    navOptIcon.style.color = "#192734" ;
    nameColor.style.color = "#192734" ;

    profile.style.color = "rgb(24 49 83)" ;
    bookmark.style.color = "rgb(24 49 83)" ;
    lists.style.color = "rgb(24 49 83)" ;
    spaces.style.color = "rgb(24 49 83)" ;
    monetisation.style.color = "rgb(24 49 83)" ;

    firstHeading.style.color = "rgb(24 49 83)" ;
    premiumHeading.style.color = "rgb(24 49 83)" ;
    secondHeading.style.color = "rgb(24 49 83)" ;
    thirdHeading.style.color = "rgb(24 49 83)" ;
    fourthHeading.style.color = "rgb(24 49 83)" ;
    fifthHeading.style.color = "rgb(24 49 83)" ;

    paragraphsOfNav.style.color = "rgb(24 49 83)" ;
    setNSup.style.color = "rgb(24 49 83)" ;

    settingOption1.style.color = "rgb(24 49 83)" ;
    settingOption2.style.color = "rgb(24 49 83)" ;

    displayNames.forEach( displayName => {
        displayName.style.color = "#192734" ;
    });

    userNames.forEach( userName => {
        userName.style.color = "#3c3c3c" ;
    });

    tweetTimes.forEach( tweetTime => {
        tweetTime.style.color = "#3c3c3c"
    });

    retweetComments.forEach( retweetComment => {
        retweetComment.style.color = "rgb(24 49 83)" ;
    });

    retweetedTweets.forEach( retweetedTweet => {
        retweetedTweet.style.color = "rgb(24 49 83)" ;
        retweetedTweet.style.border = "solid 0.1em #3c3c3c12";
    });

    repliedNOwnedTweets.forEach( repliedNOwnedTweet => {
        repliedNOwnedTweet.style.color = "rgb(24 49 83)" ;
    });

    reactions.forEach( reaction => {
        reaction.style.color = "#3c3c3cad" ;
    });

    replies.forEach( reply => {
        reply.style.color = "#3c3c3cd5" ;
    });

    tweets.forEach( tweet => {
        tweet.style.borderBottom = "solid 0.1em #3c3c3c14" ;
    });

    headerBottom.style.backgroundColor = "white" ;
    headerBottom.style.borderBottom = "none" ;


    cogIcons.forEach(cogIcon => {
        cogIcon.style.color = "rgb(24 49 83)";
    });

    tweetChoices.style.backgroundColor = "white" ;
    tweetChoices.style.borderBottom = "0.1em solid #3c3c3c3b";

    if(forYouTabOpened == true){
        forYouTab.style.color = "black" ;
        followingTab.style.color = "gray" ;
    }else{
        forYouTab.style.color = "gray" ;
        followingTab.style.color = "black" ;
    }

    tabs.style.backgroundColor = "white" ;
    tabs.style.borderTop = "solid 0.1px #3c3c3c3b";

    tabIcons.forEach(tabIcon => {
        tabIcon.style.color = "black" ;
    });

    trendsHeading.style.color = "black" ;
    trendHeads.forEach(trendHead => {
        trendHead.style.color = "#3c3c3ce6" ;
    });
    trendItself.forEach( trend => {
        trend.style.color = "#192734" ;
    });
    trendPosts.forEach( trendPost => {
        trendPost.style.color = "#3c3c3ce6" ;
    });

    videoPartHeading.style.color = "black" ;
    videocheckMsg.style.color = "gray" ;

    commHeading.style.color = "black" ;
    innerHeading.style.color = "black" ;

    communities.forEach( community => {
        community.style.color = "black" ;
    });

    comMemImgs.forEach( comMemImg => {
        comMemImg.style.border ="solid 0.1em white" ;
    });

    searchIconForCommTab.style.color = "black" ;
    userIconForCommTab.style.color = "black"

    notiTabHeading.style.color = "black" ;

    notiTab.style.borderBottom = "solid 0.1em #3c3c3c0f" ;

    newNotiBgColor.forEach(newNoti => {
        newNoti.style.backgroundColor = "#ddebf6" ;
    });

    notifications.forEach(noti => {
        noti.style.color = "black" ;
    });

    repliedTweetNoti.style.color = "black" ;

    notis.forEach(noti => {
        noti.style.borderBottom = "solid 0.1em #3c3c3c1a";
    });

    if(allNotiOpened == true){
        allNotis.style.fontWeight = "600" ;
        allNotis.style.color = "black" ;

        verifiedNotis.style.fontWeight = "100";
        verifiedNotis.style.color = "gray" ;

        mentionNotis.style.fontWeight = "100" ;
        mentionNotis.style.color = "gray" ;

    }else if(verifiedNotiOpened == true){
        allNotis.style.fontWeight = "100" ;
        allNotis.style.color = "gray" ;

        verifiedNotis.style.fontWeight = "600" ;
        verifiedNotis.style.color = "black" ;


        mentionNotis.style.fontWeight = "100" ;
        mentionNotis.style.color = "gray" ;

    }else {
        allNotis.style.fontWeight = "100" ;
        allNotis.style.color = "gray" ;

        verifiedNotis.style.fontWeight = "100" ;
        verifiedNotis.style.color = "gray" ;


        mentionNotis.style.fontWeight = "600" ;
        mentionNotis.style.color = "black" ;
    }

    msgReqIcon.style.color = "black" ;
    msgReqHeading.style.color = "black" ;
    searchBarForSearchTab.style.border = "solid 0.1em #3c3c3c3b";
    searchBarForMsgsTab.style.border = "solid 0.1em #3c3c3c3b" ;

    newTweetOptions.style.backgroundColor = "#fffafa";

    if(homeTabOpened == true){
        xIcon.style.display = "inline-block";
        XIconForBlackTheme.style.display = "none" ;
    }else{
        xIcon.style.display = "none" ;
        XIconForBlackTheme.style.display = "none" ;
    }

    // 
    homepage.style.borderBottom = "solid 0.1px #3c3c3c3b";

    whiteXLogoForNav.style.display = "block" ;
    blackXLogoForNav.style.display = "none" ;

    newTweetOptionscolor.forEach( newTweetOptioncolor => {
        newTweetOptioncolor.style.color = "black" ;
    });

    footerIcons.forEach(footerIcon => {
        footerIcon.style.color = "rgb(24 49 83)" ;
    });

    navBarForBigScreen.style.backgroundColor = "white";

    navBarIcons.forEach(navBarIcon => {
        navBarIcon.style.color = "rgb(24 49 83)" ;
    });

    whiteThemeLogo.style.display = "block" ;
    darkThemeLogo.style.display = "none" ;

    searchBarBg.style.backgroundColor = "white" ;

    grays.forEach(gray => {
        gray.style.backgroundColor = "lightgray" ;
    });

    grayColoured.forEach(gray => {
        gray.style.color = "#3c3c3ce6" ;
    });

    themeTab.style.top = "-1.7em" ;

    profileUser.style.color = "darkslategray" ;

}
