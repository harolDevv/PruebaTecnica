import { Input } from "@nextui-org/react"
import { useState } from "react"
import {Button} from '@nextui-org/react'
import { motion } from "framer-motion"
import Swal from "sweetalert2"
import { usePersonValidation } from "@/hooks/usePersonValidate"



export const ModalCreatePersona = ({setOpenMenu}) => {
    const [createUserState, setCreateuserState] = useState({
        nombre:'',
        apellido:'',
        edad:'',
        cedula:''
    })

    const errors = usePersonValidation(createUserState.nombre,createUserState.apellido,createUserState.edad,createUserState.cedula)


    const handleCreatePerson = (e) => {
        e.preventDefault()
        fetch('/api/persons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createUserState),
        })
        .then( 
        Swal.fire({
            title: "Genial",
            text: "Creaste una persona",
            icon: "success"
        }))
        .catch(error => console.error('Error:', error));
    }
    console.log(errors);
  return (
    <div 
    className="z-[200] bg-[rgba(0,0,0,0.75)] fixed inset-0 flex justify-center items-center ">
        <motion.form 
        onSubmit={(e) => handleCreatePerson(e)}
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:.2, type:'spring'}}
        className="relative bg-gray-900 p-8 pt-20 rounded-xl grid grid-cols-2 gap-2">
        
        <Button
        onClick={() => setOpenMenu(false)}
        style={{position:'absolute', top:0, right:0}} color="danger" variant="ghost" size="sm">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>    
        </Button>

        <Input
            onChange={(e) => setCreateuserState({...createUserState, [e.target.name]: e.target.value})}
                name="nombre"
                isRequired
                size='lg'
                type="tel"
                label="Nombre"
                labelPlacement='inside'
                variant="bordered"
                errorMessage={ errors.nombre != 'success' && errors.nombre}
                color={errors.nombre == 'success' && "success"}
            />
            <Input
            onChange={(e) => setCreateuserState({...createUserState, [e.target.name]: e.target.value})}
                name="apellido"
                isRequired
                size='lg'
                type="tel"
                label="Apellido"
                labelPlacement='inside'
                variant="bordered"
                errorMessage={ errors.apellido != 'success' && errors.apellido}
                color={errors.apellido == 'success' && "success"}
            />
            <Input
            onChange={(e) => setCreateuserState({...createUserState, [e.target.name]: e.target.value})}
                name="edad"
                isRequired
                size='lg'
                type="number"
                label="Edad"
                labelPlacement='inside'
                variant="bordered"
                errorMessage={ errors.edad != 'success' && errors.edad}
                color={errors.edad == 'success' && "success"}
            />
            <Input
            onChange={(e) => setCreateuserState({...createUserState, [e.target.name]: e.target.value})}
                name="cedula"
                isRequired
                size='lg'
                type="tel"
                label="Cedula"
                labelPlacement='inside'
                variant="bordered"
                errorMessage={ errors.cedula != 'success' && errors.cedula}
                color={errors.cedula == 'success' && "success"}
            />
            <Button 
            disabled={errors.nombre != 'success' || errors.apellido != 'success' || errors.cedula != 'success' || errors.edad != 'success'}
            type="submit" style={{gridColumn: '1 / 3'}} className="mt-2" color="success" variant="ghost" size="lg">
                Crear
            </Button>
        </motion.form>
    </div>
  )
}
