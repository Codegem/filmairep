import React, { Component } from 'react'
import css from '../fetch/Fetch.css'
export default class Fetch extends Component {

    search (searchTerm) {
        const API_URL = 'https://www.omdbapi.com/?apikey=924a38e3';
        const url = `${API_URL}&t='${searchTerm}`;
        console.log(url)
        return fetch(url)
        .then(response => response.json())
        .then(result => {
            return result;
        })
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

