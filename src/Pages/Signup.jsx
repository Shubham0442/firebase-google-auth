import React from 'react'
import { auth, provider } from '../GoogleConfig/Config'
import { signInWithPopup } from 'firebase/auth'

const Signup = () => {

    console.log(provider, auth)

    const handleSignup = () =>{

        signInWithPopup(auth, provider)
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <button onClick={handleSignup}>Signup with Google</button>
    </div>
  )
}

export default Signup