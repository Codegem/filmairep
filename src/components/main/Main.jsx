import React, {Component} from 'react'
import './main.css'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="centras">
                    <h1>Web Filmu Search</h1>
                    <input type="text" placeholder="Ieskok Filmo"/>
                    <a className="btn btn-primary mb-1">Ieskoti</a>
                </div>
            </div>
        )
    }
}
