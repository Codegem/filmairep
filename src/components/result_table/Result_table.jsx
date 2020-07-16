import React  from "react"
import './lentele.css'

export default function Result_table(props){
    return (
        <div className="container">

            <table className="table table-dark" id="rainbow">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Actors</th>
                    <th scope="col">Poster</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{props.result.Title}</td>
                    <td>{props.result.Year}</td>
                    <td>{props.result.Genre}</td>
                    <td>{props.result.Actors}</td>
                    <td><img id="img" src ={props.result.Poster} alt = ""/></td>

                </tr>
                </tbody>
            </table>
        </div>
    )
}