import React from 'react';

export default class Test extends React.Component {
    state = {
        value: 1,
    }

    changeValue = () => {
        this.setState((state) => {
            return { value: state.value + 1};
        }, () => { console.log('callback', this.state)})
    }

    componentDidMount() {
        window.alert('componentDidMount')
    }

    componentDidUpdate() {
        window.alert('componentDidUpdate')
    }

    render(){
        console.log('render')
        return (
            <button onClick={this.changeValue}>
                test
            </button>
        )
    }
}