document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Content Data (Highly Customizable) ---
    // Modify these arrays to update your portfolio sections easily.

    const skillsData = [
        { name: "HTML5", icon: "fab fa-html5", description: "Semantic structuring" },
        { name: "CSS3", icon: "fab fa-css3-alt", description: "Responsive design, animations" },
        { name: "JavaScript (ES6+)", icon: "fab fa-js", description: "Interactive web apps" },
        { name: "React.js", icon: "fab fa-react", description: "Component-based UIs" },
        { name: "Node.js", icon: "fab fa-node-js", description: "Backend development" },
        { name: "Express.js", icon: "fas fa-server", description: "RESTful APIs" },
        { name: "MongoDB", icon: "fas fa-database", description: "NoSQL databases" },
        { name: "PostgreSQL", icon: "fas fa-database", description: "Relational databases" },
        { name: "Python", icon: "fab fa-python", description: "Scripting, web scraping" },
        { name: "Git & GitHub", icon: "fab fa-github", description: "Version control" },
        { name: "Sass", icon: "fab fa-sass", description: "Advanced CSS preprocessor" },
        { name: "Figma", icon: "fab fa-figma", description: "UI/UX Prototyping" },
        // Add more skills as needed
    ];

    const projectsData = [
        {
            category: "Web Development",
            title: "Project Nexus E-commerce",
            description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features user authentication, product catalog, shopping cart, and admin panel.",
            tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
            imageUrl: "assets/images/project1.jpg",
            liveLink: "https://nexus-ecommerce.netlify.app", // Replace with actual link
            githubLink: "https://github.com/saksham-sharma/project-nexus" // Replace with actual link
        },
        {
            category: "UI/UX Design",
            title: "Minimalist Portfolio Design",
            description: "Designed and prototyped a clean, modern portfolio website focusing on user experience and engaging animations using Figma.",
            tech: ["Figma", "UI/UX Principles", "Prototyping"],
            imageUrl: "assets/images/project2.jpg",
            liveLink: "#", // Design only, no live link perhaps
            githubLink: "#" // Or link to design files/case study
        },
        {
            category: "Backend Development",
            title: "Task Management API",
            description: "A robust RESTful API for managing tasks, users, and projects with authentication and authorization features.",
            tech: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"],
            imageUrl: "assets/images/project3.jpg",
            liveLink: "#", // API usually doesn't have a direct live link
            githubLink: "https://github.com/saksham-sharma/task-api" // Replace with actual link
        },
        {
            category: "Data Visualization",
            title: "COVID-19 Tracker Dashboard",
            description: "Interactive dashboard visualizing global COVID-19 data using Chart.js and a public API, offering insights into trends and statistics.",
            tech: ["HTML", "CSS", "JavaScript", "Chart.js", "API Integration"],
            imageUrl: "assets/images/project4.jpg",
            liveLink: "https://covid-tracker-dashboard.netlify.app", // Replace
            githubLink: "https://github.com/saksham-sharma/covid-tracker" // Replace
        },
        // Add more projects here
    ];

    const experienceData = [
        {
            role: "Full Stack Developer Intern",
            company: "Innovate Solutions",
            duration: "Jan 2024 - Present",
            responsibilities: [
                "Developed and maintained responsive user interfaces using React and Redux.",
                "Collaborated with design teams to translate UI/UX wireframes into high-quality code.",
                "Implemented RESTful APIs using Node.js and Express, integrating with MongoDB.",
                "Participated in agile development sprints, contributing to daily stand-ups and code reviews."
            ]
        },
        {
            role: "Freelance Web Developer",
            company: "Self-Employed",
            duration: "Mar 2023 - Dec 2023",
            responsibilities: [
                "Designed and developed custom websites for small businesses and individuals.",
                "Managed client communications, project timelines, and deliverables.",
                "Utilized WordPress, custom HTML/CSS/JS, and basic PHP for various projects."
            ]
        },
        {
            role: "B.Tech in Computer Science",
            company: "ABC University",
            duration: "Aug 2020 - May 2024",
            responsibilities: [
                "GPA: 8.5/10",
                "Specialized in Web Technologies and Database Management.",
                "Completed major project on 'AI-Powered Recommendation System'."
            ]
        }
        // Add more experience/education entries
    ];

    // --- DOM Elements ---
    const preloader = document.querySelector('.preloader');
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const customCursor = document.querySelector('.custom-cursor');
    const skillsGrid = document.getElementById('skillsGrid');
    const projectsGrid = document.getElementById('projectsGrid');
    const experienceTimeline = document.getElementById('experienceTimeline');
    const sections = document.querySelectorAll('section'); // All sections for scroll animation

    // --- Preloader Functionality ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflowY = 'auto'; // Re-enable scroll after preloader
        }, 1000); // Hide after 1 second
    });

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Hamburger Menu Toggle ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Custom Cursor (Advanced Feature) ---
    // Only enable if you want this specific effect, otherwise remove this block
    if (customCursor) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let speed = 0.2; // Adjust for smoother/faster movement

        function animateCursor() {
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            customCursor.style.left = `${cursorX}px`;
            customCursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animateCursor);
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Show/hide cursor on body enter/leave
        document.body.addEventListener('mouseenter', () => {
            customCursor.style.opacity = 1;
            customCursor.style.visibility = 'visible';
            animateCursor(); // Start animation loop
        });
        document.body.addEventListener('mouseleave', () => {
            customCursor.style.opacity = 0;
            customCursor.style.visibility = 'hidden';
        });

        // Add 'active' class on interactive elements hover
        document.querySelectorAll('a, button, input[type="submit"], .project-card, .skill-card').forEach(el => {
            el.addEventListener('mouseenter', () => customCursor.classList.add('active'));
            el.addEventListener('mouseleave', () => customCursor.classList.remove('active'));
        });
    }


    // --- Dynamic Content Rendering ---

    function renderSkills() {
        skillsGrid.innerHTML = skillsData.map(skill => `
            <div class="skill-card animate-skill-entry">
                <i class="${skill.icon} skill-icon"></i>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
            </div>
        `).join('');
    }

    function renderProjects() {
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card animate-project-entry">
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="project-info">
                    <span class="project-category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.liveLink && project.liveLink !== '#' ? `<a href="${project.liveLink}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : ''}
                        ${project.githubLink && project.githubLink !== '#' ? `<a href="${project.githubLink}" target="_blank" title="GitHub Repo"><i class="fab fa-github"></i></a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderExperience() {
        experienceTimeline.innerHTML = experienceData.map((exp, index) => `
            <div class="timeline-item animate-timeline-entry" style="transition-delay: ${index * 0.15}s;">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${exp.role} <span class="company-name">@ ${exp.company}</span></h3>
                    <p class="timeline-date">${exp.duration}</p>
                    <ul>
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }


    // --- Scroll-Triggered Animations (Intersection Observer) ---
    // This is crucial for the "astonishing" effect.

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // For staggered animations within grids, apply visibility to children
                if (entry.target.id === 'skills') {
                    Array.from(skillsGrid.children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                        child.style.opacity = 1;
                        child.style.transform = 'translateY(0)';
                    });
                }
                if (entry.target.id === 'projects') {
                    Array.from(projectsGrid.children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                        child.style.opacity = 1;
                        child.style.transform = 'translateY(0)';
                    });
                }
                if (entry.target.id === 'experience') {
                    Array.from(experienceTimeline.children).forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`;
                        child.style.opacity = 1;
                        child.style.transform = 'translateY(0)';
                    });
                }

                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Observe hero section specific elements (if they have individual animations)
    const heroContentChildren = document.querySelectorAll('.hero-content > *:not(.hero-illustration)');
    heroContentChildren.forEach(child => {
        sectionObserver.observe(child); // Observe for initial fade-in
    });
    const heroIllustration = document.querySelector('.hero-illustration');
    if (heroIllustration) {
        sectionObserver.observe(heroIllustration);
    }


    // --- Initial Calls ---
    renderSkills();
    renderProjects();
    renderExperience();
});