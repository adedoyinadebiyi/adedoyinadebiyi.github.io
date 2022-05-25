// these are all of the images I used to be able to create the memory game// 
availableImages=['game.jpg','game4.jpg','cake.jpg','ahh.jpg','game2.jpg','game1.jpg',
'game3.jpg','game6.jpg','game.jpg','game4.jpg','cake.jpg','ahh.jpg','game2.jpg',
'game1.jpg','game3.jpg','game6.jpg']

// this function "start" prefroms all the major tasks.  
// this function helps creating a copy of availableImages, we neded this because for the next game because after preforming all opertaions 
// if we dont do this it will not work for the next round of games.  
function start(){
    let moves =0;
    const maindiv = document.getElementById("boardgame");
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.lastChild);
    }
    const scorediv = document.getElementById("score");
    while (scorediv.firstChild) {
       scorediv.removeChild(scorediv.lastChild);
    }

    var row = document.createElement('div')
    // this is the path I created to be able to import all of my images 
    ImagesCopy= JSON.parse(JSON.stringify( availableImages))
    // this function is helping for my 16 cards to loop.  
    for(let j=1;j<=16;j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv')
        // I then create a new div which helps the imgae to‘hide’ so that all the images will be hidden when you start the game.
        var image = document.createElement('img')
        // I  need to assign one image per diV
        // I will pick randomly using Math.floor and Math.random from the ImagesCopy array.

        // And after picking a particular image I need to delete that particular image from the array 
        // I do this by using a using splice method which I found online
        // This helps so I wont have the same image again.
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide')
        div.appendChild(image)
        row.appendChild(div);

        // I only want four images in a row so when j%4==0 means there will be 4 in a row for my game.

        if(j%4==0){
            document.getElementById('boardgame').append(row)
            row = document.createElement('div')
        }
// This is counting the number of cards showing and then this helps to check if the previously shown image matches the current image and if it does
// then it adds a class ‘match’ to both the matched images and if it doesn’t match then its  add ‘showimg’ class 
// and remove the showimg class from previously shown images. 
        div.addEventListener('click',function(event){
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
           var currentlyshowing = document.getElementsByClassName('showimg');
            currentlyshowing = document.getElementsByClassName('showimg');
            let flag=0;
            if(currentlyshowing.length >= 1){
                for(let i=0;i<currentlyshowing.length;i++)
                {
                    if(currentlyshowing[i].src != currImg.src)
                    currentlyshowing[i].classList.remove('showimg');
                    else{
                        currentlyshowing[i].classList.add('match');
                        currImg.classList.add('match')
                        flag=1;
                    }
                }
            }


// this function is after when all of the images are matched, a note will show saying " You Won" Its going to add an alert // 
            if(document.getElementsByClassName('match').length==16){
                alert("You won !!! ")
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                let node= document.createTextNode("You won!!! Moves "+moves);
                button.appendChild(node)
                document.getElementById('score').appendChild(button) 
            }

            if(flag==0)
            currImg.classList.add('showimg');
        })
    }
}
