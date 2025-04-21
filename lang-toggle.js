
function toggleLang() {
    const es = document.querySelectorAll('[data-lang="es"]');
    const en = document.querySelectorAll('[data-lang="en"]');
    const esActivo = es[0].classList.contains('active');
    es.forEach(el => el.classList.toggle('active', !esActivo));
    en.forEach(el => el.classList.toggle('active', esActivo));
}
window.onload = () => {
    document.querySelectorAll('[data-lang="es"]').forEach(el => el.classList.add('active'));
};
