import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const ImageStepSchema = z.object({
  images: z
    .custom<FileList | File[]>()
    // 1. Validar que existan archivos
    .refine((files) => {
      if (!files) return false;
      if (files instanceof FileList) return files.length > 0;
      if (Array.isArray(files)) return files.length > 0;
      return false;
    }, "Las imágenes son obligatorias.")
    
    // 2. Transformar a Array de una vez para simplificar el resto de validaciones
    .transform((files) => (files instanceof FileList ? Array.from(files) : files))
    
    // 3. Validaciones sobre el Array de Files resultante
    .refine((files) => files.length <= 4, "Solo puedes subir un máximo de 4 imágenes.")
    .refine(
      (files) => files.every((file) => file.size <= MAX_FILE_SIZE),
      "Cada imagen debe pesar menos de 5MB."
    )
    .refine(
      (files) => files.every((file) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
      "Solo se admiten formatos .jpg, .jpeg y .png"
    ),
});

export type ImageStepValues = z.infer<typeof ImageStepSchema>;