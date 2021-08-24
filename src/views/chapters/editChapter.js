import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditChapter = () => {
    let history = useHistory();
    const { id } = useParams();

    const onInputChange = async e => {
        console.warn("oninput change data ", e.target.name, e.target.value)
        if("subcategory_meta"==e.target.name ){
            if (e.detail === 0) {
                console.log("datataata",subcategory1[e.target.value] ,e.target.name  )
                await setData({ ...data, subcategory: subcategory1[e.target.value]._id,  [e.target.name]: subcategory1[e.target.value] })
            }
        }else if("questions"==e.target.name ){
            await setData({ ...data, [e.target.name]: e.target.value+"" });
        }else if("marks"==e.target.name ){
            await setData({ ...data, [e.target.name]: e.target.value+"" });
        }else{
            await setData({ ...data, [e.target.name]: e.target.value });
        }

    };
    useEffect(() => {
        loadUser(id);
    }, []);
    const [data, setData] = useState({});
    const { name, status, time, questions,marks, is_mocktest } = data
    const onSubmit = async e => {
        e.preventDefault();
        // let data1 = {}
        console.log("request", data)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/edit-chapter`, data);
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
    const [subcategory1, setSubcategory1] = useState([]);
    const loadUser = async (id) => {
        // const result = 
        // console.log("responseload", res.data)
        try {
            let res =   await axios.get(`${CONSTANT.baseUrl}/api/admin/view-chapter?_id=${id}`)
            console.log("responseload", res.data)
            if (res.data.code ==200){
                await setData(res.data.data);
                let data1=   await axios.get(`${CONSTANT.baseUrl}/api/admin/subcategory-list?_id=${res.data.data.category}`)
                await setSubcategory1(data1.data.data)
            }else{
                console.log("somthig went wrong")
            }
        } catch (error) {
            console.log("somthig went wrong", error)
        }
    

    }
//    const loadsubcategory = async()=>{

//    }

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
                                                        <label>time</label>
                                                        <select class="form-control" name="time" value={time}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value={'15min'}>15 min</option>
                                                            <option value={'20min'}>20 min</option>
                                                            <option value={'25min'}>25 min</option>
                                                            <option value={'30min'}>30 min</option>
                                                            <option value={'35min'}>35 min</option>
                                                            <option value={'40min'}>40 min</option>
                                                            <option value={'50min'}>50 min</option>
                                                            <option value={'60min'}>60 min</option>
                                                            <option value={'120min'}>120 min</option>
                                                        </select>
                                                        {/* <input type="text" name="status" class="form-control" placeholder="" value={status}
                                                            onChange={e => onInputChange(e)} /> */}
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Questions</label>
                                                        <input class="form-control" type = 'number' name="questions" value={questions} onChange={e => onInputChange(e)}></input>
                                                    </div>
                                                    <div class="form-group col-sm-6">
                                                        <label>Marks</label>
                                                        <input class="form-control" type = 'number' name="marks" value={marks} onChange={e => onInputChange(e)}></input>
                                                    </div>
                                                    
                                                    <div class="form-group col-sm-6">
                                                        <label>Is Mocktest</label>
                                                        <select class="form-control" name="is_mocktest" value={is_mocktest}
                                                            onChange={e => onInputChange(e)}>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                        {/* <input type="text" name="status" class="form-control" placeholder="" value={status}
                                                            onChange={e => onInputChange(e)} /> */}
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
                                                    <select class="form-control" name="subcategory_meta" 
                                                        onClick={e => onInputChange(e)}>
                                                        {subcategory1 && subcategory1.map((option, index) => <option value={index}>
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

export default EditChapter;