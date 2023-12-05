function bold(){
    document.execCommand('bold',true, null)
}

function underline(){
    document.execCommand('underline',true,null)
}

function italic(){
    document.execCommand('italic',true,null)
}

function fontColor() {

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('input', function () {
        const selectedColor = colorPicker.value;
        document.execCommand('foreColor', false, selectedColor);
        document.body.removeChild(colorPicker);
    });
    colorPicker.click();
}