
/* =====================================
   RIMON PORTFOLIO - JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // =================================
    // 1. ELEMENT SELECTORS
    // =================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const themeToggle = document.getElementById("themeToggle");
    const typingText = document.getElementById("typingText");
    const scrollProgress = document.getElementById("scrollProgress");
    const backToTop = document.getElementById("backToTop");
    const contactForm = document.getElementById("contactForm");

    // =================================
    // 2. MOBILE NAVIGATION
    // =================================

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

        // Close menu after clicking a link

        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

        // Close menu when clicking outside

        document.addEventListener("click", (event) => {

            if (
                navLinks.classList.contains("open") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    }

    // =================================
    // 3. DARK / LIGHT MODE
    // =================================

    const savedTheme = localStorage.getItem("rimon-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    function updateThemeIcon() {

        if (!themeToggle) return;

        const isLight =
            document.body.classList.contains("light-theme");

        themeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );

    }

    updateThemeIcon();

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light-theme");

            const currentTheme =
                document.body.classList.contains("light-theme")
                    ? "light"
                    : "dark";

            localStorage.setItem("rimon-theme", currentTheme);

            updateThemeIcon();

        });

    }

    // =================================
    // 4. TYPING ANIMATION
    // =================================

    if (typingText) {

        const words = [
            "Web Developer",
            "Computer Engineering Student",
            "Programmer",
            "Creative Thinker"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingText.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;
                }

            } else {

                typingText.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            const speed = deleting ? 45 : 100;

            setTimeout(typeEffect, speed);

        }

        typeEffect();

    }

    // =================================
    // 5. SCROLL REVEAL ANIMATION
    // =================================

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }

    // =================================
    // 6. SKILL BAR ANIMATION
    // =================================

    const skillBars = document.querySelectorAll(".skill-bar span");

    if ("IntersectionObserver" in window) {

        const skillObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const bar = entry.target;

                        bar.style.width =
                            bar.getAttribute("data-width");

                        observer.unobserve(bar);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });

    } else {

        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });

    }

    // =================================
    // 7. SCROLL PROGRESS + BACK TO TOP
    // =================================

    function handleScroll() {

        const scrollTop =
            window.scrollY || document.documentElement.scrollTop;

        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        if (scrollProgress) {
            scrollProgress.style.width = progress + "%";
        }

        if (backToTop) {
            backToTop.classList.toggle("show", scrollTop > 400);
        }

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // =================================
    // 8. ACTIVE NAVIGATION LINK
    // =================================

    const sections = document.querySelectorAll("main section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");

    if ("IntersectionObserver" in window) {

        const sectionObserver = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const sectionId = entry.target.id;

                        navigationLinks.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === "#" + sectionId
                            );

                        });

                    }

                });

            },
            {
                rootMargin: "-25% 0px -65% 0px"
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });

    }

    // =================================
    // 9. CONTACT FORM
    // =================================

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                document.getElementById("userName").value.trim();

            const email =
                document.getElementById("userEmail").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const formNote =
                document.getElementById("formNote");

            if (!name || !email || !subject || !message) {

                formNote.textContent =
                    "Please complete all fields.";

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formNote.textContent =
                    "Please enter a valid email address.";

                return;

            }

            const recipient =
                "sojibhossainrimon@gmail.com";

            const emailSubject =
                encodeURIComponent(subject);

            const emailBody =
                encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );

            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + emailSubject +
                "&body=" + emailBody;

            formNote.textContent =
                "Opening your email application...";

            window.location.href = mailtoLink;

        });

    }

    // =================================
    // 10. AUTOMATIC COPYRIGHT YEAR
    // =================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // =================================
    // 11. CONSOLE MESSAGE
    // =================================

    console.log(
        "%c Welcome to Rimon's Portfolio! ",
        "background: #8b5cf6; color: white; font-size: 16px; padding: 10px;"
    );

});
