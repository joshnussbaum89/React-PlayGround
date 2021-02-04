import React, { Component } from 'react';
import Container from './components/Container'

class App extends Component {
    state = {
        isOn: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.timer = setInterval(() => this.handleIncrement(), 100);
    }

    handleIncrement = () => {
        if (this.state.isOn) {
            const now = Date.now();

            this.setState(prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }))
        }
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));

        if (!this.state.isOn) {
            this.setState({
                previousTime: Date.now()
            })
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    onTimerChange = e => {
        e.preventDefault();
        this.setState({
            counter: 0
        });
    }

    render() {
        return (
            <>
                <Container
                    isOn={this.state.isOn}
                    counter={this.state.elapsedTime}
                    handleStopwatch={this.handleStopwatch}
                    handleReset={this.handleReset}
                    handleTimerChange={this.onTimerChange}
                />
            </>
        )
    }
}


export default App
