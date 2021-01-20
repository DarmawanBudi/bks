import React, { useState } from 'react';
import './App.css';
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';
import batu from './image/batu.png';
import kertas from './image/kertas.png';
import gunting from './image/gunting.png';

function App() {
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [tampil1, setTampil1] = useState("");
    const [tampil2, setTampil2] = useState("");
    const [hasil, setHasil] = useState("");
    const [type, setType] = useState("password");
    const darkMode = useDarkMode(false);

    const Game = (value) => {
        var arr = ["batu", "kertas", "gunting"];
        var randomValue = arr[Math.floor(arr.length * Math.random())];
        if (p1 === "") {
            setP1(value)
            setP2(randomValue)
            setTampil1("********")
            setTampil2("********")
        }
        // else if (p2 === "") {
        //     setP2(value)
        //     setTampil2("********")
        // }
    }

    const Rules = () => {
        if (p1 === "batu" && p2 === "batu" || p1 === "kertas" && p2 === "kertas" || p1 === "gunting" && p2 === "gunting") {
            setHasil("seri")
        }
        else if (p1 === "batu" && p2 === "gunting" || p1 === "kertas" && p2 === "batu" || p1 === "gunting" && p2 === "kertas") {
            setHasil("player menang")
        }
        else if (p1 === "batu" && p2 === "kertas" || p1 === "kertas" && p2 === "gunting" || p1 === "gunting" && p2 === "batu") {
            setHasil("ai menang")
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
        <div className="App container text-center">
            <div className="d-flex justify-content-end mt-3">
                <DarkModeToggle onChange={darkMode.toggle} checked={darkMode.value} size={50} />
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={batu} width="100" height="100" onClick={() => Game("batu")} />
                </div>
                <div className="col-4">
                    <img src={kertas} width="100" height="100" onClick={() => Game("kertas")} />
                </div>
                <div className="col-4">
                    <img src={gunting} width="100" height="100" onClick={() => Game("gunting")} />
                </div>
            </div>

            <br></br>
            <br></br>

            <div className="row text-center">
                <div className="col-8">
                    <button className="btn btn-success btn-block btn-lg" onClick={() => Rules()}><b>=</b></button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger btn-block btn-lg" onClick={() => Clear()}><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>

            <br></br>

            <div className="row mt-5">
                <div className="col-3">
                    <input className="form-control text-center" value={p1 !== "" ? "player" : ""} disabled></input>&nbsp;
                    </div>
                <div className="col-1 mt-2">
                    <span> <b>VS</b> </span>&nbsp;
                    </div>
                <div className="col-3">
                    <input className="form-control text-center" value={p2 !== "" ? "ai" : ""} disabled></input>&nbsp;
                    </div>
                <div className="col-1 mt-1">
                    <span> <b>=</b> </span>&nbsp;
                    </div>
                <div className="col-3">
                    <input className="form-control text-center" value={hasil} disabled /><br></br>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <input className="form-control text-center" type={type} value={tampil1} disabled></input>&nbsp;
                    </div>
                <div className="col-1 mt-1">
                    <span> <b>VS</b> </span>&nbsp;
                    </div>
                <div className="col-3">
                    <input className="form-control text-center" type={type} value={tampil2} disabled></input>&nbsp;
                    </div>
                <div className="col-1 mt-1">
                    <button className="btn btn-warning btn-sm" onClick={() => Show()} disabled={hasil === ""}><i class="fas fa-eye"></i></button>
                </div>
            </div>
        </div>
    );
}

export default App;
