import React, {Component} from "react"

export default Result_table(props){
    return (
        <div className="container">

            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row"></th>
                    <td>{props.duomenuPakas.vienasPavadinimas}</td>
                    <td>{props.duomenuPakas.vienasPavadinimas}</td>
                    <td>{props.duomenuPakas.vienasPavadinimas}</td>
                    <td>{props.duomenuPakas.vienasPavadinimas}</td>
                    <td><img src = {props.duomenuPakas.vienasPavadinimas}/></td>

                </tr>
                </tbody>
            </table>
        </div>
    )
}