
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";



const EditPet = () => {


    let [onePet, setOnePet] = useState({});


    let [formErr, setFormErr] = useState({});

    const history = useHistory();

    // get id from route
    let { id } = useParams();


    useEffect(() =>
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                console.log("RESPONSE get one ====>", res)
                setOnePet(res.data.result)
            })
            .catch(err => {
                console.log("error in submitting get one request")
            }
            )
        , [])



    const onChangeHandler = (e) => {
        console.log("Change handler working")
        setOnePet({
            ...onePet,
            [e.target.name]: e.target.value,
            [e.target.type]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.skill1]: e.target.value,
            [e.target.skill2]: e.target.value,
            [e.target.skill3]: e.target.value

        })
    }




// PUT REQUEST 
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/update/${id}`, onePet)
            .then(res => {
                console.log("SUCCESSFULLY submitted post req ==>", res)
                if (res.data.error) {
                    setFormErr(res.data.error.errors)
                } else {
                    history.push('/')
                }
            })
            .catch(err => {
                console.log("error in submitting put request", err)

            })
    }




    return (
        <div className="container">
            <h1 className="m-4">Pet Shelter</h1>
            <Link to={'/'}>Home</Link>
            <h3 className="m-4">Edit {onePet.name}</h3>
            <form onSubmit={submitHandler} className="border border-dark p-md-5 w-50">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name:</span>
                    <input type="text" name="name" value={onePet.name} className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{formErr.name?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Type:</span>
                    <input type="text" name="type" value={onePet.type} className="form-control"  aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{formErr.type?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description:</span>
                    <input type="text" name="description" value={onePet.description} className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{formErr.description?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Skill 1:</span>
                    <input type="text" name="skill1" value={onePet.skill1} className="form-control"  aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
             
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Skill 2:</span>
                    <input type="text" name="skill 2" value={onePet.skill2} className="form-control"  aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
           
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Skill 3:</span>
                    <input type="text" name="skill3" value={onePet.skill3} className="form-control"  aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                





                <div>
                    <input className="btn btn-primary m-4" type="submit" value="Submit" />
                    <Link to={'/'} className="btn btn-primary mx-3">Cancel</Link>
                </div>
            </form>

        </div>

    )
};

export default EditPet;
