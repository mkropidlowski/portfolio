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




const hamburger = document.querySelector('.hamburger');
      menuList = document.querySelector('#menuView');
      bar1 = document.querySelector('.barF');
      bar2 = document.querySelector('.barS');
      bar3 = document.querySelector('.barT');
      menuView = document.getElementById('menuView');
      

    hamburger.addEventListener('click', e => {

    if(menuList.style.display === "block")
    {
        menuList.style.display = "none";
        bar1.classList.remove('rotate');
        bar1.classList.remove('barT');
        bar3.style.display = 'block';
        bar2.classList.remove('rotate-second');   
    } else {
        menuList.style.display = "block"; 
              bar1.className = 'barF rotate';
              bar1.classList.add('barT');
              bar3.style.display = "none";
              bar2.className = 'barS rotate-second';
              menuView.className = 'hide';      
    }
   
});
// window.onscroll = function () { hideMenuWhenScroll()};

function hideMenuWhenScroll()
{
    if(window.scrollY > 1)
    {
        const hideValue = document.querySelector('.hide');
        hideValue.style.display = "none";
        bar1.classList.remove('rotate');
        bar1.classList.remove('barT');
        bar3.style.display = 'block';
        bar2.classList.remove('rotate-second');
       
     
    } 
}


console.log(window.scrollY);

hideMenuWhenScroll();

