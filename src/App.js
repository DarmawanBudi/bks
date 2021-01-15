import React, { useState } from 'react';
import './App.css';

function App() {
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [tampil1, setTampil1] = useState("");
    const [tampil2, setTampil2] = useState("");
    const [hasil, setHasil] = useState("");
    const [type, setType] = useState("password");

    const Game = (value) => {
        if (p1 === "") {
            setP1(value)
            setTampil1("********")
        }
        else if (p2 === "") {
            setP2(value)
            setTampil2("********")
        }
    }

    const Rules = () => {
        if (p1 === "batu" && p2 === "batu" || p1 === "kertas" && p2 === "kertas" || p1 === "gunting" && p2 === "gunting") {
            setHasil("seri")
        }
        else if (p1 === "batu" && p2 === "gunting" || p1 === "kertas" && p2 === "batu" || p1 === "gunting" && p2 === "kertas") {
            setHasil("player 1 menang")
        }
        else if (p1 === "batu" && p2 === "kertas" || p1 === "kertas" && p2 === "gunting" || p1 === "gunting" && p2 === "batu") {
            setHasil("player 2 menang")
        }
    }

    const Clear = () => {
            setP1("")
            setP2("")
            setHasil("")
            setTampil1("")
            setTampil2("")
            setType("password")
    }

    const Show = () => {
        if (type === "password") {
            setType("text")
            setTampil1(p1)
            setTampil2(p2)
        }
    }

    return (    
        <div className="App container mt-5 text-center">
            <button className="btn btn-primary mr-5 btn-lg" onClick={() => Game("batu")}><b>Batu</b></button>
            <button className="btn btn-primary mr-5 btn-lg" onClick={() => Game("kertas")}><b>Kertas</b></button>
            <button className="btn btn-primary mr-5 btn-lg" onClick={() => Game("gunting")}><b>Gunting</b></button>

            <br></br>
            <br></br>

            <div className="row text-center">
                <div className="col-8 rules">
                    <button className="btn btn-success btn-block" onClick={() => Rules()}><b>=</b></button>
                </div>
                <div className="col-2 clear">
                    <button className="btn btn-danger btn-block" onClick={() => Clear()}>clear</button>
                </div>
            </div>

            <br></br>

            <div className="row in">
                <div className="col-3">
                <input className="form-control text-center" value={p1 !== "" ? "player 1" : ""} disabled></input>&nbsp;
                </div>
                <span  className="vs"> <b>VS</b> </span>&nbsp;
                <div className="col-3">
                <input className="form-control text-center" value={p2 !== "" ? "player 2" : ""} disabled></input>&nbsp;
                </div>
                <span  className="equals"> <b>=</b> </span>&nbsp;
                <div className="col-3">
                <input className="form-control text-center" value={hasil} disabled /><br></br>
                </div>
            </div>
            <div className="out">
                <input className="text-center" type={type} value={tampil1} disabled></input>&nbsp;
                <span> <b>VS</b> </span>&nbsp;
                <input className="text-center" type={type} value={tampil2} disabled></input>&nbsp;
                <button className="btn btn-warning btn-sm show" onClick={() => Show()}>show</button>
            </div>
        </div>
    );
}

export default App;
