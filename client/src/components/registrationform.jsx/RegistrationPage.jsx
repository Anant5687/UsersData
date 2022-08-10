import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import outerStyle from './Registration.module.css'
import { Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import validator from 'validator'

const RegistrationPage = () => {
    const navigate = useNavigate()
    const [file, setFile] = useState("")
    const [iamgePreview, setImagePreview] = useState(null)
    const [mobileValid, setMobileValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: ""
    })


    const changeHandeler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data.mobile)
    }

    const clickandeler = () => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('mobile', data.mobile)

        formData.append('file', file)
        const configAxios = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        
        if (data.name.trim() === "" || data.email.trim() === "" || data.mobile.trim() === "" || file === "") {
            alert("All Fields are required")
        }
        else if (data.mobile.length > 10 || data.mobile.length < 10) {
            setMobileValid(true)
        } else {
            axios.post("http://localhost:4000/api/post", formData, configAxios).then((res) => {
                setData({
                    name: "",
                    email: "",
                    mobile: ""
                })
                setMobileValid(false)
                setEmailError(false)
                navigate('/data')
            }).catch((err) => {
                console.log(err)
            })
        }
        if (validator.isEmail(data.email) === false) {
            setEmailError(true)
        }
    }

    const FileSubmitHandeler = (e) => {
        setFile(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <h1 align="center" className={outerStyle.h1}>Registration Form</h1>

            <TextField id="outlined-basic" value={data.name} onChange={changeHandeler} name="name" variant="outlined" label="Name" style={{ width: "44vw", marginLeft: "7%", height: "6vh" }} /><br /><br />

            <TextField id="outlined-basic" value={data.email} onChange={changeHandeler} name="email" variant="outlined" label="Email" style={{ marginTop: "1%", width: "44vw", marginLeft: "7%", height: "6vh" }} /><br /><br />
            <h4 style={{ color: "red" }}>{emailError ? "Enter valid email" : ""}</h4>
            <TextField id="outlined-basic" value={data.mobile} onChange={changeHandeler} name="mobile" variant="outlined" label="Mobile No" type="number" style={{ marginTop: "1%", width: "44vw", marginLeft: "7%", height: "6vh" }} />
            <h4 style={{ color: "red" }}>{mobileValid ? "Enter valid mobile no." : ""}</h4>
            <div className='signup-profile-pic_container' style={{ width: 100, height: 40, marginTop: '3%', marginLeft: "20%" }}>
                <label htmlFor="image-upload" className='image-upload-label'>
                    <img src={iamgePreview || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXwQvoIAFB4vAjEEqtGJXGMHga5Ax7AbpfA&usqp=CAU"} className="signup-profile-pic" />
                    Choose your profile pic
                </label>
                <input type="file" id='image-upload' name='file' hidden onChange={FileSubmitHandeler} accept='image/jpeg, image/png' alt="img" />
            </div><br />

            <Button variant="contained" onClick={clickandeler}
                style={{ marginTop: "30%", width: "44vw", marginLeft: "7%", height: "6vh" }} >Submit Data</Button>
        </>
    )
}

export default RegistrationPage
