const filterButtons = document.querySelectorAll("[data-filter]");
const threatCards = document.querySelectorAll("[data-category]");
const checklistCards = document.querySelectorAll(".checklist-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    threatCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

checklistCards.forEach((card) => {
  const checkboxes = card.querySelectorAll('input[type="checkbox"]');
  const progress = card.querySelector("[data-progress]");

  const updateProgress = () => {
    const checked = card.querySelectorAll('input[type="checkbox"]:checked').length;
    progress.textContent = `${checked}/${checkboxes.length}`;
  };

  checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateProgress));
  updateProgress();
});
