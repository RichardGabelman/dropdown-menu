export class Dropdown {
  static setupDropdown() {
    const dropdowns = document.querySelectorAll(".dropdown");
    if (dropdowns) {
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", () => {
          const forClass = dropdown.dataset.forClass;
          const menu = document.querySelectorAll(`.${forClass}`);
          menu.forEach((option) => {
            option.classList.toggle("visible");
          });
        });
      });
    }
  }
}
