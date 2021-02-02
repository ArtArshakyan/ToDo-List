import React, { Component } from 'react';
// import './styles.css'
import styles from './styles.module.css';
import image from './assets/images/VideoCaptur.jpg'

class Conditional extends Component {
    state = {
        text1: 'Hello!',
        text2: 'Bye!',
        showFirst: true,
        name: 'John',
        showName: true
    };

    toggle = () => {
        this.setState({
            showFirst: !this.state.showFirst
        });
    };

    toggleName = () => {
        this.setState({
            showName: !this.state.showName
        });
    };

    render() {
        const { text1, text2, showFirst, name, showName } = this.state;
        const headingStyle = {
            color: 'green',
            fontSize: '52px'
        };

        return (
            <div>

                {
                    showFirst ?
                        <h2 style={headingStyle}>{text1}</h2> :
                        <h2 style={{ color: 'red', fontSize: '52px' }}>{text2}</h2>
                }

                <button
                    onClick={this.toggle}
                >
                    Toggle
                </button>

                <button
                    onClick={this.toggleName}
                >
                    {showName ? "Hide Name" : "Show Name"}
                </button>

                {showName && <h1 className={styles.name}>
                    <span>First Name: </span>
                    {name}
                </h1>}

                <img src={image} alt="" />
            </div>
        );
    };
}

export default Conditional;