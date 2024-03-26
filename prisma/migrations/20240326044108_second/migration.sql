BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[DireccionPersona] ADD [isActive] BIT NOT NULL CONSTRAINT [DireccionPersona_isActive_df] DEFAULT 1;

-- AlterTable
ALTER TABLE [dbo].[Persona] ADD [isActive] BIT NOT NULL CONSTRAINT [Persona_isActive_df] DEFAULT 1;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
