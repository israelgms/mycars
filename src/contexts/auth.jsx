import { useState, createContext, useEffect } from "react";
import { setCookie, parseCookies } from "nookies"
import Router from 'next/router'
import axios from 'axios'


export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [email, setEmail] = useState(null);

    const isAuthenticated = !!email;

    useEffect(() => {
        const { 'skinaxv.token': token } = parseCookies()

        if(token) {
            recoverUser(token)
        }
    }, [])

    async function recoverUser(token) {
        const teste = await axios.post('http://localhost:5000/check', {}, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res =>{
            return res.data
        })
        setEmail(teste)
    }

    async function signIn(data) {

        const infoUser = await axios.post('http://localhost:5000/sessions', {
                "email": data.email,
                "password": data.password
        }).then((res) => {
            return res.data
        })

        let token = infoUser.token
        let email = infoUser.user.email

        // se não passar maxAge ele expira assim que fechar.
        setCookie(undefined, 'skinaxv.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        })

        setEmail(email)

        Router.push('/dashboard')
    }

    return (
        <AuthContext.Provider value={{ email, isAuthenticated, signIn }}>
           { children } 
        </AuthContext.Provider>
    )
}