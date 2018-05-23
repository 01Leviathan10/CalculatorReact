import React from 'react';




class Calculator extends React.Component{
    state = {
        displayValue: '0'
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
                                <button className="calculator-key key-clear">clear</button>
                            </div>
                            <div className="digit-key">
                                <button className="calculator-key key-1">1</button>
                                <button className="calculator-key key-2">2</button>
                                <button className="calculator-key key-3">3</button>
                                <button className="calculator-key key-4">4</button>
                                <button className="calculator-key key-5">5</button>
                                <button className="calculator-key key-6">6</button>
                                <button className="calculator-key key-7">7</button>
                                <button className="calculator-key key-8">8</button>
                                <button className="calculator-key key-9">9</button>
                            </div>
                            <div className="operator-key">
                                <button className="calculator-key key-divide">÷</button>
                                <button className="calculator-key key-subtract">-</button>
                                <button className="calculator-key key-add">+</button>
                                <button className="calculator-key key-equals">=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;