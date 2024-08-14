import { useForm } from 'react-hook-form'

type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

const Myformlog = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    
  return (
    <>
    <form>
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="text" placeholder="Password" {...register("password")} />
        <input type="text" placeholder="Confirm Password" {...register("password")} />
        <button onClick={handleSubmit((data) => console.log(data))}>Submit</button>
    </form>
    </>
  )
}

export default Myformlog