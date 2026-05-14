# POO con TypeScript

Este proyecto es una exploración práctica de la Programación Orientada a Objetos (POO) utilizando TypeScript. Cubre desde conceptos básicos como clases y métodos hasta patrones avanzados como Servicios, DTOs y Genéricos, integrando una API real (Platzi Fake API).

## 🚀 Estructura del Proyecto

El proyecto está organizado de manera evolutiva:

### 1. Conceptos Fundamentales de POO (`src/`)
- **01-class.ts**: Definición básica de clases.
- **02-methods.ts**: Comportamiento y métodos dentro de clases.
- **04-private.ts**: Encapsulamiento y modificadores de acceso.
- **05-constructor.ts**: Inicialización de objetos.
- **06-getters.ts** & **07-setters.ts**: Control de acceso a propiedades.
- **08-inheritance.ts** & **09-protected.ts**: Reutilización de código mediante herencia.
- **10-static.ts**: Propiedades y métodos globales a la clase.
- **12-abstract.ts**: Clases base que no pueden ser instanciadas.
- **13-singleton.ts**: Patrón para asegurar una única instancia.
- **15-generics.ts**: Flexibilidad de tipos.

### 2. Aplicación Práctica (`src/app/`)
Una implementación de un sistema de catálogo de productos consumiendo una API externa.

- **Models**: Interfaces para definir la estructura de los datos (`Product`, `Category`).
- **DTOs (Data Transfer Objects)**: Objetos para validar y transferir datos entre capas (`CreateProductDto`, `UpdateProductDto`).
- **Services**:
    - `ProductService`: Gestión de productos en memoria.
    - `ProductHttpService`: Integración con la Fake API de Platzi usando Axios.
    - `BaseHttpService`: Un servicio base **Genérico** para cualquier entidad de la API.

## 🛠️ Tecnologías Utilizadas
- **TypeScript**: Lenguaje principal con tipado fuerte.
- **Axios**: Cliente HTTP para peticiones a la API.
- **Faker**: Generación de datos aleatorios para pruebas.
- **TSX/TSC**: Herramientas de compilación y ejecución.
- **Vitest**: Framework para pruebas unitarias.

## 📦 Instalación y Uso

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar un script específico:
   ```bash
   npx tsx src/app/03-main.ts
   ```

3. Ejecutar pruebas unitarias:
   ```bash
   npx vitest run
   ```

## 📝 Notas de Implementación
- **Error 500 en la API**: Se descubrió que la Fake API de Platzi requiere el objeto completo en las peticiones `PUT`. El `ProductHttpService` soluciona esto mezclando los datos actuales antes de la actualización.
- **Genéricos**: El `BaseHttpService` permite manejar cualquier endpoint (productos, categorías, usuarios) con una sola clase base reutilizable.
