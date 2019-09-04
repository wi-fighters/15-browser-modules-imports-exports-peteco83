

function calculateAspectRatio(originalW, originalH) {
    let newW = document.getElementById("ratio_result-width");
    let newH = document.getElementById("ratio_result-height");
    let newWidth = Number(newW.value);
    let newHeight = Number(newH.value)
    if ((newWidth > 0) && (newHeight === 0)) {
        newHeight = (originalH / originalW) * newWidth;
        return newHeight;
    } else if ((newHeight > 0) && (newWidth === 0)) {
        newWidth = (originalW / originalH) * newHeight;
        return newWidth;
    }
}


export { calculateAspectRatio };