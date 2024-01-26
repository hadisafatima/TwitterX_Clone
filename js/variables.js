let blackThemeVar = false ;
let whiteThemeVar  = true ;

let forYouTabOpened = true ;
let followingTabOpened = false ;

let allNotiOpened = true ;
let verifiedNotiOpened = false ;
let mentionNotiOpened = false ;

let homeTabOpened = true;
let searchTabOpened = false ;
let communitiesTabOpened = false;
let notificationsTabOpened = false;
let messagesTabOpened = false ;


//                                          H E A D E R 
let pp = document.querySelector("header #profilePic") ;
let xIcon = document.querySelector("img#whiteThemeLogo");
let XIconForBlackTheme = document.querySelector("img#blackThemeLogo") ;
let settingIcon = document.querySelector("header #setting-icon");
let header = document.querySelector("header") ;
let homeTab = document.querySelector("#homepage #tweets");
let XLogo = document.querySelector("#whiteThemeLogo");
let headerBottom = document.querySelector("#header");


//                                C H O I C E S   O F   T W E E T S 
let homepage = document.querySelector("#homepage #choices") ;
let followingTab = document.querySelector("#following");
let forYouTab = document.querySelector("#forYou") ;
let forYouTweets = document.querySelector("#forYouTweets");
let followingTWeets = document.querySelector("#followingTweets");


//                                          F O O T E R 
let footer = document.querySelector("footer");
let footerIcons = document.querySelectorAll(".icon") ;
let homeIcon = document.querySelector("#home .fa-home");
let searchIcon = document.querySelector("#search .fa-search");
let commIcon = document.querySelector("#communities .commIconForTab");
let notiIcon = document.querySelector("#notifications .fa-bell-o.forTab");
let msgIcon = document.querySelector("#messaging .fa-envelope-o");


//                          T Y P E S   O F   N O T I F I C A T I O N S   B A R
let notiOptions = document.querySelector("div#notiOptionsTab");


//                              N E W   T W E E T   O P T I O N S 
let plusIcon = document.querySelector("#plusIcon .fa-plus") ;
let camera = document.querySelector("#tweetOptionsIcon1 .fa-camera");
let microphone = document.querySelector("#tweetOptionsIcon2 .fa-microphone");
let picture = document.querySelector("#tweetOptionsIcon3 .fa-picture-o");
let newTweetIcon = document.querySelector("span #tweetOptionsIcon4");


//                        N E W   T W E E T   O P T I O N S    B A C K G R O U N D
let newTweetOptions = document.querySelector("#newTweet") ;
let newTweetOptionscolor = document.querySelectorAll("span.tweetOptions");


//                                      S E A R C H   T A B 
let searchIcon2 = document.querySelector(".searchIcon");
let searchTab = document.querySelector("#searchTab");
let searchBar = document.querySelector("input#searchBar");


//                                  C O M M U N I T I E S  T A B 
let communitiesTab = document.querySelector("div#communitiesTab") ;


//                                  N O T I F I C A T I O N   T A B 
let notificationTab = document.querySelector("div#notiTab");
let allNotis = document.querySelector("span#allNotis");
let verifiedNotis = document.querySelector("span#verifiedNotis");
let mentionNotis = document.querySelector("span#mentionNotis");
let slider = document.querySelector("div#slider") ;
let allTab = document.querySelector("div#allTab");
let verifiedTab = document.querySelector("div#verified");
let mentionTab = document.querySelector("div#mentions");


//                                    M E S S A G E S   T A B
let messagesTab = document.querySelector("#messagesTab") ;
let searchBarForMsgTab = document.querySelector("#searchBarForMsgTab") ;
let mesgReqs = document.querySelector("#msgReqs");
let messages = document.querySelector("#messages");
let connectNewPpl = document.querySelector("i#envelopeForMsgsTab");


//                                      S I D E   N A V B A R 
let navigationBar = document.querySelector("div#sideNavBar");
let clickablePart = document.querySelector("div#emptyPart") ;
let navBarForBigScreen = document.querySelector("#navBarForBigScreen");
let navBarIcons = document.querySelectorAll("#navBarForBigScreen img, #navBarForBigScreen i, #navBarForBigScreen div img") ;
let bgOfTweetIcon = document.querySelector("#bgOfTweetIcon") ;
let whiteThemeLogo = document.querySelector("img#whiteThemeLogo") ;
let darkThemeLogo = document.querySelector("img#darkthemelogo") ;

//                      S I D E   N A V B A R   S E T T I N G   O P T I O N S 
let downArrow = document.querySelector("#setNSupHeading .fa-angle-down") ;
let scrollControl = document.querySelector("div#scrollable") ;
let upArrow = document.querySelector("#setNSupHeading .fa-angle-up") ;
let setOptions = document.querySelector("div#setOptions");


