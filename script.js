function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

  alert("Message sent!\n\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone);
  form.reset();
  return false;
}

// Smooth scroll to Projects
document.getElementById("viewWorkBtn").addEventListener("click", function(){
  document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
});