use ProjetoEvoDB2

SELECT * FROM dbo.Department, dbo.Employee 
WHERE dbo.Department.ID=dbo.Employee.ID_Department;
