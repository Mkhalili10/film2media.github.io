// ------------------------------------------------------------------------------------------------------------------------------
// header context cover handler ---
let header_content = document.querySelector(".header_content")
let cover = document.querySelector(".back_cover")
let detail = document.querySelector('.detail_container')
let detail_items = document.querySelectorAll('.detail')
let show_img = document.querySelectorAll('.show_img')
let show = document.querySelector(".show")
let circle_items = document.querySelectorAll('.circle_items')
let circle_items_flage = [1, 0, 0, 0, 0]
let arr = [-200, -100, 0, 100, 200]
let last = 0
let cover_flage = 0

setInterval(function () {
    if(window.innerWidth < 410 && window.innerHeight < 720) {
        header_content.style.height = '450px'
        cover.style.header_content = '430px'
        detail.style.top = '73%'
    }
    else if (window.innerWidth > 410 && window.innerWidth <= 576) {
        header_content.style.height = '600px'
        cover.style.header_content = '580px'
        detail.style.top = '78%'
    }
    else if (window.innerWidth > 576 && window.innerWidth < 1200) {
        header_content.style.height = '440px'
        cover.style.header_content = '457px'
        detail.style.top = '14%'
    }
    else if (window.innerWidth >= 1200 && window.innerWidth < 1440) {
        header_content.style.height = '460px'
        cover.style.header_content = '447px'
    }
}, 500)

setInterval(function () {
    if(last > 0)
        detail_items[last-1].style.paddingLeft = '0'
    if(cover_flage == 0) 
        last++
    else 
        last--

    if(last == 5) {
        last = 4
        cover_flage = 1
    }
    else if (last == -1) {
        last = 0
        cover_flage = 0
    }

    cover.style.transform = 'translateX(' + arr[last] + '%)'
    detail.style.transform = 'translateX(' + arr[last] + '%)'

    if(last > 0)
        detail_items[last-1].style.paddingLeft = '4rem'

    circle_items[last].style.width = '30px'
    circle_items[last].style.borderRadius = '0.5rem'
    circle_items_flage[last] = 1

    for(let i=0; i<5; i++) {
        if(i!=last) {
            circle_items[i].style.width = '12px'
            circle_items[i].style.borderRadius = '50%' 
            circle_items_flage[i] = 0
        }
    }
}, 2000)

show_img.forEach(function(item, index) {
    item.addEventListener("click", function () {
        item.style.height = '280px'
        item.style.border = '2px solid white'

        if(window.innerWidth > 576 && window.innerWidth < 768) {
            item.style.height = '230px'
        }
        
        cover.style.transform = 'translateX(' + arr[index] + '%)'
        detail.style.transform = 'translateX(' + arr[index] + '%)'

        last = index
        if(last == 5) {
            last = 4
            cover_flage = 1
        }
        else if (last == -1) {
            last = 0
            cover_flage = 0
        }

        for(let i=0; i<5; i++) {
            if(i!=index) {
                show_img[i].style.height = '260px'
                show_img[i].style.border = '0'

                if(window.innerWidth > 576 && window.innerWidth < 768) {
                    show_img[i].style.height = '220px'
                }
            }
        }
    })
})

show.addEventListener('click', function(event) {
    let n = show.clientWidth, x = 200
    if(window.innerWidth < 992)
        x = 180
    else if (window.innerWidth < 768)
        x = 160

    if(event.x < n/3) {
        show.scrollTo({
            left: show.scrollLeft - x,
            behavior: "smooth"
        })
    }
    else if(event.x > (n/3)*2) {
        show.scrollTo({
            left: show.scrollLeft + x,
            behavior: "smooth"
        })
    }
})


circle_items.forEach(function(item, index) {
    item.addEventListener("click", function () {
        cover.style.transform = 'translateX(' + arr[index] + '%)'
        detail.style.transform = 'translateX(' + arr[index] + '%)'

        last = index
        if(last == 5) {
            last = 4
            cover_flage = 1
        }
        else if (last == -1) {
            last = 0
            cover_flage = 0
        }

        console.log(circle_items_flage)
        if(circle_items_flage[index] == 0) {
            console.log('zero')
            item.style.width = '30px'
            item.style.borderRadius = '0.5rem'
            circle_items_flage[index] = 1
        }
        else {
            console.log('one')
            item.style.width = '12px'
            item.style.borderRadius = '50%'
            circle_items_flage[index] = 0
        }

        for(let i=0; i<5; i++) {
            if(i!=index) {
                circle_items[i].style.width = '12px'
                circle_items[i].style.borderRadius = '50%' 
                circle_items_flage[i] = 0
            }
        }
    })
})

// ------------------------------------------------------------------------------------------------------------------------------
// search button handler
let search_btn = document.querySelector(".search")
let search_box = document.querySelector(".search_box")
let search_box_falge = 0

search_btn.addEventListener("click", function () {
    if(search_box_falge == 0) {
        if(window.innerWidth >= 410)
            search_box.style.height = '3.5rem'
        else 
            search_box.style.height = '3rem'
        search_box.firstElementChild.style.border = '0.5px solid rgba(255, 255, 255, 0.334)'
        search_box_falge = 1
    }
    else {
        search_box.style.height = '0'
        search_box.firstElementChild.style.border = 'none'
        search_box_falge = 0
    }
})


