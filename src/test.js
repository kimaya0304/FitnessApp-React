// import React, { Suspense, lazy } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Register from './pages/Register'
// // import Navbar from './pages/components/Navbar'
// // import UserProfile from './pages/UserProfile'
// // import Settings from './pages/Settings'
// import { ToastContainer } from 'react-toastify'
// import "react-toastify/dist/ReactToastify.css"
// import Daily from './pages/Daily'
// import Home from './pages/Home'
// import { ErrorBoundary } from 'react-error-boundary'
// import Error from './pages/components/Error'
// import Login from './pages/Login'

// const home = lazy(() => import("./pages/Home"))
// const login = lazy(() => import("./pages/Login"))
// const register = lazy(() => import("./pages/Register"))
// const settings = lazy(() => import("./pages/Settings"))
// const userprofile = lazy(() => import("./pages/UserProfile"))
// const daily = lazy(() => import("./pages/Daily"))

// //srrouting - shortcut
// const App = () => {

//     const ALL_ROUTES = [
//         { path: "/", element: <Home />, label: "home" },
//         { path: "/login", element: <Login />, label: "login" },
//         { path: "/register", element: <Register />, label: "register" },
//     ]

//     return <>

//         {/* <div className="bg-danger-subtle">
//       <ToastContainer />
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/userprofile' element={<UserProfile />} />
//           <Route path='/daily' element={<Daily />} />
//           <Route path='/settings' element={<Settings />} />
//           <Route path='*' element={<h1>Page Not Found</h1>} />
//         </Routes>
//       </BrowserRouter>

//     </div> */}

//         {/* <BrowserRouter>
//       <Routes>
//         {
//           ALL_ROUTES.map(item => <Route
//             key={item.label}
//             path={item.path}
//             element={<ErrorBoundary FallbackComponent={Error}>
//               <Suspense fallback={<Loading />}>
//                 {item.element}
//               </Suspense>

//             </ErrorBoundary>}
//           />)
//         }
//       </Routes>
//     </BrowserRouter> */}
//         {/* <BrowserRouter>
//       <Routes>
//         {
//           ALL_ROUTES.map(item => <Route
//             key={item.label}
//             path={item.path}
//             element={ }



//           />)
//         }
//       </Routes>
//     </BrowserRouter> */}


//     </>
// }

// export default App
// {/* <BrowserRouter>
// <Routes> */}
// {/* {
//     ALL_ROUTES.map(item => <Route
//       key={item.label}
//       path={item.path}
//       element={<ErrorBoundary FallbackComponent={Error}>
//         <Suspense fallback={<Loading />}>
//           {item.element}
//         </Suspense>

//       </ErrorBoundary>}
//     />)
//   }
// </Routes>
// </BrowserRouter> */}
// <BrowserRouter>
//     <Routes>
//         {
//             ALL_ROUTES.map(item => <Route
//                 key={item.label}
//                 path={item.path}
//                 element={<ErrorBoundary FallbackComponent={Error}>
//                     <Suspense fallback={<Loading />}>
//                         {item.element}
//                     </Suspense>



//                 </ErrorBoundary>}


//             />)
//         }
//     </Routes>
// </BrowserRouter>

// /* <BrowserRouter>
// <Routes> */}
// {/* {
//     ALL_ROUTES.map(item => <Route
//       key={item.label}
//       path={item.path}
//       element={<ErrorBoundary FallbackComponent={Error}>
//         <Suspense fallback={<Loading />}>
//           {item.element}
//         </Suspense>

//       </ErrorBoundary>}
//     />)
//   }
// </Routes>
// </BrowserRouter> */}
// <BrowserRouter>
//     <Routes>
//         {
//             ALL_ROUTES.map(item => <Route
//                 key={item.label}
//                 path={item.path}
//                 element={<ErrorBoundary FallbackComponent={Error}>
//                     <Suspense fallback={<Loading />}>
//                         {item.element}
//                     </Suspense>



//                 </ErrorBoundary>}


//             />)
//         }
//     </Routes>
// </BrowserRouter>
return <>
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div class="card">
                    <div class="card-header">header</div>
                    <div class="card-body">
                        {ui}
                        <button onClick={e => register(data)}
                            type="button" class="btn btn-primary w-100">Register</button>
                        <hr />
                        {pre}
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    //navbar - shortcut
    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

                <Link to="/" class="navbar-brand">Fitness</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div class="navbar-nav">
                        {/* <Link to="/" class="nav-link active">Basic</Link> */}
                        <Link to="/" class="nav-link">Home</Link>
                        <Link to="/login" class="nav-link">Login</Link>
                        <Link to="/register" class="nav-link">Register</Link>
                        <Link to="/userprofile" class="nav-link">User Profile</Link>
                        <Link to="/daily" class="nav-link">Daily Update</Link>
                        <Link to="/settings" class="nav-link">Settings</Link>

                        <select>
                            <option selected disabled>User</option>
                            <option value="1">User Profile</option>
                            <option value="2">Daily Update</option>
                            <option value="3">Settings</option>
                            {/* after clicking on logout it should show login form page again */}
                            <option value="3"><button class="btn btn-primary">Logout</button></option>
                        </select>
                        <i class="bi bi-sun"></i>
                        <i class="bi bi-moon"></i>

                    </div>

                </div>
            </div>
        </nav>


    </>
}

export default Navbar