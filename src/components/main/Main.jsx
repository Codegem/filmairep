import React, {Component} from 'react'
import Result_table from '../result_table/Result_table'
import loading from '../main/loading.gif'
import './main.css'

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Filmu Search',
            searchTerm: '',
            loading: false,
            filmas: {},
            temp: null
        }
    }

    formaSubmit(event){
        event.preventDefault();
        const API_URL = 'https://www.omdbapi.com/?apikey=924a38e3';
        const url = `${API_URL}&t='${this.state.searchTerm}`;
        console.log(url)
        return fetch(url)
        .then(response => response.json())
        .then(result => {
            this.setState({
                filmas: result,
                loading: false,
                temp: 1
            })
        })
    }

    searchTermChanged(event){
        // console.log(event.target.value)
        this.setState({
            searchTerm: event.target.value
        })
    }

    paspausta(event){
        this.setState({
            loading: true
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
                        className="btn btn-primary"
                        onClick={(event) => this.paspausta(event)}>
                        Ieskoti
                        </button>
                    </form>
                </div>
                {this.state.loading ? <img src= {loading} alt="load" id="loading"/> : "" }
                {this.state.temp === null ? "" : <Result_table result={this.state.filmas}/>}
            </div>
        )
    }
}


