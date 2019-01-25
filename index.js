//use querySelector strings for input
function btnToDivSmooth(btnid, sectionid){
    document.querySelector(btnid).addEventListener("click", (e)=> {
        e.preventDefault()
        document.querySelector(sectionid).scrollIntoView({
            behavior:'smooth', block:'start'
        })
    })
}

btnToDivSmooth("#aboutbtn", "#about_page")
btnToDivSmooth("#pubbtn", "#pub_page")
btnToDivSmooth("#researchbtn", "#research_page")
btnToDivSmooth("#newsbtn", "#news_page")