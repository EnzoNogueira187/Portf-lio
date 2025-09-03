// Digitação automática no nome
const nameEl = document.getElementById('typing');
const nameText = "Enzo Nogueira";
let idx = 0;

function type() {
  if (idx < nameText.length) {
    nameEl.innerHTML += nameText.charAt(idx);
    idx++;
    setTimeout(type, 150);
  }
}
type();

const dtEl = document.getElementById('datetime');
function updateDateTime() {
  const now = new Date();
  dtEl.textContent = now.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);
