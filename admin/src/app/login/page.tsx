"use client"

import {SubmitHandler, useForm} from "react-hook-form";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import MyCookies, {deleteCookies} from "../components/cookies"
import {toast} from 'react-toastify'
const roboto = Roboto({ subsets: ["latin"], weight:["700"]})

type Inputs = {
  username : string,
  password:string,
  
}

export default function Home() {
  const router = useRouter();
  const {register, handleSubmit } = useForm<Inputs>();

  const onSubmit : SubmitHandler<Inputs> = async (data) => {
    const {username, password} = data
    if(username === `${process.env.NEXT_PUBLIC_USERNAME}` && password === `${process.env.NEXT_PUBLIC_PASSWORD}`){
      await MyCookies();
      router.replace('/')
    }else if(username !== `${process.env.NEXT_PUBLIC_USERNAME}` && password !== `${process.env.NEXT_PUBLIC_PASSWORD}`){
      await deleteCookies()
      toast.error("Wrong Password or Username")
    }
  }
  return (
  <main>
   <main >
      <div className="container mx-auto py-8 h-[736px]">
   
        <div className="max-w-md mx-auto bg-white shadow-md  p-6 rounded-lg relative top-[10rem]">   
          <p className={`${roboto.className} text-center py-2 text-xl uppercase`}>Admin</p>
          <form onSubmit={handleSubmit(onSubmit)} className="text-center">
            <div className="mb-4">
                  <input {...register("username")} className="input" placeholder="Username"/>
            </div>
            <div className="mb-4">
              <input {...register("password")}  className="input" placeholder="Password" type="password" />
            </div>
            <div className="relative">
            <button type="submit" className="bg-red-600 px-4 text-white uppercase font-bold py-2 rounded hover:bg-cliGreen-100">Login</button>
                {/* <button typeof="submit" className="bg-red-600 px-4 text-white uppercase font-bold py-2 rounded hover:bg-cliGreen-100" type="submit">Login</button> */}
            </div>

          </form>
        </div>

    </div> 
    </main>                     


  </main>
  );
}
