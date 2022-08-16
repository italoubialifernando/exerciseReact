import { useState } from "react"

export function useLogin () {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target
        setData((data) => {
            return { ...data, [name]: type === 'checkbox' ? checked : value }
        })

    }

    return {
        username: data.username,
        password: data.password,
        remember: data.remember,
        imputChange:handleInputChange
    }
}