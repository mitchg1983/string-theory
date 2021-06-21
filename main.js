//string-theory exercises



//xify

console.log ('');
console.log ('');

const xInput = ('Goodness gracious, look at all these lemons.');

const xOutput = xify(xInput);

console.log ('Your OLD xify string WAS', xInput);
console.log ('Your NEW xify string IS', xOutput);

function xify(xString) {
    
    let outputString = '';
    
    for (const element of xString) {
        outputString = outputString + 'x';
    }
    return outputString;
}

console.log ('');

console.log(xify('This is a new test!'))

//yellingChars

console.log ('');

const yellInput = ('Goodness gracious, look at all these lemons.');

const yellOutput = yellingChars(yellInput);

console.log ('Your OLD yellingChars string WAS', yellInput);
console.log ('Your NEW yellingChars string IS', yellOutput);

function yellingChars(yellString) {
    
    let yellOutput = '';
    
    for (const yellElement of yellString) {
        yellOutput = yellOutput + (yellElement + '!');
    }
    return yellOutput
}


//indexedChars

console.log ('');

const indexInput = ('Goodness gracious, look at all these lemons.');

const indexOutput = indexedChars(indexInput);

console.log ('Your OLD indexedChars string WAS', indexInput);
console.log ('Your NEW indexedChars string IS', indexOutput);

function indexedChars(indexString) {
    
    let indexOutput = '';
    let indexNumber = 0;
    for (const indexElement of indexString) {
        
        const indexNumberAdd = indexNumber + indexElement;
        
        indexOutput = indexOutput + indexNumberAdd;
        
        indexNumber = indexNumber +1;
    }
    return indexOutput
}

console.log ('');


//numberedChars

console.log ('');

const numberedInput = ('Goodness gracious, look at all these lemons.');

const numberedOutput = numberedChars(numberedInput);

console.log ('Your OLD numberedChars string WAS', numberedInput);
console.log ('Your NEW numberedChars string IS', numberedOutput);

function numberedChars(numberedString) {
    
    let numberedOutput = '';
    let numberedNumber = 1;
    for (const numberedElement of numberedString) {
        
        const numberedNumberAdd = numberedNumber + numberedElement;
        
        numberedOutput = numberedOutput + numberedNumberAdd;
        
        numberedNumber = numberedNumber +1;
    }
    return numberedOutput
}

console.log ('');

//exclaim

console.log ('');

const exclaimInput = ('Goodness gracious, look at all these lemons.');

const exclaimOutput = exclaim(exclaimInput);

console.log ('Your OLD exclaim string WAS', exclaimInput);
console.log ('Your NEW exclaim string IS', exclaimOutput);

function exclaim(exclaimString) {
    
    let exclaimOutput = '';
    
    for (const exclaimElement of exclaimString) {
        
        let testexclaimElement = exclaimElement;    
        
        if (testexclaimElement === '.' || testexclaimElement === '?') {
            testexclaimElement = '!';
        }        
        
        exclaimOutput = exclaimOutput + testexclaimElement;    
    }
    
    return exclaimOutput
}

console.log ('');

//repeatIt


console.log ('');

const repeatInput = ('Goodness gracious! There are SO MANY lemons??');

const repeatCount = 5;

const repeatOutput = repeatIt(repeatInput, repeatCount);

console.log ('Your OLD repeatIt string WAS', repeatInput);
console.log ('Your current repeat count is', repeatCount);
console.log ('Your NEW repeatIt string IS', repeatOutput);


function repeatIt(repeatString, repeatCount) {
    
    let repeatOutput = '';

    let repeatCycles = 0;

    while (repeatCycles < repeatCount) {
        repeatOutput = repeatOutput + repeatString;
        repeatCycles = repeatCycles + 1;
    }
    
    return repeatOutput
}

console.log ('');

//truncate

