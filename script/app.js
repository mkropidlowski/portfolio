const card = document.querySelectorAll('.flip-card-inner');
const flipCard = document.querySelectorAll('.flip-card-back');


card.forEach(selectedCard => {
    selectedCard.addEventListener('mouseleave', e => {

        const colorBox = ['#10d965','#dada10','#da4310','#10a8da','#10dada','#1075da','#81c3e4','#0088cc','#ff6666','#f47171','#3333cc','#ff8000','#993333','#cccc00','#39ac39',];
        const randomColor = Math.floor(Math.random()*colorBox.length);
    
        flipCard.forEach(flippedCard => {
            flippedCard.style.background = colorBox[randomColor];
        })
    })
});


