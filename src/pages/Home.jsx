import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
// import fitness from '../assets/fitness.png'
const Home = () => {
    const navigate = useNavigate()
    return <>
        <div className="container bg-slate-800">
            <div className="row">

                <div className="d-flex gap-10">
                    <div className="col-5">
                        <h4>My Fitness</h4>
                        <p>
                            Our app is designed to make fitness accessible, enjoyable, and effective for everyone. With a wide range of features tailored to your needs, you'll find everything you need to achieve your fitness goals, no matter how big or small they may be.
                        </p>

                    </div>
                    <div className="col-7">
                        <img
                            style={{ height: "200px", width: "200px" }}
                            src="https://media.istockphoto.com/id/886500564/photo/going-to-take-a-before-and-after-training-photo.jpg?s=612x612&w=0&k=20&c=ftlqjnvvo14SV4uPo6lFEqdvJc6gON3kZjKnfCTuePE="
                            className='p-4' />
                    </div>
                </div>
                <hr />
                <div className="d-flex gap-5 align-items-center justify-center px-5">
                    <div className="bg-primary p-3" style={{ borderRadius: "8px", color: "white" }} ><i class="bi bi-whatsapp"></i></div>
                    <div className="bg-primary p-3" style={{ borderRadius: "8px", color: "white" }} ><i class="bi bi-facebook"></i></div>
                    <div className="bg-primary p-3" style={{ borderRadius: "8px", color: "white" }} ><i class="bi bi-twitter"></i></div>
                    <div className="bg-primary p-3" style={{ borderRadius: "8px", color: "white" }} ><i class="bi bi-linkedin"></i></div>
                </div>
            </div> <br />
            <div className='d-flex gap-5' style={{ paddingLeft: "11rem" }}>
                <div>
                    <button
                        onClick={e => navigate("/register")}
                        type="button"
                        class="btn btn-warning">
                        Register
                    </button>
                </div>
                <div>
                    <button
                        onClick={e => navigate("/login")}
                        type="button"
                        class="btn btn-success">
                        Login</button>
                </div>
            </div>


        </div>




    </>
}


export default Home