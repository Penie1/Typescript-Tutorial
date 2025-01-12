const yearEl = document.getElementById("year") as HTMLSpanElement;
const currentYear: string = new Date().getFullYear().toString();
yearEl.setAttribute("datetime", currentYear);
yearEl.textContent = currentYear;
