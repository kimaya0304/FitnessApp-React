// import React from 'react'

// const Settings = () => {
//     return <>
//         <div>
//             <h1>Settings Page</h1>
//         </div>

{/* <h1>Account Settings</h1>
        <div className="main">
            <label for="name" class="form-label">Your Name</label>
            <input type="text" />

            <label for="mobile" class="form-label">Phone/Mobile</label>
            <input type="text" />

            <label for="email" class="form-label">Your Email</label>
            <input type="text" />

            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-success">Save Changes</button>

        </div>

        <div>
            <h1>Address</h1>
            <div className="main d-flex">
                <div className="d-flex">
                    <input type="text" placeholder='address line 1 ,address line 2 , address line 3' />
                    <i class="bi bi-trash-fill"></i>
                </div>

                <div className="d-flex">
                    <input type="text" placeholder='address line 1 ,address line 2 , address line 3' />
                    <i class="bi bi-trash-fill"></i>
                </div>
            </div>

            <h1>Change Password</h1>
            <div className="main">
                <label for="oldpassword" class="form-label">Old Password</label>
                <input type="text" />

                <label for="newpassword" class="form-label">New Password</label>
                <input type="text" />

                <label for="confirmnewpassword" class="form-label">Confirm New Password</label>
                <input type="text" />

                <button type="button" class="btn btn-success">Save Changes</button>

            </div>




            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-success">Save Changes</button>

        </div> */}

// </>
// }

// export default Settings

// In personal info ,
//enter dob and get age calculated
//enter height and weight and get bmi calculated

{/* <div className="personal-info">

    <div class="mt-2" >
        <label for="name" class="form-label">Full Name</label>
        <input
            {...formik.getFieldProps("name")}
            type="text"
            class={handleClasses("name")}
            id="name"
            placeholder="Enter your full name"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.name}</div>
    </div>

    <div class="mt-2" >
        <label for="photo" class="form-label">Profile Photo</label>
        <p>Click on the "Choose File" button to upload a photo:</p>
        <input type="file"></input>
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.photo}</div>
    </div>

    < div class="mt-2" >
        <label for="dob" class="form-label">DOB</label>
        <input
            {...formik.getFieldProps("dob")}
            type="date"
            class={handleClasses("dob")}
            id="dob"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.dob}</div>
    </div>

    <div class="mt-2">
        <label for="age" class="form-label">Your Age</label>
        <input
            {...formik.getFieldProps("age")}
            type="number"
            class={handleClasses("age")}
            id="age"
            placeholder="Enter Your Age"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.age}</div>
    </div>

    <div class="mt-2">
        <label for="contactnumber" class="form-label">Contact number</label>
        <input
            {...formik.getFieldProps("contactnumber")}
            type="number"
            class={handleClasses("contactnumber")}
            id="contactnumber"
            placeholder="Enter Your Contact Number"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.contactnumber}.</div>

    </div>

    <div class="mt-2">
        <label for="address" class="form-label">Address</label>
        <textarea
            {...formik.getFieldProps("address")}
            cols="5" rows="5"
            type="text"
            class={handleClasses("address")}
            id="address"
            placeholder="Enter Your Address"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.address}.</div>
    </div>

    <div class="mt-2">
        <label for="height" class="form-label">Height</label>
        <input
            {...formik.getFieldProps("height")}
            type="number"
            class={handleClasses("height")}
            id="height"
            placeholder="Enter Your Height "
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.height}.</div>
    </div>

    <div class="mt-2">
        <label for="weight" class="form-label">Weight</label>
        <textarea
            {...formik.getFieldProps("weight")}
            type="number"
            class={handleClasses("weight")}
            id="weight"
            placeholder="Enter Your Weight"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.weight}.</div>
    </div>

    <div class="mt-2">
        <label for="bmi" class="form-label">BMI</label>
        <input
            {...formik.getFieldProps("bmi")}
            type="number"
            class={handleClasses("bmi")}
            id="bmi"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.bmi}.</div>
    </div>

    <div class="mt-2" >
        <label for="history" class="form-label">Medical History</label>
        <textarea
            {...formik.getFieldProps("history")}
            type="text"
            class={handleClasses("history")}
            id="history"
            placeholder="Enter your Medical History"
        />
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.history}</div>
    </div>

    <div class="mt-2" >
        <label for="exercise" class="form-label">Daily Exercise</label>
        <select>
            <option disabled selected>Exercise</option>
            <option value="1">Running</option>
            <option value="2">Yoga</option>
            <option value="3">Zumba</option>
            <option value="4">Gym</option>
            <option value="5">Other Exercise</option>
        </select>
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">{formik.errors.exercise}</div>
    </div>



</div> */}


