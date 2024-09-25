# 🥟 **Gestión de Fritos Puesto Doña Marta**

## 👥 **Integrantes**
- **Kenneth Santiago Ceballos Sierra** (Front-End) 🖥️
- **Oliver Eduardo Lopez Perez** (Back-End) 🛠️

## 🎯 **Propósito del Sistema**
El sistema de gestión de ventas "Puesto Doña Marta" tiene como objetivo optimizar el control de inventario y gestión de clientes en el puesto de fritos. El sistema permitirá realizar el registro de productos, administración de puestos y gestión de señoras.

## 🚀 **Funcionalidades Principales**
- **👩‍🍳 Gestión de Señoras**: Permite registrar nuevas señoras, asignarles un puesto y gestionar su información personal. Las señoras registradas se muestran en una tabla para su posterior consulta o eliminación.
  
- **🍽️ Gestión de Productos**: El sistema permite registrar productos con su nombre, precio y puesto asignado. Los productos se listan en una tabla donde pueden ser consultados o eliminados según sea necesario.

- **📍 Gestión de Puestos**: Permite registrar la ubicación de nuevos puestos donde se venden los fritos. Los puestos registrados se gestionan en una tabla que permite su visualización o eliminación.

## 🛠️ **Tecnologías Utilizadas**
- **Frontend**: HTML, CSS, Bootstrap, JavaScript 🌐
- **Backend**: Spring Boot ⚙️
- **Base de datos**: MySQL 🗄️

## ⚙️ **Instalación y Configuración**
1. 📂 Clonar el repositorio.
2. 🛠️ Configurar la base de datos en MySQL utilizando el script proporcionado.
3. 🚀 Levantar el servidor backend con Spring Boot.
4. 🌍 Abrir el archivo HTML y disfrutar.

## 🗂️ **Estructura del Sistema**
### 🖼️ **Páginas del Sistema**
- **🏠 Página principal**: Contiene un header con navegación para acceder a las secciones de registrar señora, producto y puesto.
  
- **📝 Registrar Señora**: Formulario para registrar señoras con campos como nombre, celular, documento y puesto asignado. Las señoras se listan en una tabla.
  
- **🛒 Registrar Producto**: Formulario para agregar nuevos productos con sus respectivos nombres, precios y puestos. Los productos registrados se muestran en una tabla.
  
- **📌 Registrar Puesto**: Formulario para agregar nuevos puestos con su ubicación. Los puestos se listan en una tabla para su administración.

### 💻 **Funcionalidades del Frontend**
- **🔄 Interactividad con JavaScript**: Las diferentes secciones (señoras, productos, puestos) están gestionadas mediante JavaScript para mostrar u ocultar formularios dinámicamente y manejar la validación de los datos.
  
- **🎨 Uso de Bootstrap**: La interfaz utiliza Bootstrap para estilizar los formularios, tablas y botones, garantizando una experiencia de usuario atractiva y responsiva.
  
- **✨ FontAwesome**: Se utilizan íconos de FontAwesome para mejorar la navegación y la presentación visual del sistema.

## 🔗 **API REST**
El sistema incluye una API REST para la gestión de productos, señoras y puestos. Las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) están disponibles para estos recursos, lo que permite integrar el sistema con otras plataformas y aplicaciones.

### 🌐 **Endpoints Disponibles**
- **🍽️ Productos**
  - `GET /api/producto`: Obtiene la lista de productos.
  - `POST /api/producto`: Crea un nuevo producto.
  - `PUT /api/producto/{id}`: Actualiza un producto.
  - `DELETE /api/producto/{id}`: Elimina un producto.

- **📍 Puestos**
  - `GET /api/puesto`: Obtiene la lista de puestos.
  - `POST /api/puesto`: Crea un nuevo puesto.
  - `PUT /api/puesto/{id}`: Actualiza un puesto.
  - `DELETE /api/puesto/{id}`: Elimina un puesto.

- **👩‍🍳 Señoras**
  - `GET /api/senyora`: Obtiene la lista de señoras.
  - `POST /api/senyora`: Crea una nueva señora.
  - `PUT /api/senyora/{id}`: Actualiza una señora.
  - `DELETE /api/senyora/{id}`: Elimina una señora.
