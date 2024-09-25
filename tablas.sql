	create database emprendimiento_donya_Marta;

	use emprendimiento_donya_Marta;

	CREATE TABLE puesto (
		id_puesto INT AUTO_INCREMENT PRIMARY KEY,
		ubicacion VARCHAR(255) NOT NULL
	);

	CREATE TABLE senyora(
		id_senyora INT AUTO_INCREMENT PRIMARY KEY,
		nombre VARCHAR(100) NOT NULL,
		cedula VARCHAR(50) NOT NULL,
		celular VARCHAR(20),
		id_puesto INT,
		CONSTRAINT FK_puesto_senyora FOREIGN KEY (id_puesto) 
			REFERENCES puesto(id_puesto)
			ON DELETE SET NULL
	);

	CREATE TABLE producto (
		id_producto INT AUTO_INCREMENT PRIMARY KEY,
		nombre_producto VARCHAR(100) NOT NULL,
		precio INT NOT NULL,
		id_puesto INT,
		CONSTRAINT FK_puesto_producto FOREIGN KEY (id_puesto) 
			REFERENCES puesto(id_puesto)
			ON DELETE CASCADE
	);



