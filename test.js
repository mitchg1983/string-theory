function squareDigits(num) {
    let outputString = '';
    let numNum = num.toString();
        for (const character of numNum) {
          let newSquare = character ** 2;      
          outputString = outputString.concat(newSquare);
        }
        outputString = Number(outputString);
        return outputString;
    }

    console.log (squareDigits(9119))