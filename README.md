# Proyecto Fullstack React + Node.js (cPanel & GitHub Actions)

Este repositorio contiene una aplicación Hola Mundo fullstack configurada para desplegar:
- **Backend:** En la ruta `/backend` (Nombre en cPanel: `backend`)
- **Frontend:** En `public_html/frontend`

## Estructura de URLs

* **Frontend:** `https://companiarapitransec.com/frontend/`
* **Backend:** `https://companiarapitransec.com/backend/`

---

## 1. Configuración en cPanel (Application Manager)

En cPanel > **Application Manager** > **Register Application** (o Edit):
- **Application Name**: `backend`
- **Deployment Domain**: `companiarapitransec.com`
- **Base Application URL**: `backend`
- **Application Path**: `backend`
- **Application Startup File**: `app.js`
- **Deployment Environment**: `Production`

Haz clic en **Save** o **Update Application**.

---

## 2. GitHub Actions (Secretos requeridos)

En tu repositorio de GitHub > **Settings** > **Secrets and variables** > **Actions**:
- `CPANEL_HOST`: `38.129.136.243` *(o companiarapitransec.com)*
- `CPANEL_USER`: Tu usuario de cPanel
- `CPANEL_PASSWORD`: Tu contraseña de cPanel
