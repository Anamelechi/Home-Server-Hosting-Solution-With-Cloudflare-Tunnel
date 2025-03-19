// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll(".slide-up, .fade-in").forEach((el) => {
    observer.observe(el);
  });
  
  // Theme Persistence and Toggle
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  document.getElementById("themeToggle").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
  
  // Tweet Portfolio Button Functionality
  document.getElementById("tweetBtn").addEventListener("click", () => {
    const tweetText = encodeURIComponent(
      "Check out my Cloud Engineer Portfolio by Anamelechi Philip Njoku!"
    );
    const tweetUrl = encodeURIComponent(window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
    window.open(twitterUrl, "_blank");
  });
  
  // PDF Download Functionality
  document.getElementById("downloadBtn").addEventListener("click", function () {
    const pdfUrl = "resume.pdf"; // Ensure resume.pdf is in your root directory
  
    // Create temporary link element for download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Anamelechi_Njoku_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    // Visual feedback for downloading
    this.classList.add("downloading");
    const originalText = this.innerHTML;
    this.innerHTML = "Downloading...";
    this.style.cursor = "wait";
  
    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.cursor = "pointer";
      this.classList.remove("downloading");
    }, 2000);
  });
  