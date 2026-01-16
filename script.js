// Version selection logic
document.addEventListener('DOMContentLoaded', function() {
    const versionModal = document.getElementById('version-modal');
    const mobileBtn = document.getElementById('mobile-version');
    const pcBtn = document.getElementById('pc-version');
    const body = document.body;

    // Check if version was already selected
    const selectedVersion = localStorage.getItem('selectedVersion');

    if (!selectedVersion) {
        // Show modal if no version selected
        versionModal.classList.remove('hidden');
    } else {
        // Apply saved version
        applyVersion(selectedVersion);
    }

    // Handle mobile version selection
    mobileBtn.addEventListener('click', function() {
        localStorage.setItem('selectedVersion', 'mobile');
        versionModal.classList.add('hidden');
        applyVersion('mobile');
    });

    // Handle PC version selection
    pcBtn.addEventListener('click', function() {
        localStorage.setItem('selectedVersion', 'pc');
        versionModal.classList.add('hidden');
        applyVersion('pc');
    });

    function applyVersion(version) {
        if (version === 'mobile') {
            body.classList.add('mobile-version');
        } else {
            body.classList.remove('mobile-version');
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project management
const projectForm = document.getElementById('projectForm');
const projectsList = document.getElementById('projectsList');
const API_BASE_URL = 'http://localhost:3001/api';

// Load projects from GitHub
async function loadProjects() {
    try {
        console.log('Loading GitHub projects...');
        const response = await fetch(`${API_BASE_URL}/github/repos`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const githubRepos = await response.json();
        console.log('GitHub repos loaded:', githubRepos);

        // Transform GitHub repos to match our project format
        const projects = githubRepos.map(repo => ({
            name: repo.name,
            title: repo.name,
            description: repo.description || 'Proyecto en desarrollo',
            html_url: repo.html_url,
            topics: repo.topics || [],
            language: repo.language,
            isGitHub: true
        }));

        displayProjects(projects);
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        // Fallback: show a message or keep existing projects
        alert('No se pudieron cargar los proyectos de GitHub. Verifica la conexión al servidor.');
    }
}

// Display projects
function displayProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    // Clear existing projects but keep the upload section
    const existingCards = projectsGrid.querySelectorAll('.project-card');
    existingCards.forEach(card => card.remove());

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Get language tags from GitHub topics or use default
        const tags = project.isGitHub ? (project.topics || []).slice(0, 3) : [];
        const tagsHtml = tags.length > 0 ? tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';

        // Choose icon based on project name or description
        let icon = '💻';
        if (project.name?.toLowerCase().includes('bot') || project.description?.toLowerCase().includes('bot')) {
            icon = '🤖';
        } else if (project.name?.toLowerCase().includes('report') || project.description?.toLowerCase().includes('report')) {
            icon = '📊';
        } else if (project.name?.toLowerCase().includes('whatsapp') || project.description?.toLowerCase().includes('whatsapp')) {
            icon = '💬';
        }

        projectCard.innerHTML = `
            <div class="project-image">${icon}</div>
            <div class="project-content">
                <h3>${project.title || project.name}</h3>
                <p>${project.description || 'Sin descripción disponible'}</p>
                <div class="project-tags">
                    ${tagsHtml}
                    ${project.isGitHub ? '<span class="tag" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa;">GitHub</span>' : ''}
                </div>
                ${project.html_url ? `<a href="${project.html_url}" target="_blank" class="btn btn-secondary" style="margin-top: 15px; display: inline-block;">Ver en GitHub</a>` : ''}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Add new project
projectForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const link = document.getElementById('projectLink').value;

    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, link })
        });

        if (response.ok) {
            // Add to local storage as well
            const projects = JSON.parse(localStorage.getItem('projects')) || [];
            projects.push({ title, description, link });
            localStorage.setItem('projects', JSON.stringify(projects));

            loadProjects(); // Reload projects
            projectForm.reset();
            alert('Proyecto agregado exitosamente!');
        } else {
            throw new Error('Error adding project');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al agregar el proyecto. Inténtalo de nuevo.');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe elements with animations
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    observer.observe(card);
});

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-content p');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    loadProjects();
    setTimeout(typeWriter, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Mobile menu toggle (if needed in future)
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}
