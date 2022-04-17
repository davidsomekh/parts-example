import React, { useEffect, useState } from "react";
import { useContext } from "react";

interface newpart {
    name: string;
    amount: number;
    id: string;
    file_name: string;
  }



const PartsContext = React.createContext({
    addParts: (part:newpart) => {},
    getParts: () => {},
 
});

export function useParts()
{
    return useContext(PartsContext);
}




export function PartsProvider ({children})
{
    const [parts, setParts] = useState<newpart[]>([]);

    function addParts(part:newpart)
    {
        setParts([...parts,part]);
    }

    function getParts()
    {
        return parts;
    }

     

    

    useEffect(() => {
       
    },[]);
    
  
   

    return (
    <PartsContext.Provider value ={{addParts,getParts}}>
        {children}
    </PartsContext.Provider>
    )
    
}