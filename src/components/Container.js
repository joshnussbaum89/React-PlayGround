import Counter from './Counter';

const Container = ({
    handleIncrement,
    handleDecrement,
    resetIncrement,
    counter,
    isOn,
    clearTimer
}) => {
    return (
        <div className='container'>
            <h1>The Final Countdown</h1>
            <Counter
                isOn={isOn}
                counter={counter}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                resetIncrement={resetIncrement}
                clearTimer={clearTimer}
            />
        </div>
    )
}

export default Container
