var btn = document.getElementById("btn");
var output = document.getElementById("output");
let quotes = [

"If you want to achieve greatness stop asking for permission - Anonymous",
"Things work out best for those who make the best of how things work out - John Wooden",
"To live a creative life, we must lose our fear of being wrong - Anonymous",
"If you are not willing to risk the usual you will have to settle for the ordinary - Jim Rohn",
"Trust because you are willing to accept the risk, not because it's safe or certain - Anonymous"

];

btn.addEventListener("click",function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})