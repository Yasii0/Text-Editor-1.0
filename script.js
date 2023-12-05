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

function left_alignment(){
    document.querySelectorAll('.left_alignment').forEach(function (element){
        element.addEventListener('click',function (){
            document.getElementById('editor').style.textAlign='left'
        })
    })
}

function center_alignment(){
    document.querySelectorAll('.center_alignment').forEach(function (element){
        element.addEventListener('click',function (){
            document.getElementById('editor').style.textAlign='center'
        })
    })
}

function right_alignment(){
    document.querySelectorAll('.right_alignment').forEach(function (element){
        element.addEventListener('click',function (){
            document.getElementById('editor').style.textAlign='right'
        })
    })
}

function justify(){
    document.querySelectorAll('.justify').forEach(function (element){
        element.addEventListener('click',function (){
            document.getElementById('editor').style.textAlign='justify'
        })
    })
}

function undo() {
    document.execCommand('undo', false, null);
}

function redo() {
    document.execCommand('redo', false, null);
}