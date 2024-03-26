"use client"

import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Divider} from "@nextui-org/react";
import { useState } from "react";

const CardPerson = ({person,setUserSelect, setViewDirections, setUserUpdate, setUpdateModal}) => {

    const handleUserSelect = () => {
        setViewDirections(true)
        setUserSelect(person)
    }

    const handleUpdate = () => {
      setUpdateModal(true)
      setUserUpdate(person)
    }

  return (
    <Card 
    className="max-w-[500px] max-h-48">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{person.Nombre}</h4>
            <h5 className="text-small tracking-tight text-default-400">{person.Apellido}</h5>
          </div>
        </div>
        <Button
          color="primary"
          radius="full"
          size="sm"
          onPress={() => handleUserSelect()}
        >
            Ver direcciones
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
            Click al boton para poder ver y crear direcciones para {person.Nombre}
        </p>
      </CardBody>
        <Divider/>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{person.Edad}</p>
          <p className=" text-default-400 text-small">Edad</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{person.Cedula}</p>
          <p className="text-default-400 text-small">Cel</p>
        </div>

        <Button onClick={() => handleUpdate()}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardPerson