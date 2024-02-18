interface IHandleSubmitParams {
  email: string
  firstName: string
  lastName: string
  password: string
}

const useSignUpForm = () => {
  const handleSubmit = async ({
    email,
    firstName,
    lastName,
    password
  }: IHandleSubmitParams) => {
    await fetch(`/api/auth/sign-up`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password
      })
    })

    return null
  }

  return { handleSubmit }
}

export default useSignUpForm
