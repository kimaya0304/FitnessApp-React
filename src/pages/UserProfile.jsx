import classNames from 'classnames'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useAddInfoMutation } from '../redux/profileinfoApi'
import { useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'

const UserProfile = () => {
    const navigate = useNavigate()
    const [addInfo] = useAddInfoMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            photo: "",
            dob: "",
            age: "",
            contactnumber: "",
            address: "",
            height: "",
            weight: "",
            bmi: "",
            history: "",
            exercise: "",
            other: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Full Name"),
            photo: yup.string().required("Select Profile Photo"),
            dob: yup.string().required("Enter Your DOB"),
            age: yup.string().required("Your Age is "),
            contactnumber: yup.string().required("Enter Your Contact Number").min(10),
            address: yup.string().required("Enter Your Address"),
            height: yup.string().required("Enter Your Height"),
            weight: yup.string().required("Enter Your Weight"),
            bmi: yup.string().required("Your BMI Is"),
            history: yup.string().required("Enter Medical History"),
            exercise: yup.string().required("Enter Daily Exercise Type"),
            other: yup.string().required("Other"),
        }),
        onSubmit: (values, { resetForm }) => {
            addInfo(values)
            resetForm()
        }
    })

    const handleClasses = arg => classNames({
        "form-control my-2": true,
        "is-valid": formik.touched[arg] && !formik.errors[arg],
        "is-invalid": formik.touched[arg] && formik.errors[arg],
    })


    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className="personal-info">
                <div class="card">
                    <div class="card-header">User Profile</div>
                    <div class="card-body">
                        {/* update profile photo
                <div class="row">
                    <div class="small-12 medium-2 large-2 columns">
                        <div class="circle">
                            <img class="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />

                        </div>
                        <div class="p-image">
                            <i class="fa fa-camera upload-button"></i>
                            <input class="file-upload" type="text" />
                        </div>
                    </div>
                </div> */}

                        {/* name details  */}
                        <div class="mt-2 mx-3" >
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
                        </div><br />

                        {/* photo */}
                        <div class="mt-2 mx-3" >
                            <label for="photo" class="form-label">Profile Photo</label>
                            <input
                                type="text"
                                {...formik.getFieldProps("photo")}
                                class={handleClasses("photo")}
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.photo}</div>
                        </div><br />

                        {/* dob */}
                        < div class="mt-2 mx-3" >
                            <label for="dob" class="form-label">DOB</label>
                            <input
                                {...formik.getFieldProps("dob")}
                                type="date"
                                class={handleClasses("dob")}
                                id="dob"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.dob}</div>
                        </div><br />

                        {/* age */}
                        <div class="mt-2 mx-3">
                            <label for="age" class="form-label">Your Age Is</label>
                            <input
                                {...formik.getFieldProps("age")}
                                type="number"
                                class={handleClasses("age")}
                                id="age"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.age}</div>
                        </div><br />

                        {/* contact number */}
                        <div class="mt-2 mx-3">
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

                        </div><br />

                        {/* address */}
                        <div class="mt-2 mx-3">
                            <label for="address" class="form-label">Address</label>
                            <textarea
                                {...formik.getFieldProps("address")}
                                cols="10" rows="8"
                                type="text"
                                class={handleClasses("address")}
                                id="address"
                                placeholder="Enter Your Address"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.address}.</div>
                        </div><br />

                        {/* height */}
                        <div class="mt-2 mx-3">
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
                        </div><br />

                        {/* weight */}
                        <div class="mt-2 mx-3">
                            <label for="weight" class="form-label">Weight</label>
                            <input
                                {...formik.getFieldProps("weight")}
                                type="number"
                                class={handleClasses("weight")}
                                id="weight"
                                placeholder="Enter Your Weight"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.weight}.</div>
                        </div><br />

                        {/* bmi */}
                        <div class="mt-2 mx-3">
                            <label for="bmi" class="form-label">BMI</label>
                            <input
                                {...formik.getFieldProps("bmi")}
                                type="number"
                                class={handleClasses("bmi")}
                                id="bmi"
                            />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.bmi}.</div>
                        </div><br />

                        {/* medical history */}
                        <div class="mt-2 mx-3" >
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
                        </div><br />

                        {/* exercise */}
                        <div class="mt-2 mx-3" >
                            <label for="exercise" class="form-label">Daily Exercise</label><br />
                            <select>
                                <option value="1">Running</option>
                                <option value="2">Yoga</option>
                                <option value="3">Zumba</option>
                                <option value="4">Gym</option>
                            </select>
                            <p>Other:</p>
                            <input
                                {...formik.getFieldProps("other")}
                                type="text"
                                class={handleClasses("other")}

                                className="mx-3" placeholder='Other Exercise' />
                            <div class="valid-feedback">Looks good!</div>
                            <div class="invalid-feedback">{formik.errors.other}</div>
                        </div><br /><br />

                        <button type="button" class="btn btn-warning mx-3">Edit</button>
                        {/* toast.warn("Details updated successfully") */}
                        <button type="submit" class="btn btn-success mx-3">Save Information</button>
                        {/* toast.success("Information Saved Successfully") */}
                        <button onClick={e => navigate("/daily")} type="submit" class="btn btn-primary mx-3">Daily Updates</button>
                        {/* toast.success("Information Saved Successfully") */}


                    </div>
                </div>




            </div>


        </form>

    </>
}

export default UserProfile