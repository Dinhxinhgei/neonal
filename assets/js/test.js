var myReuseableStylesheet = document.createElement('style'),
    addKeyFrames = null;

document.head.appendChild( myReuseableStylesheet );
if (CSS && CSS.supports && CSS.supports('animation: name')){
    // we can safely assume that the browser supports unprefixed version.
    addKeyFrames = function(name, frames) {
        var pos = myReuseableStylesheet.length;
        myReuseableStylesheet.insertRule(
            "@keyframes " + name + "{" + frames + "}", pos);
    }
} else {
    addKeyFrames = function(name, frames){
        // Ugly and terrible, but users with this terrible of a browser
        // *cough* IE *cough* don't deserve a fast site
        var str = name + "{" + frames + "}",
            pos = myReuseableStylesheet.length;
        myReuseableStylesheet.insertRule("@-webkit-keyframes " + str, pos);
        myReuseableStylesheet.insertRule("@keyframes " + str, pos+1);
    }
}


addKeyFrames(
    'cac',
    '0%{opacity:0}' + 
    '100%{opacity:1}'
);
console.log(myReuseableStylesheet);
