'use client'
import useLogin from './useLogin'

const Login = () => {
  const { handleSubmit } = useLogin()

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
