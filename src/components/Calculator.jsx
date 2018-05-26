import React from 'react';




class Calculator extends React.Component{
    state = {
        value: null,
        displayValue: '0',
        waaitingForOperand: false,
        operator: null
        
    }
    inputDigit(digit) {
        const {displayValue, waaitingForOperand } = this.state
        if (waaitingForOperand) {
            this.setState({
                displayValue: String(digit),
                waaitingForOperand: false
            })
        } else{
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
        })
        }
    }

    clearDisplay() {
        this.setState({
            displayValue: '0',
            value: null
            
        })
    }
    performOperation(nextOperator) {
        const {displayValue, operator, value} = this.state

        const nextValue = parseFloat(displayValue)

        const operations = {
            "÷": (preValue, nextValue) => preValue / nextValue,
            "+": (preValue, nextValue) => preValue + nextValue,
            "-": (preValue, nextValue) => preValue - nextValue,
            "=": (preValue, nextValue) => nextValue
        }
 
        if (value === null) {
            //  no previus value, hit a operator key.
            this.setState({
                value: nextValue
            })
        } else if (operator) {
            const currentValue = value || 0
            const computedValue = operations[operator](currentValue, nextValue)
            this.setState({
                value: computedValue,
                displayValue: String(computedValue)
            })
        }
        this.setState({
            waaitingForOperand: true,
            operator: nextOperator
        })
    }

    render() {
        const {displayValue} = this.state;
        return(
            <div id="root">
                <div className="calculator">
                    <div className="calculator-display">{displayValue}</div>
                    <div className="calculator-keypad">
                        <div className="input-keys">
                            <div className="function-key">
                                <button className="calculator-key key-clear" onClick={()=> this.clearDisplay()}>clear</button>
                            </div>
                            <div className="digit-key">
                                <button className="calculator-key key-1" onClick={()=> this.inputDigit(1)}>1</button>
                                <button className="calculator-key key-2" onClick={()=> this.inputDigit(2)}>2</button>
                                <button className="calculator-key key-3" onClick={()=> this.inputDigit(3)}>3</button>
                                <button className="calculator-key key-4" onClick={()=> this.inputDigit(4)}>4</button>
                                <button className="calculator-key key-5" onClick={()=> this.inputDigit(5)}>5</button>
                                <button className="calculator-key key-6" onClick={()=> this.inputDigit(6)}>6</button>
                                <button className="calculator-key key-7" onClick={()=> this.inputDigit(7)}>7</button>
                                <button className="calculator-key key-8" onClick={()=> this.inputDigit(8)}>8</button>
                                <button className="calculator-key key-9" onClick={()=> this.inputDigit(9)}>9</button>
                            </div>
                            <div className="operator-key">
                                <button className="calculator-key key-divide" onClick={()=> this.performOperation("÷")}>÷</button>
                                <button className="calculator-key key-subtract" onClick={()=> this.performOperation("-")}>-</button>
                                <button className="calculator-key key-add" onClick={()=> this.performOperation("+")}>+</button>
                                <button className="calculator-key key-equals" onClick={()=> this.performOperation("=")}>=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;