// Resume Data
const portfolioData = {
    experience: [
        {
            company: "Velocis Systems Noida",
            role: "Cloud Intern",
            period: "May 2025 – July 2025",
            description: [
                "Worked with AWS and Google Cloud (EC2, IAM, VPC, RDS, CloudFront, Load Balancer).",
                "Supported enterprise grade solutions, collaborating in fast-paced project environments."
            ]
        },
        {
            company: "Android Club VIT Chennai",
            role: "Operations Member",
            period: "June 2023 – Current",
            description: [
                "Organized and executed club events, delivering a UI/UX session during a seminar.",
                "Collaborated with project teams to ensure timely task execution.",
                "Contributed to operational improvements through leadership and process enhancements."
            ]
        },
        {
            company: "Microsoft Innovations Club VIT Chennai",
            role: "UI/UX Member",
            period: "September 2023 – November 2023",
            description: [
                "Optimized event club interfaces using advanced UI principles.",
                "Boosted user access by 30% and sped up event registrations by 20%."
            ]
        },
        {
            company: "Hackathons and Activities",
            role: "Participant",
            period: "Various",
            description: [
                "Core developer in Smart India Hackathon."
            ]
        }
    ],
    projects: [
        {
            title: "Bank Security System",
            category: "Database Systems",
            description: "A comprehensive bank management application ensuring data segregation and integrity with Role-Based Access Control (RBAC).",
            techStack: ["Python", "MySQL", "RBAC"],
            links: {
                github: "#",
                external: "#"
            }
        },
        {
            title: "Financial Data Dashboard",
            category: "Data Analytics",
            description: "Interactive PowerBI dashboard tracking sales, performance, and regional trends for ~15,000 records. Automated data cleaning with Excel.",
            techStack: ["PowerBI", "Excel", "Data Analytics"],
            links: {
                github: "#",
                external: "#"
            }
        },
        {
            title: "Table Detection Model",
            category: "Data Science",
            description: "Encoder-decoder deep learning model (TableNet-inspired) for table detection. Integrated OCR for automated tabular data extraction.",
            techStack: ["Deep Learning", "Python", "OCR", "VGG-19"],
            links: {
                github: "#",
                external: "#"
            }
        }
    ],
    skills: {
        "Core Concepts": ["Computer Architecture", "AI", "DBMS", "OS", "Computer Networks", "OOP"],
        "Languages": ["C", "C++", "Java", "JavaScript", "Python"],
        "Web/Tools": ["ReactJS", "Tailwind CSS", "HTML", "CSS", "Figma"],
        "Data Tools": ["SQL", "PowerBI", "Excel", "Tableau", "MySQL"],
        "Cloud": ["AWS (EC2, IAM, VPC, S3, RDS, CloudFront)"],
        "Hardware": ["Raspberry Pi", "Arduino"]
    }
};

// Render Functions
function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    portfolioData.experience.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`; // Alternating layout
        
        let descHtml = '';
        exp.description.forEach(point => {
            descHtml += `<li>${point}</li>`;
        });

        item.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.role} <span class="company">@ ${exp.company}</span></h3>
                <span class="date">${exp.period}</span>
                <ul>${descHtml}</ul>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;

    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        let stackHtml = '';
        project.techStack.forEach(tech => {
            stackHtml += `<span>${tech}</span>`;
        });

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="tech-stack">${stackHtml}</div>
            <div class="project-links">
                <a href="${project.links.github}" title="GitHub"><i class="fab fa-github"></i></a>
                <a href="${project.links.external}" title="External Link"><i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderSkills() {
    const container = document.getElementById('skills-list');
    if (!container) return;

    for (const [category, skills] of Object.entries(portfolioData.skills)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        let skillsHtml = '';
        skills.forEach(skill => {
            skillsHtml += `<span class="skill-tag">${skill}</span>`;
        });

        categoryDiv.innerHTML = `
            <h3>${category}</h3>
            <div class="skill-list">${skillsHtml}</div>
        `;
        container.appendChild(categoryDiv);
    }
}

// Initial Rendering
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderProjects();
    renderSkills();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real static site, you'd use Formspree or similar here
            const status = document.getElementById('form-status');
            status.textContent = "Thanks for the message! I'll get back to you soon. (This is a demo)";
            status.style.color = "#64ffda";
            status.style.marginTop = "10px";
            form.reset();
        });
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'var(--nav-bg)';
                navLinks.style.width = '100%';
                navLinks.style.padding = '20px';
            }
        });
    }
});
