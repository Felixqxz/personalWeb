function login() {
    // window.location.href = 'login.html'
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    // alert("提交成功" + "\n 用户名：" + userName + "\n密码: " + userPassword);
    window.localStorage.setItem("userName", userName);
    window.localStorage.setItem("userPassword", userPassword);
    // window.location.href = 'login.html'
    setTimeout("javascript:location.href='login.html'", 5000); 
}

function getUserName() {
    var userName  = window.localStorage.getItem("userName");
    document.getElementById("userName").innerHTML = userName;
}

function getUserName() {
    var userPassword  = window.localStorage.getItem("userPassword");
    document.getElementById("userPassword").innerHTML = userPassword
}