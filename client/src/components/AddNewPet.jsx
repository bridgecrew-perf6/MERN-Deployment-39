import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    Link
} from "react-router-dom";


const AddPetForm = (props) => {


    let [name, setName] = useState('');
    let [type, setType] = useState('');
    let [description, setDescription] = useState('');
    let [skill1, setSkill1] = useState('');
    let [skill2, setSkill2] = useState('');
    let [skill3, setSkill3] = useState('');


    let [formErr, setFormErr] = useState({});

    const history = useHistory();

    // CREATE NEW
    const submitHandler = (e) => {
        e.preventDefault();
        let formInputObj = { name, type, description, skill1, skill2, skill3 }
        axios.post("http://localhost:8000/api/pet/create", formInputObj)
            .then(res => {
                console.log("SUCCESSFULLY submitted post req ==>", res)
        //  DB Name validation here ??
                if (res.data.error) {
                    setFormErr(res.data.error.errors)
                } else {
                    history.push('/')
                }
            })
            .catch(err => console.log("error in submitting post request", err))

    }

    return (
        <div className="container w-50">
            <h1 className="mt-4">Pet Shelter</h1>
            <Link to={'/'}>Home</Link>
            <h3 className="m-4">Know a pet needing a home?</h3>
            <form onSubmit={submitHandler}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name:</span>
                    <input type="text" value={name} className="form-control" placeholder="Add Pet Name" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setName(e.target.value)} />
                </div>
                <p>{formErr.name?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Type:</span>
                    <input type="text" value={type} className="form-control" placeholder="Add Pet Type" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setType(e.target.value)} />
                </div>
                <p>{formErr.type?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description:</span>
                    <input type="text" value={description} className="form-control" placeholder="Add Pet Description" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <p>{formErr.description?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Skills:</span>
                    <input type="text" value={skill1} className="form-control" placeholder="Add Pet Skill, you may add up to 3" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setSkill1(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Skills:</span>
                    <input type="text" value={skill2} className="form-control" placeholder="Add Pet Skill, you may add up to 3" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setSkill2(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Skills:</span>
                    <input type="text" value={skill3} className="form-control" placeholder="Add Pet Skill, you may add up to 3" aria-label="" aria-describedby="basic-addon1" onChange={(e) => setSkill3(e.target.value)} />
                </div>
                <div>
                    <input className="btn btn-primary m-4" type="submit" value="Add Pet" />
                </div>
            </form>
        </div>
    )
};

export default AddPetForm;