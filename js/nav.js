document.querySelector('.cross').style.display='none';
document.querySelector('.hamberger').addEventListener("click",()=>{
    document.querySelector('.aside').classList.toggle('sidebarGo')

    if(document.querySelector('.aside').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        document.querySelector('.cross').style.display='inline'
    }
});



       


document.querySelector('.li').addEventListener("click",()=>{
    document.querySelector('.aside').classList.toggle('sidebarGo')

    if(document.querySelector('.aside').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        document.querySelector('.cross').style.display='inline'
    }
});



            
// dark mode

    function chg_color()
    {
        $(document).ready(function(){
            $("#dark").click(function(){
                $("body").css({"background-color":"black"});
                $("nav").css({"background-color":"aqua"});
                $("#home_container").css({"background-color":"black"});
                $(".containt").css({"color":"white"});
                $("a").css({"color":"black"});
                $("hr").css({"color": "white"});
            });
            
            $("#aqua").click(function(){
                $("body").css({"background-color":"aqua"});
                $("nav").css({"background-color":"black"});
                $("#home_container").css({"background-color": "#5e374b"});
                $("a").css({"color":"white"});
                $(".containt").css({"color":"black"});
            });
        });

    }
   

    // function sendEmail(){
    //     Email.send({
    //         Host:"smtp.gmail.com",
    //         Username:"tajanehrishikesh2002@gmail.com",
    //         Password:"7517262142",
    //         To:'rutujatajane13@gmail.com',
    //         From:document.getElementById('email').value,
    //         Subject:"New contact from Enquiry",
    //         Body:"name: "+document.getElementById('name').value
    //         +"<br> Email:" +document.getElementById('email').value
    //         +"<br> massage:"+document.getElementById('massage').value
    //     }).then(
    //         message => alert("message sent successfully")
    //     );
    // }