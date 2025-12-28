function snow() {
const el = document.createElement('div');
el.className = 'snowflake';
el.textContent = '❄';
el.style.left = Math.random() * innerWidth + 'px';
el.style.fontSize = Math.random() * 10 + 10 + 'px';
el.style.animationDuration = Math.random() * 5 + 5 + 's';
document.body.appendChild(el);
setTimeout(() => el.remove(), 10000);
}
setInterval(snow, 300);
