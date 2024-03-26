"use client"

import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CardDirection } from '../CardDirection/CardDirection'
import { ModalCreateDirection } from '../ModalCreateDirection/ModalCreateDirection'
import { ModalUpdateDirection } from '../ModalUpdateDirection/modalUpdateDirection'



export const ModalDirections = ({userSelect, setViewDirections}) => {


    const [directions, setDirections] = useState([])
    const [modalDirection, setModalDirection] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const [directionUpdate, setDirectionUpdate] = useState({})

    useEffect(() =>{
        fetch(`/api/directions?PersonaId=${userSelect.id}`)
        .then(response => response.json())
        .then(data => setDirections(data))
        .catch(error => console.error('Error:', error));
    },[modalDirection, modalUpdate])

  return (
    <div 
    className="z-[200] bg-[rgba(0,0,0,0.75)] fixed inset-0 flex justify-center items-center ">
        <motion.div 
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{duration:.2, type:'spring'}}
        className='relative w-[90%] h-[90%] bg-gray-800 rounded-xl p-5 pt-20'>
            <Button
            onClick={() => setViewDirections(false)}
            style={{position:'absolute', top:0, right:0}} color="danger" variant="ghost" size="sm">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>    
            </Button>

            <div className='HeaderModal w-full flex justify-between'>
                <h2 className='text-xl'>Direcciones {userSelect.Nombre}</h2>
                <Button onClick={() => setModalDirection(true)} color='success'>
                    Crear direccion
                </Button>
            </div>

            <div className='contenedorDirecciones grid grid-cols-4 grid-row-4 gap-2 overflow-hidden'>
                {
                    directions.length > 0 ? 
                    directions.map((direction) => (
                        <CardDirection direction={direction} setModalUpdate={setModalUpdate} setDirectionUpdate={setDirectionUpdate}/>
                    )) : 
                    <p className='text-white text-4xl font-light'>No hay direcciones creadas</p>
                }
            </div>

        </motion.div>
        {
            modalDirection &&
            <ModalCreateDirection userSelect={userSelect} setModalDirection={setModalDirection}/>
        }
        {
            modalUpdate &&
            <ModalUpdateDirection setModalUpdate={setModalUpdate} directionUpdate={directionUpdate} />
        }
    </div>
  )
}
