
function validate(){
    var username=document.getElementById("username").value 
    var password=document.getElementById("password").value 

    if(username =="User1@bookworm" && password=="0000" || username =="User2@bookworm" && password=="1234"){
        window.open("HomePage.html")
    }
    else {
        alert("Wrong Username Or Password Please Enter A Valid One !")
    }

}
