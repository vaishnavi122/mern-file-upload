import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const MultipleImageUpload = () => {
    const [name, setName] = useState("kate")
    const [documents, setDocuments] = useState()

    const userInstance = axios.create({
        baseURL: "http://localhost:5000"
    })

    const handleSubmit = async e => {
        e.preventDefault()
        // console.log(documents);
        const fd = new FormData()
        fd.append("name", name)
        for (let d of documents) {
            fd.append("doc", d)
        }
        // console.log(d);
        // for (const x of fd.entries()) {
        //     console.log(x);                 //print FormData 
        // }

        // for (let i = 0; i < documents.length; i++) {
        //     fd.append("doc",documents[i])               OR
        // }

        const { data } = await userInstance.post("/user/add-to-gallery", fd)
        console.log(data);
    }


    const [Users, setUsers] = useState([])
    const getAllUsers = async (e) => {
        const { data: { result } } = await userInstance.get("/user/fetch")
        setUsers(result)
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return <>
        <pre>
            {
                JSON.stringify(documents, null, 2)
            }
        </pre>

        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <input type="text" className='form-control mt-3'
                            value={name} onChange={e => setName(e.target.value)}
                            placeholder='Enter Name' />
                        <br /><br />
                        <input type="file" className='form-control'
                            multiple
                            onChange={e => setDocuments(e.target.files)}
                            placeholder='Please Choose Docs' />
                        <br /><br />
                        <button type="submit" className="btn btn-primary w-100">Add Docs</button>
                    </div>
                </div>
            </div>

        </form>



        <div className='mt-5'>
            {
                Users.map(item => <div className="card">
                    <div className="card-body">
                        <h1>{item.name}</h1>
                        {
                            item.docs.map(url => <img src={`http://localhost:5000/${url}`} height={100}
                                width={100}
                                className=' m-2' alt="" />)
                        }
                    </div>
                </div>)
            }
        </div>
    </>
}

export default MultipleImageUpload