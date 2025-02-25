document.addEventListener('DOMContentLoaded',()=>{
    new Swiper('.swiper-container',{
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

    
})
