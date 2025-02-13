document.addEventListener("DOMContentLoaded", function () {
    const formTitle = document.getElementById("form-title");
    const toggleFormText = document.getElementById("toggle-form");
    let isSignup = false;

    toggleFormText.addEventListener("click", function () {
        isSignup = !isSignup;
        formTitle.textContent = isSignup ? "Sign Up" : "Login";
        toggleFormText.innerHTML = isSignup 
            ? "<a href='#'>Login</a>" 
            : "<a href='#'>Sign up</a>";
    });

    document.getElementById("auth-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert(isSignup ? "Account Created! Redirecting..." : "Login Successful! Redirecting...");
        window.location.href = "index.html";
    });
});
