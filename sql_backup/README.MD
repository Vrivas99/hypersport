## Esta carpeta es para guardar los dumps de la base de datos.
Siempre importar la ultima version disponible (indicada con flecha)

+---Antiguo_SCHEMA_'mydb'_base_de_datos---+
| |DUMP V1| [20230421]                    |
| |DUMP V2| [20230503] - $03-05-2023$     |
|                                         |
+----Nuevo_SCHEMA_'test'_base_de_datos----+
| |DUMP V3|    [20230505] - $05-05-2023$  |
| |DUMP V3| -> [20230506] - $07-05-2023$  |
+-----------------------------------------+
`Para crear la nueva base de datos`
Abrir mysql command line y darle; 'CREATE DATABASE test;'
esto te creara el schema en mysql8.0.

## Contexto
Los archivos mysql de esta carpeta definen como funcionan las tablas, puedes
consultar por aca los modelos que tenemos para ver como organizar la pagina.
Ojo que tambien contiene los inserts por tanto la informacion derrepente puede
no ser muy clara si no lees bien.

Una carpeta Dump es solo el export de como levantar el schema mysql y los inserts
de cada tabla, por tanto se pueden utilizar estos scripts para levantar la base.
Cada Dump es distinto ya que son por cambios, por tanto cuidado al importar data
en el workbench.

## Estructuras claves abajo
1. tabla actual de producto
------------------------------------------------------------------------
| Producto |                                                           |
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| id            | int          | NO   | PRI | NULL    | auto_increment |
| title         | varchar(255) | YES  |     | NULL    |                |
| img           | varchar(255) | YES  |     | NULL    |                |
| Descu         | varchar(4)   | YES  |     | NULL    |                |
| descripcion   | varchar(25)  | YES  |     | NULL    |                |
| price         | int          | YES  |     | NULL    |                |
| originalPrice | int          | YES  |     | NULL    |                |
| cantidad      | int          | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+

// redidesño para nuevo esquema 'test'
```sql
CREATE TABLE producto (
id int NOT NULL AUTO_INCREMENT,
 title varchar(255),
 img varchar(255),
 Descu varchar(4),
 descripcion varchar(25),
 price int, 
 originalPrice int, 
 cantidad int,
 PRIMARY KEY (id));
```

## Diseños
1. Diseño categoria
-----------------------------------------
|      categoria      |    Estructura   |
-----------------------------------------
futbol                | idCategoria     |
basquetbol            | NOMBRE          |
voleyboll             | DESCRIPCION     |
tennis                |                 |
beisbol               |                 |
golf                  |                 |
hockey                |                 |
-----------------------------------------

2. Diseño tipo de producto
-----------------------------------------
|    tipoproducto     |    Estructura   |
-----------------------------------------
articulo deportivo    | idTipo          |
accesorios            | NOMBRE          |
vestuario             | DESCRIPCION     |
-----------------------------------------