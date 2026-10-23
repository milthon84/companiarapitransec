# Proyecto Fullstack React + Node.js (cPanel & GitHub Actions)

Este repositorio contiene una aplicación Hola Mundo fullstack configurada para desplegar:
- **Backend:** En la ruta `/backend_app` (Nombre en cPanel: `api`)
- **Frontend:** En `public_html/frontend_app`

## Estructura de URLs

* **Frontend:** `https://companiarapitransec.com/frontend_app/`
* **Backend:** `https://companiarapitransec.com/backend_app/`

---

## 1. Configuración en cPanel (Application Manager)

En cPanel > **Application Manager** > **Register Application**:
- **Application Name**: `api`
- **Deployment Domain**: `companiarapitransec.com`
- **Base Application URL**: `/` seguido de `backend_app`
- **Application Path**: `backend_app`
- **Deployment Environment**: `Production`

Haz clic en **Save** o **Register Application**.

---

## 2. GitHub Actions (Secretos requeridos)

En tu repositorio de GitHub > **Settings** > **Secrets and variables** > **Actions**:
- `CPANEL_HOST`: `38.129.136.243` *(o companiarapitransec.com)*
- `CPANEL_USER`: Tu usuario de cPanel
- `CPANEL_PASSWORD`: Tu contraseña de cPanel
