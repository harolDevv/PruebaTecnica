import { useRouter } from "next/navigation";
"use-client"

const { CreateAccount } = require("@/views/Login/Icons")
import {Button} from '@nextui-org/react'
import { useState } from 'react'
import { ModalCreatePersona } from './ModalCreatePersona/ModalCreatePersona'


export const Navbar = () => {
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState(false)
    const handleCloseSesion = () => {
      router.push('/')
      router.refresh()
    }
  return (
    <header className='flex justify-between items-center p-2 border-b'>
        <h1 className='text-xl'>DummyDress</h1>
        <div className='flex items-center'>
          <Button 
          onClick={() => handleCloseSesion(true)}
          type="submit" className=" mt-2 mr-2" color="danger" variant="ghost" size='lg'>
              Cerrar sesion
          </Button>
          <Button 
          onClick={() => setOpenMenu(true)}
          type="submit" className=" mt-2" color="success" variant="ghost" startContent={<CreateAccount/>} size='lg'>
              Crear persona
          </Button>
        </div>
        {
            openMenu &&
            <ModalCreatePersona setOpenMenu={setOpenMenu}/>
        }
    </header>
  )
}
