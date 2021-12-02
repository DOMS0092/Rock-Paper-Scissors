# Rock-Paper-Scissors

## Learning Goal

- Add content on the DOM based on user input
- Practice fetch requests

## Introduction 
In this article I will share how I built my first Rock-Paper-Scissor JavaScript game! I decided to do something both entertaining and fun for myself and my users. I recommend trying this basic/ yet simple project to help you to improve your JavaScript skills. It was the most exciting project ever! I hope you are able to learn something new here.
The rules are simple:
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYgRfRW0nkCQWrOZPfrtcnyRViMPkSTW5xg&amp;usqp=CAU">


## Getting Started
First, lets get the JSON server up and running in the background. Run json-server --watch db.json to start the JSON server. In the browser you can verify the server is running by navigating to http://localhost:3000/Rock-Paper-Scissors to see the API data.

##Existing HTML

<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/rest.css">
    

    <title>Rock Paper Scissors Game</title>
</head>

<body>
    <div class="section" id="title-section"><h1>Rock Paper Scissors</h1></div>
    <div class="section" id="background"></div>
    <div class="section" id="description"></div>
    <img style="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" 
    
    <div class="section" id="controls">
        <button class="control" id="save">save</button>
        <button class="control" id="rank">rank</button>
    </div>
    <div class="section" id="ranking"></div>
    <div class="section" id="game"></div>

<div class="results">
    <div>   
         <h2>Computer Choice:<span class="result-score" id="computer-choice"></span></h2>
    </div>
    <div>
         <h2>Your Choice:<span class="result-score" id="user-choice"></span></h2>
    </div>
    <div>
         <h2>Result:<span id="result">0</span></h2>
    </div>
</div>

    <div class="selections">
        <button class="selection" id="r">✊�</button>
        <button class="selection" id="p">🖐</button>
        <button class="selection" id="s">✌️button>
    </div>
        
        <p id="action-message">Make your move</p>
</body>
<script src="js/index.js" charset="UTF-8"></script>
</html>

## Contributing
Pull request are welcom.

## License
This app is not licened and is open to all.
