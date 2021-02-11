
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


window.onscroll = function () { hideMenuWhenScroll()};

function hideMenuWhenScroll()
{
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        const hideValue = document.querySelector('.hide');
        hideValue.style.display = 'none';
        bar1.classList.remove('rotate');
        bar3.style.display = 'block';
        bar2.classList.remove('rotate-second');
       
     
    } 
}
