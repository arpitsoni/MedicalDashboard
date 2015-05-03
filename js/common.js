$(function(){
    $.ajax({
        url:"http://localhost/SocialMedia/request.php?t=interval",
        success:function(response){
            if(response =="Please log in to continue!"){
                if(window.location.href.substr( window.location.href.lastIndexOf('/')+1,window.location.href.length-1) != "login.html"){
                    window.location.href = "login.html";
                }
            } else {
                if(window.location.href.substr( window.location.href.lastIndexOf('/')+1,window.location.href.length-1) == "login.html") {
                    window.location.href = "/";
                }
            }
        },
        error:function(err){
            console.log("e")
        }
    })
})