'use client'

//next ui imports
import {Input, Button, Code} from "@nextui-org/react";
import { useRouter } from "next/navigation";

//react imports
import { useState } from "react";

//icons
import { EyeFilledIcon, EyeSlashFilledIcon, LoginIcon, PasswordIcon, UserIcon, CreateAccount, AdressIcon} from "./Icons";
import { useLoginValidation } from "@/hooks";


export const Login = () => {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(false);

    const [inState, setInState] = useState(
        {
            user:'',
            password:''
        }
    )

    //Validacion del formulario
    const errors = useLoginValidation(inState.user, inState.password)

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleLogin = (e) => {
        e.preventDefault()
        if(inState.user == '123' && inState.password == '123'){
            router.push('/Home')
            router.refresh()
        }
    }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="my-3">
            <h1 style={{fontSize:'35px', margin:'20px 0px', display:'flex', alignItems:'center'}}><AdressIcon/> Dummy<em style={{color:''}}>Dress</em></h1>
        </div>
        <form style={{width:'35%', minWidth:'340px'}} onSubmit={(e) => handleLogin(e)}>
            <Input
            onChange={(e) => setInState({...inState, [e.target.name]: e.target.value})}
            name="user"
                isRequired
                size='lg'
                type="tel"
                label="Usuario"
                placeholder="Numero de cedula"
                labelPlacement='inside'
                variant="bordered"
                errorMessage={ errors.user != 'success' && errors.user}
                color={errors.user == 'success' && "success"}
                startContent={
                <UserIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Input
            onChange={(e) => setInState({...inState, [e.target.name]: e.target.value})}
            name="password"
            isRequired
                size="lg"
                className="mt-2"
                type={isVisible ? "text" : "password"}
                label="Contraseña"
                variant="bordered"
                placeholder="Contraseña"
                errorMessage={ errors.password != 'success' && errors.password}
                color={errors.password == 'success' && "success"}
                labelPlacement='inside'
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeFilledIcon className="text-xl text-default-400 pointer-events-none" />
                    )}
                    </button>
                }
                startContent={
                <PasswordIcon  className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                
            />
            <Button type="submit" className="w-full mt-2" color="success" variant="ghost" startContent={<LoginIcon/>} size='lg'>
                Iniciar sesion
            </Button>
            
            <div className="flex items-center">
                <div className="text-center h-1"></div>
                <span className="flex-1 text-center">o</span>
                <div className="text-center h-1"></div>
            </div>

            <Button className="w-full mt-2" color="" variant="ghost" startContent={<CreateAccount/>} size='lg'>
                Crear cuenta
            </Button>
        </form>
    </div>
  )
}
