import React, {Component} from 'react'
// import Fetch from '../fetch/Fetch'
import './main.css'

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            title: 'Filmu Search',
            searchTerm: '',
            loading: false,
            filmas: {}
        }
    }

    formaSubmit(event){
        // console.log(event.target.value)
        event.preventDefault();
        const API_URL = 'https://www.omdbapi.com/?apikey=924a38e3';
        const url = `${API_URL}&t='${this.state.searchTerm}`;
        console.log(url)
        return fetch(url)
        .then(response => response.json())
        .then(result => {
            this.setState({
                filmas: result
            })
        console.log(this.state.filmas)
        })
    }

    searchTermChanged(event){
        // console.log(event.target.value)
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        const { title, searchTerm } = this.state;
        return (
            <div>
                <div className="centras">
                    <h1>{title}</h1>
                    <form onSubmit={(event) => this.formaSubmit(event)}>
                        <input 
                        onChange={(event) => this.searchTermChanged(event)} 
                        placeholder="Ieskok Filmo" 
                        id="searchTerm" 
                        type="text"
                        value={searchTerm}/>
                        <button 
                        type = "submit" 
                        className="btn btn-primary">
                        Ieskoti
                        </button>
                    </form>
                    {this.state.filmas}
                    {this.state.loading ? <img src="https://media1.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="load"/> : "" }
                </div>
            </div>
        )
    }
}
