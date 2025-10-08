# Expo app para F2FIT 👋
## Ejecutar App

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Instalar Amplify CLI globalmente

   ```bash
   npm install -g @aws-amplify/cli
   ```

3. Importar proyecto AWS Amplify

   ```bash
   amplify pull --appId d2if3e14jjtdn2 --envName dev
   ```

4. Las credenciales de acceso a AWS Amplify Key y Secret serán compartido por un medio seguro
   ```env
   AWS_ACCESS_KEY_ID=***
   AWS_SECRET_ACCESS_KEY=***
   AWS_REGION=us-east-1
   ```

5. Iniciar applicacioón

   ```bash
   npx expo start
   ```

6. Descarga Expo Go desde las tiendas oficiales y escanear el código QR

## Arquitectura del Proyecto

### Descripción General

F2FIT es una aplicación móvil desarrollada con **Expo Go** y **TypeScript** que implementa una arquitectura serverless moderna utilizando los servicios de **AWS Amplify**. La aplicación permite a los usuarios registrar y realizar seguimiento de su bienestar diario a través de una interfaz intuitiva y responsive.

### Stack Tecnológico

#### Frontend
- **Expo Go**: Framework de desarrollo móvil multiplataforma que permite el desarrollo rápido y eficiente
- **TypeScript**: Proporciona tipado estático para mayor robustez del código
- **Dynamic Routing**: Sistema de navegación dinámico para una experiencia de usuario fluida
- **React Native**: Base tecnológica para la interfaz de usuario nativa

#### Backend (Serverless)
- **AWS Amplify**: Plataforma de desarrollo full-stack que proporciona servicios backend escalables
- **Amazon DynamoDB**: Base de datos NoSQL para almacenamiento de datos de usuario

### Arquitectura de Datos

#### Modelo de Base de Datos (DynamoDB)

La aplicación utiliza una tabla principal en DynamoDB con el siguiente esquema optimizado:

```typescript
interface UserDayInfo {
  id: ID!                    // Identificador único del registro
  date: AWSDate!             // Fecha del registro (formato: 'yyyy-MM-dd')
  energyLevel: Int           // Nivel de energía (1-5)
  emotionalState: Int        // Estado emocional (1-5)
  notes: String              // Notas adicionales del usuario
  habits: AWSJSON            // Hábitos del día en formato JSON
}
```

#### Optimizaciones de Consulta

- **Índice Principal**: `date` está indexado como `@index(name: "byDate")` para optimizar las búsquedas por fecha
- **Patrón de Acceso**: Un registro único por día, identificado por la fecha formateada como 'yyyy-MM-dd'

### Flujo de Datos

1. **Entrada de Datos**: El usuario ingresa información diaria a través de formularios en la aplicación móvil
2. **Validación**: TypeScript y validaciones del lado del cliente aseguran la integridad de los datos
3. **Almacenamiento**: Los datos se persisten en DynamoDB con indexación optimizada
5. **Recuperación**: Las consultas utilizan el índice por fecha para recuperación eficiente de registros

### Api
El acceso a datos esta separada en un capa mediante la carpeta `api`, donde se encuentra el archivo maestro `aws.ts` que cumple 2 funciones:

1. **Acceso a AWS**: Contiene el API (CRUD) de acceso a AWS
2. **Validación OFFLINE**: Valida que haya conexión a internet, en caso en que no haya conexión a internet, realizar una registro local usando `@react-native-async-storage/async-storage`.
3. **Sincronización de datos local**: Cuando el usuario ingresa a la aplicación, valida que tenga conexión a internet, si la tiene, valida si hay registros locales pendientes por sincronizar. Si hay registros locales, los sincroniza en la nube y continua.

### Deuda técnica

Issues técnicos conocidos que requieren atención y mejora en futuras iteraciones del desarrollo.

#### 1. Sincronización Offline - Actualización de Registros Existentes

**Descripción del Problema:**
La implementación actual de sincronización offline tiene una limitación crítica en el manejo de registros existentes cuando se pierde la conexión a internet.

**Comportamiento Actual:**
- ✅ **Funciona correctamente**: Cuando no hay conexión, la aplicación crea nuevos registros locales usando `@react-native-async-storage/async-storage`
- ✅ **Funciona correctamente**: Al recuperar la conexión, sincroniza los nuevos registros locales con DynamoDB
- ❌ **Problema identificado**: Si el usuario intenta actualizar un registro existente mientras está offline, el sistema no maneja correctamente este escenario

**Tareas Requeridas:**
- [ ] Modificar la lógica de guardado offline para distinguir entre CREATE y UPDATE
- [ ] Crear mecanismo de resolución de conflictos para actualizaciones concurrentes
- [ ] Agregar validación de integridad de datos en la sincronización
