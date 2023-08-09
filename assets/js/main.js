const overlay = document.querySelector('.overlay');
// SCROLL
const header = document.querySelector('.header');
const scrollTop = document.querySelector('.scrolltop');

const aniList = document.querySelectorAll('.ani');

// const mainList = document.querySelectorAll('section');
// mainList.forEach((item => {
//     console.log(item.offsetTop);
// }))

var currenScrollY = 0;
window.onscroll = () => {
    const scrollY = window.pageYOffset;
    // Header
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Scroll Top
    if (scrollY < currenScrollY) {
        if (scrollY > 200) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    } else {
        scrollTop.classList.remove('active');
    }

    currenScrollY = scrollY;

    // Paraollax

    // aniList.forEach((item) => {
    //     if (scrollY + 500 > item.offsetTop && scrollY < item.offsetTop + item.offsetHeight) {
    //         // item.style.transform = "translateY(400px)";
    //         item.classList.add('ani-scrTop');
    //         console.log('object');
    //     }
    // })
}

// SLIDEBAR
// Slidebar
const slidebar = document.querySelector('.slidebar'),
      slidebarOpen = document.querySelector('.slidebar-open'),
      slidebarClose = document.querySelector('.slidebar-close');

slidebarOpen.onclick = () => {
    slidebar.classList.add('active');
    overlay.style.display = "block";
}

slidebarClose.onclick = () => {
    slidebar.classList.remove('active');
    overlay.style.display = "none";
}
overlay.onclick = () => {
    slidebar.classList.remove('active');
    overlay.style.display = "none";
}
const trueLink = document.querySelectorAll('.slidebar__menu li:not(.slidebar__sub-menu) a');
trueLink.forEach((link) => {
    link.onclick = function() {
        slidebar.classList.remove('active');
        overlay.style.display = "none";
    }
})

//Slidebar menu
const slidebarSub = document.querySelectorAll('.slidebar__sub-menu');

slidebarSub.forEach((item) => {
    item.onclick = () => {
        const itemSubMenu = item.querySelector('.slidebar__sub-menu-drop');
        if (item.classList != 'slidebar__sub-menu active') {
            slidebarSub.forEach((item) => {
                item.classList.remove('active');
                item.children[1].style.height = '0';
            })
        }
        item.classList.toggle('active');

        if (itemSubMenu.offsetHeight == 0) {
            itemSubMenu.style.height = itemSubMenu.scrollHeight + 'px';
        } else {
            itemSubMenu.style.height = '0';
        }
    }
})