search_box.firstElementChild.addEventListener("keydown", function(event) {
    if(event.key == 'Enter') {
        search_box.style.height = '0'
        search_box.firstElementChild.style.border = 'none'
        search_box.firstElementChild.value = ''
        search_box_falge = 0
    }
})



// ------------------------------------------------------------------------------------------------------------------------------
// day/night mode change
let mode_change = document.querySelector(".mode")
let mode_change_btn = document.querySelector(".mode_div")
let mode_flage = 0
let moons = document.querySelectorAll(".moon")

mode_change.addEventListener("click", function () {
    if(mode_flage == 0) {
        mode_change_btn.style.left = "47.5%"
        mode_change_btn.style.background = "orange"
        mode_change.style.background = "cornflowerblue"
        moons.forEach(function(item) {
            item.style.opacity = "0"
        })
        mode_flage = 1
    }
    else  {
        mode_change_btn.style.left = "7%"
        mode_change_btn.style.background = "darkgray"
        mode_change.style.background = "black"
        moons.forEach(function(item) {
            item.style.opacity = "1"
        })
        mode_flage = 0
    }
})

// ------------------------------------------------------------------------------------------------------------------------------
// menu bigger than 768px
let baksh_ha = document.querySelector(".bakhsh")
let serial_janr = document.querySelector(".serial")
let menu_dastebandi = document.querySelector(".daste_bandi")

window.addEventListener("resize",  function () {
    if(window.innerWidth > 1200)
        menu_dastebandi.style.height = "fit-content"
    if(window.innerWidth > 992 && window.innerWidth < 1200) 
        menu_dastebandi.style.height = "16rem"    
    if(window.innerWidth > 768 && window.innerWidth < 992)   
        menu_dastebandi.style.height = "21rem"
    if(window.innerWidth < 768) 
        menu_dastebandi.style.display = "none"
})

baksh_ha.addEventListener("mouseenter", function () {
    if(window.innerWidth > 1200)
        menu_dastebandi.style.height = "fit-content"
})

serial_janr.addEventListener("mouseenter", function () {
    if(window.innerWidth > 1200)
        menu_dastebandi.style.height = "16rem"
})


menu_dastebandi.addEventListener("mouseleave", function () {
    if(window.innerWidth > 1200)
        menu_dastebandi.style.height = "fit-content"
    if(window.innerWidth > 992 && window.innerWidth < 1200) 
        menu_dastebandi.style.height = "16rem"    
    if(window.innerWidth > 768 && window.innerWidth < 992)   
        menu_dastebandi.style.height = "21rem"
    if(window.innerWidth < 768) 
        menu_dastebandi.style.display = "none"

    menu_dastebandi.style.display = 'none'
})

// ------------------------------------------------------------------------------------------------------------
// menu li click handler --------------------------------------------------------------------------------------
let part = document.querySelectorAll(".p")
let part_info = document.querySelectorAll(".janrs_sub")
let part_info_falge = [0,0,0]

part.forEach(function(item, index) {
    item.addEventListener("click", function () {
        part[index].firstElementChild.style.background = "greenyellow"
        part[index].firstElementChild.style.color = "rgb(14, 28, 14)"

        if(part_info_falge[index] == 0) {
            if(index == 0)
                part_info[index].style.height = "5rem"
            else 
                part_info[index].style.height = "16rem"
    
            part_info_falge[index] = 1
        }
        else {
            part_info[index].style.height = "0"
            part_info_falge[index] = 0
        }

        for(let i=0; i<3; i++) {
            if(i!=index) {
                part_info[i].style.height = "0"
                part_info_falge[i] = 0

                part[i].firstElementChild.style.background = "rgb(14, 28, 14)"
                part[i].firstElementChild.style.color = "greenyellow"
            }
        }
    })
})


//-------------------------------------------------------------------------------------------------------------
// phone menu open/close
let body = document.querySelector("body")
let close = document.querySelector(".menu_close")
let menu2 = document.querySelector(".menu2")
let daste = document.querySelectorAll(".daste")
let menu_phone_flage = 0

daste.forEach(function (item) {
    item.addEventListener("click", function () {
        if(window.innerWidth <= 768) {
            if(menu_phone_flage == 0) {
                menu2.style.right = '0'
                menu_phone_flage = 1
            }
            else {
                if(window.innerWidth > 410) 
                    menu2.style.right = '-60%'
                else
                    menu2.style.right = '-80%'
                menu_phone_flage = 0
            }
        }
    })

    item.addEventListener("mouseenter", function () {
        if(window.innerWidth > 768) {
            menu_dastebandi.style.display = "flex"
            menu_dastebandi.style.flexDirection = 'column'
            menu_dastebandi.style.opacity = '1'
            menu_dastebandi.style.zIndex = '1100';
        }
    })
})


window.addEventListener("resize", function () {
    if(window.innerWidth > 410) 
        menu2.style.right = '-60%'
    else
        menu2.style.right = '-80%'
    menu_phone_flage = 0
})

close.addEventListener("click", function () {
    if(window.innerWidth > 410) 
        menu2.style.right = '-60%'
    else
        menu2.style.right = '-80%'
    menu_phone_flage = 0
})





