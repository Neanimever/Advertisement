const changeTheme = document.querySelector("#change-theme");

function toggleDark()   {
    document.body.classList.toggle("dark");
}

function userTheme()   {
    const darkMode = localStorage.getItem("dark");

    if(darkMode)    {
        toggleDark();
    }
}

userTheme();

changeTheme.addEventListener("change", () => {
    toggleDark();

    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark"))    {
        localStorage.setItem("dark", 1);
    }
})