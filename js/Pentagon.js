function calculatePentagonArea(){
    const p = getInputValue('Pentagon-p');
    const b = getInputValue('Pentagon-h');
    
    const area = 0.5 * p * b;
    setInnerText('Pentagon-area', area);

    }