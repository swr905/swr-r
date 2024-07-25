document.addEventListener('DOMContentLoaded', function() {
    // 获取页面元素
    var loginContent = document.getElementById('login-content');
    var registerContent = document.getElementById('register-content');
    var tabLinks = document.querySelectorAll('.tab-link');

    // 切换登录和注册表单
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var targetTab = e.target.dataset.tab;
            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            e.target.classList.add('active');
            [loginContent, registerContent].forEach(function(content) {
                content.style.display = content.id === targetTab + '-content' ? 'block' : 'none';
            });
        });
    });

    // 登录表单提交处理
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var username = document.getElementById('login-username').value;
        var password = document.getElementById('login-password').value;
        var loginError = document.getElementById('login-error');

        if (validateCredentials(username, password)) {
            console.log('登录成功');
            window.location.href = "http://127.0.0.1:5501/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6%E4%B8%8E%E6%8A%80%E6%9C%AF%E5%AD%A6%E9%99%A2%EF%BC%88%E8%BD%AF%E4%BB%B6%E5%AD%A6%E9%99%A2%E3%80%81%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E5%AD%A6%E9%99%A2%EF%BC%89/index.html"; // 模拟跳转
            loginError.style.display = 'none';
        } else {
            console.log('登录失败');
            loginError.style.display = 'block';
        }
    });

    // 注册表单提交处理
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        //获取用户名和密码，保存到localStorage
        var username = document.getElementById('register-username').value;
        var password = document.getElementById('register-password').value;
        localStorage.setItem('registeredUsername', username);
        localStorage.setItem('registeredPassword', password);
        console.log(`注册信息：用户名：${username}，密码：${password}`);
    });

    // 验证账号密码的函数
    function validateCredentials(username, password) {
        var storedUsername = localStorage.getItem('registeredUsername');
        var storedPassword = localStorage.getItem('registeredPassword');
        return storedUsername === username && storedPassword === password;
    }
});