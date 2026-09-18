# Examen Parcial 2 — Desarrollo Web

## Descripción

En este segundo examen parcial se presenta una aplicación desarrollada en **React** que simula una **Terminal de Punto de Venta (POS) y Gestión de Pedidos**. La aplicación contiene diversos problemas conceptuales y de arquitectura relacionados con el ciclo de vida de los componentes, propagación de props, inmutabilidad y gestión de estado mediante Hooks (`useState`, `useEffect`, `useRef` y `useReducer`).

El objetivo del examen es que el estudiante sea capaz de:

* Inspeccionar la arquitectura de componentes en React.
* Identificar, diagnosticar y solucionar los diferentes problemas.

---

## Comportamiento Esperado de la Aplicación

Para que el examen se considere aprobado, debe cumplir con el siguiente funcionamiento tras resolver los fallos en el código:

1. **Temporizador de Promoción (`TemporizadorPromo`):**
   * Al iniciar el turno o montar el componente, la cuenta regresiva debe descender de segundo en segundo de forma fluida y continua (de 30 hacia 0) sin congelarse en 29s.
   * Debe limpiar adecuadamente los intervalos activos (`clearInterval`) al desmontar el componente o pausar el turno para evitar fugas de memoria.

2. **Catálogo y Comanda en Proceso (`ComandaDetalle`):**
   * Al presionar los botones del catálogo de productos, la lista "Comanda en Proceso" debe actualizarse de forma inmediata en pantalla, listando cada producto agregado.
   * El componente hijo debe consumir y reflejar los cambios de las *props* directamente, sin desacoplarse del estado del componente padre por copias locales innecesarias.
   * La acción de aplicar cortesía debe respetar el flujo unidireccional de React (no mutar directamente los objetos dentro del arreglo recibido por props).

3. **Cálculo de Totales:**
   * El indicador visual **"Total a Cobrar"** debe recalcular y mostrar el monto acumulado en tiempo real conforme se agregan productos o cambian precios.

---

## 1. Obtener el proyecto base

El proyecto base se encuentra en el siguiente repositorio:

**https://github.com/ingVillatoroUMG/ExamenParcial2DWB.git**

Debe clonar el repositorio:

```bash
git clone https://github.com/ingVillatoroUMG/ExamenParcial2DWB.git

Ingrese al directorio del proyecto:

```bash
cd ExamenParcial2DWB
```

---

## 2. Crear un repositorio personal

Después de clonar el proyecto, **NO debe realizar la entrega directamente sobre el repositorio original**.

Cada estudiante debe crear un **nuevo repositorio personal y privado** en GitHub con el nombre EXAMEN_CARNET.

### Requisitos del nuevo repositorio

El repositorio debe cumplir con las siguientes condiciones:

* Debe ser un repositorio **nuevo**.
* Debe ser **privado**.
* Debe pertenecer a la cuenta personal del estudiante.
* Debe contener los fuentes correspondientes al examen.


---

##  3. Crear la rama de entrega

Los cambios realizados para resolver el examen deben encontrarse en una rama llamada exactamente:

```text
examenparcial2
```

Para crear la rama:

```bash
git checkout -b examenparcial2
```

También puede utilizar:


---

## 4. Subir el proyecto al nuevo repositorio

Una vez creado el repositorio privado, debe asociar el proyecto local con el nuevo repositorio.

Por ejemplo:

```bash
git remote remove origin
```

Luego agregue como `origin` la URL de su nuevo repositorio:

```bash
git remote add origin URL_DE_SU_REPOSITORIO
```

Verifique la configuración:

```bash
git remote -v
```

Posteriormente agregue los archivos:

```bash
git add .
```

Realice el commit:

```bash
git commit -m "Solución examen parcial 2"
```

Finalmente, suba la rama:

```bash
git push -u origin examenparcial2
```

###  Importante

La solución del examen debe estar disponible en:

```text
examenparcial2
```

No se evaluará únicamente el contenido de `main` o `master`.

El repositorio debe permanecer **privado**.

Debe invitar como colaborador al usuario:

```text
ingVillatoroUMG
```

### Importante

La invitación al usuario `ingVillatoroUMG` es un requisito de la entrega.

Si el repositorio permanece privado y no se tiene acceso, no será posible realizar la evaluación del código.

---

# 5. Información del estudiante

En el **pie de página (footer)** de la página web debe colocarse la información del estudiante.

Debe incluir como mínimo:

```text
Nombre completo del estudiante
Carné
Curso
```

Por ejemplo:

```text
Juan Pérez López | Carné: 1234-56-789 | Desarrollo Web
```

La información debe ser visible en el `footer` de la página.

---


**Éxitos en el examen.**
