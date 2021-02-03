import React from 'react';

const Counter = ({
    handleIncrement,
    handleDecrement,
    resetIncrement,
    counter,
    isOn,
    clearTimer
}) => {
    return (<form className='form'>
        <label>Timer Starting Point</label>
        <input type='text' placeholder='Enter number' className='countdown-input' />
        <p>{counter}</p>
        <div>
            <button className='btn' onClick={handleIncrement}>Increase Timer</button>
            <button className='btn' onClick={handleDecrement}>Decrease Timer</button>
            <button className='btn' onClick={resetIncrement}>Reset Timer</button>
            <button className='btn' onClick={clearTimer}>Clear Timer</button>
        </div>
    </form>);
}

export default Counter
