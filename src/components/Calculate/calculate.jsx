import React, { useState } from "react";
import './calculate.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" />

export default function Calculate() {
    //initializing the values with useStates;
    const [displayValue,setDisplayValue] = useState(0)
    const [previousValue,setPreviouseValue] = useState(0)
    const [operator,setOperator] = useState(0)

    const inputDigit = (digit) => {
        setDisplayValue(displayValue === 0 ? digit : displayValue + digit);
    };
    const inputDecimal = () => {
        if(displayValue.indexOf('.') === -1){
            setDisplayValue(displayValue+'.');
        }
    }
    const clearDisplay = () => {
        setDisplayValue('');
        setPreviouseValue(null);
        setOperator(null);
    }
    const setOperatorFunc = (op) => {
        setPreviouseValue(displayValue);
        setDisplayValue('');
        setOperator(op);
    }

    //this funtion will calculate the values
    const calculate = () => {
        const currentValue = parseFloat(displayValue);
        const previousNumber = parseFloat(previousValue);

        switch (operator) {
            case '+' :
                setDisplayValue(previousNumber + currentValue);
                break;
            case '-' :
                setDisplayValue(previousNumber - currentValue);
                break;
            case '*' :
                setDisplayValue(previousNumber * currentValue);
                break;
            case '/':
                if(currentValue === 0){
                    setDisplayValue("Undefined")
                }
                else {
                    setDisplayValue(previousNumber / currentValue);
                }
                break;
            case '=':
                setDisplayValue(previousNumber)
            default:
                setDisplayValue("Unknown error");
                break;
        }
        setPreviouseValue(null);
        setOperator(null);
    }
    return (
        <div className="container">
            <div className="card">
            <div className="display">{displayValue}</div>
            <div className="buttons">
                <table>
                    <tr>
                        <td colSpan="3">
                        </td>
                        <td >
                            <button onClick={() => clearDisplay()}>AC</button>  
                        </td>
                        
                    </tr>
                    <tr>
                        <td  >
                            <button onClick={() => inputDigit('7')}>7</button>
                        </td>
                        <td >    
                            <button onClick={() => inputDigit('8')}>8</button>
                        </td>
                        <td>
                            <button onClick={() => inputDigit('9')}>9</button>
                        </td>
                        <td>
                            <button onClick={() => setOperatorFunc('/')}>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => inputDigit('4')}>4</button>
                        </td>
                        <td>
                            <button onClick={() => inputDigit('5')}>5</button>
                        </td>
                        <td>
                            <button onClick={() => inputDigit('6')}>6</button>
                        </td>
                        <td>
                            <button onClick={() => setOperatorFunc('*')}>*</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={() => inputDigit('1')}>1</button>
                        </td>
                        <td>
                        <button onClick={() => inputDigit('2')}>2</button>
                        </td>
                        <td>
                        <button onClick={() => inputDigit('3')}>3</button>
                        </td>
                        <td>
                            <button onClick={() => setOperatorFunc('-')}>-</button>
                            
                        </td>
                    </tr>
                    <tr>
                        <td >
                        <button onClick={() => inputDigit('0')}>0</button>
                        </td>
                        <td>
                            <button className="equal" onClick={() => calculate()}>=</button> 
                        </td>
                        <td>
                        <button onClick={() => inputDecimal('.')}>.</button>
                        </td>
                        <td>
                        <button onClick={() => setOperatorFunc('+')}>+</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="footer">
                <div className="int">
                    <a href="https://github.com/saurav-tiwari03" target="_blank"><i class="fa-brands fa-github">Github</i></a>
                </div>
                <div className="int">
                    <a href="https://my-portfolio-03.netlify.com" target="_blank"><i class="fa-solid fa-user">Porfile</i></a>
                </div>
            </div>
            </div>
            
        </div>
    )
};