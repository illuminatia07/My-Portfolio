// validate.js

// Function to handle name validation
function handleNameValidation() {
  var name = document.getElementById('fname').value;
  var nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert('Name should only contain alphabets.');
  }
}

// Function to handle email validation
function handleEmailValidation() {
  var email = document.getElementById('lname').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email address.');
  }
}

// Function to handle phone validation
function handlePhoneValidation() {
  var phone = document.getElementById('phone').value;
  var phoneRegex = /^[0-9\+]+$/;
  if (!phoneRegex.test(phone) || phone.length >= 15) {
    alert('Invalid phone number.');
  }
}

function validateForm() {
  // Name validation: Only alphabets and space, no numericals and symbols
  var name = document.getElementById('fname').value;
  var nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert('Name should only contain alphabets.');
    return false;
  }

  // Email validation: Should contain @ symbol and .com
  var email = document.getElementById('lname').value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Invalid email address.');
    return false;
  }

  // Phone validation: Only numericals and +, digit limit less than 15
  var phone = document.getElementById('phone').value;
  var phoneRegex = /^[0-9\+]+$/;
  if (!phoneRegex.test(phone) || phone.length >= 15) {
    alert('Invalid phone number.');
    return false;
  }

  // Message validation: Minimum of 5 characters
  var message = document.getElementById('message').value;
  if (message.length < 5) {
    alert('Message should be at least 5 characters long.');
    return false;
  }

  // Subject validation: Minimum of 5 characters
  var subject = document.getElementById('subject').value;
  if (subject.length < 5) {
    alert('Subject should be at least 5 characters long.');
    return false;
  }

  // If all validations pass, the form is valid
  // Redirect to the contact section
  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
  return true;
}

document.addEventListener('DOMContentLoaded', function () {
  // Event listeners for name, email, and phone fields
  document.getElementById('fname').addEventListener('blur', handleNameValidation);
  document.getElementById('lname').addEventListener('blur', handleEmailValidation);
  document.getElementById('phone').addEventListener('blur', handlePhoneValidation);

  // Event listener for form submission
  document.getElementById('submit-form').addEventListener('submit', validateForm);
});
$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbwpvNQMzVc6XC5c3DcAI_VO3onKW4DIvDgMxwIyYcmlzf3prjSa2I2pU0ROtTrUsLE3yw/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})