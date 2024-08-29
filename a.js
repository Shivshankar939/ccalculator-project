// document.addEventListener('DOMContentLoaded', () => {
//     const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('.buttons button');
    
//     let currentInput = '';
//     let operator = '';
//     let firstOperand = '';

//     function calculate() {
//         if (firstOperand !== '' && operator !== '' && currentInput !== '') {
//             try {
//                 // Use the Function constructor as a safer alternative to eval
//                 const result = new Function('return ' + `${firstOperand} ${operator} ${currentInput}`)();
//                 return result;
//             } catch {
//                 display.innerText = 'Error';
//                 return null;
//             }
//         }
//         return null;
//     }

//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const value = button.getAttribute('data-value');
            
//             if (value === 'C') {
//                 currentInput = '';
//                 operator = '';
//                 firstOperand = '';  
//                 display.innerText = '0';
//             } else if (value === '=') {
//                 const result = calculate();
//                 if (result !== null) {
//                     display.innerText = result;
//                     currentInput = result;
//                     firstOperand = '';
//                     operator = '';
//                 }
//             } else if (['+', '-', '*', '/'].includes(value)) {
//                 if (currentInput !== '') {
//                     if (firstOperand === '') {
//                         firstOperand = currentInput;
//                     } else if (operator !== '') {
//                         const result = calculate();
//                         if (result !== null) {
//                             firstOperand = result;
//                         }
//                     }
//                     operator = value;
//                     currentInput = '';
//                 }
//             } else {
//                 // Handle the case where the current input is '0'
//                 if (currentInput === '0') {
//                     currentInput = value;
//                 } else {
//                     currentInput += value;
//                 }
//                 display.innerText = currentInput;
//             }
//         });
//     });

//     // Initialize display
//     display.innerText = '0';
// });

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    function calculate() {
        if (firstOperand !== '' && operator !== '' && currentInput !== '') {
            try {
                // Use the Function constructor as a safer alternative to eval
                const result = new Function('return ' + `${firstOperand} ${operator} ${currentInput}`)();
                return result;
            } catch {
                display.innerText = 'Error';
                return null;
            }
        }
        return null;
    }

    function updateDisplay() {
        if (operator === '') {
            display.innerText = currentInput || '0';
        } else {
            display.innerText = `${firstOperand} ${operator} ${currentInput}`;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';  
                updateDisplay();
            } else if (value === '=') {
                const result = calculate();
                if (result !== null) {
                    display.innerText = result;
                    currentInput = result;
                    firstOperand = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    if (firstOperand === '') {
                        firstOperand = currentInput;
                    } else if (operator !== '') {
                        const result = calculate();
                        if (result !== null) {
                            firstOperand = result;
                        }
                    }
                    operator = value;
                    currentInput = '';
                }
                updateDisplay();
            } else {
                // Handle the case where the current input is '0'
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                updateDisplay();
            }
        });
    });

    // Initialize display
    display.innerText = '0';
});