//                                      T H E M E S
let sun =  document.querySelector("i#sunForSmallerScreens");
let sunB = document.querySelector("i#sunForbigScreens") ;
let moon = document.querySelector("i#moonForsmallerScreens");
let moonB = document.querySelector("i#moonForBigScreens") ;


//                      V A R I A B L E S   F O R   T H E M E   C H A N G E S
let naviBar = document.querySelector("div#navBar") ;
let themeOPtionDiv = document.querySelector("div#themeOptions") ;
let navOptIcon = document.querySelector(".optForNavBar") ;
let nameColor = document.querySelector("span#name") ; 

let profile = document.querySelector("i#profileNavProfileIcon") ;
let bookmark = document.querySelector(".fa-bookmark-o") ;
let lists = document.querySelector(".fa-list-alt") ;
let spaces = document.querySelector(".fa-microphone") ;
let monetisation = document.querySelector(".fa-object-group") ;

let firstHeading = document.querySelector("h1#firstHeading") ;
let premiumHeading = document.querySelector("h1#premiumHeading") ;
let secondHeading = document.querySelector("h1#secondHeading");
let thirdHeading = document.querySelector("h1#thirdHeading") ;
let fourthHeading = document.querySelector("h1#fourthHeading") ;
let fifthHeading = document.querySelector("h1#fifthHeading") ;

let paragraphsOfNav = document.querySelector("#navBar p");
let setNSup = document.querySelector("div#setNSup") ;
let settingOption1 = document.querySelector("p#set1") ;
let settingOption2 = document.querySelector("p#set2") ;

let body = document.querySelector("body") ;
let displayNames = document.querySelectorAll("span.displayname") ;
let userNames = document.querySelectorAll("span.username") ;
let tweetTimes = document.querySelectorAll("span.time") ;

let retweetComments = document.querySelectorAll("p.retweetcomment") ;
let retweetedTweets = document.querySelectorAll("p.retweet") ;
let repliedNOwnedTweets = document.querySelectorAll("p#repliedtweet, .ownedtweet, .images, p#threeImages , .colorChange");
let reactions = document.querySelectorAll(".reactions .react") ;
let replies = document.querySelectorAll("p#reply") ;
let tweets = document.querySelectorAll(".tweet") ;

let cogIcons = document.querySelectorAll(".fa-cog") ;
let tweetChoices = document.querySelector("#choices") ;

let tabs = document.querySelector("#tabs") ;
let tabIcons = document.querySelectorAll(".icon") ;

let trendsHeading = document.querySelector("#trendsHeading h1") ;
let trendHeads = document.querySelectorAll("p.trendHead") ;
let trendItself = document.querySelectorAll("p.trendItself, .tabName");
let trendPosts = document.querySelectorAll("p.trendPosts");

let videoPartHeading = document.querySelector("h1#videosHead");

let videocheckMsg = document.querySelector("p#checkMsg") ;

let commHeading = document.querySelector("#communitiesTab h1");
let innerHeading = document.querySelector("#communitiesHeading h1");
let communities = document.querySelectorAll(".communityInfo");
let comMemImgs = document.querySelectorAll(".community .communityInfo .membersPP img");
let searchIconForCommTab = document.querySelector("#searchIconForComm") ;
let userIconForCommTab = document.querySelector("#userIconForComm")


let notiTabHeading = document.querySelector("#notiTab h1");
let notiTab = document.querySelector("div#notiOptionsTab") ;
let newNotiBgColor = document.querySelectorAll(".newNotification") ;
let notis = document.querySelectorAll(".notification");
let notifications = document.querySelectorAll("span.notiItself") ;
let repliedTweetNoti = document.querySelector("span#repliedtweet");

let msgReqIcon = document.querySelector("#msgReqIcon i") ;
let msgReqHeading = document.querySelector("#reqs h1") ;

let searchBarForSearchTab = document.querySelector("input#searchBar") ;
let searchBarForMsgsTab = document.querySelector("#searchBarForMsgTab") ;

let whiteXLogoForNav = document.querySelector("#whiteXlogoForNav") ;
let blackXLogoForNav = document.querySelector("#blackXlogoForNav");

let newTweetPortionForBiggerScreen = document.querySelector("div#newTWeetOPtionForBigScreen") ;

let searchBarBg = document.querySelector("div#barBg") ;
let grays = document.querySelectorAll(".gray") ;
let grayColoured = document.querySelectorAll(".grayColoured") ;

let sideTrends = document.querySelector("div#sidetrends") ;

let sideTrendsForBiggerScreen = document.querySelector("div#trendsForbiggerScreens") ;
let themeTab = document.querySelector("span#tT") ;
let profileUser = document.querySelector("#user span") ;