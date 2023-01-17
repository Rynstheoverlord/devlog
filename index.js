var facts = Array("Never insult garri even rice is aware, (NIGERIA)", 
"Python solos", "JS == MID, (This was written in JS)","Garri is overhyped", "I own you.");

let current = 0

window.onload = function(){
    document.getElementById('fact-btn').onclick = function(){
        current += 1; 
        if (current > 4){
            current = 0;
        }
        alert("Fact: " + facts[current])
    }
}