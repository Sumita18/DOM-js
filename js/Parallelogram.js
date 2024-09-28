function calculateParallelogramArea(){
    const base = getInputValue('Parallelogram-base')
    const height = getInputValue('Parallelogram-height')


    const area = base * height;
    //console.log(area)

    setInnerText('Parallelogram-area', area);
}

function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setInnerText(ElementId, area){
    const Element = document.getElementById(ElementId)
    Element.innerText = area;
}