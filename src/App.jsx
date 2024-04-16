import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Error from "./pages/components/Error"
import { ErrorBoundary } from 'react-error-boundary'
import Login from './pages/Login'
import Home from './pages/Home'
import Loading from './pages/components/Loading'
import UserProfile from './pages/UserProfile'
import Daily from './pages/Daily'
import Settings from './pages/Settings'
import Navbar from './pages/components/Navbar'
import Alldata from './pages/components/Alldata'
// import * as Moment from 'react-moment'

const home = lazy(() => import("./pages/Home"))
const login = lazy(() => import("./pages/Login"))
const register = lazy(() => import("./pages/Register"))
const settings = lazy(() => import("./pages/Settings"))
const userprofile = lazy(() => import("./pages/UserProfile"))
const daily = lazy(() => import("./pages/Daily"))
const alldata = lazy(() => import("./pages/components/Alldata"))

//srrouting - shortcut
const App = () => {

  const ALL_ROUTES = [
    { path: "/", element: <Home />, label: "home" },
    { path: "/login", element: <Login />, label: "login" },
    { path: "/register", element: <Register />, label: "register" },
    { path: "/user", element: <UserProfile />, label: "user" },
    { path: "/daily", element: <Daily />, label: "daily" },
    { path: "/settings", element: <Settings />, label: "settings" },
    { path: "/alldata", element: <Alldata />, label: "alldata" }
  ]

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          ALL_ROUTES.map(item => <Route
            key={item.label}
            path={item.path}
            element={<ErrorBoundary FallbackComponent={Error}>
              <Suspense fallback={<Loading />}>
                {item.element}
              </Suspense>
            </ErrorBoundary>}


          />)
        }
      </Routes>
    </BrowserRouter>
  </>


}

export default App


// pagination
// import React, { useEffect, useState } from 'react'
// import { useGetInfoQuery } from './redux/infoApi'

// const App = () => {
//   const [pagi, setPagi] = useState({ start: 0, limit: 2 })
//   const [getTodos, { data }] = useGetInfoQuery()
//   const [addTodo] = useAddTodoMutation()
//   const [todoData, setTodoData] = useState({})
//   const handleChange = e => {
//     const { name, value } = e.target
//     setTodoData({ ...todoData, [name]: value })
//   }
//   useEffect(() => {
//     getTodos(pagi)
//   }, [pagi.limit, pagi.start])
//   return <>
//     <input onChange={handleChange} type="text" name='task' />
//     <input onChange={handleChange} type="text" name='desc' />
//     <button className='btn btn-danger' onClick={e => addTodo(todoData)}>add Todo</button>

//     <hr />
//     <select className='bg-dark text-white' onChange={e => setPagi({ ...pagi, limit: e.target.value })}>
//       <option value="3">2</option>
//       <option value="5">5</option>
//       <option value="10">10</option>
//     </select>

//     {
//       data && data.todos.map(item => <div style={{
//         border: "1px solid",
//         padding: "5px",
//         margin: "5px"
//       }}>
//         <h1 className='text-danger '>{item.task}</h1>
//         <p>{item.desc}</p>
//       </div>)

//     }
//     {
//       data && [...Array(Math.ceil(data.total / pagi.limit)).keys()].map(item => <button className='btn btn-info mx-2'
//         onClick={e => setPagi({ ...pagi, start: item })}>
//         {item}
//       </button>)
//     }
//   </>
// }

// export default App
