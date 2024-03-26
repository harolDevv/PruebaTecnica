import { NextResponse } from "next/server";
import db from '/libs/prisma'

//Api para leer las direcciones
export async function GET(request) {

    const query  = request.nextUrl.searchParams.get('PersonaId');

    try {   
        const dataDirections = await db.DireccionPersona.findMany({
            where: {
                PersonaId: Number(query),
                isActive: true
            },
        });

        return NextResponse.json(dataDirections);

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
//Api para crear direcciones
export async function POST(request) {

    try {
        const data = await request.json();

        const newPersonCiudad = await db.DireccionPersona.create({
            data: {
                PersonaId: data.PersonaId, // FK
                CallePrincipal: data.CallePrincipal,
                CalleSecundaria: data.CalleSecundaria,
                Ciudad: data.Ciudad,
                Provincia: data.Provincia,
                Pais: data.Pais
            },
        });

        return NextResponse.json(newPersonCiudad);

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
//Api para actualizar direcciones
export async function PUT(request) {

    try {
        const data = await request.json();

        const updatedPersona = await db.DireccionPersona.update({
            where: {
                id: data.id, // Reemplaza esto con el ID de la persona que quieres actualizar
            },
            data: {
                CallePrincipal: data.CallePrincipal,
                CalleSecundaria: data.CalleSecundaria,
                Ciudad: data.Ciudad,
                Provincia: data.Provincia,
                Pais: data.Pais
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
//Api para elimianr direcciones
export async function DELETE(request) {
    const query  = request.nextUrl.searchParams.get('Id');
    try {
        const newPersonCiudad = await db.DireccionPersona.update({
            where: {
                id: Number(query) // Reemplaza esto con el ID de la persona que quieres actualizar
            },
            data: {
                isActive: false
            },
        });

        return NextResponse.json(newPersonCiudad);

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