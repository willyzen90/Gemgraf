# Obsidian-Style Gemini Graph Repository

Este repositorio contiene el código listo para ser subido a un hosting como **Hostinger** para visualizar consultas y entradas de Gemini en un grafo dinámico al estilo **Obsidian**.

## 📁 Estructura del Proyecto

```
/
├── index.html            # Archivo principal de la aplicación
├── assets/
│   ├── css/
│   │   └── styles.css    # Estilos OSCUROS (Tokyo Night / Obsidian)
│   └── js/
│       ├── data.js       # Base de datos de entradas y relaciones
│       └── graph.js      # Lógica de renderizado y física del grafo
└── README.md             # Documentación del proyecto
```

## 🚀 Cómo desplegar en Hostinger

1. Descarga el archivo comprimido `.zip` generado.
2. Inicia sesión en tu panel de **Hostinger (hPanel)**.
3. Ve a **Archivos > Administrador de Archivos (File Manager)**.
4. Abre la carpeta raíz de tu sitio (normalmente `public_html`).
5. Sube el archivo `.zip` y descomprímelo dentro de `public_html`.
6. ¡Listo! Abre tu dominio en el navegador y verás la interfaz de tu grafo.

## 📝 Personalización de datos

Para agregar tus propias entradas consultadas en Gemini, edita el archivo `assets/js/data.js` agregando nuevos objetos al arreglo `rawNodes` y sus conexiones en `rawEdges`.
