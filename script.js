// Resume Data
const portfolioData = {
    experience: [
        {
            company: "Velocis Systems Noida",
            role: "Cloud Intern",
            period: "June 2025 – July 2025",
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
            title: "Gastro-XAI",
            category: "AI / Medical Imaging",
            description: "Explainable AI system for gastrointestinal disease classification and polyp segmentation using deep learning with Grad-CAM visualizations and automated report generation.",
            techStack: ["Python", "PyTorch", "Flask", "React", "Grad-CAM"],
            links: {
                github: "https://github.com/sarthakpapneja/Gastro-XAI",
                external: "#"
            }
        },
        {
            title: "ModelAuditAI",
            category: "AI / ML Auditing",
            description: "A production-grade machine learning audit system designed to evaluate models for Performance, Fairness, Drift, Overfitting, and Leakage. Provides comprehensive model health reports.",
            techStack: ["TypeScript", "React", "Python", "FastAPI", "AI/ML"],
            links: {
                github: "https://github.com/sarthakpapneja/ML-Auditor",
                external: "#"
            }
        },
        {
            title: "Resume Analyzer",
            category: "AI / NLP",
            description: "Intelligent resume parsing and analysis tool that provides actionable insights, skill gap analysis, and ATS compatibility scoring for job seekers.",
            techStack: ["TypeScript", "React", "Python", "NLP"],
            links: {
                github: "https://github.com/sarthakpapneja/resume-analyzer",
                external: "#"
            }
        },

        {
            title: "Finance Track",
            category: "Full-Stack / FinTech",
            description: "MERN stack finance tracker with transaction management, balance calculation, data visualization, and a modern responsive dashboard interface.",
            techStack: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
            links: {
                github: "https://github.com/sarthakpapneja/Finance-Track",
                external: "#"
            }
        },
        {
            title: "Regulatory Reporting Assistant",
            category: "AI / FinTech",
            description: "AI-powered assistant for regulatory compliance and financial reporting, streamlining complex reporting workflows with intelligent automation.",
            techStack: ["Python", "Flask", "AI/ML"],
            links: {
                github: "https://github.com/sarthakpapneja/Regulatory-Reporting-Assistant",
                external: "#"
            }
        },
        {
            title: "RoadVision VMS",
            category: "Computer Vision",
            description: "Vehicle Management System leveraging computer vision for road monitoring, traffic analysis, and automated vehicle tracking.",
            techStack: ["Python", "Computer Vision", "Deep Learning"],
            links: {
                github: "https://github.com/sarthakpapneja/RoadVision-VMS",
                external: "#"
            }
        },
        {
            title: "School Website",
            category: "Web Development",
            description: "Full-featured school website with dynamic content, event management, video integration, and a modern responsive design celebrating the institution.",
            techStack: ["JavaScript", "React", "Vite", "CSS"],
            links: {
                github: "https://github.com/sarthakpapneja/school-website-",
                external: "https://school-website-murex-seven.vercel.app/"
            }
        },
        {
            title: "Bank Security System",
            category: "Database Systems",
            description: "A comprehensive bank management application ensuring data segregation and integrity with Role-Based Access Control (RBAC).",
            techStack: ["Python", "MySQL", "RBAC"],
            links: {
                github: "https://github.com/sarthakpapneja/banksecuritysystem",
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
                external: "https://colab.research.google.com/drive/1xpn7qXNKuUoMzCklZjbyLiv23v8SheIN?usp=sharing"
            }
        }
    ],
    research: [
        {
            title: "Q-Notary: A Decentralized, Quantum-Resistant Notary for Verifiable Collaborative Workflows",
            authors: "Sarthak Papneja, Romit Gupta, Dr. Neelanarayanan V",
            journal: "International Journal of Versatile Research and Analysis (IJVRA)",
            volume: "Vol 4, Issue 1",
            date: "January 2026",
            doi: "10.13140/RG.2.2.35802.20169",
            abstract: "Long-lived digital records are at risk from advances in quantum computing that threaten classical signature schemes. We present Q-Notary, a decentralized, post-quantum secure notary framework integrating SPHINCS+, IPFS, and W3C Verifiable Credentials for portable, tamper-evident notarizations and a Verifiable Workflow Chain for collaborative approvals.",
            keywords: ["Post-Quantum Cryptography", "SPHINCS+", "IPFS", "Verifiable Credentials", "Decentralized Notary", "Quantum-Resistant Security"],
            link: "https://www.researchgate.net/publication/399985730_Q-Notary_A_Decentralized_Quantum-Resistant_Notary_for_Verifiable_Collaborative_Workflows"
        }
    ],
    skills: {
        "Core Concepts": ["Computer Architecture", "AI", "DBMS", "OS", "Computer Networks", "OOP"],
        "Languages": ["C", "C++", "Java", "JavaScript", "Python", "TypeScript"],
        "Web/Tools": ["ReactJS", "Next.js", "Tailwind CSS", "HTML", "CSS", "Figma", "Flask", "FastAPI", "Node.js"],
        "AI/ML": ["PyTorch", "Deep Learning", "Computer Vision", "NLP", "Grad-CAM", "XAI"],
        "Data Tools": ["SQL", "PowerBI", "Excel", "Tableau", "MySQL", "MongoDB"],
        "Cloud": ["AWS (EC2, IAM, VPC, S3, RDS, CloudFront)"],
        "Hardware": ["Raspberry Pi", "Arduino"],
        "AI/ML": ["Computer Vision", "NLP", "Explainable AI (XAI)", "Deep Learning", "PyTorch", "Streamlit"]
    }
};

