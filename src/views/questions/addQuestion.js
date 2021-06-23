import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import *as  CONSTANT from '../../constant'
import { ToastContainer, toast } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddQuestion = () => {
  let history = useHistory();
  const [questions, setQuestion] = useState({
    question: "",
    content: "",
    image: "",
    difficulty_level : "",
    category_meta: {},
    chapter_meta: {},
    subcategory_meta: {},
    
  });

  const [subcategory, setSubCategory] = useState([]);
  const [subcategorymeta, setSubCategorymeta] = useState();

  const [chapter, setChapter] = useState([]);
  const [chaptermeta, setChaptermeta] = useState();

  const [category, setCategory] = useState([]);
  const [categorymeta, setCategorymeta] = useState();
  // const options = {
  //   headers: {'token': localStorage.getItem('token')}
  // };
  const [options, setOptions] = useState();
  //  const  options =[]

  const [image, setImage] = useState({});

  const { question, content } = questions;

  useEffect(() => {
    // loadSubCategory();
    loadCategory()
    // loadChapter();
  }, []);
  const onInputChangeOptions = e => {
    console.log("onInputChangeOptions", e.target.name, e.target.value)
    setOptions({...options, [e.target.name]: e.target.value });
  };
  const onInputChange = e => {
    // console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    setQuestion({ ...questions, [e.target.name]: e.target.value });
  };
  const onInputChange1 = async (e) => {
    // console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    await setCategorymeta(category[e.target.value])
    loadSubCategory(category[e.target.value])

  };
  const onInputChange2 = async (e) => {
    // console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    await setSubCategorymeta(subcategory[e.target.value])

    await loadChapter(subcategory[e.target.value])
  };

  const onInputChange3 = async (e) => {
    // console.log("eeeeeeeeeeee", e.target.name, e.target.value)
    await setChaptermeta(chapter[e.target.value])
    
  };
  const loadCategory = async () => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/category-list`).then((data1) => {
      setCategory(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
    })
  }
  const loadSubCategory = async (item) => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/subcategory-list?_id=${item._id}`).then((data1) => {
      setSubCategory(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
      // toast(err.data.message)
    })
  }
  const loadChapter = async (item) => {
    await axios.get(`${CONSTANT.baseUrl}/api/admin/chapter-list?_id=${item._id}`).then((data1) => {
      setChapter(data1.data.data)
    }).catch((err) => {
      alert("err in catch")
      // toast(err.data.message)
    })
  }
  const onSubmit = async e => {
    e.preventDefault();
    console.warn("options"  , options)
    if (subcategorymeta && chaptermeta && categorymeta) {
      questions.category_meta = categorymeta
      questions.chapter_meta = chaptermeta
      questions.subcategory_meta = subcategorymeta
      questions.options = options
      // questions.difficulty_level = difficulty_level
      

      console.warn("onsumbit", questions )
      const res = await axios.post(`${CONSTANT.baseUrl}/api/admin/add-question`, questions);
      toast(res.data.message);
      setTimeout(function () { history.push("/questions"); }, 1000);
    } else {
      alert("please select any subcategory and chaptermeta")
    }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add question</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div class="form-group col-sm-6">
            <label>Select Category *</label>
            <select class="form-control"
              onChange={e => onInputChange1(e)} >
                <option  value={"N/A"}>
                  {"Select"}
                </option>
              {
                category.map((option, index) =>
                
                 <option key={index} value={index}>
                  {option.name}
                </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
         
          <div class="form-group col-sm-6">
            <label>Select Sub Category *</label>
            <select class="form-control"
              onChange={e => onInputChange2(e)} >
                <option  value={"N/A"}>
                  {"Select"}
                </option>
              {
                subcategory.map((option, index) =>
                
                 <option key={index} value={index}>
                  {option.name}
                </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
          <div class="form-group col-sm-6">
            <label>Select Chapter *</label>
            <select class="form-control"
              onChange={e => onInputChange3(e)} >
                <option  value={"N/A"}>
                  {"Select"}
                </option>
              {
                chapter.map((option, index) =>
                
                 <option key={index} value={index}>
                  {option.name}
                </option>)
              }
              {/* <option value={"1"}>Yes</option>
              <option value={"0"}>No</option> */}
            </select>
          </div>
          <div className="form-group">
            <label> Question</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter question description"
              name="question"
              value={question}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label> Options A</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Options A"
              name="A"
              // value={options}
              onChange={e => onInputChangeOptions(e)}
            />
          </div>
          <div className="form-group">
            <label>  Options B</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Options B"
              name="B"
              // value={options}
              onChange={e => onInputChangeOptions(e)}
            />
          </div>
          <div className="form-group">
            <label>  Options C</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Options C"
              name="C"
              // value={options}
              onChange={e => onInputChangeOptions(e)}
            />
          </div>
          <div className="form-group">
            <label>  Options D</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Options D"
              name="D"
              // value={options}
              onChange={e => onInputChangeOptions(e)}
            />
          </div>
          <div class="form-group col-sm-6">
            <label>Select Correct Answer *</label>
            <select class="form-control" name= "answer" 
              onChange={e => onInputChangeOptions(e)} >
                <option  value={"A"}> A </option>
                <option  value={"B"}> B </option>
                <option  value={"C"}> C </option>
                <option  value={"D"}> D </option>
            </select>
          </div>
          <div class="form-group col-sm-6">
            <label>deficulti level *</label>
            <select class="form-control" name= "difficulty_level" 
              onChange={e => onInputChange(e)} >
                <option  value={"0"}> Low </option>
                <option  value={"1"}> Medium </option>
                <option  value={"2"}> High </option>
                {/* <option  value={"D"}> D </option> */}
            </select>
          </div>
          {/* <div className="form-group"> */}
          {/* <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your content"
              name="content"
              value={content}
              onChange={e => onInputChange(e)}
            /> */}
          {/* <ReactQuill theme="snow" value={content} onChange={e => onInputChange2(e)}/>
          </div> */}
          {/* <div><input type="file" name="file" onChange={e => onInputChange1(e)} />
            <button type="button" className="btn btn-primary" onClick={e => uploadImage(e)}>Upload</button>

          </div> */}
          <button className="btn btn-primary btn-block">Add question</button>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AddQuestion;