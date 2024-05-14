import React from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
       <Navbar />
        <div className="flex text-center justify-center mt-28">
          <div className="w-96 border rounded px-7 py-10">

            <form on onSubmit={() => {}}>
              <h4 className='text-2xl mb-9 text-black'>Login</h4>
               <input  type='text' placeholder='Email' className='input-box'/>
               <button type='submit' className='btn-primary'>Login</button>
               <p className='text-sm text-center mt-4'>
                  Not Registered?{""}
                  <Link to="/signup" className=""> Create an Account.</Link>
               </p>
               
            </form>
             
          </div>

        </div>


    </>
  )
}

export default Login