// Render Functions
function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    portfolioData.experience.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

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

        const githubLink = project.links.github !== '#'
            ? `<a href="${project.links.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>`
            : '';
        const externalLink = project.links.external !== '#'
            ? `<a href="${project.links.external}" target="_blank" title="External Link"><i class="fas fa-external-link-alt"></i></a>`
            : '';

        card.innerHTML = `
            <div class="project-header">
                <i class="fas fa-folder-open project-icon"></i>
                <div class="project-links">
                    ${githubLink}
                    ${externalLink}
                </div>
            </div>
            <h3>${project.title}</h3>
            <p class="project-category">${project.category}</p>
            <p class="project-desc">${project.description}</p>
            <div class="tech-stack">${stackHtml}</div>
        `;
        container.appendChild(card);
    });
}

function renderResearch() {
    const container = document.getElementById('research-list');
    if (!container) return;

    portfolioData.research.forEach(paper => {
        const card = document.createElement('div');
        card.className = 'research-card';

        let keywordsHtml = '';
        paper.keywords.forEach(kw => {
            keywordsHtml += `<span class="research-keyword">${kw}</span>`;
        });

        card.innerHTML = `
            <div class="research-icon-row">
                <i class="fas fa-file-alt research-icon"></i>
                <a href="${paper.link}" target="_blank" class="research-link" title="View on ResearchGate">
                    <i class="fab fa-researchgate"></i>
                </a>
            </div>
            <h3 class="research-title">${paper.title}</h3>
            <p class="research-authors"><i class="fas fa-users"></i> ${paper.authors}</p>
            <div class="research-meta">
                <span class="research-journal"><i class="fas fa-book"></i> ${paper.journal}</span>
                <span class="research-date"><i class="fas fa-calendar-alt"></i> ${paper.date} · ${paper.volume}</span>
                <span class="research-doi"><i class="fas fa-link"></i> DOI: ${paper.doi}</span>
            </div>
            <p class="research-abstract">${paper.abstract}</p>
            <div class="research-keywords">${keywordsHtml}</div>
            <a href="${paper.link}" target="_blank" class="btn primary research-btn">
                <i class="fab fa-researchgate"></i> View on ResearchGate
            </a>
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
    renderResearch();
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

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .research-card, .skill-category, .timeline-item').forEach(el => {
        el.classList.add('animate-target');
        observer.observe(el);
    });
});
