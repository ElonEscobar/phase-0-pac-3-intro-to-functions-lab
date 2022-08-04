function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}
//The code below runs too.
/*
function sayHiToHeadphonedRoommate(string){
    if(string===string.toLowerCase()){
        return("I can't hear you!");
    }
    if(string === string.toUpperCase()){
        return("YES INDEED!");
        
    }
    if(string === "Let's have dinner together!"){
        return ("I would love to!");
    }    
}
*/

function sayHiToHeadphonedRoommate(string){
    let say;
    switch(string){
        case (string.toLowerCase()):
            say = ("I can't hear you!");
            return say;  
        case (string.toUpperCase()):
            say =  ("YES INDEED!");
            return say;
        case ("Let's have dinner together!"):
            say = ("I would love to!");
            return say;
    };
}
