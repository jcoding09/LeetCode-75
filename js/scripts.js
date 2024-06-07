document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const codeBlocks = document.querySelectorAll(".code-block");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      button.classList.add("active");

      // Hide all code blocks
      codeBlocks.forEach((block) => (block.style.display = "none"));
      // Show the code block corresponding to the clicked button
      document.getElementById(button.getAttribute("data-lang")).style.display = "block";
    });
  });
});
