import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Link
} from 'react-router-dom';
import axios from 'axios'



const ViewAllPets = () => {



    let [arrOfPetsObj, setArrOfPetsObj] = useState([]);


    // const sortAlphabetically = (a, b) => {
    //     if (a.toLowerCase() < b.toLowerCase()) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // }
    

    // GET ALL PETS
    useEffect(() =>
        axios.get('http://localhost:8000/api/pet/all')
            .then(res => {
                // sort alpabetically. Upper case/lowercase?
                res.data.result.sort(function (a, b) {
                    if (a.type.toLowerCase() < b.type.toLowerCase()) { return -1; }
                    if (a.type.toLowerCase() > b.type.toLowerCase()) { return 1; }
                    return 0;
                })
                setArrOfPetsObj(res.data.result)

                console.log('GET ALL SUCCESS ==>> ', res)
            })
            .catch(err => console.log("error in submitting get all request")), [])





    return (
        <div className='flex justify-content-center'>
            <h1 className="m-4">Pet Shelter</h1>
            <Link to={'/pet/addnew'}>Add an Pet to the shelter</Link>
            <h3 className="m-4">These pets are looking for a good home!</h3>
            <br />
            <table className="table table-bordered table-striped align-middle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {

                    arrOfPetsObj.map((petObj, i) => {
                        return (
                            <tbody key={i}>
                                <tr className="">
                                    <td>{petObj.name}</td>
                                    <td>{petObj.type}</td>

                                    <td> <Link to={`/pet/update/${petObj._id}`} className="btn btn-primary m-3">Edit Pet</Link>

                                        <Link to={`/pet/view/${petObj._id}`} className="btn btn-primary m-3">Pet Details </Link>

                                    </td>
                                </tr>

                            </tbody>
                        )
                    })
                }

            </table>
        </div>

    )
};

export default ViewAllPets;
