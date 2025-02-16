
    document.addEventListener("scroll", function () {
        const heroText = document.querySelector(".hero-section-text");
        const typedOut1 = document.querySelector(".typed-out1");
        const typedOut2 = document.querySelector(".typed-out2");

        let scrollPercentage = (window.scrollY / document.documentElement.scrollHeight) * 100;

        if (scrollPercentage > 8) {
            heroText.style.opacity = "0";
            if (typedOut1) typedOut1.style.opacity = "0";
            if (typedOut2) typedOut2.style.opacity = "0";
        } 
        else {
            heroText.style.opacity = "1";
            if (typedOut1) typedOut1.style.opacity = "1";
            if (typedOut2) typedOut2.style.opacity = "1";
        }
    });