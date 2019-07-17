# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT productid, ProductName, CategoryName FROM categories 
JOIN products on categories.categoryid = products.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orders.orderid, shippers.ShipperName, orders.orderdate FROM Orders 
JOIN shippers on orders.shipperid = shippers.shipperid
WHERE orders.orderdate <'1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT orderid, ProductName, quantity FROM products 
JOIN orderdetails on products.productid = OrderDetails.productid
WHERE orderid = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records. 
SELECT orders.orderid, customers.customername as CustomerName, employees.lastname as EmployeeLastName FROM orders
join customers on orders.customerid = customers.customerid,  employees on orders.employeeid = employees.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.categoryname, COUNT(c.categoryid) as Count from products as p 
join categories as c on p.categoryid = c.categoryid
group by c.categoryid;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 