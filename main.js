window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    var player_x = 50;
    var player_y = 150;

    let speed = 15;

    var leftbtn = document.getElementById('leftbtn').onclick = function(){
        if (player_x > 15){
            player_x-= speed;
        }
        
    }
    var rightbtn = document.getElementById('rightbtn').onclick = function(){
        if (player_x < 240){
            player_x+= speed;
        }
    }

    var upbtn = document.getElementById('upbtn').onclick = function(){
        if (player_y > 0){
            player_y -= speed;
        }
    }

    var upbtn = document.getElementById('downbtn').onclick = function(){
        if (player_y < 240){
            player_y += speed;
        }
    }
    
    function draw(){
        context.beginPath();
        context.clearRect(0,0,300,300)
        context.rect(player_x,player_y,50,50);
        context.strokeStyle = 'red';
        context.fillStyle = 'red';
        context.fill();
        context.stroke();

        context.beginPath();
        
        

    }

    setInterval(draw, 50)
}
