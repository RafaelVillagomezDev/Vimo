// Importamos los módulos de Node.js usando la sintaxis de ESM
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// En ESM, __dirname no existe. Esta es la forma moderna de obtener la ruta del directorio.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definimos la ruta al archivo .env (usando process.cwd() es más robusto y no necesita __dirname)
const envFilePath = path.resolve(process.cwd(), '.env');
const variableName = 'VITE_APP_BUILD_VERSION';

// Leemos el contenido del archivo .env
let envFileContent = '';
if (fs.existsSync(envFilePath)) {
    envFileContent = fs.readFileSync(envFilePath, { encoding: 'utf8' });
}

let currentVersion = 0;

// Buscamos la línea que contiene la variable de versión (la lógica aquí no cambia)
const versionRegex = new RegExp(`^${variableName}=(\\d+)$`, 'm');
const match = envFileContent.match(versionRegex);

if (match) {
    // Si encontramos la variable, obtenemos su valor actual y lo incrementamos
    currentVersion = parseInt(match[1], 10);
    const newVersion = currentVersion + 1;
    // Reemplazamos el valor antiguo por el nuevo en el contenido del archivo
    envFileContent = envFileContent.replace(versionRegex, `${variableName}=${newVersion}`);
    console.log(`✅ Versión de build actualizada: ${currentVersion} -> ${newVersion}`);
} else {
    // Si no encontramos la variable, la añadimos al final del archivo con valor 1
    const newVersion = 1;
    // Nos aseguramos de no añadir un salto de línea si el archivo está vacío
    const prefix = envFileContent.length > 0 ? '\n' : '';
    envFileContent += `${prefix}${variableName}=${newVersion}`;
    console.log(`✅ Variable de build no encontrada. Inicializando en: ${newVersion}`);
}

// Escribimos el contenido actualizado de vuelta al archivo .env
fs.writeFileSync(envFilePath, envFileContent);