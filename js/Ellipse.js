function calculateEllipseArea(){
    const a = getInputValue('Ellipse-a')
    const b = getInputValue('Ellipse-b');
    const area = 3.14 * a * b;

    setInnerText('Ellipse-area', area)
}