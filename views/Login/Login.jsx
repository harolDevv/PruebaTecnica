'use client'

//next ui imports
import {Input, Button, Code} from "@nextui-org/react";
import { useRouter } from "next/navigation";

//react imports
import { useState } from "react";

//icons
import { EyeFilledIcon, EyeSlashFilledIcon, LoginIcon, PasswordIcon, UserIcon, CreateAccount, AdressIcon} from "./Icons";
import { useLoginValidation } from "@/hooks";



//import alerta
import Swal from 'sweetalert2'


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

    const onSubmit = async (e) => {
        e.preventDefault()
        //Una autenticacion muy basico por el alcance del proyecto
        if(inState.user == 'Admin' && inState.password == 'Admin123'){
            Swal.fire({
                title: "Bienvenido",
                text: `Que gusto tenerte de vuelta`,
                icon: "success"
            });    
            router.push('/dashboard')
            router.refresh()
        }else{
            Swal.fire({
                title: "Error",
                text: `datos incorrectos`,
                icon: "error"
            });
        }
    }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="my-3">
            <h1 style={{fontSize:'35px', margin:'20px 0px', display:'flex', alignItems:'center'}}><AdressIcon/> Dummy<em style={{color:''}}>Dress</em></h1>
        </div>
        <form style={{width:'35%', minWidth:'340px'}} onSubmit={onSubmit}>
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
        </form>
    </div>
  )
}
