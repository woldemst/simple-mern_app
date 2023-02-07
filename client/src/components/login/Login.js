// import React from 'react'
// import {useRef, useState, useEffect} from 'react'


// export default function Login() {
//     const userRef = useRef();
//     const errRef = useRef()

//     const [user, setUser] = useState('')
//     const [pwd, setPwd] = useState('')
//     const [errMsg, setErrMsg] = useState('')
//     const [succes, setSucces] = useState(false)

//     useEffect(()=>{
//         userRef.current.focus()
//     },[])

//     useEffect(()=>{
//         setErrMsg('')
//     }, [user,pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setUser('')
//         setPwd('')
//         setSucces(true)

//     }

//   return (

//     <>
//         {succes ? (
//             <section className="section">
//                 <h1>You are logged in! </h1>
//                 <br />
//                 <p>      
//                     <a href="#">Go home</a>
//                 </p>
//             </section>
//         ):(        
//         <section>
//             <p ref={errRef} className={errMsg ? 'errMsg' : 'offscreen'} aria-live="assertive" >{errMsg}</p>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>

//                 <input 
//                     type="text" 
//                     id='username'
//                     ref={userRef}
//                     autoComplete="off"
//                     onChange={(e)=> setUser(e.target.value)}
//                     value={user}
//                     required
//                 />

//                 <label htmlFor="password">password:</label>

//                 <input password
//                     type="password" 
//                     id='password'
//                     onChange={(e)=> setPwd(e.target.value)}
//                     value={user}
//                     required
//                 />

//                 <button>Sign in</button>
//             </form>

//             <p className="line">
//                 <a href="#">Sigh up</a>
//             </p>
//         </section>
//         )}
//     </>
//   )
// }

