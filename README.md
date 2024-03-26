This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Especificaciones

```bash
Libreria Front: React
Framework React: Nextjs //ofrece back y front en un solo proyecto
Back: Node.js + Express
Bibliote UI: NextUi
ORM: Prisma
```

## Script Db

```
No se pudo generar uns script completo por problemas de compatibilidad que tenia el sistema macOs con sql-server
pero estas serias las querys a utilizar para generar las tabalas utilizadas para este proyecto:
```

```bash
CREATE TABLE Persona (
    id INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(255),
    Apellido NVARCHAR(255),
    Edad INT,
    Cedula NVARCHAR(10),
    isActive BIT DEFAULT 1
);

CREATE TABLE DireccionPersona (
    id INT PRIMARY KEY IDENTITY,
    PersonaId INT,
    CallePrincipal NVARCHAR(255),
    CalleSecundaria NVARCHAR(255),
    Ciudad NVARCHAR(255),
    Provincia NVARCHAR(255),
    Pais NVARCHAR(255),
    isActive BIT DEFAULT 1,
    FOREIGN KEY (PersonaId) REFERENCES Persona(id)
);
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# PruebaTecnica
