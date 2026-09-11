# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto arrancable. Si el adjunto es una carcasa (docs/placeholders),
el asistente debe materializar la estructura del stack del briefing, sin resolver las fases del reto.

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Dashboard con React Hooks, useReducer y Context API

### Reto
- Tema: React Hooks
- Seniority: junior-l1
- Tipo: practical
- Título: Implementación de un Dashboard con React Hooks
- Tiempo estimado: 4 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y obtención de datos — objetivo: Configurar el entorno de desarrollo y obtener la lista de usuarios del servicio externo simulado. — entregable (NO resolver): Entorno de desarrollo configurado y hook personalizado para obtener la lista de usuarios.
- Fase 2: Gestión del estado de los usuarios — objetivo: Gestionar el estado de los usuarios con useReducer y Context API. — entregable (NO resolver): Contexto y useReducer implementados para gestionar el estado de los usuarios.
- Fase 3: Notificación de cambios — objetivo: Notificar los cambios de estado de los usuarios a la interfaz de usuario. — entregable (NO resolver): Notificación visual implementada para los cambios de estado de los usuarios.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

import React from 'react';
import ReactDOM from 'react-dom';
import UserDashboard from './components/UserDashboard';

ReactDOM.render(<UserDashboard />, document.getElementById('root'));

// === ARCHIVO: src/hooks/useFetchUsers.js ===
import { useState, useEffect } from 'react';
import { userService } from '../services/userService';

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    userService.fetchUsers()
     .then(data => {
        setUsers(data);
        setLoading(false);
      })
     .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
};

// === ARCHIVO: src/context/UserContext.js ===
import React, { createContext, useContext, useReducer } from 'react';
import { userReducer } from '../reducers/userReducer';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { users: [] });

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

// === ARCHIVO: src/reducers/userReducer.js ===
export const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {...state, users: action.payload };
    case 'UPDATE_USER_STATUS':
      return {
       ...state,
        users: state.users.map(user =>
          user.id === action.payload.id? {...user, status: action.payload.status } : user
        )
      };
    default:
      return state;
  }
};

// === ARCHIVO: src/components/UserDashboard.js ===
import React, { useContext, useEffect } from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { useUserContext } from '../context/UserContext';
import UserStatusNotification from '../notifications/UserStatusNotification';

const UserDashboard = () => {
  const { users, loading, error } = useFetchUsers();
  const { dispatch } = useUserContext();

  useEffect(() => {
    if (users.length > 0) {
      dispatch({ type: 'SET_USERS', payload: users });
    }
  }, [users]);

  const handleStatusChange = (id, status) => {
    dispatch({ type: 'UPDATE_USER_STATUS', payload: { id, status } });
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Dashboard de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.status}
            <button onClick={() => handleStatusChange(user.id, user.status === 'active'? 'inactive' : 'active')}>
              Cambiar Estado
            </button>
          </li>
        ))}
      </ul>
      <UserStatusNotification />
    </div>
  );
};

export default UserDashboard;

// === ARCHIVO: src/services/userService.js ===
export const userService = {
  fetchUsers: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ id: 1, name: 'User 1', status: 'active' }, { id: 2, name: 'User 2', status: 'inactive' }]);
      }, 1000);
    });
  }
};

// === ARCHIVO: src/notifications/UserStatusNotification.js ===
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';

const UserStatusNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { state } = useUserContext();

  useEffect(() => {
    if (state.users.some(user => user.status === 'inactive')) {
      setShowNotification(true);
    }
  }, [state.users]);

  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  return showNotification? <p>Se ha cambiado el estado de un usuario.</p> : null;
};

export default UserStatusNotification;

// === ARCHIVO: tests/useFetchUsers.test.js ===
import { useFetchUsers } from '../src/hooks/useFetchUsers';
import { userService } from '../src/services/userService';
import { act, renderHook } from '@testing-library/react-hooks';

jest.mock('../src/services/userService');

describe('useFetchUsers', () => {
  it('should fetch users and set them in state', async () => {
    userService.fetchUsers.mockResolvedValue([{ id: 1, name: 'User 1', status: 'active' }]);
    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());
    await waitForNextUpdate();
    expect(result.current.users).toEqual([{ id: 1, name: 'User 1', status: 'active' }]);
  });

  it('should handle errors', async () => {
    userService.fetchUsers.mockRejectedValue(new Error('Failed to fetch users'));
    const { result, waitForNextUpdate } = renderHook(() => useFetchUsers());
    await waitForNextUpdate();
    expect(result.current.error).toBeInstanceOf(Error);
  });
});
```
