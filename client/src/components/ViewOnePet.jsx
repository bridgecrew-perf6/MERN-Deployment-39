import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import {
    Link
} from "react-router-dom"


const OnePetDetail = () => {

    const { id } = useParams();

    const history = useHistory();

    let [petDetail, setPetDetail] = useState({});


    // GET BY ID, use params
    useEffect(() =>
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                console.log("RESPONSE get one ====>", res)
                // .result <-------
                setPetDetail(res.data.result)
            })
            .catch(err => console.log("error in submitting get one request"))
        , [])


    // DELETE BY ID
    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then(res =>
                // console.log("SUCCESS Delete response ==> ", res),
                history.push('/')
            )
            .catch(err => console.log("error in submitting delete request"))
    }


    return (
        <div className='container'>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>Home</Link>
            <h3>Details about: {petDetail.name}</h3>
            <p>Pet Type: {petDetail.type}</p>
            <p>Pet Description: {petDetail.description}</p>
            <p>Pet Skills: {petDetail.skill1}</p>
            <p>Pet Skills: {petDetail.skill2}</p>
            <p>Pet Skills: {petDetail.skill3}</p>
            <button onClick={() => adoptPet(petDetail._id)} className="btn btn-primary">Adopt Pet</button>
        </div>


    )
};

export default OnePetDetail;
