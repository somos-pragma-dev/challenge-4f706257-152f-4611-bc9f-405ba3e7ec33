# Implementación de un Dashboard con React Hooks

En este desafío, debes crear un dashboard de un sistema de gestión de usuarios. El dashboard mostrará la lista de usuarios, su estado de actividad y permitirá al administrador cambiar el estado de un usuario. Los usuarios se obtienen de un servicio externo simulado y se gestionan con React Hooks, useReducer y Context API. El sistema debe manejar la carga de datos, la actualización del estado de los usuarios y la notificación de cambios a la interfaz de usuario.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del entorno y obtención de datos

**Objetivo:** Configurar el entorno de desarrollo y obtener la lista de usuarios del servicio externo simulado.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Configura el entorno de desarrollo con React.
- Crea un hook personalizado para obtener la lista de usuarios del servicio externo simulado.
- Maneja los estados de carga y error en la obtención de datos.

**Entregable:** Entorno de desarrollo configurado y hook personalizado para obtener la lista de usuarios.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar los estados de carga y error en la obtención de datos.
- Piensa en cómo puedes simular un servicio externo para obtener los datos.

</details>

### Fase 2: Gestión del estado de los usuarios

**Objetivo:** Gestionar el estado de los usuarios con useReducer y Context API.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea un contexto para gestionar el estado global de los usuarios.
- Implementa useReducer para manejar las acciones de cambio de estado de los usuarios.
- Actualiza el estado de los usuarios en la interfaz de usuario cuando se realice un cambio.

**Entregable:** Contexto y useReducer implementados para gestionar el estado de los usuarios.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo puedes usar useReducer para manejar las acciones de cambio de estado.
- Piensa en cómo puedes actualizar el estado de los usuarios en la interfaz de usuario.

</details>

### Fase 3: Notificación de cambios

**Objetivo:** Notificar los cambios de estado de los usuarios a la interfaz de usuario.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Implementa una notificación visual cuando se cambie el estado de un usuario.
- Asegúrate de que la notificación se muestre solo una vez por cambio de estado.
- Maneja los posibles errores en la notificación de cambios.

**Entregable:** Notificación visual implementada para los cambios de estado de los usuarios.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo puedes implementar una notificación visual que se muestre solo una vez por cambio de estado.
- Piensa en cómo puedes manejar los posibles errores en la notificación de cambios.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son React Hooks y cómo se utilizan en este desafío?
- **paraQueSirve**: ¿Para qué sirve el hook personalizado creado en la fase 1?
- **comoSeUsa**: ¿Cómo se utiliza useReducer para gestionar el estado de los usuarios?
- **erroresComunes**: ¿Qué errores comunes pueden ocurrir al obtener datos del servicio externo simulado y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la implementación de la notificación visual en la fase 3?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo y obtención de datos.
- Implementación correcta de useReducer y Context API para gestionar el estado de los usuarios.
- Notificación visual correcta para los cambios de estado de los usuarios.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
