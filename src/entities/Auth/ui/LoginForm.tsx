import {SubmitHandler, useForm} from "react-hook-form";
import {useLogin} from "@/shared/Auth/Hooks/useLogin";
import {useRouter} from "next/router";
import React from "react";

type LoginFormProps = {
    email: string
    password: string
}

function LoginForm() {
    const [loginError, setLoginError] = React.useState(null)
    const {handleSubmit, register} = useForm<LoginFormProps>()
    const {login} = useLogin()
    const router = useRouter()

    const onSubmit:SubmitHandler<LoginFormProps> = (data) => {
        login(data.email, data.password).then((data) => {
            router.push('/')
        }).catch((err) => {
            setLoginError(err.response.data.detail)
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[500px] mx-auto bg-stone-400 px-5 py-4 rounded-md">
            <label htmlFor="email">Email</label>
            <input className="px-3 py-2 rounded-md mb-5" type="email" id="email" {...register("email", {required:true})}/>
            <label htmlFor="password">Password</label>
            <input className="px-3 py-2 rounded-md" type="password" id="password" {...register("password", {required:true})}/>
            <div className="h-5 p-1">
                {loginError && <p className="text-red-500">{loginError}</p>}
            </div>
            <button type="submit" className="px-4 py-3 bg-white rounded-md mt-4">Submit</button>
        </form>
    );
}

export default LoginForm;