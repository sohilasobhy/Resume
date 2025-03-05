function scalePageToFit(elementId, baseWidth = 794, baseHeight = 1123) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const parent = element.parentElement;
    parent.removeAttribute('style');

    const scaleX = parent.clientWidth / baseWidth;
    const scaleY = parent.clientHeight / baseHeight;

    let scaleFactor = 1;

    if (parent.clientWidth / parent.clientHeight < baseWidth / baseHeight) {
        scaleFactor = scaleX;
    } else {
        scaleFactor = scaleY;
    }

    element.style.transform = `scale(${scaleFactor})`;
    element.style.transformOrigin = "top left";
    parent.style.height = `${baseHeight * scaleFactor}px`;
}

scalePageToFit("resumePage");

window.addEventListener("resize", () => scalePageToFit("resumePage"));
