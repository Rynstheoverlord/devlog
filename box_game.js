window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');


    var playerScore = document.getElementById('score');
    var score = 0;
    let scoreDelay = 0;
    
    var player_x = 50;
    var player_y = 200;

    var enemy_x = -1
    var enemy_y = -1

    var enemy2_x = 200
    var enemy2_y = -1

    let speed = 15;

    var enemyDown = false;
    var enemyRight = false;

    var enemy2Down = false;
    var enemy2Right = false;

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

    function enemyRoute(){
        if (enemy_x > 240 || enemy_y > 240){
           enemyDown = false;
           enemyRight = true;
        }
        else if (enemy_x < 0 || enemy_y < 0){
           enemyDown = true;
           enemyRight = false;
    }

    if (enemyDown == true && enemyRight == false){
        enemy_x += Math.random() * 10;
        enemy_y += Math.random() * 10;
    }
    else{
        enemy_x -= Math.random() * 10;
        enemy_y -= Math.random() * 10;
    }

    if (enemy2_x > 240 || enemy2_y > 240){
        enemy2Down = false;
        enemy2Right = true;
     }
     else if (enemy2_x < 0 || enemy2_y < 0){
        enemy2Down = true;
        enemy2Right = false;
 }

 if (enemy2Down == true && enemy2Right == false){
    enemy2_x -= Math.random() * 10;
    enemy2_y += Math.random() * 10;
}
else{
    enemy2_x += Math.random() * 10;
    enemy2_y -= Math.random() * 10;
    
    }
}

    function checkForCollision(){
        if (player_x == enemy_x && player_y == enemy_y){
            alert("You Lose!, score: " + score);
            score = 0;
        }

        if (player_x == enemy2_x && player_y == enemy2_y){
            alert("You Lose!, score: " + score);
            score = 0;
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
        context.rect(enemy_x, enemy_y, 100, 100)
        context.strokeStyle = 'green';
        context.fillStyle = 'green';
        context.fill(); 
        context.stroke();

        context.beginPath();
        context.rect(enemy2_x, enemy2_y, 100, 100)
        context.strokeStyle = 'blue';
        context.fillStyle = 'blue';
        context.fill(); 
        context.stroke();

        enemyRoute();
        scoreDelay += 1;
        if (scoreDelay > 10){
            score += 1;
            scoreDelay = 0;
        } 
        playerScore.innerText = score;
        checkForCollision();
    }

    setInterval(draw, 50);
}