
const cardContainer = document.getElementById('card-container')

window.addEventListener('DOMContentLoaded', function () {
    const arr = new Array(8);
    let html = "";
    for (let i = 0; i <= arr.length; i++) {
        html += `<div class="cards" id="card${i + 1}">${i + 1}</div>`

    }

    cardContainer.innerHTML = html;


})

function shuffle() {
    let nodeList = cardContainer.childNodes;

    const array=[];
    nodeList.forEach((item) => {
        array.push(item.innerHTML);
    });

    for (let i = array.length - 1; i > 0; i--) {
        const r = Math.floor(Math.random() * (i + 1));
        [array[i], array[r]] = [array[r], array[i]];

    }

    for (let j = 0; j < array.length; j++) {
  
        document.getElementById(`card${j + 1}`).innerHTML = array[j];
    }

}

function sort() {
    let nodeList = cardContainer.childNodes;
    const array=[];
    nodeList.forEach((item) => {
        array.push(item.innerHTML);
    });

    const output = array.sort();

    for (let j = 0; j < output.length; j++) {
        document.getElementById(`card${j + 1}`).innerHTML = output[j];
    }

}








