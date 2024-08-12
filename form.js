function sendMail(event) {
  event.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  console.log(params);

  emailjs.send("service_mg5i4rb", "template_7l835ky", params).then(
    function (response) {
      console.log("Message sent successfully!", response);
      alert("Message sent successfully!");

      document.getElementById("contact-form").reset();
    },
    function (error) {
      console.log("Failed to send message", error);
      alert("Failed to send message");
    }
  );
}
