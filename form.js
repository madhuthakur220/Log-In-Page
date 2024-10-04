document.querySelector(".formsubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const c_password = document.getElementById("confirmpassword").value.trim();

  const emailRegex =
    /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

  // Clear previous error messages
  document
    .querySelectorAll(".error")
    .forEach((errorElement) => (errorElement.textContent = ""));

  let isValid = true;

  // Validate username
  if (username.length < 6) {
    document.getElementById("usernameerror").textContent =
      "Username must be at least 6 characters long";
    isValid = false;
  }

  // Validate email
  if (!emailRegex.test(email)) {
    document.getElementById("emailerror").textContent =
      "Please enter a valid email";
    isValid = false;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    document.getElementById("passworderror").textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit and one special character";
    isValid = false;
  }

  // Confirm password
  if (c_password !== password) {
    document.getElementById("confirm_password_error").textContent =
      "Passwords must match";
    isValid = false;
  }

  // If all validations pass, proceed with form submission
  if (isValid) {
    let userData = {
      username: username,
      email: email,
      password: password,
      confirmpassword: c_password,
    };
    console.log(userData);

    // Optionally, clear input fields after successful validation and submission
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";
  }
});
