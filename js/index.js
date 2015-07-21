var jiandao = document.getElementById("jiandao");
var shitou = document.getElementById("shitou");
var bu = document.getElementById("bu");

jiandao.onclick = function(){
  document.getElementById("my-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
  var computerResult = Math.random();
  if(computerResult<0.33){
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Tie";
  }else if(computerResult<0.67){
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Lose";
  }else{
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Win";
  }
}


shitou.onclick = function(){
  document.getElementById("my-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
  var computerResult = Math.random();
  if(computerResult<0.33){
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Win";
  }else if(computerResult<0.67){
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Tie";
  }else{
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Lose";
  }
}

bu.onclick = function(){
  document.getElementById("my-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
  var computerResult = Math.random();
  if(computerResult<0.33){
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/jiandao.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Lose";
  }else if(computerResult<0.67){
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/shitou.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Win";
  }else{
    document.getElementById("computer-result").src="https://github.com/baidu-ife/ife/blob/master/2015_summer/asset/bu.jpg?raw=true";
    document.getElementById("result-test").innerHTML = "Tie";
  }
}