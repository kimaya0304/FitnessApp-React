import classNames from 'classnames'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import useDynamic from '../hooks/useDynamic'
import { useRegisterMutation } from '../redux/apis/authApi'
import { motion } from 'framer-motion'

const Register = () => {
    const [register, { isSuccess }] = useRegisterMutation()
    const navigate = useNavigate()
    const { ui, data, pre } = useDynamic([
    ])
    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
            toast.success("Registration successful")
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: yup.object({
            username: yup.string().required("Enter Username"),
            email: yup.string().required("Enter Email").email(),
            password: yup.string().required("Enter Password"),
            cpassword: yup.string().required("Enter Confirm Password"),
        }),
        onSubmit: (values, { resetForm }) => {
            register(values)
            resetForm()
        }
    })

    const handleClasses = arg => classNames({
        "form-control my-2": true,
        "is-valid": formik.touched[arg] && !formik.errors[arg],
        "is-invalid": formik.touched[arg] && formik.errors[arg],
    })
    // const navigate= useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/login")
        }
    }, [isSuccess])
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Register</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div className="mt-2">
                                    <label for="username" class="form-label">Username</label>
                                    <motion.input
                                        initial={{ x: "-200%" }}
                                        transition={{ duration: 0.3 }}
                                        animate={{ x: 0 }}

                                        {...formik.getFieldProps("username")}
                                        type="text"
                                        class={handleClasses("username")}
                                        id="username"
                                        placeholder="Enter Your Username"
                                        name="username"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.username}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="email" class="form-label">Email</label>
                                    <motion.input
                                        initial={{ x: "-200%" }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        animate={{ x: 0 }}

                                        {...formik.getFieldProps("email")}
                                        type="email"
                                        class={handleClasses("email")}
                                        id="email"
                                        placeholder="Enter Your Email"
                                        name="email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.email}</div>
                                </div>

                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <motion.input
                                        initial={{ x: "-200%" }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        animate={{ x: 0 }}

                                        {...formik.getFieldProps("password")}
                                        type="password"
                                        class={handleClasses("password")}
                                        id="password"
                                        placeholder="Enter Your Password"
                                        name="password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <div class="mt-2">
                                    <label for="cpassword" class="form-label">Confirm Password</label>
                                    <motion.input
                                        initial={{ x: "-200%" }}
                                        transition={{ duration: 0.3, delay: 0.6 }}
                                        animate={{ x: 0 }}

                                        {...formik.getFieldProps("cpassword")}

                                        type="password"
                                        class={handleClasses("cpassword")}
                                        id="cpassword"
                                        placeholder="Enter Confirm Password"
                                        name="cpassword"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.cpassword}</div>
                                </div>
                                {ui}
                                <motion.div
                                    initial={{ y: "200%" }}
                                    transition={{ duration: 0.3, delay: 0.8 }}
                                    animate={{ y: 0 }}


                                >
                                    <button type="submit"
                                        class="btn btn-primary w-100 mt-3">Register</button>
                                </motion.div>

                                <hr />
                                {pre}
                                <motion.div
                                    initial={{ y: "200%" }}
                                    transition={{ duration: 0.3, delay: 0.10 }}
                                    animate={{ y: 0 }}



                                >
                                    <p class="text-center mt-3">
                                        Have Account? <a href="#">Login to Account</a>
                                    </p>
                                </motion.div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default Register
