SELECT e.name, e.sector, c.company_name, c.role FROM employes as e LEFT JOIN company AS c ON e.employe_id = c.employe_id; 

SELECT e.name, e.sector, c.company_name, c.role FROM employes as e RIGHT JOIN company AS c ON e.employe_id = c.employe_id; 