'use client'

import { useState } from 'react'
import '../sass/main.css'

export default function Hero() {

    const [fontMode, setFontMode] = useState('signup')

    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-left-logo">
                    <h1>Thunlam</h1>
                    <big>A Learning Platform</big>
                </div>
                <div className="hero-left-infos">

                </div>

            </div>
            <div className="hero-right">
                <form action="">
                    <div className="form-choice">
                        <button>Sign in </button>
                        <button>Sign up </button>

                    </div>

                    {fontMode === 'signup' ?
                        <div className="form-contents">
                            <h2>Create Account</h2>
                            <input type="text" placeholder='Full Name' required />

                            <input type='email' placeholder='Email' required />

                            <input type="password" placeholder='Password' required />
                            <a href="#">Already have an Account?</a>
                            <button className='submit'>Sign up</button>

                        </div> :
                        <div className='signin-contents'>
                            Sign in
                        </div>}





                </form>
            </div>
        </div>
    )
}
