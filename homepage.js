function login() {
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    console.log("jump");
    // alert("提交成功" + "\n 用户名：" + userName + "\n密码: " + userPassword);
    window.localStorage.setItem("userName", userName);
    window.localStorage.setItem("userPassword", userPassword);
}

function getUserName() {
    var userName  = window.localStorage.getItem("userName");
    // document.write(userName);
    document.getElementById("p").innerHTML = '<p>用户名: ' + userName.toString() + '</p>'
}

function getUserName() {
    var userPassword  = window.localStorage.getItem("userPassword");
    // document.write(userPassword);
    document.getElementById("p").innerHTML = '<p>密码: ' + userPassword.toString() + '</p>'
}