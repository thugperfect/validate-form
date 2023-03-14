function validate(){
    let n = document.forms["form"]["naame"].value;
    let dept = document.forms["form"]["department"].value;
    let reg = document.forms["form"]["reggno"].value;
    let feed = document.forms["form"]["feedback"].value;
    let nn = document.getElementById("nn")
    let dd = document.getElementById("dd")
    let rr = document.getElementById("rr")
    let ff = document.getElementById("ff") 
    if(n==""){
        nn.innerHTML="Name must be entered"
        return false;
        
    }
    else{
        nn.innerHTML=""
    }
    if(dept=="null"){
        dd.innerHTML="Select your department"
        return false;
    }
    else{
        dd.innerHTML=""
    }
    
    if(reg==""){
        rr.innerHTML="Enter Your register no"
        return false;
    }
    else{
        rr.innerHTML=""
    }
    if(reg.length>0 && reg.length<11){
        rr.innerHTML="Enter your actual register no "
        return false;
    }
    else{
        rr.innerHTML=""
    }

    if(feed==""){
        ff.innerHTML="provide feedback..."
        return false;
    }
    else{
        ff.innerHTML=""
    }
    


    

}