// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// Close mobile nav when clicking a link
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});

// Skill bubbles expand
const skillBubbles = document.querySelectorAll(".skill-bubble");
const overlay = document.getElementById("overlay");
const expandedBubble = document.getElementById("expanded-bubble");
const expandedTitle = document.getElementById("expanded-title");
const expandedItems = document.getElementById("expanded-items");
const closeBtn = document.getElementById("close-btn");

skillBubbles.forEach(bubble => {
  bubble.addEventListener("click", () => {
    expandedTitle.textContent = bubble.querySelector("h3").textContent;
    expandedItems.innerHTML = "";
    const items = bubble.querySelectorAll(".skill-items span");
    items.forEach(item => {
      const span = document.createElement("span");
      span.textContent = item.textContent;
      expandedItems.appendChild(span);
    });
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
