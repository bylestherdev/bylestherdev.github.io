# Documentación Técnica: Mascota SVG Modular (`RobotMascota.tsx` - Lesther IA)

Mascota vectorial pseudo-3D de alta fidelidad visual para **Next.js 14+ (App Router)** desarrollada con SVG nativo y animada mediante **`framer-motion`**. El componente cuenta con un sistema cinemático jerárquico de múltiples articulaciones, **antenas gemelas**, módulo propulsor trasero, reflejo de cristal en el visor, parpadeo automático y la insignia de marca **ByLestherDev (BLD)**.

---

## 1. Identidad y Propósito
* **Nombre oficial:** **Lesther IA**
* **Insignia en Pecho:** **BLD** (ByLestherDev)
* **Rol:** Asistente virtual interactivo, mascota de marca y guía contextual en las distintas secciones del sitio.

---

## 2. Dependencias e Instalación
```bash
npm install framer-motion
```

---

## 3. Arquitectura Visual y Corrección Cinemática del Codo Fijo
1. **Antenas Gemelas Inteligentes:** Dos antenas superiores simétricas con esferas emisivas que pulsan según la actividad cognitiva o el estado de saludo.
2. **Insignia de Marca en el Torso (`BLD`):** Placa pectoral en azul corporativo con grabado tipográfico minimalista.
3. **Módulo Propulsor (Jetpack) y Halo de Piso:** Propulsor trasero con núcleo lumínico y una sombra de suelo elíptica reactiva.
4. **Reflejo de Cristal (`Glass Glare`):** Gradiente diagonal semitransparente sobre el visor para aportar profundidad pseudo-3D.
5. **Parpadeo Automático Orgánico (`Blinking`):** Ciclo temporizado autónomo que simula el parpadeo natural de los ojos LED cada pocos segundos.
6. **Anclaje Estático del Codo (`Fixed Elbow Pivot`):** 
   * El círculo visual del codo se mantiene estático en el extremo inferior del brazo superior.
   * Únicamente el grupo del antebrazo y la mano (`right-forearm`) rota sobre su pivote exacto, logrando que el codo permanezca fijo en su posición y **solo la mano/antebrazo se mueva de forma limpia**.

---

## 4. Especificación de Estados y Expresiones

### A. Tipos TypeScript
```typescript
export type MascotState = 'idle' | 'greeting' | 'thinking' | 'dancing' | 'sleeping' | 'typing' | 'head-only'
export type MascotExpression = 'neutral' | 'happy' | 'thinking' | 'alert' | 'wink' | 'surprised'
```

### B. Estados de Movimiento (`MascotState`)
| Estado | Comportamiento Cinemático | Articulaciones Activas | Caso de Uso |
| :--- | :--- | :--- | :--- |
| **`idle`** | Flotación vertical suave y micro-balanceo orgánico. | Cuerpo y cabeza | Reposo en Hero o lectura. |
| **`greeting`** | Hombro elevado estático, codo fijo y antebrazo pivotando. | Codo derecho | Saludos, bienvenida o aperturas. |
| **`thinking`** | Cabeza inclinada, ceja analítica y mano a la barbilla. | Cabeza y brazo derecho | Validaciones, carga de datos o procesamiento. |
| **`dancing`** | Oscilación lateral y brazos alternados dinámicos. | Torso, cabeza y brazos | Éxito, confirmaciones o feedback positivo. |
| **`sleeping`** | Inclinación pasiva, ojos cerrados y partículas Zzz. | Cabeza y torso | Inactividad prolongada o modo nocturno. |
| **`typing`** | Movimiento rápido de antebrazos simulando escritura. | Codos | Secciones de terminal, código o formularios. |
| **`head-only`** | Oculta extremidades y reajusta canvas (`60 30 180 140`). | Solo cabeza | Avatares pequeños y widgets flotantes. |

### C. Expresiones Faciales LED (`MascotExpression`)
| Expresión | Geometría LED | Color / Tono | Significado |
| :--- | :--- | :--- | :--- |
| **`neutral`** | Ojos rectangulares y boca horizontal | Cyan Neón (`#00F0FF`) | Standby / Reposo |
| **`happy`** | Ojos en arco ascendente y sonrisa curva | Cyan Neón (`#00F0FF`) | Éxito / Amigable |
| **`thinking`** | Ojo asimétrico, ceja fruncida y punto analítico | Ámbar (`#F59E0B`) | Procesando |
| **`alert`** | Ojos triangulares, cejas angulares y boca tensa | Rojo Alerta (`#EF4444`) | Errores / Avisos |
| **`wink`** | Un ojo en guiño y sonrisa curva | Cyan Neón (`#00F0FF`) | Interacción divertida / CTA |
| **`surprised`** | Ojos circulares abiertos y boca en "O" | Cyan Neón (`#00F0FF`) | Novedades / Sorpresa |

---

## 5. Propiedades del Componente (`RobotMascotProps`)

| Prop | Tipo | Default | Descripción |
| :--- | :--- | :--- | :--- |
| `state` | `MascotState` | `'idle'` | Estado cinemático de animación. |
| `expression` | `MascotExpression` | `'neutral'` | Expresión facial LED en visor. |
| `size` | `number` | `240` | Ancho en píxeles del canvas SVG. |
| `className` | `string` | `''` | Clases Tailwind CSS adicionales. |
| `speechText` | `string` | `undefined` | Texto a mostrar en burbuja de diálogo flotante. |
| `showNameTag` | `boolean` | `false` | Muestra la placa inferior con el nombre "Lesther IA". |
| `onClick` | `() => void` | `undefined` | Callback al hacer clic en la mascota. |

---

## 6. Auditoría y Estado de Calidad (CI/CD Ready)
* **Tipado TypeScript:** Estricto (`strict: true`), con interfaces completas y sin uso de `any`.
* **Animaciones:** Gestionadas eficientemente con `framer-motion` y `Variants`, optimizadas para renderizado SVG vectorial.
* **Componentes Derivados:**
  * **`HomeMascot`**: Gestión de interacciones hover y eventos de contacto (WhatsApp).
  * **`WhatsAppRobot`**: Wrapper especializado para llamadas directas a API de WhatsApp con mensajes personalizados.
* **Pipeline GitHub Actions (`ci.yml`):**
  * Verificación de TypeScript (`tsc --noEmit`).
  * Linting con ESLint.
  * Construcción de producción optimizada (`next build`).
