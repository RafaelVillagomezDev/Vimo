import { z } from 'zod';

export const FormSiteSchema = z.object({
  email: z.string()
    .trim() // Elimina espacios al inicio y al final
    .min(1, "El correo es requerido *")
    .email("Formato de correo inválido *")
    .max(50, "Máximo 50 caracteres *"),
  name: z.string()
    .min(3, "Mínimo 3 caracteres *")
    .max(30, "Máximo 30 caracteres *"),
  phone: z.string()
    .min(1, "El teléfono no puede estar vacío *")
    .min(7, "Mínimo 7 caracteres *")
    .max(16, "Máximo 16 caracteres *")
    .regex(/^(\+?\d{1,4}|00\d{1,4})?\d{6,12}$/, "Formato de teléfono inválido *"),
  web: z.string()
    .min(10, "Mínimo 10 caracteres *")
    .max(250, "Máximo 250 caracteres *")
    .regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/, "Formato de URL inválido *"),
  address: z.string()
    .min(5, "Mínimo 5 caracteres *")
    .max(200, "Máximo 200 caracteres *")
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s,.\-#º/]{4,}$/, "La dirección contiene caracteres no permitidos *"),
  type_food: z.string()
    .min(1, "La categoría es requerida *")
    .max(25, "Máximo 25 caracteres *"),
  description: z.string()
    .trim()
    .min(10, "Mínimo 10 caracteres *")
    .max(1200, "Máximo 1200 caracteres *")
});

// Este tipo te servirá para tus Props si lo necesitas
export type FormSiteSchema = z.infer<typeof FormSiteSchema>;