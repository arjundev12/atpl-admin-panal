import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table } from 'react-bootstrap'
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetSubCategories = () => {
    const history = useHistory()
    const [category, setCategory] = useState([{
        id: "",
        name: "",
        category_meta: {
            name: ""
        },
        // minner_Activity: "",
    }]);
    const { id } = useParams();
    const [search, setSearch] = useState({});
    useEffect(() => {
        loadCategory();

    }, [search]);
    const loadCategory = async () => {
        let array = []
        const data = {
            page: 1,
            limit: 5
        }
        if (!(Object.keys(search).length === 0 && search.constructor === Object)) {
            data.searchData = search.text
        } 
        // console.log("datarequest ", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-subcategory`,data);
        // console.warn(res.data.data)
        for (let item of res.data.data.docs) {
            if (item.name) {
                array.push(item)
            }
        }
        setCategory(array);
    };
    const deleteCategory = async (e, item) => {
        // console.log("deleteCategory", item)
        await axios.delete(`${CONSTANT.baseUrl}/api/admin/delete-category?_id=${item}`).then((data1) => {
            console.log("response", data1)
            // toast( data1.data.data.message)
            loadCategory()
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
            <Link className="btn btn-primary add-blog" to="/add/subcategory">
                Add Sub Category
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
                        <th>Sub Categories</th>
                        <th>Belonging Categories</th>
                        {/* <th >Action</th> */}
                        {/* <th>Created by</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.category_meta.name?item.category_meta.name:""}</td>
                            {/* <Button className="btn btn-primary bg-green mr-2" onClick={e => deleteCategory(e, item._id,)}> delete </Button> */}
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

export default GetSubCategories
