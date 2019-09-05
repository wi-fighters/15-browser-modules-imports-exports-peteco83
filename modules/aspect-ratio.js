function calculateAspectRatio(originalWidth, originalHeight, newValues) {
    let resultWidth = newValues[0];
    let resultHeight = newValues[1];
  
    if ((originalWidth > 0) && (originalHeight > 0)) {
        newValues.forEach(newValue => {
            if ((newValue.classList.contains("height")) && (newValue.value > 0)) {
                return resultWidth.value = ((originalWidth / originalHeight) * newValue.value).toFixed(2);
                
            } else if ((newValue.classList.contains("width")) && (newValue.value > 0)) {
                newValue.style.outline = "pink";
                return resultHeight.value = ((originalHeight / originalWidth) * newValue.value).toFixed(2);
            }
        })
    }
}

