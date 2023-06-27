import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null)

    const [bodyParts, setBodyParts] = useState([]);
    const [regions, setRegions] = useState([]);
    const [muscles, setMuscles] = useState([]);
    const [bones, setBones] = useState([]);
  
    useEffect(()=>{
        fetch('/me')
        .then(res=>{
            if (res.ok){
                res.json().then(user=>setUser(user))
            }
        })
    }, [])

    useEffect(() => {
      fetch(`/muscles`)
      .then(response => response.json())
      .then(muscles => setMuscles(muscles));
    }, [])
  
    useEffect(()=>{
      fetch(`/bones`)
      .then(response => response.json())
      .then(bones => setBones(bones));
    }, [])
  
    useEffect(() => {
      fetch('/bodyparts')
      .then(response => response.json())
      .then(setBodyParts);
    }, [])
  
    useEffect(() => {
      fetch('/regions')
      .then(response => response.json())
      .then(setRegions);
    }, [])

    return (
        <UserContext.Provider value={{
            user, setUser,
            regions, setRegions,
            bodyParts, setBodyParts,
            muscles, setMuscles,
            bones, setBones
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}