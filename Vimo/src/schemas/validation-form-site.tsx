import { z } from 'zod';

export const FormSiteSchema = z.object({
  email: z.string()
    .min(1, "El correo es requerido *")
    .email("Formato de correo inválido *"),
  name: z.string()
    .min(3, "Mínimo 3 caracteres *")
    .max(20, "Máximo 20 caracteres *"),
});

// Este tipo te servirá para tus Props si lo necesitas
export type FormSiteSchema = z.infer<typeof FormSiteSchema>;