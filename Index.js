function scaling(elementId, baseWidth = 794, baseHeight = 1123) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;
    const scaleFactor = Math.min(scaleX, scaleY);

    element.style.transform = `scale(${scaleFactor})`;
    element.style.transformOrigin = "top left";


}

scaling("resumePage");

window.addEventListener("resize", () => scaling("resumePage"));
