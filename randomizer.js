window.onload = function(){
    document.getElementById('shuffle').onclick = function(){
        var output = document.getElementById('output');
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;

        let random = Math.round(Math.random() * start) + 10;

        if (random > start && random < end){
             output.innerText = random;
        }
        else {
            alert("Generated " + random + ", out of range.")
        }

 
}

document.getElementById('trash-feature').onclick = function(){
    alert("This Feature is absolute trash and bullshit because as you may have noticed, the application cannot limit the generated output to the numbers specified and this can prove to be annoying. Now the question is why? This is due to the fact that i'm still learning JavaScript and i do not have enough knowledge at the moment to do this, if you want a perfect application for this, you may want to look at my Python app on itch.io")
}

}