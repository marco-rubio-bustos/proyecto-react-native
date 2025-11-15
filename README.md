# proyecto-react-native

Landing page construida con **React Native + Expo**, organizada siguiendo las buenas prácticas del proyecto de referencia `TechXcelerators_6` (React + Vite). Este documento explica en detalle cómo navegar, extender y mantener la arquitectura modular.

---

## 1. Stack y objetivos

- **Runtime**: Expo (React Native 0.81)
- **Lenguaje**: TypeScript en todo el código fuente
- **Estilos utilitarios**: [twrnc](https://github.com/jaredh159/tailwind-rn) (Tailwind para React Native)
- **Gestión de estado global**: Context API (UIProvider)
- **Estructura modular**: Inspirada en `TechXcelerators_6` para facilitar escalabilidad y trabajo en equipo

> **Meta**: construir una landing page con un navbar reutilizable, pero dejar el esqueleto listo para crecer hacia una app completa (más páginas, servicios, estados globales, etc.).

---

## 2. Scripts clave

| Comando | Uso |
|---------|-----|
| `npm run dev` | Inicia Expo (Metro Bundler). Desde la terminal puedes presionar `w`, `a`, `i` o escanear QR para abrir la app. |
| `npm run web` | Abre directamente la versión web en `http://localhost:8081`. |
| `npm start -- --reset-cache` | Reinicia Metro limpiando cachés. Útil tras cambios fuertes en dependencias o configuración. |
| `npx expo start -c` | Alternativa rápida para limpiar la caché global de Expo y arrancar el proyecto. |

---

## 3. Estructura del código (`src/`)

```
src/
├── components/
│   └── navbar/            # Navbar responsivo (barrel export opcional)
│   └── productsList/      # Lista de productos
├── pages/                 # Pantallas/páginas (HomeScreen)
│   └── HomeScreen/        # Pantalla home 
├── data
│   └── productos.json/    # json 
├── constants/             # Configuración estática (ej. navegación)
├── context/               # Proveedores globales (UIProvider)
├── hooks/                 # Hooks personalizados (useResponsive)
├── services/              # Capa de datos o API (placeholders listos)
├── styles/                # Estilos globales / tokens
│   └── globalStyles
├── types/                 # Tipos y barrel exports
└── utils/                 # Utilidades y helpers
```

### 3.1 `components/`
- Componentes reutilizables desacoplados de páginas específicas.
- Convención: agrupar por subcarpeta si el componente tiene archivos auxiliares (`navbar/Navbar.tsx`, `navbar/index.ts`).
- Estilos aplicados con `twrnc`. Ejemplo: `tw\`bg-white px-4\``.

### 3.2 `pages/`
- Entradas principales de UI. Cada página puede consumir componentes, hooks y servicios.
- Mantiene el nombre `HomeScreen` para continuidad con el proyecto original, pero la ubicación es `pages/` para imitar la arquitectura de `TechXcelerators_6`.

### 3.3 `hooks/`
- Hooks reutilizables. `useResponsive` determina breakpoints (`mobile`, `tablet`, `desktop`) y expone flags `isMobile`, `isTablet`, `isDesktop`.
- Añade nuevos hooks siguiendo esta convención y exporta desde `hooks/index.ts` para facilitar importaciones (`import { useResponsive } from "../hooks"`).

### 3.4 `context/`
- `UIProvider` maneja estado global simple (por ejemplo, abrir/cerrar menú móvil).
- Patrón sugerido para futuros contextos: archivo `NombreContext.tsx` + exportar todo desde `context/index.ts`.
- En `App.tsx` se envuelve la app con `UIProvider` para que cualquier componente pueda usar `useUI()`.

### 3.5 `constants/`
- Configuración estática. Actualmente guarda `NAV_ITEMS` y `CTA_BUTTON` para el Navbar.
- Buen lugar para futuras constantes (colores, textos, endpoints).

### 3.6 `services/`
- Capa de acceso a datos. `contentService.ts` muestra un ejemplo de función asincrónica (`fetchLandingSections`) que podría conectarse a un backend real.
- Mantén la separación: servicios no deberían renderizar componentes; solo preparar datos.

### 3.7 `types/`
- Interfaces y tipos compartidos (`NavbarItem`, `NavbarItems`). Exporta desde `types/index.ts` para mantener importaciones cortas.
- Recomendado centralizar tipados que se usan en múltiples capas.

### 3.8 `utils/`
- Helpers generales. Ejemplo actual: `platform.ts` (flags `isWeb`, `isAndroid`, `isIOS`).
- Útil para encapsular lógica repetitiva (formateo, transformaciones, etc.).

### 3.9 `styles/`
- `globalStyles.ts` reservado para estilos compartidos o `StyleSheet.create`.
- Se sugiere crear archivos adicionales (`theme.ts`, `spacing.ts`) si la app crece.

---

## 4. Guideline de desarrollo (inspirado en TechXcelerators)

1. **Crear componentes desacoplados**  
   - Ubicarlos bajo `components/<Feature>` si pertenecen a una funcionalidad.
   - Exponer componentes principales vía `components/index.ts` o `components/<Feature>/index.ts`.

2. **Mantener la separación de responsabilidades**  
   - Lógica de datos → `services/`
   - Estado compartido → `context/`
   - Utilidades puras → `utils/`
   - Vista y layout → `components/` + `pages/`

3. **Tailwind con `twrnc`**  
   - Importar `tw` desde `twrnc`.
   - Usar `tw\`...\`` para clases Tailwind convencionales.
   - Combinar con `tw.style(...)` para excepciones dinámicas.

4. **TypeScript estricto**  
   - Definir tipos para props, datos y respuestas de servicios.
   - Re-exportar tipos en `types/index.ts` para importaciones limpias.
   - Ejecutar `npx tsc --noEmit` antes de abrir Pull Requests.

5. **Context + Hooks**  
   - Centralizar la lógica compartida en hooks. Ej.: `useResponsive` o futuros `useNavbar`.
   - Evitar usar `useState` directamente en múltiples componentes si puede encapsularse en un contexto.

6. **Escalabilidad**  
   - Para nuevas páginas: crear carpeta/archivo en `pages/` y ajustar navegación.
   - Para nuevos endpoints: crear servicios dedicados y tipar respuestas.
   - Para funcionalidades complejas: crear subcarpetas (`components/auth`, `services/userService.ts`, etc.).

---

## 5. Flujo de trabajo sugerido

1. **Crear rama feature/**`nombre-corto`.
2. Implementar cambios siguiendo la distribución de carpetas.
3. Ejecutar chequeos:
   - `npx tsc --noEmit`
   - `npm run dev` y pulsar `w` para validar comportamiento web.
4. Abrir PR describiendo:
   - Cambios realizados.
   - Archivos/áreas afectadas.
   - Pasos de validación manual.

> Nota: si se replica al 100% la disciplina de `TechXcelerators_6`, añade documentación complementaria (`documentacion/componentes.md`, `hooks.md`, etc.) conforme el proyecto crezca.

---

## 6. Tailwind (twrnc) – buenas prácticas

- Preferir clases Tailwind predefinidas (`bg-indigo-600`, `text-slate-800`).
- Para estilos condicionales, usar `tw.style(cond ? "bg-white" : "bg-slate-100")`.
- Evitar mezclar `StyleSheet.create` salvo que necesites optimizaciones puntuales. Mantener consistencia con utilidades.
- Si necesitas valores personalizados, ajusta `tailwind.config.js` y reinicia Metro (`npm start -- --reset-cache`).

---

## 7. Mantenimiento y resolución de problemas

1. **Caches rebeldes**
   ```
   rm -rf node_modules
   rm package-lock.json
   rm -rf .expo
   npm install
   npm start -- --reset-cache
   ```

2. **Versiones de React recomendadas por Expo**
   - Usa `react@19.1.0` y `react-dom@19.1.0` para evitar warnings.

3. **Dependencias globales**
   - Si `expo` no se reconoce en la terminal, ejecuta `npm install -g expo-cli` o usa `npx expo ...`.

4. **Commit guidelines**
   - Un commit por feature (navbar, hooks, etc.).
   - Mensajes descriptivos en español o inglés, consistentes con el equipo.

---

## 8. Roadmap sugerido

- [ ] Añadir nuevas secciones a la landing (`Features`, `Testimonios`, etc.) consumiendo datos de `services/`.
- [ ] Crear más hooks (`useNavbar`, `useTheme`) y contextos (`ThemeContext`).
- [ ] Implementar tests unitarios (React Native Testing Library) cuando el proyecto crezca.
- [ ] Documentar componentes complejos en carpetas de documentación (siguiendo `TechXcelerators_6/front/documentacion`).
- [ ] Integrar navegación avanzada (React Navigation) si se requieren múltiples pantallas nativas.

---

## 9. Checklist rápida para contribuciones

- [ ] ¿El código nuevo vive en la carpeta correcta?
- [ ] ¿Se añadieron/actualizaron tipos?
- [ ] ¿Se usó `twrnc` para estilos?
- [ ] ¿Se exportó desde los `index.ts` necesarios?
- [ ] ¿Se ejecutó `npx tsc --noEmit`?
- [ ] ¿Se documentó el cambio si afectó la estructura general?

---

Este README busca ser la guía de referencia para cualquier persona que se incorpore al proyecto. Si surge nueva funcionalidad, actualiza esta documentación para mantener el alineamiento con las mejores prácticas establecidas. ¡Feliz desarrollo! 🚀
