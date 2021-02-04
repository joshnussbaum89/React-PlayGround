const Counter = ({
    handleTimerChange,
    handleStopwatch,
    handleReset,
    counter,
    isOn
}) => {
    let seconds = Math.floor(counter / 1000);
    return (
        <div className='form' >
            <label>Timer Starting Point</label>
            <div className='form-div'>
                <input type='text' placeholder='Enter number' className='form-input' />
                <button className='btn-submit' onClick={handleTimerChange}>Submit</button>
            </div>
            <p>{seconds}</p>
            <div>
                <button className='btn' onClick={handleStopwatch}>{(isOn) ? 'Pause Timer' : 'Start Timer'}</button>
                <button className='btn' onClick={handleReset}>Reset Timer</button>
            </div>
        </div>
    );

}

export default Counter
