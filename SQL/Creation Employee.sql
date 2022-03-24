use ProjetoEvoDB2

CREATE TABLE Employee (
ID INT NOT NULL PRIMARY KEY,
Name VARCHAR(40) NOT NULL,
Photo varchar (40) not null,
RG varchar(9) NOT NULL,
ID_Department INT FOREIGN KEY REFERENCES dbo.Department (ID) 
)