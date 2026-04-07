create table employee(
emp_id int,
 emp_name varchar(100),
 salary decimal(7,2),
 join_date date
 );

 select * from employee;
 
 -- drop table employee;
 
 alter table employee
 add phone_number varchar(10)
 
 alter table employee
 add email varchar(50)
 
 alter table employee
 rename column phone_number to ph_number;
 
 
 -- in sql 
alter table employee
modify column  email varchar(100)


-- in postgres
alter table employee 
alter column email type varchar(100)

insert into employee
values(1, 'Prithiii', 25000.00, '2005-07-21', '9876543210', 'prithi@gmail.com'),
(2, 'Arun', 30000.00, '2023-06-15', '9123456780', 'arun@gmail.com'),
(3, 'Priya', 45000.00, '2022-09-10', '9234567891', 'priya@gmail.com'),
(4, 'Rahul', 28000.00, '2024-01-05', '9345678912', 'rahul@gmail.com'),
(5, 'Sneha', 50000.00, '2021-12-20', '9456789123', 'sneha@gmail.com'),
(6, 'Kiran', 35000.00, '2023-03-18', '9567891234', 'kiran@gmail.com'); 

INSERT INTO employee(emp_id,salary,email)
values(7, 50000.00, 'vel@gmail.com');


select * from employee where salary =25000;

select emp_id,emp_name from employee

select emp_name,emp_id from employee

select * from employee where salary !=25000;

select emp_name,emp_id,salary from employee where salary =25000;

select * from employee where salary >25000;

select * from employee where emp_name is null;

select * from employee where emp_name is not null;


update employee 
set ph_number='9876543210'
where emp_id=2

update employee 
set ph_number='9876543211',
emp_name='mathii'
where emp_id=2

update employee 
set ph_number= null
where emp_id=2


delete from employee
where emp_id=7

BEGIN;

INSERT INTO employee VALUES (10, 'Test', 10000, '2024-01-01', '9999999999', 'test@gmail.com');

ROLLBACK;

delete from employee
where emp_id=10
