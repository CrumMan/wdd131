const yeartoday = new Date().getFullYear();
const currentyeardoc = document.getElementById("currentyear");
currentyeardoc.innerHTML = yeartoday;

const lastModified = new Date(document.lastModified)
const modyear = lastModified.getFullYear();
const modmonth = lastModified.getMonth()+1;
const modday = lastModified.getDate();
const moddate = `${modmonth}/${modday}/${modyear}`
const lastModifiedElement = document.getElementById("lastmodified")
lastModifiedElement.textContent = moddate;