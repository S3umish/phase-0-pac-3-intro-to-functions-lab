function shout(string){
 return string.toUpperCase();  
}
'Hello!'.toUpperCase();// 'HELLO!'


function whisper(string){
    return string.toLowerCase();  
}

'Hello!'.toLowerCase(); //'hello!'


function logShout(string) {
    console.log(string.toUpperCase());
 }
logShout("Hello!")

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("Hello!")


function sayHiToGrandma(string) {
 if (string.toLowerCase() === string) {
        return "I can't hear you!"
    }
 if (string.toUpperCase()=== string )  {
     return "YES INDEED!"
   } 
 if (string === "I love you, Grandma."){
     return "I love you, too."
 } 

 return "HowzzThat"

}

 
