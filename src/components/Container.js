import Counter from './Counter';

const Container = ({
    handleTimerChange,
    handleStopwatch,
    handleReset,
    counter,
    isOn
}) => {
    return (
        <div className='container'>
            <h1>The Final Countdown</h1>
            <Counter
                handleTimerChange={handleTimerChange}
                handleStopwatch={handleStopwatch}
                handleReset={handleReset}
                counter={counter}
                isOn={isOn}
            />
        </div>
    )
}

export default Container