// import React, { useEffect, useState } from 'react'

// const UserProfile = () => {
//     // const [userData, setUserData] = useState([])
//     // const getData = () => {
//     //     const { name, value } = e.target
//     //     setUserData({ ...userData, [name]: value })
//     // }
//     // useEffect(() => {

//     // }
//     //     , [userData])

//     return <>
//         <div>
//             <h1>User Profile Page</h1>
//         </div>
//         {/* <div className="container">
//             <div className="row">
//                 <div className="col-sm-6 offset-sm-3">
//                     <div class="card">
//                         <div class="card-header">User Profile</div>
//                         <div class="card-body">
//                             <div className='main'>
//                                 <div className="row">
//                                     <div className="col profile-image">
//                                         <img className="rounded-circle" src={item.image} alt="" />
//                                     </div>
//                                     <div className="col user-info">
//                                         <h1>{item.name}</h1>
//                                         <h1>{item.address}</h1>
//                                     </div>
//                                     <div className="col settings">
//                                         <i class="bi bi-gear"></i>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col my-info">
//                                         <h1> My Info</h1>
//                                     </div>
//                                     <div className="col my-posts">
//                                         <h1>My Posts</h1>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col">
//                                         <img src={item.image} alt="" />
//                                     </div>
//                                     <div className="col">
//                                         <p>What's on your mind ?</p>
//                                     </div>
//                                     <div className="col">
//                                         <i class="bi bi-plus-circle-fill"></i>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col">
//                                         <img src={item.image} alt="" />
//                                     </div>
//                                     <div className="col">
//                                         <p>{item.name}</p>
//                                         <p>{item.day}</p>
//                                     </div>
//                                     <div className="col">
//                                         <i class="bi bi-three-dots"></i>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div class="d-flex">
//                                         <div>
//                                             <i class="bi bi-heart"></i>
//                                         </div>
//                                         <div>
//                                             <i class="bi bi-chat"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="row">
//                                     <div className="footer">
//                                         <div className="col">
//                                             <i class="bi bi-house"></i>
//                                         </div>
//                                         <div className="col">
//                                             <i class="bi bi-plus-circle-fill"></i>
//                                         </div>
//                                         <div className="col">
//                                             <i class="bi bi-list"></i>
//                                         </div>
//                                         <div className="col">
//                                             <i class="bi bi-person"></i>
//                                         </div>

//                                     </div>
//                                 </div>


//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div> */}



//     </>
// }

// export default UserProfile

//css styles for toggle button 
/* The switch - the box around the slider */
// .switch {
//     position: relative;
//     display: inline-block;
//     width: 60px;
//     height: 34px;
//   }
  
  /* Hide default HTML checkbox */
//   .switch input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//   }
  
  /* The slider */
//   .slider {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #ccc;
//     -webkit-transition: .4s;
//     transition: .4s;
//   }
  
//   .slider:before {
//     position: absolute;
//     content: "";
//     height: 26px;
//     width: 26px;
//     left: 4px;
//     bottom: 4px;
//     background-color: white;
//     -webkit-transition: .4s;
//     transition: .4s;
//   }
  
//   input:checked + .slider {
//     background-color: #2196F3;
//   }
  
//   input:focus + .slider {
//     box-shadow: 0 0 1px #2196F3;
//   }
  
//   input:checked + .slider:before {
//     -webkit-transform: translateX(26px);
//     -ms-transform: translateX(26px);
//     transform: translateX(26px);
//   }
  
//   /* Rounded sliders */
//   .slider.round {
//     border-radius: 34px;
//   }
  
//   .slider.round:before {
//     border-radius: 50%;
//   }

