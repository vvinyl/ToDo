import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext();

const fetchUser = async (setUser, setLoading) => {
    if(setLoading) setLoading(true)

    try{
        const response = await axios.get('http://localhost:3001/user/getUser', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            },
        });
        setUser(response.data);
    } catch(err){
        console.error("Błąd podczas pobierania danych uzytkownika: ", err);
        setUser(null)
    } finally {
        if(setLoading) setLoading(false)
    }
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const refreshUser = async () => {
        await fetchUser(setUser, null);
    };

    useEffect(() => {
        fetchUser(setUser, setLoading);
    }, []);

    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <UserContext.Provider value={{ user, setUser, refreshUser }}>
            {children}
        </UserContext.Provider>
    )
}