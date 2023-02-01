import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { getAllUsers } from '../../../backend/controller/userController'

const MultipleDocs = () => {
    const [dob, setdob] = useState()
    const [adhar, setadhar] = useState()
    const [tc, settc] = useState()
    const [Alldata, setAlldata] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("dob", dob)
        fd.append("adhar", adhar)
        fd.append("tc", tc)
        const { data } = await axios.post("http://localhost:5000/doc/add", fd)
        console.log(data);

    }
    const getAllUsers = async (e) => {
        const { data: { result } } = await axios.get("http://localhost:5000/doc")
        console.log(result);
        setAlldata(result)
    }
    useEffect(() => {
        getAllUsers()
    }, [])


    return <>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className='col-sm-6 offset-sm-3'></div>
                    <input
                        className='form-control'
                        type="file"
                        id='dob'
                        onChange={e => setdob(e.target.files[0])}
                    />
                    <input
                        className='form-control'
                        type="file"
                        id='adhar'
                        onChange={e => setadhar(e.target.files[0])}
                    />
                    <input
                        className='form-control'
                        type="file"
                        id='tc'
                        onChange={e => settc(e.target.files[0])}
                    />
                    <button type='submit' className='btn btn-primary mx-3'> Upload </button>
                </div>
            </div>
        </form>
        <div>
            {
                Alldata.map(item => <div className='card' key={item}>
                    <div className='card-header'>{
                        <img src={`http://localhost:5000/${item.userDob}`} height={100} width={100} className=' m-2' alt="" />
                    }
                    </div>
                    <div className='card-body'>{<img src={`http://localhost:5000/${item.userTc}`} height={100} width={100} className=' m-2' alt="" />}</div>
                    <div className='card-footer'>{<img src={`http://localhost:5000/${item.userAdhar}`} height={100} width={100} className=' m-2' alt="" />}</div>



                </div>)
            }


        </div>


    </>
}

export default MultipleDocs