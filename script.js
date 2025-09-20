// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Pawfect Memories Studio!");

  const cards = document.querySelectorAll(".card");

  // Page load animation: fade in one by one
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    // Staggered appearance
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 400); // each card appears 400ms after the previous
  });

  // Hover effect: lift + shadow
  cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 15px 30px rgba(255, 150, 200, 0.4)";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });
});
