import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Table } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddSubscription = () => {
  let history = useHistory();
  const [addsubscription, setAddsubscription] = useState({
    title: "",
    price: ""
  });

 
  const { title, price} = addsubscription;
  useEffect(() => {
    // loadCategory()
  }, []);
  
  const onInputChange = e => {
    setAddsubscription({ ...addsubscription, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    // console.warn("options",questions, options)
    if (true) {
      console.warn("onsumbit", addsubscription)
      const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-subscription`, addsubscription);
      console.log(res.data)
      toast(res.data.message);
      setTimeout(function () { history.push("/subscription"); }, 1000);
    } else {
      alert("please select any subcategory and chaptermeta")
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Subscription pack</h2>
        <form onSubmit={e => onSubmit(e)}>
          
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
            <label> Price</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter info description"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Subscription pack</button>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AddSubscription;