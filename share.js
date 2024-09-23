let share = document.getElementById("share");
let profile = document.getElementById("profile");
let icon = document.querySelector(".icon");
let multiIcon = document.getElementById("multiIcon");
let profilename = document.getElementById("name");
let date = document.getElementById("date");
let unclickedshare = document.getElementById("share");

let socialLink=["images/icon-facebook.svg","images/icon-twitter.svg","images/icon-pinterest.svg"]



let testing = document.getElementById("testing");

share.addEventListener('click',()=>{

     profile.style.backgroundColor = "hsl(217, 19%, 35%)";
     profile.style.borderRadius = "0px 0px 10px 0px";
     profile.style.display = "grid";



     profile.style.gridTemplateColumns = "4fr 1fr";
     profile.style.justifyContent ="Start";
     
     

     profilename.remove();
     date.remove();
     multiIcon.remove();

     icon.style.display = "inline-block";
     icon.style.marginLeft = "30px";
     icon.innerHTML = "SHARE";
     icon.style.color = "white";
     icon.style.fontSize = "13px";
     icon.style.letterSpacing = "10px";
     


    

    let socialmedia = ["fb", "twitter", "pinterest"];
    for (let i=0; i<=2; i++){
        socialmedia[i]= document.createElement('img');
        socialmedia[i].src=socialLink[i];
        socialmedia[i].setAttribute("max-width","20px");
        socialmedia[i].setAttribute("height","20px");
        socialmedia[i].setAttribute("border-radius","15px");
        socialmedia[i].setAttribute("display","inline-block");
        icon.appendChild(socialmedia[i]);
    };


})