document.addEventListener('DOMContentLoaded',()=>{
    if (window.innerWidth <= 1280) {
        new Swiper('.swiper-container',{
            spaceBetween: 20,
            loop: true,
            navigation:{
                nextEl:'.next',
                prevEl:'.prev'
            },
            pagination:{
                el:'.swiper-pagination',
                clickable:true,
                dynamicBullets:true
            },
            scrollbar:{
                el:'.swiper-scrollbar',
                draggable:true,
    
            }
        })
    }


    
})
