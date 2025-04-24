document.addEventListener('DOMContentLoaded', function() {

    const toggleSections = document.querySelectorAll('.toggle-section');
    
    toggleSections.forEach(title => {
        title.addEventListener('click', function() {

            if (window.innerWidth <= 768) {

                this.classList.toggle('active');          
                const content = this.nextElementSibling;
                
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            }
        });
    });
    
    function handleLayout() {
        const collapsibleSections = document.querySelectorAll('.collapsible');
        
        if (window.innerWidth > 768) {

            collapsibleSections.forEach(content => {
                content.style.display = 'block';
            });
            
            toggleSections.forEach(title => {
                title.classList.remove('active');
            });
        } else {

            collapsibleSections.forEach(content => {
                content.style.display = 'none';
            });
            
            toggleSections.forEach(title => {
                title.classList.remove('active');
            });
        }
    }

    handleLayout();
    
    window.addEventListener('resize', handleLayout);
});
