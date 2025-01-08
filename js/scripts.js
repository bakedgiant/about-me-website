document.addEventListener('DOMContentLoaded', function() {
    // Load content from JSON
    fetch('data/content.json', {crossorigin: "anonymous"})
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').textContent = data.name;

            // Social Media Links
            document.getElementById('bluesky-link').href = data.socialLinks.bluesky;
            document.getElementById('instagram-link').href = data.socialLinks.instagram;
            document.getElementById('tiktok-link').href = data.socialLinks.tiktok;
            document.getElementById('github-link').href = data.socialLinks.github;
            document.getElementById('linkedin-link').href = data.socialLinks.linkedin;


            document.getElementById('summary-text').textContent = data.summary;
            document.getElementById('projects-content').textContent = data.projects;
            document.getElementById('upcoming-content').textContent = data.upcoming;
            document.getElementById('contact-content').textContent = data.contact;
        })
        .catch(error => console.error('Error loading content:', error));

    // Handle active sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
           
            const targetPage = this.getAttribute('data-page');

            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active')

            event.preventDefault();
            window.location.href = this.href;
            
        });
    });
});