const projects = [
    { name: 'Blog', link: 'https://blog.shantysite.com/', image: 'https://i.ibb.co/GP1vkyh/Screenshot-2023-08-15-042121.png', description: 'My Main Blog' },
    { name: 'QR Code Generator', link: 'https://qrgen.web.app/', image: 'https://i.ibb.co/DgfgBG2/Screenshot-2023-08-15-042253.png', description: 'Just a simple QR code generator, running on firebase.' },
    // Add more projects here
];

const projectContainer = document.getElementById('projects');

projects.forEach(project => {
    const card = `
        <div class="card">
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${project.name}">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
            </a>
        </div>`;
    projectContainer.innerHTML += card;
});