// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    function updateScrollProgress() {
        const scrollProgress = document.querySelector('.scroll-progress');
        if (!scrollProgress) return;
        
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        scrollProgress.style.background = `linear-gradient(90deg, #3b82f6 ${progress}%, rgba(59, 130, 246, 0.1) ${progress}%)`;
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
    
    
    // ==========================================
    // SKILLS PROGRESS BARS ANIMATION
    // ==========================================
    
    const skillsSection = document.getElementById('certificates');
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    let skillsAnimated = false;
    
    function animateSkills() {
        if (skillsAnimated) return;
        
        skillBars.forEach((bar, index) => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = `${progress}%`;
            }, index * 100);
        });
        
        skillsAnimated = true;
    }
    
    // Intersection Observer for skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    }, { threshold: 0.3 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    
    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
    
    
    // ==========================================
    // CONSOLE EASTER EGG
    // ==========================================
    
    console.log('%c👋 Hey there, Developer!', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
    console.log('%cI see you are checking out the code. That is awesome! 🚀', 'color: #64748b; font-size: 14px;');
    console.log('%cFeel free to connect with me:', 'color: #64748b; font-size: 14px;');
    console.log('%c📧 Bandar.hja@gmail.com', 'color: #3b82f6; font-size: 14px;');
    console.log('%c🔗 https://www.linkedin.com/in/bandar-alhujayri/', 'color: #3b82f6; font-size: 14px;');
});