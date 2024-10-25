import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Home.css'

function Home () {
    return (
        <>
        <h1>Bienvenido</h1>
        <Link to={'/Projects'}>Mis projectos</Link>
        <Link to={'/Resume'}>Mi cv</Link>
       </>
    
    )
}
    
export default Home