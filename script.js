window.addEventListener('DOMContentLoaded', ()=> {
    // ==== carousel ==== //
    var carouselInner = document.querySelector('.carousel__inner');
    var carouselItem = document.querySelectorAll('.carousel__item');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var dotItem = document.querySelectorAll('.dot__item');

    var carouselItemWidth = window.innerWidth; // length carousel-item
    var carouselInnerWidth = carouselItemWidth * carouselItem.length; // length carousel-inner   
    var lWidth = carouselItemWidth;
    console.log('lWidth ban dau khi khoi tao = ' + lWidth);
    var currentIndex=0;    

    function lengthCarouselInner() {
        carouselInner.style.width = carouselInnerWidth+"px";
        console.log('carousel-inner = ' + carouselInnerWidth);
    }
    function lengthCarouselItem() {
        for(let i = 0; i < carouselItem.length; i++) {
            carouselItem[i].style.width = carouselItemWidth+"px";
            console.log('carousel-item['+ i +'] = ' + carouselItem[i].style.width);
        }
    }
    function nextSlider() {       
        if(lWidth == carouselInnerWidth) {            
            carouselInner.style.transform = 'translateX('+ carouselItemWidth +'px)';  
            lWidth = 0;              
        }
        carouselInner.style.transition = '0.4s';
        carouselInner.style.transform += 'translateX('+ -carouselItemWidth +'px)';
        lWidth += carouselItemWidth;
        console.log('lWidth = ' + lWidth);      
    }
    function prevSlider() {      
        if(lWidth == carouselItemWidth) {                     
            carouselInner.style.transform = 'translateX('+ -carouselInnerWidth +'px)';
            lWidth = carouselInnerWidth + carouselItemWidth; 
            // xem console phia' duoi chay se hieu tai sao + carouselItemWidth
            console.log('khi lwidth = carousel-item-width thi` lWidth = ' + lWidth);
        }
        carouselInner.style.transition = '0.4s'; 
        carouselInner.style.transform += 'translateX('+ carouselItemWidth +'px)';   
        lWidth -= carouselItemWidth;
        console.log('lWidth = ' + lWidth);    
    }        
    function dot() {
        for(let i = 0; i < dotItem.length; i++) {
            dotItem[i].addEventListener('click', activeDot);
        }
    }
    function activeDot(e) {
        var initialDotIndex; // chi so dot-item ban dau
        var currentDotIndex; // chi so dot-item hien tai khi click
        var temp;
        for(let j = 0; j < dotItem.length; j++) {
            if(dotItem[j].classList.contains('active')) {
                initialDotIndex = j;
                // ===== //
                console.log('index dot-item ban dau = ' + initialDotIndex);
                console.log(typeof(initialDotIndex));
                // ==== //
            }            
            dotItem[j].classList.remove('active');
        }
        e.target.classList.add('active');     
        currentDotIndex = Number(e.target.getAttribute('index'));
        // ==== //
        console.log('index dot-item hien tai = ' + currentDotIndex);
        console.log(typeof(currentDotIndex));
        // ==== //
        if(initialDotIndex < currentDotIndex) {
            temp = currentDotIndex - initialDotIndex;
            carouselInner.style.transform += 'translateX('+carouselItemWidth*-temp+'px)';
            carouselInner.style.transition = '0.4s';
            lWidth = currentDotIndex*carouselItemWidth + carouselItemWidth;
            console.log(temp);
            console.log('lwidth khi click dot-item tang', lWidth);
        }
        else {
            temp = initialDotIndex - currentDotIndex;
            carouselInner.style.transform += 'translateX('+carouselItemWidth*temp+'px)';
            carouselInner.style.transition = '0.4s';
            lWidth = currentDotIndex*carouselItemWidth + carouselItemWidth;
            console.log(temp);
            console.log('lwidth khi click dot-item giam', lWidth);
        }
    }    
    function initCarousel() {
        lengthCarouselItem();    
        lengthCarouselInner();
        dot();
        next.addEventListener('click', nextSlider);
        prev.addEventListener('click', prevSlider);
    }
    initCarousel();
    // ================================== //
    // ==== tabs films ==== //
    var tabsFilms = document.querySelectorAll('.tabs__films');
    var sliderTabF = document.querySelectorAll('.slider-tabFilms');

    function activeTabs(e) {
        var indexTab;
        for(let i = 0; i < tabsFilms.length; i++) {
            if(tabsFilms[i].classList.contains('active-tab')) {
                tabsFilms[i].classList.remove('active-tab');
                sliderTabF[i].style.display = "none";
            }
        }        
        indexTab = Number(e.target.getAttribute('index'));
        e.target.classList.add('active-tab');
        sliderTabF[indexTab].style.display = "block";
        console.log(e.target);
    }
    function initTabsFilms() {
        for(let i = 0; i < tabsFilms.length; i++) {
            tabsFilms[i].addEventListener('click', activeTabs);
        }
    }
    initTabsFilms();
    
    // ===== //
    var owlTabFilms = $('.slider-tabFilms');
    owlTabFilms.owlCarousel({ 
        loop: true,                        
        margin: 35,                
        items: 4
    });  

    var owlEvent = $('.slider-event');
    owlEvent.owlCarousel({
        loop: true,
        margin: 35,
        items: 2
    });
    
    // ===== // 
});
