import { FormEvent } from 'react'

import EPassiLogo from '@/app/components/svg/EPassiLogo'
import Notiflix from 'notiflix';
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({"pwd": formData.get("password")}),
        })
        if(!response.ok){
            Notiflix.Notify.failure('Response not OK');
        } else {
            const data = await response.json()
            if(data.hasOwnProperty('cookie')){
                document.cookie = 'access=' + data.cookie + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                router.replace("/");
            } else {
                Notiflix.Notify.failure(data.message);
            }
        }
      }
    return (
        <div className="container h-[15rem] flex justify-center items-center bg-neutral-50 w-[20rem] rounded-xl shadow">

            <form onSubmit={onSubmit}>
                <div className='relative flex justify-center items-center mb-16 pt-4 '> 
                    <EPassiLogo className="w-16 h-16 absolute"></EPassiLogo>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder="" required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-300 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <button type="submit" style={{background: 'linear-gradient(-90deg, #FF612F 0%, #E5007D 39.7%, #6C10B9 70%, #3B9CDB 100%)'}} className="font-semibold text-white hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
        </div>
    )
}

const Login = () => {
    return (
        <div className='h-screen items-center justify-center flex'>
            
            <Form/>
        </div>
    );
}

export default Login;