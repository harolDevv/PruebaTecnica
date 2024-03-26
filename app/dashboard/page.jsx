"use client"

import CardPerson from "@/components/CardPerson/CardPerson"
import { ModalDirections } from "@/components/ModalDirections/ModalDirections"
import { ModalUpdatePerson } from "@/components/ModalUpdatePerson/ModalUpdatePerson"
import Layout from "@/layout/Layout"
import { useEffect, useState } from "react"

const DashBoard = () => {

  const [persons, setPersons] = useState([])
  const [viewDirections, setViewDirections] = useState(false)
  const [userSelect, setUserSelect] = useState({

  })

  const [userUpdate, setUserUpdate] = useState({})
  const [updateModal,setUpdateModal] = useState(false)

  useEffect(() => {
    fetch('/api/persons')
    .then(response => response.json())
    .then(data => setPersons(data))
    .catch(error => console.error('Error:', error));
  },[])

  return (
    <Layout>
    <div class="p-5 h-screen grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              persons.map(person => (
                <CardPerson person={person} setUserSelect={setUserSelect} setViewDirections={setViewDirections} setUserUpdate={setUserUpdate} setUpdateModal={setUpdateModal}/>
              ))
            }
    </div>
      {
        viewDirections &&
        <ModalDirections userSelect={userSelect} setViewDirections={setViewDirections}/>
      }
      {
        updateModal &&
        <ModalUpdatePerson setUpdateModal={setUpdateModal} userUpdate={userUpdate}/>
      }
    </Layout>
  )
}
export default DashBoard
