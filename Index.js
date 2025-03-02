function scalePageToFit(elementId, baseWidth = 794, baseHeight = 1123) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const parent = element.parentElement;
    const scaleX = parent.clientWidth / baseWidth;
    const scaleY = parent.clientHeight / baseHeight;

    const scaleFactor = Math.min(scaleX, scaleY, 1);

    element.style.transform = `scale(${scaleFactor})`;
    parent.style.height = `${baseHeight * scaleFactor}px`;
}

scalePageToFit("resumePage");

window.addEventListener("resize", () => scalePageToFit("resumePage"));
