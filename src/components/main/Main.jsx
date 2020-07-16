import React, {Component} from 'react'
import Fetch from '../fetch/Fetch'
import './main.css'

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            title: 'Filmu Search',
            searchTerm: '',
            loading: true
        }
    }

    formaSubmit(event){
        // console.log(event.target.value)
        event.preventDefault();
        Fetch.search(this.state.searchTerm)
            .then(
                console.log("kazkas ivyko"))
            .then(console.log("nepaejo"))
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
                    {this.state.loading ? <img src="https://media1.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="load"/> : "" }
                </div>
            </div>
        )
    }
}
