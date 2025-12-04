function changeMessage() {

    const messageArea = document.getElementById("messageArea");
    messageArea.innerText = "You clicked the button! JS is working correctly.";
    messageArea.style.color = "green";
    messageArea.style.fontWeight = "bold";

    const mainHeading = document.querySelector("header h1");
    mainHeading.innerText = "Welcome to My Updated Website!";
    mainHeading.style.color = "#ff6600";

    const heroImage = document.querySelector(".hero img");
    heroImage.src = "images/cat.jpg";
    heroImage.alt = "Updated banner image";

    const heroTagline = document.querySelector(".hero h2");
    heroTagline.innerText = "Your Tagline Has Been Updated!";
}