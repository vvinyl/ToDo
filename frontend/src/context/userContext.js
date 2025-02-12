import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext();

const fetchUser = async (setUser, setLoading) => {
    if(setLoading) setLoading(true)

    try{
        // const res = await axios.get
    } catch(err){

    }
}