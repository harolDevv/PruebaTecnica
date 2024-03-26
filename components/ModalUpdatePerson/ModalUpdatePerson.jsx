"use client"

import { Button, Input } from "@nextui-org/react"
import { useState } from "react"
import Swal from "sweetalert2"


export const ModalUpdatePerson = ({setUpdateModal,userUpdate}) => {
    
    const [updateState, setUpdateState] = useState(userUpdate)

    const handleEditPerson = (e) => {
        e.preventDefault()
        fetch('/api/persons', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateState),
        })
        .then( 
        Swal.fire({
            title: "Genial",
            text: "Modificaste a una persona",
            icon: "success"
        }))
        .catch(error => console.error('Error:', error));

        setUpdateModal(false)
    }

    const handleDeletePerson = () => {
        Swal.fire({
            title: "Vas a eliminar a esta persona",
            text: "Estas seguro de querer hacerlo?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`/api/persons?Id=${userUpdate.id}`, {
                    method: 'DELETE',
                })
                .then(
                    Swal.fire({
                    title: "Usuario eliminado",
                    text: "Este usuario ha sido eleiminada con exito",
                    icon: "success"
                }))
                .then(setUpdateModal(false))
                .catch(error => console.error('Error:', error));
            }
        });
    }

    return (
    <div 
    className="z-[800] bg-[rgba(0,0,0,0.75)] fixed inset-0 flex justify-center items-center ">
        <form 
        onSubmit={(e) => handleEditPerson(e)}
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:.2, type:'spring'}}
        className="relative bg-gray-900 p-8 pt-20 rounded-xl grid grid-cols-2 gap-2">
        <Button
        onClick={() => setUpdateModal(false)}
        style={{position:'absolute', top:0, right:0}} color="danger" variant="ghost" size="sm">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>    
        </Button>

        <Input
            onChange={(e) => setUpdateState({...updateState, [e.target.name]: e.target.value})}
                name="Nombre"
                isRequired
                size='lg'
                type="tel"
                label="Nombre"
                labelPlacement='inside'
                variant="bordered"
                value={updateState.Nombre}
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Input
            onChange={(e) => setUpdateState({...updateState, [e.target.name]: e.target.value})}
                name="Apellido"
                isRequired
                size='lg'
                type="tel"
                label="Apellido"
                labelPlacement='inside'
                variant="bordered"
                value={updateState.Apellido}
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Input
            onChange={(e) => setUpdateState({...updateState, [e.target.name]: e.target.value})}
                name="Edad"
                isRequired
                size='lg'
                type="tel"
                label="Edad"
                labelPlacement='inside'
                variant="bordered"
                value={updateState.Edad}
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />
            <Input
            onChange={(e) => setUpdateState({...updateState, [e.target.name]: e.target.value})}
                name="Cedula"
                isRequired
                size='lg'
                type="tel"
                label="Cedula"
                labelPlacement='inside'
                variant="bordered"
                value={updateState.Cedula}
                // errorMessage={ errors.user != 'success' && errors.user}
                // color={errors.user == 'success' && "success"}
            />

            <Button type="submit" style={{gridColumn: '1 / 3'}} className="mt-2" color="success" variant="ghost" size="lg">
                Editar
            </Button>
            <Button 
            onClick={() => handleDeletePerson()}
            style={{gridColumn: '1 / 3'}} className="mt-2" color="danger" variant="ghost" size="lg">
                Eliminar persona
            </Button>
        </form>
    </div>
  )
}
