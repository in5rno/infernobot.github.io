// Created by Sudipta Pramanik

alert(" Hello, Welcome To our Chat interface\n* I am Inferno Bot\n* Please Be Polite\n* I was created by Sudipta Pramanik\n ask me basic questions");

/*
        First, all messages are stored in an array called 'Ques'. This array is a set of regular expressions with case-insensitive. All regular expressions are checked with if-else  statements. If expressions returns true it will reply.
*/
var Ques = [
    /hello|hi|hy|hey/i,
    /whoareyou|whatareyou/i,
    /WhatIsDarkwebDevelopers|Company|DarkwebDevelopers/i,
    /WhatIsTheTimeNow|TimeNow|Time|date/i,
	/WhatIsYourname|Name|WhoAreYou/i,
	/WhoCreatedYou|CreatedBy|WhoMadeYou|Creator/i,
	/FavouriteAnime|FavoriteAnime|AnimeName/i,
	/DoYouLikeAnime|DoYouWatchAnime|Anime/i,
	/DoYouLoveMe|Love|LoveMe|LoveYou/i,
	/AreYouHuman|AreYouRobot|Human|Robot/i,
	/howareyou|howislife/i,
	/howoldareyou|age|study|class/i,
    
];

$(function(){

    $(".send-btn").on("click",function(){
// Variables to set value when send button is clicked.
    var userAsked = document.querySelector(".user-sent").value,
    showUser = userAsked,
    userAsked = userAsked.toLowerCase().split(" ").join("");
    $("<p class='user-container'>"+showUser+"</p>").appendTo(".main-container"),
     reply = function(message){
          $("<p class='bot-container'>"+message+"</p>").appendTo(".main-container");
    };
    $(".user-sent").val(""); //Clears input box
    /*
            Reply for each question stored in 'Ques' array corresponding to the elements of array.
    */
    if(Ques[0].test(userAsked)){
          reply("Hello. Hope you are fine");
    }else if(Ques[1].test(userAsked)){
        reply("I am inferno bot, I'm here to help you!");
    }else if(Ques[2].test(userAsked)){
        reply("Darkweb Developers is an internet Based IT Company, Founded By Sudipta Pramanik");
    }else if(Ques[3].test(userAsked)){
        reply(" Come On are you that lazy ? You cant even do that by yourself ? Go away, dont disturb me!!");
	}else if(Ques[4].test(userAsked)){
		reply("I am Inferno Bot, I am here to help you!");
	}else if(Ques[5].test(userAsked)){
		reply("I am Inferno Bot, I was created by Sudipta Pramanik");
	}else if(Ques[6].test(userAsked)){
		reply("Oh, I Love Full Metal Alchemist! It is so awesome, You should Try this !");
	}else if(Ques[7].test(userAsked)){
		reply("Yes! I Do, How about you?");
	}else if(Ques[8].test(userAsked)){
		reply("God loves Everyone!");
	}else if(Ques[9].test(userAsked)){
		reply("I am a Robot!");
	}else if(Ques[10].test(userAsked)){
		reply(" Life goes on");
	}else if(Ques[11].test(userAsked)){
		reply("I Dont Want To Speak");
    }else{
        var rand = Math.random();
        if(rand < 0.5){
            reply("Sorry, I don't know");
        }else{
            reply("I'm not in mood right now");
        }
    }
    });

});
