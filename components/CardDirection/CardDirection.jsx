import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";

export const CardDirection = ({direction,setModalUpdate,setDirectionUpdate}) => {
    
    const handleUpdate = () => {
        setModalUpdate(true)
        setDirectionUpdate(direction)
    }

    return (
    <Card className="max-w-[400px]">
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">{direction.Pais}</p>
        <p className="text-small text-default-500">{direction.Ciudad}</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
        <p className="text-md">Provincia: {direction.CallePrincipal}</p>
        <p className="text-small text-default-500">Calle Principal: {direction.CallePrincipal}</p>
        <p className="text-small text-default-500">Calle Secundaria: {direction.CalleSecundaria}</p>
    </CardBody>
    <Divider/>
    <CardFooter>
        <Button onClick={() => handleUpdate()}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
        </Button>
    </CardFooter>
  </Card>
  )
}
