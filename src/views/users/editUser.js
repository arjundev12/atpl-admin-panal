import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import *as  CONSTANT  from '../../constant'
import '../../css/style.css'
import image from '../../assets/download.png'
const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        contact_number: "",
        website: "",
        minner_Activity:"",
        is_email_verify: "",
        is_number_verify: "",
        block_user: "",
        country_code: "",
        DOB: "",
        address: "",
        profile_pic: ""
    });
    const options = {
        headers: {'token': localStorage.getItem('token')}
      }; 

    const { name,DOB,profile_pic, email, contact_number,is_email_verify,is_number_verify ,block_user, address,country_code} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        console.log("request", user)
        console.log("daaaaaaa", user)
        let response = await axios.put(`${CONSTANT.baseUrl}/api/admin/update-user`, user,options);
// console.log("response", response)
        if (response.data.code == 200) {
            // toast("Update successfully");
            setTimeout(function(){history.push("/users"); }, 3000);
            // history.push("/users");
        }
    };

    const loadUser = async () => {

        // const result =
      
        await axios.get(`${CONSTANT.baseUrl}/api/admin/get-user-details?_id=${id}`,options).then((res) => {
            console.log("response", res.data)
            setUser(res.data.data);
        }).catch(err => {
            console.warn(err)
        })

    };
    return (
        <>
        {/* <!DOCTYPE html> */}
        <html lang="en">

            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> */}
                <title></title>

                {/* <!-- Bootstrap --> */}
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/animate.css" rel="stylesheet" />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
                <link href="css/owl.carousel.min.css" rel="stylesheet" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700,800,900" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Electrolize" rel="stylesheet" />
            </head>

            <body>

                <section>
                    <div class="UserArea">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-3 UserLeft">
                                    <form>
                                        <figure>
                                            <img src={ profile_pic == ""?image: profile_pic} />
                                        </figure>
                                        <figcaption>
                                            <span><i class="fa fa-upload" aria-hidden="true"></i>Upload Images</span>
                                            <input type="file" name="" />
                                            <button><i class="fa fa-check" aria-hidden="true"></i></button>
                                        </figcaption>
                                    </form>
                                </div>
                                <div class="col-sm-9">
                                    <div class="UserRight">
                                        <h3>Edit Details</h3>
                                        <form onSubmit={e => onSubmit(e)}>
                                            <div class="row">
                                                <div class="form-group col-sm-6">
                                                    <label>Name Title</label>
                                                    <input type="text" name="name" class="form-control" placeholder="" value={name}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Date of Birth</label>
                                                    <input type="text" name="DOB" class="form-control" placeholder="" value={DOB}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Mobile Number</label>
                                                    <input type="text" name="contact_number" class="form-control" placeholder="" value={contact_number}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Number Verify</label>
                                                    <select class="form-control" name="is_number_verify" value={is_number_verify}
                                                        onChange={e => onInputChange(e)}>
                                                        <option value={"1"}>Yes</option>
                                                        <option value={"0"}>No</option>
                                                        <option value={"2"}>pending</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Email</label>
                                                    <input type="text" name="email" class="form-control" placeholder="" value={email}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Email Verify</label>
                                                    <select class="form-control" name="is_email_verify" value={is_email_verify}
                                                        onChange={e => onInputChange(e)} >
                                                        <option value={"1"}>Yes</option>
                                                        <option value={"0"}>No</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Address</label>
                                                    <input type="text" name="address" class="form-control" placeholder="" value={address}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Country Code</label>
                                                    <input type="text" name="country_code" class="form-control" placeholder="" value={country_code}
                                                        onChange={e => onInputChange(e)} />
                                                </div>
                                                <div class="form-group col-sm-6">
                                                    <label>Block User</label>
                                                    <select class="form-control" name="block_user" value={block_user}
                                                        onChange={e => onInputChange(e)}>
                                                        <option value={"1"}>Yes</option>
                                                        <option value={"0"}>No</option>
                                                        {/* <option value={"2"}>pending</option> */}
                                                    </select>
                                                </div>
                                                {/* <div class="form-group col-sm-6">
                                                    <label>Minner Activity</label>
                                                    <select class="form-control" name="minner_Activity" value={minner_Activity}
                                                        onChange={e => onInputChange(e)}>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                </div> */}
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
            {/* <ToastContainer/> */}
        </html>
    </>
        // <div className="container">
        //     <div className="w-75 mx-auto shadow p-5">
        //         <h2 className="text-center mb-4">Edit A User</h2>
        //         <form onSubmit={e => onSubmit(e)}>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your Name"
        //                     name="name"
        //                     value={name}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your Username"
        //                     name="username"
        //                     value={username}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="email"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your E-mail Address"
        //                     name="email"
        //                     value={email}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             <div className="form-group">
        //                 <input
        //                     type="text"
        //                     className="form-control form-control-lg"
        //                     placeholder="Enter Your number Number"
        //                     name="number"
        //                     value={number}
        //                     onChange={e => onInputChange(e)}
        //                 />
        //             </div>
        //             {/* <div className="form-group">
        //     <input
        //       type="text"
        //       className="form-control form-control-lg"
        //       placeholder="Enter Your Website Name"
        //       name="website"
        //       value={website}
        //       onChange={e => onInputChange(e)}
        //     />
        //   </div> */}
        //             <button className="btn btn-warning btn-block">Update User</button>
        //         </form>
        //     </div>
        //     <ToastContainer />
        // </div>
    
    );
};

export default EditUser;