import React from 'react'
import styles  from "@/app/ui/login/login.module.css"
const LoginPage = () => {
  return (
    <div className={styles.container}>
        <form action=""  className={styles.from}>
            <h1 className='text-3xl font-extrabold'>Login</h1>

            <input type="text" name="userName" id="" placeholder='UserName' />
            <input type="password" name="password" id="" placeholder='password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginPage
