import classNames from 'classnames'
import { useFormik } from 'formik'
import React, { useContext, useEffect } from 'react'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import useDynamic from '../hooks/useDynamic'
import { useNavigate } from 'react-router-dom'
import { useLazyLoginQuery } from '../redux/apis/authApi'
import { motion } from 'framer-motion'



const Login = () => {

    // const { toggle } = useContext(ThemeContext)
    const [login, { isSuccess }] = useLazyLoginQuery()
    const { ui, data, pre } = useDynamic([
        // { type: "text", name: "name" },
        { type: "email", name: "email" },
        { type: "password", name: "password" },
        // { type: "number", name: "mobile" }
    ])
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter Email").email(),
            password: yup.string().required("Enter Password"),
        }),
        onSubmit: (values, { resetForm }) => {
            login(values)
            resetForm()
        }
    })
    const handleClasses = (arg) => classNames({
        "form-control": true,
        "is-valid": formik.touched[arg] && !formik.errors[arg],
        "is-invalid": formik.touched[arg] && formik.errors[arg],
    })
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) {
            navigate("/user")
            toast.success("Login Successful")
        }
    }, [isSuccess])
    return <>
        <div className="container">
            <div className="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header bg-light">Login</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div className='mt-2'>
                                    <label for="email" class="form-label">Email</label>
                                    <motion.input
                                        initial={{ x: "-200%" }}
                                        transition={{ duration: 0.5 }}
                                        animate={{ x: 0 }}
                                        type="text"
                                        placeholder='Enter Email'
                                        className={handleClasses("email")}
                                        {...formik.getFieldProps("email")} />
                                    <span className='invalid-feedback'> {formik.errors.email}</span>
                                    <span className='valid-feedback'> Thank you</span>
                                </div>

                                <div>
                                    <label for="password" class="form-label">Password</label>
                                    <motion.input
                                        initial={{ x: "200%" }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        animate={{ x: 0 }}
                                        type="text"
                                        placeholder='Enter Password'
                                        className={handleClasses("password")}
                                        {...formik.getFieldProps("password")} />
                                    <span className='invalid-feedback'> {formik.errors.password}</span>
                                    <span className='valid-feedback'> Thank you</span>
                                    <motion.div
                                        initial={{ y: "500%" }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                        animate={{ y: 0 }}

                                    >
                                        <button

                                            type="submit"
                                            class="btn btn-primary mt-3 w-100">
                                            Login
                                        </button>
                                    </motion.div>

                                    <hr />
                                    <motion.p
                                        initial={{ y: "300%" }}
                                        transition={{ duration: 0.8, delay: 0.6 }}
                                        animate={{ y: 0 }}
                                        className='text-center mt-3'>
                                        Don't Have Account?
                                        <a href='https://www.google.com'>
                                            Create Account</a>
                                    </motion.p>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>

    </>
}

export default Login