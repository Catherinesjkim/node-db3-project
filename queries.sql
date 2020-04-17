-- Multi-Table Query Practice

--  write SQL statements against the `northwind.db3` database. Once you have the correct SQL Statement for each query, write it inside the _queries.sql_ file under the corresponding comment.

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records - Worked on SQLite3 Studio
SELECT p.ProductName, c.CategoryName
FROM [Product] as p
JOIN [Category] as c 
  ON p.CategoryId = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records - Worked on SQLite3 studios
SELECT o.Id, o.ShipName 
FROM [Order] as o
WHERE o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records - Worked on SQLite3
SELECT p.ProductName, o.Quantity
FROM [OrderDetail] as o
JOIN [Product] as p
 ON p.id = o.ProductId
WHERE o.OrderId = 10251
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records - Worked on SQLite3 studio

SELECT o.Id 
AS OrderId, c.CompanyName, e.LastName
FROM [Order] as o
JOIN [Customer] as c
 ON o.CustomerId = c.Id
JOIN [Employee] as e
 ON o.EmployeeId = e.Id;

-- Stretch Goal #1
-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records - Worked on SQLite3 studio

SELECT c.CategoryName, c.Id as Count
FROM [Product] as p
JOIN [Category] as c 
   ON p.CategoryId = c.Id
GROUP BY categoryName; 


-- Stretch Goal #2
-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records - Worked on WESchool's trysql but didn't work on SQLite3 studio. Github repo says use SQL Try Editor at W3Schools.com. 

SELECT o.OrderID, o.Quantity as ItemCount
FROM [Product] as p
JOIN OrderDetails as o 
   ON p.Id = o.ProductID
GROUP BY OrderID;  