function choicesButton(elementId){
    if(elementId == "forYou"){
        followingTabOpened = false ;
        forYouTabOpened = true ;

        if(whiteThemeVar == true){
            followingTab.style.fontWeight = "100" ;
            followingTWeets.style.display = "none" ;
            followingTab.style.color = "gray" ;
            followingTab.style.borderBottom = "none" ;

            forYouTab.style.fontWeight = "bolder" ;
            forYouTweets.style.display = "block" ;
            forYouTab.style.color = "#192734" ;
            forYouTab.style.borderBottom = "solid 0.2em rgb(0,172,237)" ;
        }else{
            followingTab.style.fontWeight = "100" ;
            followingTWeets.style.display = "none" ;
            followingTab.style.color = "gray" ;
            followingTab.style.borderBottom = "none" ;


            forYouTab.style.fontWeight = "bolder" ;
            forYouTweets.style.display = "block" ;
            forYouTab.style.color = "white" ;
            forYouTab.style.borderBottom = "solid 0.2em rgb(0,172,237)" ;

        }
        
    }else if(elementId == "following"){
        followingTabOpened = true ;
        forYouTabOpened = false ;

        if(whiteThemeVar == true){
            forYouTab.style.fontWeight = "100" ;
            forYouTweets.style.display = "none" ;
            forYouTab.style.color = "gray" ;
            forYouTab.style.borderBottom = "none" ;

    
            followingTab.style.fontWeight = "bolder" ;
            followingTWeets.style.display = "block" ;
            followingTab.style.color = "#192734" ;
            followingTab.style.borderBottom = "solid 0.2em rgb(0,172,237)" ;
        }else{
            forYouTab.style.fontWeight = "100" ;
            forYouTweets.style.display = "none" ;
            forYouTab.style.color = "gray" ;
            forYouTab.style.borderBottom = "none" ;


            followingTab.style.fontWeight = "bolder" ;
            followingTWeets.style.display = "block" ;
            followingTab.style.color = "white" ;
            followingTab.style.borderBottom = "solid 0.2em rgb(0,172,237)" ;
        }

    }
    
}