import React, { useState } from 'react'
import useSerialize from './useSerialize'

const useDynamic = (config) => {
    const [userData, setUserData] = useState({})

    const handleChange = e => {
        const { name, value, type, checked } = e.target
        if (type == "checkbox") {
            if (userData[name]) {
                checked
                    ? setUserData({ ...userData, [name]: [...userData[name]], value })
                    : setUserData({ ...userData, [name]: userData[name].filter(s => s !== value) })
            } else {
                setUserData({ ...userData, [name]: value })
            }
        } else {
            setUserData({ ...userData, [name]: value })
        }
    }
    const handleUI = (item) => {
        switch (item.type) {
            case "number":
            case "email":
            case "time":
            case "password":
            case "color":
            case "date":
            case "text": return <input className='form-control my-2' name={item.name} onChange={handleChange} type={item.type} placeholder={`Enter ${item.name}`} />
            case "textarea": return <textarea className='form-control my-2' name={item.name} onChange={handleChange} placeholder={`Enter ${item.name}`}></textarea>
            case "select": return <select className='form-control my-2' name={item.name} onChange={handleChange}>
                <option value="">Choose {item.name}</option>
                {
                    item.op.map(o => <option value={o}>{o}</option>)
                }
            </select>
            case "radio": return <div className='my-2'>
                {
                    item.op.map(o => <div>
                        <input className='form-check-input' value={o} onChange={handleChange} type="radio" name={item.name} id={o} />
                        <label htmlFor={o}>{o}</label>
                    </div>)
                }
            </div>
            case "checkbox": return <div className='my-2'>
                {
                    item.op.map(o => <div key={o}>
                        <input className='form-check-input' onChange={handleChange} type="checkbox" name={item.name} value={o} id={o} />
                        <label htmlFor={o}>{o}</label>
                    </div>)
                }
            </div>
            default: return
        }
    }
    const ui = <> {config.map(item => handleUI(item))} </>
    const pre = useSerialize(userData)
    return { ui, data: userData.pre }
}

export default useDynamic