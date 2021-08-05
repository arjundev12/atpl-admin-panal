import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import axios from "axios";
import { Button, Table, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import Pagination from '../pagination/pagination'
import '../../css/style.css'
import csc from 'country-state-city'

const Cms = () => {
    const history = useHistory()
    const [showPerPage, setShowPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [index, setIndex] = useState(1);
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        loaddata(page);
    }, [page, total]);

    const loaddata = async () => {
        const data = {
            // offset: page,
            // limit: 10
        }
        console.log("requset0", data)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/get-cms`, data);
        console.warn("respons", res.data.data)
        if (res.data.code == 200) {
            toast("List get successfully")
            // await setTotal(res.data.data.total)
            await setData(res.data.data.docs);
        } else {
            toast("somthing went wrong")
        }
    };
    // const onPaginationChange = (start, end) => {
    //     console.warn("getee, ", start, end)
    //     setPage(start)
    //     setIndex(end)
    // };
    const itemDelete = async (e, item) => {
        console.log("delete item", item)
        const res = await axios.delete(`${CONSTANT.baseUrl}/api/admin/delete-cms?_id=${item._id}`);
        toast(`${res.data.message}`)
        loaddata(page);
    }
   

    const [formdata, setFormDate] = useState({
        title: "",
        content: "",
        type: "about_us",
        status: "active"

    })
    const { title, content, type, status } = formdata
    const onInputChange = async (e, item) => {
        console.warn("oninput change data ", e.target.name, e.target.value )
        let data = {}
        if (e.target.name == 'status') {
            data.status = e.target.value
        } else {
            setFormDate({ ...formdata, [e.target.name]: e.target.value })
        }
    }
    //======================================modalcode==================================//

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = async () => {
        setShow(true);
    }
    const onSubmit = async e => {
        e.preventDefault();
        console.log("hi request", formdata)
        const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/cms/create`, formdata);
        console.log("hi request", res)
        if (res.data.code == 200) {
            toast(res.data.message)
            handleClose()
        } else {
            toast(res.data.message)
            handleClose()
        }

    }



    return (
        <div class="btn-right">
            <Link className="btn btn-primary btn-home" to="/dashboard">
                back to Home
            </Link>
            <Button variant="primary btn-link" onClick={handleShow}>
                Add Content
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Type</th>
                        {/* <th class="status">Status</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => <tr>
                            <td>{i + 1}</td>
                            <td>{item.title ? item.title : null}</td>
                            <td>{item.type ? item.type : null}</td>
                            {/* <td><select class="form-control" name="status" value={item.status}
                                onChange={e => onInputChange(e, item)}>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option> */}
                            {/* <option value="blocked">Block</option> */}
                            {/* </select></td> */}
                            <td>
                                <Link className="btn btn-primary mr-2 " to={`/cms/edit/${item._id}`}>edit </Link>
                                {/* <Link className="btn btn-primary mr-2" to={`/wallet/customer/${item._id}`}> delete </Link> */}
                                <Button className="btn btn-primary " onClick={e => itemDelete(e, item)}> Delete</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Content</Modal.Title>
                </Modal.Header>
                <div class="row">
                    <div class="state-name-code">
                        <div className="form-group">
                            <label> Title</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter question description"
                                name="title"
                                value={title}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label> Content</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter info description"
                                name="content"
                                value={content}
                                onChange={e => onInputChange(e)}
                            />
                            {/* {priceErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>{priceErr}</div>
                        } */}
                        </div>
                        <div className="form-group col-sm-6">
                            <label>Type</label>
                            <select className="form-control" name="type"
                                onChange={e => onInputChange(e)} >
                                <option value={"about_us"}> {'about us'} </option>
                                <option value={"term_and_condition"}> {'term & condition'} </option>
                                <option value={"privecy_policy"}>{'privecy and policy'}</option>
                                {/* <option  value={"D"}> D </option> */}
                            </select>
                        </div>
                    </div >
                </div>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={e => onSubmit(e)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <Modal show={showcity} onHide={handleCloseCity}>
                <Modal.Header closeButton>
                    <Modal.Title>{cityData.name}</Modal.Title>
                </Modal.Header>
                <div class="row">
                    <div class="state-name-code">
                        <label>Pincode</label>
                        <input  type="text" name="code"
                            class="form-control" placeholder=""
                            onChange={e => onInputChangePin(e)} />
                        <div className="text-danger">{error.pin}</div>
                    </div>
                </div>
                <div class ='footer-side'>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCity}>
                        Close
          </Button>
                    <Button variant="primary" onClick={e => onSubmitPin(e)}>
                        Submit
          </Button>
                </Modal.Footer>
                </div>
                
            </Modal> */}
            <ToastContainer />
            {/* <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={total}
                page={page}
            /> */}
        </div>
    )
}

export default Cms
