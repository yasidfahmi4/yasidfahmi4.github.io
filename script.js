// Function to add 'active' class to navbar link based on scroll position
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    let currentSection = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 50) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
  