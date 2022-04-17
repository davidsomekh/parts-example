import React, { useEffect, useState } from "react";
import { useContext } from "react";

const ErrorContext = React.createContext({
    setErrorMsg: (msg:string) => {},
    getError: () => {},
 
});

export function useError()
{
    return useContext(ErrorContext);
}




export function ErrorProvider ({children})
{
    const [error, setError] = useState('');

    function setErrorMsg(msg:string)
    {
        setError(msg);
    }

    function getError()
    {
        return error;
    }
 

    return (
    <ErrorContext.Provider value ={{setErrorMsg,getError}}>
        {children}
    </ErrorContext.Provider>
    )
    
}