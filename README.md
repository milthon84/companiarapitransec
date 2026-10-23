# Proyecto Fullstack React + Node.js (cPanel & GitHub Actions)

Este repositorio contiene una aplicación Hola Mundo fullstack configurada para despliegue automático en cPanel con Phusion Passenger.

## Estructura del Proyecto

```text
main2/
├── .github/workflows/deploy.yml   # Automatización CI/CD con GitHub Actions
├── backend/                       # API Node.js (Express) para cPanel Application Manager
│   ├── app.js                     # Archivo principal de entrada
│   └── package.json
└── frontend/                      # Aplicación React (Vite)
    ├── public/.htaccess           # Enrutamiento Apache para React
    ├── src/App.jsx                # Interfaz con botón de prueba al backend
    └── package.json
```

---

## 1. Probar en Local

Abre dos terminales (o usa los scripts desde la raíz):

**Terminal 1 - Backend:**
```bash
npm run dev:backend
# Iniciará en http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
# Iniciará en http://localhost:5173 con proxy automático a /api
```

---

## 2. Configurar cPanel (Application Manager)

En cPanel > **Application Manager** > **Register Application**:
- **Application Name**: `api`
- **Deployment Domain**: `companiarapitransec.com`
- **Base Application URL**: `/` seguido de `api`
- **Application Path**: `api` (o la ruta donde GitHub Actions subirá el backend, `~/api`)
- **Deployment Environment**: `Production`

---

## 3. Subir a GitHub y Activar CI/CD

1. Inicializa git en esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Inicializar proyecto React + Node.js con CI/CD"
   ```
2. Crea tu repositorio en GitHub y conéctalo:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git branch -M main
   git push -u origin main
   ```
3. En GitHub > **Settings** > **Secrets and variables** > **Actions**, agrega:
   - `CPANEL_HOST`: IP de tu servidor cPanel (ej. `38.129.136.243`)
   - `CPANEL_USER`: Tu usuario de cPanel
   - `CPANEL_PASSWORD`: Tu contraseña de cPanel
