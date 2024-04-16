import React from 'react'
import "react-toastify/dist/ReactToastify.css"
import classNames from 'classnames'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'

const Settings = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Your Name"),
            mobile: yup.string().required("Enter Contact Number"),
            email: yup.string().required("Enter Email").email(),
            opassword: yup.string().required("Enter Old Password"),
            npassword: yup.string().required("Enter New Password"),
            cpassword: yup.string().required("Confirm Password"),
            other: yup.string().required("Other Language"),
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })

    const handleClasses = (arg) => classNames({
        "form-control": true,
        "is-valid": formik.touched[arg] && !formik.errors[arg],
        "is-invalid": formik.touched[arg] && formik.errors[arg],
    })

    return <div className='p-4'>
        <h4>Account Settings</h4>
        <div className="main mx-3">
            <div className="d-flex gap-2">
                <label for="name" class="form-label">Your Name</label><br />
                <input type="text" /><br />
                <i class="bi bi-pencil"></i><br />
            </div><br />

            <div className="d-flex gap-2">
                <label for="mobile" class="form-label">Phone/Mobile</label><br />
                <input type="text" /><br />
                <i class="bi bi-pencil"></i><br />
            </div><br />

            <div className="d-flex gap-2">
                <label for="email" class="form-label">Your Email</label><br />
                <input type="text" /><br /><br />
                <i class="bi bi-pencil"></i><br />
            </div><br />


            <button type="button" class="btn btn-primary">Edit</button><br />
        </div><hr />

        <div>
            <h4>Address</h4>
            <div className="main d-flex mx-3">
                <div className="d-flex gap-4">
                    <textarea type="text" placeholder='address line 1 ,address line 2 , address line 3' />
                    <i class="bi bi-pencil"></i><br />
                </div>

                <div className="d-flex gap-4">
                    <textarea type="text" placeholder='address line 1 ,address line 2 , address line 3' />
                    <i class="bi bi-pencil"></i><br />
                </div>
            </div><br />

            <h4>Change Password</h4>
            <div className="main mx-3">
                <label for="oldpassword" class="form-label">Old Password</label><br />
                <div className="d-flex gap-3">
                    <input type="password" /><br />
                    <i class="fa-solid fa-eye" id="eye"></i>
                </div><br />


                <label for="newpassword" class="form-label">New Password</label><br />
                <div className="d-flex gap-3">
                    <input type="password" /><br />
                    <i class="fa-solid fa-eye" id="eye"></i>
                </div><br />


                <label for="confirmnewpassword" class="form-label">Confirm New Password</label><br />
                <div className="d-flex gap-3">
                    <input type="password" /><br /><br />
                    <i class="fa-solid fa-eye" id="eye"></i>
                </div><br />

                <button type="button" class="btn btn-success">Save Changes</button>

            </div><br />

            <h4>Switch Mode</h4><br />
            <div className="d-flex gap-2 mx-3">
                <input type="radio" />
                <span class="slider round"></span>
                <p>Light Mode</p><br />
            </div><br />

            <div className="d-flex gap-2 mx-3">
                <input type="radio" />
                <span class="slider round"></span>
                <p>Dark Mode</p><br />
            </div><br />

            <h4>Time Zone Format</h4><br />
            <input className="mx-3" type="time" min="00-00-00" max="12-12-12" /><br /><br />

            <h4>Language Preference</h4><br />

            <select class="form-select">
                <option disabled selected>Select Language</option>
                <option value="1">English</option>
                <option value="2">Hindi</option>
                <option value="3">Marathi</option>
                <option value="4">Other</option>
            </select><br />

            <div className="d-flex gap-2 mx-2">
                <p>If Other :</p><br />
                <input type="text" placeholder='Other Language' />
            </div><br />


            <button type="button" class="btn btn-success mx-3">Save Changes</button>
            {/* toast.success("Changes Saved Successfully") */}

        </div><br /><br />

    </div>
}

export default Settings