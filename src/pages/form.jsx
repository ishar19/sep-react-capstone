import { useState } from "react"
import styles from "../styles/form.module.css"
export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        userName: "",
        mobile: "",
        toc: false
    })
    const [errors, setErrors] = useState({
        name: null,
        email: null,
        userName: null,
        mobile: null,
        toc: null
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        let isError = false;
        setErrors({
            name: null,
            email: null,
            userName: null,
            mobile: null,
            toc: null
        })
        if (formData.name.trim().length === 0) {
            setErrors((errors) => ({ ...errors, name: "Name should not be empty" }))
            isError = true
        }
        if (formData.email.trim().length === 0) {
            setErrors((errors) => ({ ...errors, email: "Email should not be empty" }))
            isError = true
        }
        if (formData.userName.trim().length === 0) {
            setErrors((errors) => ({ ...errors, userName: "User Name should not be empty" }))
            isError = true
        }
        if (formData.mobile.trim().length === 0) {
            setErrors((errors) => ({ ...errors, mobile: "Mobile should not be empty" }))
            isError = true
        }
        if (formData.toc === false) {
            setErrors((errors) => ({ ...errors, toc: "Terms and Conditions should be checked" }))
            isError = true
        }
        if (isError) {
            return
        }
        else {
            localStorage.setItem("formData", JSON.stringify(formData))
            alert("Form submitted successfully")
        }
    }
    return (
        <div className={styles.container}>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name
                    <input type="text" name="name" id="name" value={formData.name} onChange={(e) => setFormData((formData) => ({ ...formData, name: e.target.value }))} >
                    </input>
                    {errors.name && <p>{errors.name}</p>}
                </label>
                <label htmlFor="email">Email
                    <input type="text" name="email" id="email" value={formData.email} onChange={(e) => setFormData((formData) => ({ ...formData, email: e.target.value }))} />
                    {errors.email && <p>{errors.email}</p>}
                </label>
                <label htmlFor="userName">User Name
                    <input type="text" name="userName" id="userName" value={formData.userName} onChange={(e) => setFormData((formData) => ({ ...formData, userName: e.target.value }))} />
                    {errors.userName && <p>{errors.userName}</p>}
                </label>
                <label htmlFor="mobile">Mobile
                    <input type="text" name="mobile" id="mobile" value={formData.mobile} onChange={(e) => setFormData((formData) => ({ ...formData, mobile: e.target.value }))} />
                    {errors.mobile && <p>{errors.mobile}</p>}
                </label>
                <label htmlFor="toc">Terms and Conditions
                    <input type="checkbox" name="toc" id="toc" value={formData.toc} onChange={(e) => setFormData((formData) => ({ ...formData, toc: e.target.checked }))} />
                    {errors.toc && <p>{errors.toc}</p>}
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}