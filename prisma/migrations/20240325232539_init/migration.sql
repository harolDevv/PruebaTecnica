BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Persona] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(1000) NOT NULL,
    [Apellido] NVARCHAR(1000) NOT NULL,
    [Edad] INT NOT NULL,
    [Cedula] NVARCHAR(1000) NOT NULL,
    [Password] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Persona_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[DireccionPersona] (
    [id] INT NOT NULL IDENTITY(1,1),
    [PersonaId] INT NOT NULL,
    [CallePrincipal] NVARCHAR(1000) NOT NULL,
    [CalleSecundaria] NVARCHAR(1000) NOT NULL,
    [Ciudad] INT NOT NULL,
    [Provincia] NVARCHAR(1000) NOT NULL,
    [Pais] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [DireccionPersona_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[DireccionPersona] ADD CONSTRAINT [DireccionPersona_PersonaId_fkey] FOREIGN KEY ([PersonaId]) REFERENCES [dbo].[Persona]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
