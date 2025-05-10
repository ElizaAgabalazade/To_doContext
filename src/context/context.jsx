import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => { 
    const [add, setAdd] = useState([]);
    
    return(
        <UserContext.Provider value={{add, setAdd}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;