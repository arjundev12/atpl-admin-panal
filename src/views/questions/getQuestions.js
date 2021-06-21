import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetQuestions = () => {
    const history = useHistory()
    const [question, setQuestion] = useState([{
        id: "",
        question: "",
        chapter_meta: {
            name: "",
            subcategory_meta: {
            name: ""
        },
        },
        
        
        // minner_Activity: "",
    }]);
    const { id } = useParams();
    const [search, setSearch] = useState({});
    useEffect(() => {
        loadQuestion();

    }, [search]);
    const loadQuestion = async () => {
        let array = []
        const data = {
            page: 1,
            limit: 5
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        } 
        // console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-questions`,data);
        // console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if (item.question) {
                array.push(item)
            }
        }
        setQuestion(array);
    };
    const deletequestion = async (e, item) => {
        // console.log("deletequestion", item)
        await axios.delete(`${CONSTANT.baseUrl}/api/admin/delete-question?_id=${item}`).then((data1) => {
            console.log("response", data1)
            // toast( data1.data.data.message)
            loadQuestion()
        }).catch((err) => {
            console.log("error", err)
            toast(err.data.message)
        })

    };
    const onInputChange1 = async (e)=>{
        console.log("search text", e.target.name, e.target.value )
        setSearch({ ...search, [e.target.name]: e.target.value });
    }
    return (
        <div>
            {/* <Link className="btn btn-primary" to="/">
                back to Home
       </Link> */}
            <Link className="btn btn-primary add-blog" to="/add/question">
                Add question
       </Link>
            <div>
                    <input
                        type="text"
                        className="searchBox"
                        placeholder="search here...."
                        name="text"
                        value={search.text}
                        onChange={e => onInputChange1(e)}
                    />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>questions</th>
                        <th>Belonging Chapter</th>
                        <th>Belonging Sub Category</th>
                        {/* <th class="address">status</th> */}
                        {/* <th>Created by</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        question.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.question}</td>
                            <td>{item.chapter_meta.name?item.chapter_meta.name:""}</td>
                            <td>{item.chapter_meta.subcategory_meta.name?item.chapter_meta.subcategory_meta.name:""}</td>
                            {/* <Button className="btn btn-primary bg-green mr-2" onClick={e => deletequestion(e, item._id,)}> delete </Button> */}
                            {/* <td>
                                <select class="form-control" name="status" value={item.status ? item.status : 'active'}
                                    onChange={e => onInputChange(e, item)}>
                                    <option value={'active'} >Active</option>
                                    <option value={'inactive'}>Inactive</option>
                                </select></td> */}
                            {/* <td>{item.created_by+""}</td> */}
                        </tr>)
                    }
                </tbody>
            </Table>
            <ToastContainer />
            {/* <Button variant="primary">Primary</Button> */}
        </div>
    )
}

export default GetQuestions
