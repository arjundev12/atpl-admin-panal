import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditQuestion = () => {
    let history = useHistory();
    const { id } = useParams();

    const onInputChange = async (e) => {
        console.warn("oninput change data ", e.target.name, e.target.value)
        if ("chapter_meta" == e.target.name) {
            if (e.detail === 0) {
                console.log("datataata", chapter1[e.target.value], e.target.name)
                await setData({ ...data, subcategory: chapter1[e.target.value]._id, [e.target.name]: chapter1[e.target.value] })
            }
        } else if ("questions" == e.target.name) {
            await setData({ ...data, [e.target.name]: e.target.value + "" });
        } else if ("marks" == e.target.name) {
            await setData({ ...data, [e.target.name]: e.target.value + "" });
        } else {
            await setData({ ...data, [e.target.name]: e.target.value });
        }

    };
    useEffect(() => {
        loadUser(id);
    }, []);
    const [data, setData] = useState({});
    const [optionss, setOptionss] = useState([]);
    const { question, difficulty_level, is_image, options, info, correct_index, status } = data
    const onSubmit = async e => {
        e.preventDefault();
        // let data1 = {}
        console.log("request", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/edit-question`, data);
        console.log("response", response)
        if (response.data.code == 200) {
            // toast("Update successfully");
            setData(response.data.data);
            // setTimeout(function () { history.push("/vehicles"); }, 2000);
            // history.push("/users");
        }
        else {
            console.warn(response)
        }
    };
    const [chapter1, setChapter1] = useState([]);
    const loadUser = async (id) => {
        // const result = 
        // console.log("responseload", res.data)
        await axios.get(`${CONSTANT.baseUrl}/api/admin/view-question?_id=${id}`).then((res) => {
            console.log("responseload", res.data)
            setData(res.data.data);
            setOptionss(res.data.data.options)
            axios.get(`${CONSTANT.baseUrl}/api/admin/chapter-list?_id=${res.data.data.subcategory}`).then((data1) => {
                console.log("hiiiiiiiiresponse", data1)
                setChapter1(data1.data.data)
            }).catch((err) => {
                console.warn(err)
                // toast(err.data.message)
            })
        }).catch(err => {
            console.warn(err)
        })
        // await axios.get(`${CONSTANT.baseUrl}/api/admin/chapter-list`).then((data1) => {
        //     console.log("hiiiiiiiiresponse", data1)
        //     setChapter1(data1.data.data)
        // }).catch((err) => {
        //     toast(err.data.message)
        // })

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
                                                        <label>Question</label>
                                                        <input class="form-control" name="question" value={is_image ? "" : question} onChange={e => onInputChange(e)}></input>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Info</label>
                                                        <input class="form-control" name="info" value={info} onChange={e => onInputChange(e)}></input>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Difficulty level</label>
                                                        <select class="form-control" name="difficulty_level" value={difficulty_level}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value={'0'}>low</option>
                                                            <option value={'1'}>mediam</option>
                                                            <option value={'2'}>high</option>
                                                        </select>
                                                        {/* <input class="form-control" type = 'number' name="questions" value={questions} onChange={e => onInputChange(e)}></input> */}
                                                    </div>
                                                    {/* <div class="form-group col-sm-6">
                                                        <label>Correct Index</label>
                                                        <input class="form-control" type = 'number' name="correct_index" value={correct_index} onChange={e => onInputChange(e)}></input>
                                                    </div> */}

                                                    <div class="form-group col-sm-6">
                                                        <label>Correct Index</label>
                                                        <select class="form-control" name="correct_index" value={correct_index}
                                                            onChange={e => onInputChange(e)}>
                                                            {options && options.map((item, index) => <option value={index}>{index}</option>)}
                                                            {/* <option value={true}>Yes</option>
                                                            <option value={false}>No</option> */}
                                                        </select>

                                                    </div>
                                                    {/* <div class="form-group col-sm-6">
                                                        <label>options</label>
                                                        <input class="form-control" name="title" value={item.title}
                                                                onChange={e => onInputChange(e)}> </input>
                                                        {optionss && optionss.map((item, index) => 
                                                            <input class="form-control" name="title" value={item.title}
                                                                onChange={e => onInputChange(e)}> </input>
                                                        )}
                                                    </div> */}
                                                    {optionss && optionss.map((item) => <div class="form-group col-sm-6">
                                                    <label>Option {item.name}</label>
                                                        <input class="form-control" name="option" value={item.title} disabled='true' ></input>
                                                    </div>
                                                    )}
                                                    {/* <div class="form-group col-sm-6">
                                                        <label>Option A</label>
                                                        <input class="form-control" name="option" value={options[0].title} onChange={e => onInputChange(e,options[0].name )}></input>
                                                    </div> */}

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
                                                        <label>chapter</label>
                                                        <select class="form-control" name="chapter_meta" 
                                                            onClick={e => onInputChange(e)}>
                                                            {chapter1 && chapter1.map((option, index) => <option value={index}>
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

export default EditQuestion;