function send_mail(){
    let parameters = {
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        email: document.getElementById("email").value
    }
    
    emailjs.send("service_6w88c3i", "template_4jjxmdb", parameters).then(alert("Mail sent successfully !!")) 
}
