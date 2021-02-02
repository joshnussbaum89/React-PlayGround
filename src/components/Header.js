import React, { Component } from 'react'

class Header extends Component {
    state = {
        color: 'pink'
    }

    changeBackgroundColor = () => {
        const randomNumRed = Math.round(Math.random() * 255);
        const randomNumGreen = Math.round(Math.random() * 255);
        const randomNumBlue = Math.round(Math.random() * 255);
        const randomColor = `rgb(${randomNumRed}, ${randomNumGreen}, ${randomNumBlue})`;

        this.setState({
            color: randomColor
        });

        document.querySelector('body').style.backgroundColor = this.state.color;
        console.log(this.state)
    }

    render() {
        return (
            <header>
                <h1>Hello There</h1>
                <p>Press here for a good time</p>
                <button className='partyBtn' onClick={() => this.changeBackgroundColor()}>PARTY</button>
            </header >
        )
    }

}

export default Header;
