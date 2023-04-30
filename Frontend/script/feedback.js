

let userdata = JSON.parse(localStorage.getItem("userDataStorage"));

let reservationfdback = JSON.parse(localStorage.getItem("reservationfeedback"));


let form = document.getElementById("form")

form.addEventListener("submit",invoke)

async function invoke(event){

    event.preventDefault();
    
    let dr = form.dr.value
    
    let sr = form.sr.value;

    let or = form.sr.value;

    let cr = form.cr.value;
    

    let feedback={}

    feedback["driverRating"]=dr;
    feedback["serviceRating"]=sr;
    feedback["overallRating"]=or;
    feedback["comments"]=cr;
   





    try{
        let res = await fetch(`https://busreservationsystem-production-ae31.up.railway.app/setfeddback/${userdata.userLoginId}/${reservationfdback.reservationId}`,{
            method:"POST",
            body:JSON.stringify(feedback),
            headers:{
                "Content-Type":"application/json"
            }
            // body:JSON.stringify(obj)
        })
        
        if(res.ok){
            console.log("sucesss")
            let data = await res.json();
            // To get data from response   // admin data
            // let userData=JSON.stringify(data)
            console.log(data)
            // Write code here to send user data and user to user dashboard
            alert(`Thanks for the FeedBack ...`);

            
            //printing reservation page 

            // window.location.href="."
        

            let blue = JSON.parse(localStorage.getItem("blue"));

           if(blue == null) blue = {};

           blue[`${reservationfdback.reservationId}`]=reservationfdback.reservationId;

            localStorage.setItem("blue",JSON.stringify(blue))
            
           window.location.href="./allticket.html"


            console.log("end");

        }else{
                let data = await res.json();
                let error=JSON.stringify(data)
                let msg =JSON.parse(error);
                alert(msg.message)
        }
    }catch(error){
        console.log(error)
        alert(error)
        return "Not sucessful"
    }


}


document.getElementById("logout").addEventListener("click",logoutUser)


function logoutUser(){

   event.preventDefault();

    localStorage.removeItem("userDataStorage")


    alert("You are Logged Out.")

    window.location.href="/index.html"



}