// script.js

window.addEventListener("DOMContentLoaded", () => {
  // Expand/collapse boxes on click
  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
      const isActive = box.classList.contains('active');
      document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
      if (!isActive) box.classList.add('active');
    });
  });

  // Handle color click
  document.querySelectorAll('.colors span').forEach(span => {
    span.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent box collapse toggle
      const color = e.target.style.backgroundColor;
      alert(`Color selected: ${color}`);
    });
  });

  // Handle size button click
  document.querySelectorAll('.sizes button').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent box collapse toggle
      const size = e.target.innerText;
      alert(`Size selected: ${size}`);
    });
  });
});