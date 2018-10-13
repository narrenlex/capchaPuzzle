'use strict'

function generateBoard(cols, rows, imageSize) {
    let j = -1;
    for (let i = 0; i < cols*rows; i++){
        let li = document.createElement('li');
        li.classList.add('square');
        li.style.backgroundImage = 'url(https://picsum.photos/' + imageSize + ')';
        li.style.width = (imageSize  / cols - 1) + 'px';
        li.style.height = (imageSize / rows - 1) + 'px';
        li.style.backgroundPositionX = (100 / (cols - 1) * i) + '%';
        if (i % cols == 0) {
            j++;
            li.style.backgroundPositionY = (100 / (rows - 1) * j) + '%';
            } else {
            li.style.backgroundPositionY = (100 / (rows - 1) * j) + '%';
            };
        console.log(li.style.backgroundPosition);
        document.getElementsByClassName('listCapcha')[0].appendChild(li);
    }
}

generateBoard(5, 3, 300);