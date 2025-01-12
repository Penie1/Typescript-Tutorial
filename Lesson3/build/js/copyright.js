"use strict";
const yearEl = document.getElementById("year");
const currentYear = new Date().getFullYear().toString();
yearEl.setAttribute("datetime", currentYear);
yearEl.textContent = currentYear;
