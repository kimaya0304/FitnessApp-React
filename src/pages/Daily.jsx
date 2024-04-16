import React from 'react'
import "react-toastify/dist/ReactToastify.css"
import classNames from 'classnames'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Daily = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: yup.object({
            date: yup.string().required("Enter Date"),
            time: yup.string().required("Enter Time"),
            water: yup.string().required("Enter Water Intake"),
            breakfast: yup.string().required("Enter Breakfast"),
            lunch: yup.string().required("Enter Lunch"),
            snacks: yup.string().required("Enter Snacks"),
            dinner: yup.string().required("Enter Dinner"),
            calories: yup.string().required("Enter Calories"),
            yes: yup.string().required("Yes"),
            drinks: yup.string().required("Drinks"),
            exercise: yup.string().required("Exercise"),
            type: yup.string().required("Enter Type"),
            duration: yup.string().required("Enter Details"),
            no: yup.string().required("No"),
            totalCalories: yup.string().required("Total Calories"),
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
    const navigate = useNavigate()

    return <>

        {/* Time Details */}
        <div className="container">
            <div className="row">
                <h4>Daily Updates</h4><br />

                <label>Today is :</label><br />
                <input
                    {...formik.getFieldProps("date")}
                    class={handleClasses("date")}

                    type="date" id="today" name="today"></input>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.date}</div>

                <label>Time</label><br />
                <input
                    {...formik.getFieldProps("time")}
                    class={handleClasses("time")}
                    type="time" id="time" name="time" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.time}</div>

            </div>
        </div><br /><hr />
        {/* Intake */}
        <div className="container">
            <div className="row">
                <label>Water Intake</label><br />
                <input
                    {...formik.getFieldProps("water")}
                    class={handleClasses("water")}

                    type="number" placeholder='Enter Liters Of Water' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.water}</div>

                <label>Calories Intake</label><br />
                <input
                    {...formik.getFieldProps("calories")}
                    class={handleClasses("calories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.calories}</div>

                <label>Breakfast</label><br />
                <input
                    {...formik.getFieldProps("breakfast")}
                    class={handleClasses("breakfast")}

                    type="text" placeholder='Breakfast' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.breakfast}</div>

                <label>Calories Intake</label><br />
                <input
                    {...formik.getFieldProps("calories")}
                    class={handleClasses("calories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.calories}</div>

                <label>Lunch</label><br />
                <input
                    {...formik.getFieldProps("lunch")}
                    class={handleClasses("lunch")}

                    type="text" placeholder='Lunch' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.lunch}</div>

                <label>Calories Intake</label><br />
                <input
                    {...formik.getFieldProps("calories")}
                    class={handleClasses("calories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.calories}</div>

                <label>Evening Snacks</label><br />
                <input
                    {...formik.getFieldProps("snacks")}
                    class={handleClasses("snacks")}

                    type="text" placeholder='Evening Snacks' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.snacks}</div>

                <label>Calories Intake</label>
                <input
                    {...formik.getFieldProps("calories")}
                    class={handleClasses("calories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.calories}</div>

                <label>Dinner</label><br />
                <input
                    {...formik.getFieldProps("dinner")}
                    class={handleClasses("dinner")}
                    type="text" placeholder='Dinner' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.dinner}</div>

                <label>Calories Intake</label><br />
                <input
                    {...formik.getFieldProps("calories")}
                    class={handleClasses("calories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.calories}</div>

                <label>Other than this :</label><br />
                <div class="form-check">
                    <input
                        className="form-check-input" type="radio" name="yes" id="yes" />
                    <label class="form-check-label" for="yes">Yes</label><br />

                    <label>if yes</label><br />
                    <input
                        type="text" placeholder='Enter Food' /><br />
                    <label>Calories Intake</label><br />
                    <input
                        {...formik.getFieldProps("calories")}
                        class={handleClasses("calories")}

                        type="number" />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">{formik.errors.calories}</div>


                    <input
                        className="form-check-input" type="radio" name="no" id="no" />
                    <label class="form-check-label" for="no">No</label><br />
                </div><br />

                <label>Drinks</label><br />
                <input
                    {...formik.getFieldProps("drinks")}
                    class={handleClasses("drinks")}

                    type="text" placeholder='Drinks' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.drinks}</div>

                <label>Calories Intake</label><br />
                <input
                    {...formik.getFieldProps("calories")}
                    class={handleClasses("calories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.calories}</div>

                <label>Total Calories Intake</label><br />
                <input
                    {...formik.getFieldProps("totalCalories")}
                    class={handleClasses("totalCalories")}

                    type="number" />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.totalCalories}</div>




            </div>
        </div><hr />

        {/* Burnt */}
        <div className="container">
            <div className="row">
                <label>Exercise</label><br />
                <div class="form-check">
                    <input
                        {...formik.getFieldProps("exercise")}
                        class={handleClasses("exercise")}

                        className="form-check-input" type="radio" name="yes" id="yes" />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">{formik.errors.exercise}</div>

                    <label class="form-check-label" for="yes">Yes</label><br />
                    <label>If Yes</label><br />
                    <input
                        {...formik.getFieldProps("name")}
                        class={handleClasses("name")}

                        type="text" placeholder='Type' /><br />
                    <input
                        {...formik.getFieldProps("name")}
                        class={handleClasses("name")}

                        type="text" placeholder='Details' /><br />
                </div><br />
                <p>Time</p>
                <input
                    {...formik.getFieldProps("time")}
                    class={handleClasses("time")}

                    type="time" placeholder='Enter Duration' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.time}</div>


                <div class="form-check">
                    <input
                        {...formik.getFieldProps("no")}
                        class={handleClasses("no")}

                        className="form-check-input" type="radio" name="no" id="no" />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">{formik.errors.no}</div>
                    <label class="form-check-label" for="no">No</label><br />
                </div><br />

                <p>Total Calories Burned Today :</p>

                <input
                    {...formik.getFieldProps("totalCalories")}
                    class={handleClasses("totalCalories")}

                    type="number" placeholder='Total Calories Burnt' />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">{formik.errors.totalCalories}</div>



            </div>
        </div><br /><br />

        {/* Buttons */}
        <div className="d-flex gap-4 mx-4 mb-5">

            <button type="button" class="btn btn-warning">Edit</button>
            {/* toast.success("Updated Success") */}
            <button type="button" class="btn btn-success">Save</button>
            {/* toast.success("Data Saved Successfully") */}

            <button
                onClick={e => navigate("/alldata")}
                type="button"
                class="btn btn-primary">
                Show Previous Data
            </button>


        </div>



    </>
}

export default Daily