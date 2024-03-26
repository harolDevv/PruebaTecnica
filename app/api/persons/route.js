import { NextResponse } from "next/server";
import db from '/libs/prisma'


// Api para leer las personas
export async function GET() {
    try {
        const Personas = await db.Persona.findMany(
            {
                where:{
                    isActive:true
                }
            }
        );

        return NextResponse.json(Personas);
    } catch (error) {
         return NextResponse.json(
        {
            message: error.message,
        },
        {
            status: 500,
        }
        );
    }
}
// Api para crear Personas
export async function POST(request) {

    try {
        const data = await request.json();

        const newPerson = await db.Persona.create({
            data: {
                Nombre: data.nombre,
                Apellido: data.apellido,
                Edad: Number(data.edad),
                Cedula: data.cedula
            },
        });

        return NextResponse.json(newPerson);

    } catch (error) {
        return NextResponse.json(
        {
            message: error.message,
        },
        {
            status: 500,
        }
        );
    }

}
// Api para eliminar personas (smart)
export async function DELETE(request) {

    const query  = request.nextUrl.searchParams.get('Id');

    try {
        const newPerson = await db.Persona.update({
            where: {
                id: Number(query) // Reemplaza esto con el ID de la persona que quieres actualizar
            },
            data: {
                isActive: false
            },
        });

        return NextResponse.json(newPerson);

    } catch (error) {
         return NextResponse.json(
        {
            message: error.message,
        },
        {
            status: 500,
        }
        );
    }

}
// Api para crear actualizar personas
export async function PUT(request) {

    try {
        const data = await request.json();

        const updatedPersona = await db.Persona.update({
            where: {
                id: data.id, // Reemplaza esto con el ID de la persona que quieres actualizar
            },
            data: {
                Nombre: data.Nombre,
                Apellido: data.Apellido,
                Edad: data.Edad,
                Cedula: data.Cedula,
            },
        });
        
        return NextResponse.json(updatedPersona);

    } catch (error) {
         return NextResponse.json(
        {
            message: error.message,
        },
        {
            status: 500,
        }
        );
    }

}