import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditSubcategory = () => {
    let history = useHistory();
    const { id } = useParams();

    const onInputChange = async e => {
        console.warn("oninput change data ", e.target.name, e.target.value)
        if("category_meta"==e.target.name ){
            if (e.detail === 0) {
                await setData({ ...data, category: category1[e.target.value]._id,  [e.target.name]: category1[e.target.value] })
            }
        }else{
            await setData({ ...data, [e.target.name]: e.target.value });
        }

    };
    useEffect(() => {
        loadUser(id);
    }, []);
    const [data, setData] = useState({});
    const { name, status } = data
    const onSubmit = async e => {
        e.preventDefault();
        // let data1 = {}
        console.log("request", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/edit-subcategory`, data);
        console.log("response", response)
        if (response.data.code == 200) {
            toast("Update successfully");
            setData(response.data.data);
            // setTimeout(function () { history.push("/vehicles"); }, 2000);
            // history.push("/users");
        }
        else {
            console.warn(response)
        }
    };
    const [category1, setCategory1] = useState([]);
    const loadUser = async (id) => {
        // const result = 
        // console.log("responseload", res.data)
        await axios.get(`${CONSTANT.baseUrl}/api/admin/view-subcategory?_id=${id}`).then((res) => {
            console.log("responseload", res.data)
            setData(res.data.data);
        }).catch(err => {
            console.warn(err)
        })
        await axios.get(`${CONSTANT.baseUrl}/api/admin/category-list`).then((data1) => {
            setCategory1(data1.data.data)
        }).catch((err) => {
            toast(err.data.message)
        })

    }

    return (
        <>
            {/* <!DOCTYPE html> */}
            <html lang="en">

                <body>
                    <section>
                        <div class="UserArea">
                            <div class="container">
                                <div class="row">

                                    <div class="col-sm-9">
                                        <div class="UserRight">
                                            <h3>Edit Details</h3>
                                            <form onSubmit={e => onSubmit(e)}>
                                                <div class="row">
                                                    <div class="form-group col-sm-6">
                                                        <label>Name</label>
                                                        <input class="form-control" name="name" value={name} onChange={e => onInputChange(e)}></input>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Status</label>
                                                        <select class="form-control" name="status" value={status}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value="active">Active</option>
                                                            <option value="inactive">Inactive</option>
                                                        </select>
                                                        {/* <input type="text" name="status" class="form-control" placeholder="" value={status}
                                                            onChange={e => onInputChange(e)} /> */}
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                    <label>Category</label>
                                                    <select class="form-control" name="category_meta" 
                                                        onClick={e => onInputChange(e)}>
                                                        {category1 && category1.map((option, index) => <option value={index}>
                                                            {option.name}
                                                        </option>)}
                                                        {/* <option value="active">Active</option>
                                                            <option value="inactive">Inactive</option> */}
                                                    </select>

                                                </div>
                                                    <div class="col-sm-12">
                                                        <button onClick={onSubmit}>Submit</button>
                                                    </div>

                                                </div>
                                               
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js "></script>
                    <script src="js/bootstrap.min.js "></script>
                    <script src="js/owl.carousel.js "></script>

                </body>
                <ToastContainer />
            </html>
        </>
    )
    // return (
    //     <div className="container">
    //         <div className="w-75 mx-auto shadow p-5">
    //             <h2 className="text-center mb-4">Edit A User</h2>
    //             <form onSubmit={e => onSubmit(e)}>
    //                 <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your Name"
    //                         name="name"
    //                         value={name}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div>
    //                 {/* <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your driverStatus"
    //                         name="driverStatus"
    //                         value={driverStatus}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div> */}
    //                 <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your  Address"
    //                         name="address"
    //                         value={address}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <input
    //                         type="text"
    //                         className="form-control form-control-lg"
    //                         placeholder="Enter Your Number"
    //                         name="phoneNo"
    //                         value={phoneNo}
    //                         onChange={e => onInputChange(e)}
    //                     />
    //                 </div>
    //                 {/* <div className="form-group">
    //         <input
    //           type="text"
    //           className="form-control form-control-lg"
    //           placeholder="Enter Your Website Name"
    //           name="website"
    //           value={website}
    //           onChange={e => onInputChange(e)}
    //         />
    //       </div> */}
    //                 <button className="btn btn-warning btn-block">Update User</button>
    //             </form>
    //         </div>
    //         {/* <ToastContainer /> */}
    //     </div>
    // );
};

export default EditSubcategory;