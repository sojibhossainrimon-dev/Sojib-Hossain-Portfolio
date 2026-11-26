
/* =====================================
   Sojib Hossain PORTFOLIO - JAVASCRIPT
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
    // 1A. ENGLISH / BANGLA LANGUAGE SWITCHER
    // =================================

    const languageToggle = document.getElementById("languageToggle");
    let currentLanguage = "en";

    const translations = {
        bn: {
            "#navLinks li:nth-child(1) a": "হোম",
            "#navLinks li:nth-child(2) a": "আমার সম্পর্কে",
            "#navLinks li:nth-child(3) a": "দক্ষতা",
            "#navLinks li:nth-child(4) a": "প্রজেক্ট",
            "#navLinks li:nth-child(5) a": "শিক্ষাগত যোগ্যতা",
            "#navLinks li:nth-child(6) a": "যোগাযোগ",
            ".nav-btn": "আমাকে নিয়োগ দিন",
            ".hero-subtitle": "আমার পোর্টফোলিওতে স্বাগতম",
            ".hero-content h1": "হ্যালো, আমি",
            ".hero-content h2": "আমি একজন",
            ".hero-description": "আমি কম্পিউটার ইঞ্জিনিয়ারিংয়ের একজন শিক্ষার্থী এবং ওয়েব ডেভেলপার হওয়ার স্বপ্ন দেখি। নতুন প্রযুক্তি শিখতে, রেসপনসিভ ওয়েবসাইট তৈরি করতে এবং আধুনিক ডিজিটাল অভিজ্ঞতা গড়ে তুলতে ভালোবাসি।",
            ".hero-buttons .primary-btn": "সিভি ডাউনলোড",
            ".hero-buttons .secondary-btn": "যোগাযোগ করুন",
            ".card-one span": "সৃজনশীল কোডিং",
            ".card-two span": "ওয়েব ডেভেলপমেন্ট",
            ".card-three span": "ভবিষ্যৎমুখী",
            ".scroll-down span": "নিচে স্ক্রল করুন",
            ".about-section .section-tag": "আমার সম্পর্কে জানুন",
            ".about-section .section-heading h2": "আমার",
            ".about-section .section-heading p": "আমি প্রযুক্তি, প্রোগ্রামিং এবং আধুনিক ওয়েব ডেভেলপমেন্টে আগ্রহী। আমার লক্ষ্য হলো প্রতিনিয়ত দক্ষতা বাড়ানো এবং কার্যকর ডিজিটাল সমাধান তৈরি করা।",
            ".about-text h3": "ভাবনাকে ডিজিটাল অভিজ্ঞতায় রূপ দেওয়া",
            ".about-text p:first-of-type": "আমি বর্তমানে ডিপ্লোমা ইন কম্পিউটার ইঞ্জিনিয়ারিংয়ে পড়াশোনা করছি। HTML, CSS ও JavaScript নিয়ে কাজ করার পাশাপাশি Java এবং Python-এর মতো প্রোগ্রামিং ভাষা শিখছি।",
            ".about-text p:nth-of-type(2)": "আমি মনে করি নিয়মিত শেখা, সৃজনশীল চিন্তা এবং বাস্তব অভিজ্ঞতা খুবই গুরুত্বপূর্ণ। একজন দক্ষ ওয়েব ডেভেলপার হওয়ার লক্ষ্যে কাজ করছি।",
            ".text-link": "আমার প্রজেক্টগুলো দেখুন",
            ".info-card:nth-child(1) span": "নাম",
            ".info-card:nth-child(2) span": "ইমেইল",
            ".info-card:nth-child(3) span": "শিক্ষাগত যোগ্যতা",
            ".info-card:nth-child(3) h4": "ডিপ্লোমা ইন কম্পিউটার ইঞ্জিনিয়ারিং",
            ".info-card:nth-child(4) span": "অবস্থান",
            ".info-card:nth-child(4) h4": "বাংলাদেশ",
            ".skills-section .section-tag": "আমার দক্ষতা",
            ".skills-section .section-heading h2": "আমার",
            ".skills-section .section-heading p": "যেসব প্রযুক্তি ও প্রোগ্রামিং ভাষা বর্তমানে শিখছি এবং অনুশীলন করছি।",
            ".skill-card:nth-child(1) p": "ওয়েব পেজের কাঠামো",
            ".skill-card:nth-child(2) p": "ওয়েব ডিজাইন ও রেসপনসিভ লেআউট",
            ".skill-card:nth-child(3) p": "ইন্টারঅ্যাকটিভ ওয়েবসাইট",
            ".skill-card:nth-child(4) p": "প্রোগ্রামিংয়ের মৌলিক বিষয়",
            ".skill-card:nth-child(5) p": "প্রোগ্রামিংয়ের প্রাথমিক ধারণা",
            ".skill-card:nth-child(6) p": "ভার্সন কন্ট্রোলের প্রাথমিক ধারণা",
            ".projects-section .section-tag": "আমার সাম্প্রতিক কাজ",
            ".projects-section .section-heading h2": "আমার",
            ".projects-section .section-heading p": "শেখার পাশাপাশি তৈরি করা কিছু ব্যক্তিগত প্রজেক্ট ও অনুশীলনমূলক কাজ।",
            ".project-card:nth-child(1) .project-category": "ওয়েব ডিজাইন",
            ".project-card:nth-child(1) h3": "ব্যক্তিগত পোর্টফোলিও",
            ".project-card:nth-child(1) p": "HTML, CSS এবং JavaScript ব্যবহার করে তৈরি একটি রেসপনসিভ ব্যক্তিগত ওয়েবসাইট।",
            ".project-card:nth-child(2) .project-category": "প্রোগ্রামিং",
            ".project-card:nth-child(2) h3": "জাভা ক্যালকুলেটর",
            ".project-card:nth-child(2) p": "মৌলিক গণনা প্রদর্শনের জন্য তৈরি একটি প্রাথমিক প্রোগ্রামিং প্রজেক্ট।",
            ".project-card:nth-child(3) .project-category": "ওয়েব ডেভেলপমেন্ট",
            ".project-card:nth-child(3) h3": "রেসপনসিভ ওয়েব লেআউট",
            ".project-card:nth-child(3) p": "রেসপনসিভ ডিজাইন এবং লেআউটের ওপর ভিত্তি করে তৈরি একটি অনুশীলনমূলক ওয়েবসাইট।",
            ".project-card:nth-child(1) .project-link": "প্রজেক্ট দেখুন",
            ".project-card:nth-child(2) .project-link": "প্রজেক্ট দেখুন",
            ".project-card:nth-child(3) .project-link": "প্রজেক্ট দেখুন",
            ".education-section .section-tag": "আমার পথচলা",
            ".education-section .section-heading h2": "শিক্ষা",
            ".education-section .section-heading p": "আমার শিক্ষাগত যোগ্যতা এবং শেখার অভিজ্ঞতা।",
            ".timeline-item:nth-child(1) h3": "ডিপ্লোমা ইন কম্পিউটার ইঞ্জিনিয়ারিং",
            ".timeline-item:nth-child(2) .timeline-date": "চলমান",
            ".timeline-item:nth-child(1) p": "কম্পিউটার ইঞ্জিনিয়ারিং, প্রোগ্রামিং, নেটওয়ার্কিং এবং আধুনিক প্রযুক্তি সম্পর্কে শিখছি।",
            ".timeline-item:nth-child(2) h3": "ওয়েব ডেভেলপমেন্ট শেখা",
            ".timeline-item:nth-child(2) h4": "নিজে শেখা ও অনুশীলন",
            ".timeline-item:nth-child(2) p": "HTML, CSS, JavaScript অনুশীলন করছি এবং ব্যক্তিগত প্রজেক্ট তৈরি করছি।",
            ".contact-section .section-tag": "যোগাযোগ করুন",
            ".contact-section .section-heading h2": "যোগাযোগ",
            ".contact-section .section-heading p": "আপনার কোনো প্রজেক্ট বা কাজের সুযোগ আছে? নির্দ্বিধায় যোগাযোগ করুন।",
            ".contact-info h3": "চলুন একসঙ্গে কাজ করি",
            ".contact-info > p": "আমি সবসময় নতুন কিছু শিখতে, একসঙ্গে কাজ করতে এবং নতুন সুযোগ অন্বেষণ করতে আগ্রহী।",
            ".contact-form h3": "আমাকে একটি বার্তা পাঠান",
            "#userName": "আপনার নাম",
            "#userEmail": "আপনার ইমেইল",
            "#subject": "বিষয়",
            "#message": "আপনার বার্তা লিখুন...",
            ".contact-form button": "বার্তা পাঠান",
            "#formNote": "বার্তা পাঠাতে আপনার ইমেইল অ্যাপ খুলবে।",
            ".footer-content > p:first-of-type": "ডিজিটাল ক্রিয়েটর | ওয়েব ডেভেলপার",
            ".copyright": "সর্বস্বত্ব সংরক্ষিত।"
        },
        en: {
            "#navLinks li:nth-child(1) a": "Home",
            "#navLinks li:nth-child(2) a": "About",
            "#navLinks li:nth-child(3) a": "Skills",
            "#navLinks li:nth-child(4) a": "Projects",
            "#navLinks li:nth-child(5) a": "Education",
            "#navLinks li:nth-child(6) a": "Contact",
            ".nav-btn": "Hire Me",
            ".hero-subtitle": "Welcome to my portfolio",
            ".hero-content h1": "Hi, I'm",
            ".hero-content h2": "I'm a",
            ".hero-description": "I am a Computer Engineering student and aspiring web developer. I enjoy learning new technologies, building responsive websites and creating modern digital experiences.",
            ".hero-buttons .primary-btn": "Download CV",
            ".hero-buttons .secondary-btn": "Contact Me",
            ".card-one span": "Creative Coding",
            ".card-two span": "Web Development",
            ".card-three span": "Future Focus",
            ".scroll-down span": "Scroll Down",
            ".about-section .section-tag": "GET TO KNOW ME",
            ".about-section .section-heading h2": "About",
            ".about-section .section-heading p": "I am passionate about technology, programming and modern web development. My goal is to continuously improve my skills and create useful digital solutions.",
            ".about-text h3": "Turning Ideas Into Digital Experiences",
            ".about-text p:first-of-type": "I am currently studying Diploma in Computer Engineering. I enjoy working with HTML, CSS and JavaScript while exploring programming languages such as Java and Python.",
            ".about-text p:nth-of-type(2)": "I believe in continuous learning, creative thinking and practical experience. I am working towards becoming a skilled web developer.",
            ".text-link": "Explore My Projects",
            ".info-card:nth-child(1) span": "Name",
            ".info-card:nth-child(2) span": "Email",
            ".info-card:nth-child(3) span": "Education",
            ".info-card:nth-child(3) h4": "Diploma in Computer Engineering",
            ".info-card:nth-child(4) span": "Location",
            ".info-card:nth-child(4) h4": "Bangladesh",
            ".skills-section .section-tag": "MY EXPERTISE",
            ".skills-section .section-heading h2": "My",
            ".skills-section .section-heading p": "Technologies and programming languages I am currently learning and practicing.",
            ".skill-card:nth-child(1) p": "Web Structure",
            ".skill-card:nth-child(2) p": "Web Design & Responsive Layout",
            ".skill-card:nth-child(3) p": "Interactive Websites",
            ".skill-card:nth-child(4) p": "Programming Fundamentals",
            ".skill-card:nth-child(5) p": "Programming Basics",
            ".skill-card:nth-child(6) p": "Version Control Basics",
            ".projects-section .section-tag": "MY RECENT WORK",
            ".projects-section .section-heading h2": "My",
            ".projects-section .section-heading p": "Some personal projects and practical exercises I am building while learning.",
            ".project-card:nth-child(1) .project-category": "WEB DESIGN",
            ".project-card:nth-child(1) h3": "Personal Portfolio",
            ".project-card:nth-child(1) p": "A responsive personal website built using HTML, CSS and JavaScript.",
            ".project-card:nth-child(2) .project-category": "PROGRAMMING",
            ".project-card:nth-child(2) h3": "Java Calculator",
            ".project-card:nth-child(2) p": "A beginner programming project demonstrating basic calculations.",
            ".project-card:nth-child(3) .project-category": "WEB DEVELOPMENT",
            ".project-card:nth-child(3) h3": "Responsive Web Layout",
            ".project-card:nth-child(3) p": "A practice website focused on responsive design and layouts.",
            ".project-card:nth-child(1) .project-link": "View Project",
            ".project-card:nth-child(2) .project-link": "View Project",
            ".project-card:nth-child(3) .project-link": "View Project",
            ".education-section .section-tag": "MY JOURNEY",
            ".education-section .section-heading h2": "Education &",
            ".education-section .section-heading p": "My academic background and learning journey.",
            ".timeline-item:nth-child(1) h3": "Diploma in Computer Engineering",
            ".timeline-item:nth-child(1) p": "Learning computer engineering, programming, networking and modern technologies.",
            ".timeline-item:nth-child(2) h3": "Web Development Learning",
            ".timeline-item:nth-child(2) h4": "Self Learning & Practice",
            ".timeline-item:nth-child(2) p": "Practicing HTML, CSS, JavaScript and building personal projects.",
            ".contact-section .section-tag": "GET IN TOUCH",
            ".contact-section .section-heading h2": "Contact",
            ".contact-section .section-heading p": "Have a project or opportunity? Feel free to get in touch.",
            ".contact-info h3": "Let's Work Together",
            ".contact-info > p": "I am always interested in learning, collaborating and exploring new opportunities.",
            ".contact-form h3": "Send Me a Message",
            "#userName": "Your Name",
            "#userEmail": "Your Email",
            "#subject": "Subject",
            "#message": "Write your message...",
            ".contact-form button": "Send Message",
            "#formNote": "Your email app will open to send the message.",
            ".footer-content > p:first-of-type": "DIGITAL CREATOR | WEB DEVELOPER",
            ".copyright": "All Rights Reserved."
        }
    };

    function setVisibleText(element, value) {
        if (!element) return;
        const firstElement = Array.from(element.childNodes).find(node => node.nodeType === Node.ELEMENT_NODE);
        if (firstElement) {
            const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
            if (textNode) textNode.textContent = " " + value + " ";
            else element.insertBefore(document.createTextNode(value + " "), firstElement);
        } else {
            element.textContent = value;
        }
    }

    function applyLanguage(language) {
        currentLanguage = language;
        document.documentElement.lang = language === "bn" ? "bn" : "en";

        Object.entries(translations[language]).forEach(([selector, value]) => {
            const element = document.querySelector(selector);
            if (!element) return;
            if (element.matches("input, textarea")) {
                element.placeholder = value;
            } else {
                setVisibleText(element, value);
            }
        });

        // Preserve the gradient words in section headings.
        const headingWords = language === "bn"
            ? { skills: "দক্ষতাসমূহ", projects: "প্রজেক্টসমূহ", education: "ও শেখা", contact: "করুন", about: "সম্পর্কে" }
            : { skills: "Skills", projects: "Projects", education: "Learning", contact: "Me", about: "Me" };
        ["skills", "projects", "education", "contact", "about"].forEach(section => {
            const heading = document.querySelector(`#${section} .section-heading h2`);
            const gradient = heading && heading.querySelector(".gradient-text");
            if (gradient) gradient.textContent = headingWords[section];
        });

        if (languageToggle) {
            languageToggle.textContent = language === "bn" ? "English" : "বাংলা";
            languageToggle.setAttribute("aria-label", language === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন");
            languageToggle.setAttribute("lang", language === "bn" ? "en" : "bn");
        }

        if (typingText) {
            const words = language === "bn"
                ? ["ওয়েব ডেভেলপার", "কম্পিউটার ইঞ্জিনিয়ারিং শিক্ষার্থী", "প্রোগ্রামার", "সৃজনশীল চিন্তাবিদ"]
                : ["Web Developer", "Computer Engineering Student", "Programmer", "Creative Thinker"];
            typingText.dataset.words = JSON.stringify(words);
            typingText.textContent = words[0];
        }
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            applyLanguage(currentLanguage === "en" ? "bn" : "en");
        });
    }

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

    const savedTheme = localStorage.getItem("Sojib-Hossain-theme");

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

            localStorage.setItem("Sojib-Hossain-theme", currentTheme);

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

            const activeWords = typingText.dataset.words
                ? JSON.parse(typingText.dataset.words)
                : words;
            const currentWord = activeWords[wordIndex % activeWords.length];

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

                    wordIndex = (wordIndex + 1) % activeWords.length;

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

                formNote.textContent = currentLanguage === "bn"
                    ? "অনুগ্রহ করে সব ঘর পূরণ করুন."
                    : "Please complete all fields.";

                return;

            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formNote.textContent = currentLanguage === "bn"
                    ? "অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন."
                    : "Please enter a valid email address.";

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

            formNote.textContent = currentLanguage === "bn"
                ? "আপনার ইমেইল অ্যাপ খোলা হচ্ছে..."
                : "Opening your email application...";

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
        "%c Welcome to Sojib Hossain's Portfolio! ",
        "background: #8b5cf6; color: white; font-size: 16px; padding: 10px;"
    );

});
