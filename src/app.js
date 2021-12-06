import React from 'react';
import list from "../component/list"
import './app.css'

class app extends React.Component {

    state = {
        category: ''
    }

    handleChange = (e) => {
        this.setState({category: e.target.value})
    }

    render() {
        return (
            <div className="app">
                <select className="app-select" onChange={this.handleChange}>
                    <option id="Default"></option>
                    <option id="Comedy">Comedy</option>
                    <option id="Animation">Animation</option>
                    <option id="Thriller">Thriller</option>
                    <option id="Drame">Drame</option>
                </select>
                <list category={this.state.category}/>
            </div>
        );
    }
}
export default app;
