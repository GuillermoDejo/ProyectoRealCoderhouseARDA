document.addEventListener('DOMContentLoaded', function () {

    // Menu
    const menuButton = document.querySelector('#btn-menu');
    const menu = document.querySelector('#menu');

    menuButton.addEventListener('click', handleClickBtnMenu);

    function handleClickBtnMenu() {
        menu.classList.toggle('show');
    }

    // Submenu
    const subMenuButton = document.querySelectorAll('.btn-submenu');
    
    subMenuButton.forEach(btn => {
        btn.addEventListener('click', handleClickBtnSubMenu);
    });
    
    
    
    function handleClickBtnSubMenu() {
        const subMenu = this.nextElementSibling;
        const height = subMenu.scrollHeight;
        
        const arrow = this.childNodes;

        if (subMenu.classList.contains('desplegar')) {

            subMenu.classList.remove('desplegar');
            subMenu.removeAttribute('style');
            
            
        } else {
            
            subMenu.classList.add('desplegar');
            subMenu.style.height = height + "px";
            
        }
        
        arrow[1].classList.toggle('rotar');

    }

});

function mostrarBoton () {
    var toogle = document.getElementById('toogle');
    var btn_2 = document.getElementById('btn-2');
    if (toogle.checked == true) {
        btn_2.style.display = 'grid';
    } else { 
        btn_2.style.display = 'none';
    }
}
