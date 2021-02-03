import React from 'react';
import Container from './components/Container'

class App extends React.Component {
    state = {
        count: 0,
        isOn: false
    }

    handleIncrement = (e) => {
        e.preventDefault();
        this.setState({
            isOn: true
        })

        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    handleDecrement = (e) => {
        e.preventDefault();
        this.setState({
            isOn: true
        })

        clearInterval(this.handleDecrement);
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    resetIncrement = (e) => {
        e.preventDefault();

        this.setState({
            count: 0
        })
    }

    clearTimer = (e) => {
        e.preventDefault();
        clearInterval(this.timer)

        this.setState({
            count: 0,
            isOn: false
        })
    }

    render() {
        return (
            <>
                <Container
                    isOn={this.state.isOn}
                    counter={this.state.count}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    resetIncrement={this.resetIncrement}
                    clearTimer={this.clearTimer}
                />
            </>
        )
    }
}


export default App
