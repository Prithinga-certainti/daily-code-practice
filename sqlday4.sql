create view emp_view as
select id, name
from employees;

Select * from emp_view


create table employees (
    id int,
    name varchar(20),
    salary int,
    country varchar(20)
);

insert into employees values
(1, 'prithiii', 50000, 'india'),
(2, 'vel', 30000, 'usa'),
(3, 'mathi', 20000, 'india'),
(4, 'pooja', 12001, 'uk');

-- string functions,numeric , data functions and aggregate functions

select upper(name) from employees;
select lower(name) from employees;

select name,length(name) from employees;

select concat(name,' - ',country) from employees;

select abs(-1000)

select round(123.456, 2);

select ceil(12.3);

select floor(12.3);

select current_date;

select now();      

select count(*) from employees;

select sum(salary) from employees;

select avg(salary) from employees;

select max(salary) from employees;

select min(salary) from employees;

-- conditional function
select name,
case when salary > 40000 then 'high'
when salary > 25000 then 'medium'
else 'low'
end as level
from employees;


-- logical

select * from employees
where salary > 20000 and country = 'india';

select * from employees
where salary > 20000 or country = 'india';

select * from employees
where salary > 20000 not country = 'india';

select * from employees
where salary between 20000 and 40000;


select * from employees
where country in ('india', 'uk');


select * from employees
where name like '%v';

select * from employees
where salary is null;


select * from employees
where salary is not null;  


