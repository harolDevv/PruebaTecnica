import { Input } from "@nextui-org/react"
import { useState } from "react"
import {Button} from '@nextui-org/react'
import { motion } from "framer-motion"
import Swal from "sweetalert2"



export const ModalCreateDirection = ({userSelect, setModalDirection}) => {

    const init = {
        PersonaId: userSelect.id ,
        CallePrincipal: "",
        CalleSecundaria: "",
        Ciudad: "",
        Provincia: "",
        Pais: ""
    }
    const [createDirectionState, setcreateDirectionState] = useState(init)


    const handleCreatePerson = (e) => {
        e.preventDefault()
        fetch('/api/directions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createDirectionState),
        })
        .then( 
        Swal.fire({
            title: "Genial",
            text: "Creaste una direccion",
            icon: "success"
        }))
        .catch(error => console.error('Error:', error));

        setModalDirection(false)
        setcreateDirectionState(init)
    }
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
        onClick={() => setModalDirection(false)}
        style={{position:'absolute', top:0, right:0}} color="danger" variant="ghost" size="sm">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>    
        </Button>

        <Input
            onChange={(e) => setcreateDirectionState({...createDirectionState, [e.target.name]: e.target.value})}
                name="Pais"
                isRequired
                size='lg'
                type="tel"
                label="Pais"
                labelPlacement='inside'
                variant="bordered"
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Input
            onChange={(e) => setcreateDirectionState({...createDirectionState, [e.target.name]: e.target.value})}
                name="Provincia"
                isRequired
                size='lg'
                type="tel"
                label="Provincia"
                labelPlacement='inside'
                variant="bordered"
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Input
            onChange={(e) => setcreateDirectionState({...createDirectionState, [e.target.name]: e.target.value})}
                name="Ciudad"
                isRequired
                size='lg'
                type="tel"
                label="Ciudad"
                labelPlacement='inside'
                variant="bordered"
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Input
            onChange={(e) => setcreateDirectionState({...createDirectionState, [e.target.name]: e.target.value})}
                name="CallePrincipal"
                isRequired
                size='lg'
                type="tel"
                label="Calle Principal"
                labelPlacement='inside'
                variant="bordered"
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />

            <Input
            onChange={(e) => setcreateDirectionState({...createDirectionState, [e.target.name]: e.target.value})}
                name="CalleSecundaria"
                isRequired
                size='lg'
                type="tel"
                label="Calle secundaria"
                labelPlacement='inside'
                variant="bordered"
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Button type="submit" style={{gridColumn: '1 / 3'}} className="mt-2" color="success" variant="ghost" size="lg">
                Crear
            </Button>
        </motion.form>
    </div>
  )
}
