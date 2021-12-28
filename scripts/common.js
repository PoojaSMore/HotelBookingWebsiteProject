// class for common header across all pages
class myHeader extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <header style="position: sticky; top: 0;">
      <a href="index.html"><img src="assests/images/logo.png" alt="logo" width="150px" height="100px"></a>
      <!-- <a href="login.html" data-toggle="modal" data-target="#example-modal" target="_self" class="btn btn-light">Login</a> -->
      <button type="button" class="btn btn-light" data-toggle="modal" data-target="#login-modal" id="login">LOGIN</button>
      <button type="button" class="btn btn-light" data-toggle="" data-target="" id="logout">LOGOUT</button>
    </header>
    `;
  }
}
// class for common footer across all pages
class myFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
    <footer style="position: sticky; bottom: 0;">
      <!-- Contact us link -->
      <!-- <a href="contact.html" target="_self" class="btn btn-info">Contact Us</a> -->
      <button type="button" class="btn btn-info" data-toggle="modal" data-target="#contact-modal" id="contact">Contact Us</button>
      <!-- Social media links -->
      <div class="social-links">
        <a href="https://www.facebook.com/" target="_blank"><img src="assests/images/facebook.png" alt="facebook"></a>
        <a href="https://www.instagram.com/" target="_blank"><img src="assests/images/instagram.png" alt="instagram"></a>
        <a href="https://twitter.com/" target="_blank"><img src="assests/images/twitter.png" alt="twitter"></a>
      </div>
      <!--Copyright text-->
      <span id="copyright">&copy; 2021 ROOM SEARCH PVT. LTD.</span>
    </footer>
    `;
  }
}
// defining the custom elements .. i.e. giving name and initializing the values
customElements.define("my-header", myHeader);
customElements.define("my-footer", myFooter);

//USED VAR TO MAKE CODE MORE COMPATIBLE WITH BROWSERS WHICH DOESN'T SUPPORTS ES6-->
//getting elements by Id
var username = document.getElementById("username");
var password = document.getElementById("password");
var login_btn = document.getElementById("login");
var logout_btn = document.getElementById("logout");
var paynowbtn = document.getElementById("paynowbtn");

//storing name and password in local storage
function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
}
// on click of login button
loginbutton.onclick = function(){
  if ((username.value === "admin") && (password.value === "admin")){
    alert("Successfully logged-in.")
    logout_btn.style.display = "inline";
    login_btn.style.display = "none";
    paynowbtn.disabled = false;
    store();
  }
  else {
    alert("Invalid username/password!");
  }
}

// on click of logout button
logout.onclick = function(){
  logout_btn.style.display = "none";
  login_btn.style.display = "inline";
  window.location.reload();
}
