// عدّاد لتاريخ محدد (مثلاً 3 أكتوبر 2025)
const targetDate = new Date("2025-10-03T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = now - targetDate; // لو بدك عدّاد "من" هذا اليوم غيّري المنطق

  // لو بدك عدّاد "إلى" هذا اليوم استخدمي: const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
const correctPassword = "love"; // غيّريها لأي كلمة تحبيها
const input = document.getElementById("password-input");
const btn = document.getElementById("open-btn");
const secret = document.getElementById("secret-message");

btn.addEventListener("click", () => {
  if (input.value === correctPassword) {
    secret.style.display = "block";
    btn.textContent = "تم فتح الظرف 💌";
  } else {
    alert("كلمة السر غلط 😅");
  }
});