document.addEventListener("DOMContentLoaded", () => {
    // Name displacement effect
    const displacedContainer = document.querySelector(".displaced-container");
    const names = document.querySelectorAll(".displaced-container .name");

    displacedContainer.addEventListener("mouseenter", () => {
        names[1].style.transform = "translateY(5px)";
        names[2].style.transform = "translateY(10px)";
    });

    displacedContainer.addEventListener("mouseleave", () => {
        names.forEach(name => name.style.transform = "translateY(0)");
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission (Example: Log form input)
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert("Your message has been sent!");
        form.reset();
    });

    // Button click effect
    const glassCta = document.querySelector(".glass-cta");
    glassCta.addEventListener("click", () => {
        alert("Let's Work Together! Feel free to contact me.");
    });

    // Image hover effect
    const profileImage = document.querySelector(".profile-image");
    
    profileImage.addEventListener("mouseenter", () => {
        profileImage.style.transform = "scale(1.05)";
        profileImage.style.boxShadow = "0px 10px 30px rgba(0, 173, 181, 0.5)";
    });

    profileImage.addEventListener("mouseleave", () => {
        profileImage.style.transform = "scale(1)";
        profileImage.style.boxShadow = "none";
    });

    // Parallax effect on scroll
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        profileImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
});

// function toggleMenu() {
//     document.querySelector(".nav-links").classList.toggle("active");
// }


