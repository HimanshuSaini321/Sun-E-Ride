const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




function sendEmail(){

    let naam = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let msg = document.getElementById('msg').value;

    Email.send({
        SecureToken :"320808d0-9431-486e-bb90-31f6179d4a33",
        To : 'sunindustriesom@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + naam + "<br>Email : "+email +"<br>Phone : "+phone+"<br>"+msg
    }).then(
      message => {
        if(message=='OK'){
          swal({title: "Successful!", text: "Query Recieved Successfully!", type: "success"})
          .then(function(){ 
            location.reload();
          }
        );
        }else{
          swal({title: "Something went wrong!", text: "Query is not Recieved!", type: "error"})
          .then(function(){ 
            location.reload();
          }
        );
        }
      }
    );
}