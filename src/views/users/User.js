import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from "axios";
import { useHistory, useLocation, Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import _ from 'lodash'
import 'react-toastify/dist/ReactToastify.css';
import usersData from './UsersData'
import *as  CONSTANT from '../../constant'
import image from '../../assets/download.png'
import '../../css/style.css'
import { Button, Table, Modal } from 'react-bootstrap'
const User = ({ match }) => {
  // const user = usersData.find( user => user.id.toString() === match.params.id)
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    address: "",
    gender: "",
    contact_number: "",
    profile_pic: "",
    country_code: ""
  });


  const [is_subscription, setIs_subscription] = useState({});
  // const [transactions, setTransactions] = useState([]);
  const options = {
    headers: { 'token': localStorage.getItem('token') }
  };

  useEffect(() => {
    console.warn("params", match.params.id)
    getdata(match.params.id)
    // getWallet(match.params.id)
  }, []);

  const [plans, setPlans] = useState([])
  const getdata = async (id) => {
    console.log("process.env.NODE_ENV", process.env.NODE_ENV)
    const getplane = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-user-plans?_id=${id}`, options);
    console.warn("responsegetplanegetplane", getplane)
    if (getplane.data.code != 200) {
      toast("Somethig went wrong");
      console.log("errrrrr",getplane.data )
    } else {
      setPlans(getplane.data.data)
    }
    const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/get-user-details?_id=${id}`, options);
    // console.warn("response", res.data)
    if (res.data.code != 200) {
      toast("Somethig went wrong");
    } else {
      toast("Get successfully");
      setUser(res.data.data);
    }
  }
  // const getWallet = async (id) => {
  //   const res = await axios.get(`${CONSTANT.baseUrl}/api/admin/wallet?_id=${id}`,options);
  //   console.warn("response wallet", res.data)
  //   if (res.data.code != 200) {
  //     // toast("Somethig went wrong");
  //     console.warn(res.data)
  //   } else {
  //     // toast("Get successfully");
  //     setWallet(res.data.data);
  //     setTransactions(res.data.data.transactions)
  //   }
  // }
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
            <div class="verifi">

            </div>
            <div class="DetailsArea">
              <div class="container">
                <div class="row">
                  <div class="col-sm-3 DetailsLeft">
                    <div class="DetailsLeftProfile">
                      <figure>
                        <img src={user.profile_pic == "" ? image : image} height={100} width={100} />
                      </figure>
                      <h3> {user.name} </h3>
                      {/* <p> {user.user_type}</p> */}

                      <ul>
                        {'facebook' == '1' ? (
                          <li> <a href="#"><i class="fa fa-facebook" aria-hidden='true'></i></a></li>
                        ) : ""}

                        {'google' == '1' ? (
                          <li><a href="#"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                        ) : ""}
                        {/* 
                        {item.is_complete_kyc == '2' ? (
                          <Link className="btn btn-primary mr-2" >verify </Link>
                        ) : (
                          <Link className="btn btn-primary mr-2 " to={`/doc/${item._id}`}>verified </Link>
                        )}

                        {item.is_complete_kyc == '2' ? (
                          <Link className="btn btn-primary mr-2" >verify </Link>
                        ) : (
                          <Link className="btn btn-primary mr-2 " to={`/doc/${item._id}`}>verified </Link>
                        )}
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                      </ul>

                    </div>
                  </div>

                  <div class="col-sm-9">
                    <div class="DetailsRight">
                      <h3>Profile Information</h3>
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                      <Link className="btn btn-primary mr-2" to={`/user/edit/${user._id}`}> edit </Link>
                      {/* <p>With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act. Lisa has more than 15 years of agency and client-side experience translating business strategy into integra ted, multi-channel marketing communications campaigns for some of the world’s most beloved brands.</p> */}
                      <div class="DetailsContent">
                        <div class="row">
                          <div class="col-sm-6">
                            <ul>
                              <li>
                                <span class="Title">Name </span>
                                <span class="Discribe">Mr.{user.name}</span>
                              </li>
                              <li>
                                <span class="Title">Email</span>
                                <span class="Discribe">{user.email}</span>
                              </li>
                              <li>
                                <span class="Title">Address</span>
                                <span class="Discribe">{user.address}</span>
                              </li>
                            </ul>
                          </div>

                          <div class="col-sm-6">
                            <ul>

                              <li>
                                <span class="Title">Mobile No</span>
                                <span class="Discribe">{user.contact_number}</span>
                              </li>
                              <li>
                                <span class="Title">Country Code</span>
                                <span class="Discribe">{user.country_code == '' ? 'null' : user.country_code}</span>
                              </li>
                              <li>
                                <span class="Title">Gender</span>
                                <span class="Discribe">{user.gender}</span>
                              </li>
                              <li>
                                <span class="Title">Is Subscription</span>
                                <span class="Discribe">{plans.length > 0? "Yes": "No"}</span>
                              </li>


                              {/* <li>
                              <span class="Title">Rating </span>
                              <span class="Discribe">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                              </span>
                            </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="DetailsContent">
                          <h3>Subscription Details</h3>
                          {plans.length> 0? <div>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>S.no</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Buy Date</th>
                              <th>Days</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              plans.map((item, i) =>
                                <tr>
                                  <td>{i + 1}</td>
                                  <td>{item.plan_meta.title}</td>
                                  <td>{item.plan_meta.price}</td>
                                  <td>{item.buy_date.split(" ")[0]}</td>
                                  <td>{item.plan_meta.days}</td>
                                  <td>{""}</td>

                                </tr>)
                            }
                          </tbody>
                        </Table></div> 
                      : ""}
                          {/* { !_.isEmpty(is_subscription)?<div class="row">
                              <div class="col-sm-6">
                                <ul>

                                  <li>
                                    <span class="Title">Plan Name </span>
                                    <span class="Discribe">{is_subscription.subscription_id.title}</span>
                                  </li>
                                  <li>
                                    <span class="Title">Plan Amount </span>
                                    <span class="Discribe">{is_subscription.subscription_id.price} rs </span>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-sm-6">
                                <ul>

                                  <li>
                                    <span class="Title">Buy date </span>
                                    <span class="Discribe">{is_subscription.buy_date.split(" ")[0]}</span>
                                  </li>
                                  <li>
                                    <span class="Title">Days</span>
                                    <span class="Discribe">{is_subscription.subscription_id.days}</span>
                                  </li>
                                </ul>
                              </div>
                            </div>:   <span class="Title">User have not any subscription</span>

                          } */}
                        </div>

                      </div>

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
      </html>
    </>
    // <div className="container py-4">
    //   <Link className="btn btn-primary" to="/">
    //     back to Home
    // </Link>
    //   <h4 className="display-4">Name: {user.name}</h4>
    //   {/* <h2 className="display-4">Name: {user.name}</h2> */}
    //   <hr />
    //   <ul className="list-group w-50">
    //     <li className="list-group-item">Id: {user._id}</li>
    //     <li className="list-group-item">Name: {user.name}</li>
    //     <li className="list-group-item">Username: {user.username}</li>
    //     <li className="list-group-item">Email: {user.email}</li>
    //     <li className="list-group-item">Minner activity: {user.minner_Activity + ""}</li>
    //     <li className="list-group-item">Type: {user.user_type}</li>
    //     <li className="list-group-item">Team: {user.team.length > 0 ?
    //       user.team.map((item) => <li className="list-group-item">Name: {item.name} || Status : {item.status}</li>) : 0}</li>

    //   </ul>
    //   <ToastContainer />
    // </div>
  )
}

export default User
