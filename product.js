const menuIcon=document.getElementById("menuicon")
const sideNav=document.getElementById("sidenav")
const closeNav=document.getElementById("closenav")


menuIcon.addEventListener("click",function(){
    sideNav.style.right=0
})


closeNav.addEventListener("click",function(){
    sideNav.style.right="-50%"
})

const search=document.getElementById("search")
const procontainer=document.getElementById("procontainer")
const prolist=procontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<prolist.length;count+=1){
        var proname=prolist[count].querySelector("h3").textContent
        
        if(proname.toUpperCase().indexOf(enteredvalue)<0){
            prolist[count].style.display="none"
        }
        else{
            prolist[count].style.display="block"
        }
    }
})
