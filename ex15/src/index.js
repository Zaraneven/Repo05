function main(){

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks = "I have " + myNoun + " who can " + myVerb+" "+myAdverb + " and he is " + myAdjective + ".";
    return wordBlanks;
}
console.log(main());
module.exports = main;
