/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background-color: #007bff;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 2rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #e3f2fd;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
    color: white;
    padding: 150px 0 100px;
    text-align: center;
    animation: fadeInUp 1s ease-out;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-out 0.4s both;
}

.btn {
    display: inline-block;
    background-color: white;
    color: #007bff;
    padding: 0.8rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    font-weight: bold;
}

.btn:hover {
    background-color: #e3f2fd;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Sections */
section {
    padding: 80px 0;
}

h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #007bff;
    position: relative;
}

h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #007bff;
    margin: 10px auto;
}

/* About Section */
.about {
    background-color: white;
    animation: fadeIn 1s ease-out;
}

.about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-text h3 {
    color: #007bff;
    margin-bottom: 1rem;
}

.about-text h4 {
    color: #0056b3;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.about-text ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}

.about-text li {
    margin-bottom: 0.5rem;
}

/* Services Section */
.services {
    background-color: #e3f2fd;
    animation: fadeIn 1s ease-out;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInUp 1s ease-out both;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.service-card h3 {
    color: #007bff;
    margin-bottom: 1rem;
}

/* Projects Section */
.projects {
    background-color: white;
    animation: fadeIn 1s ease-out;
}

.project-form {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 3rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-form h3 {
    color: #007bff;
    margin-bottom: 1rem;
}

.project-form form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-form input,
.project-form textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.project-form input:focus,
.project-form textarea:focus {
    outline: none;
    border-color: #007bff;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    animation: fadeInUp 1s ease-out both;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card h4 {
    color: #007bff;
    margin-bottom: 0.5rem;
}

.project-card p {
    margin-bottom: 1rem;
}

.project-card a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
}

.project-card a:hover {
    text-decoration: underline;
}

/* Footer */
.footer {
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 3rem 0;
}

.footer h2 {
    color: white;
}

.footer h2::after {
    background-color: white;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 1rem;
    }

    nav ul {
        flex-direction: column;
        gap: 1rem;
    }

    nav ul li {
        margin-left: 0;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .services-grid,
    .projects-list {
        grid-template-columns: 1fr;
    }

    .about-content {
        flex-direction: column;
    }
}
