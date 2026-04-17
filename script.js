
const html=document.documentElement;
const langTR=document.getElementById("langTR");
const langEN=document.getElementById("langEN");
const menuToggle=document.getElementById("menuToggle");
const mobilePanel=document.getElementById("mobilePanel");
const slides=[...document.querySelectorAll(".hero-slide")];
const dots=[...document.querySelectorAll(".slider-dot")];
const submitPaperBtn=document.getElementById("submitPaperBtn");
const replyEmail=document.getElementById("replyEmail");
let currentSlide=0, sliderTimer;
function setLanguage(lang){const currentLang=lang==="en"?"en":"tr";html.classList.remove("lang-tr","lang-en");html.classList.add(currentLang==="en"?"lang-en":"lang-tr");if(langTR)langTR.classList.toggle("active",currentLang==="tr");if(langEN)langEN.classList.toggle("active",currentLang==="en");localStorage.setItem("siteLang",currentLang);}
function showSlide(index){if(!slides.length)return;currentSlide=index%slides.length;slides.forEach((slide,i)=>slide.classList.toggle("active",i===currentSlide));dots.forEach((dot,i)=>dot.classList.toggle("active",i===currentSlide));}
function startSlider(){if(!slides.length)return;clearInterval(sliderTimer);sliderTimer=setInterval(()=>showSlide((currentSlide+1)%slides.length),5500);}
if(langTR)langTR.addEventListener("click",()=>setLanguage("tr"));
if(langEN)langEN.addEventListener("click",()=>setLanguage("en"));
if(menuToggle&&mobilePanel){menuToggle.addEventListener("click",()=>mobilePanel.classList.toggle("open"));mobilePanel.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>mobilePanel.classList.remove("open")));}
dots.forEach((dot,index)=>dot.addEventListener("click",()=>{showSlide(index);startSlider();}));
if(submitPaperBtn){submitPaperBtn.addEventListener("click",(e)=>{if(submitPaperBtn.getAttribute("href")==="#"){e.preventDefault();alert(html.classList.contains("lang-en")?"The paper submission link is not added yet. You can update the href value later.":"Bildiri gönderim bağlantısı henüz eklenmedi. Daha sonra href değerini güncelleyebilirsiniz.");}});}
if(replyEmail){replyEmail.addEventListener("input",(e)=>{const hiddenReply=document.querySelector('input[name="_replyto"]');if(hiddenReply)hiddenReply.value=e.target.value;});}
window.addEventListener("load",()=>{setLanguage(localStorage.getItem("siteLang")||"tr");showSlide(0);startSlider();});


const conferenceDate = new Date("2026-10-22T09:00:00+03:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
  const now = new Date().getTime();
  const distance = conferenceDate - now;

  if (distance <= 0) {
    daysEl.textContent = "000";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(3, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

window.addEventListener("load", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
