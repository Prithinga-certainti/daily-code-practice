create table timestamps (
    doj date,
    dateandtime datetime,
    currenttime time
);

insert into timestamps
values (current_date(), now(), current_time());

select * from timestamps;

class table products(
 p_id int,
 p_name varchar(50) unique, 
price decimal(7,2),
);

  insert into products
 values(1,'rice','200.00'); 

class table products(
 p_id int,
 p_name varchar(50),
 price decimal(7,2)
 );

 alter table products
 add constraints unique(p_name) 

insert into products 
values(1,'rice','200.00');

class table products( 
p_id int,
 p_name varchar(50)not null,
 price decimal(7,2) 
);

insert into products 
values(1,'rice','200.00'); 


Alter table products 
Modify p_name varchar(30) not null;

create table users (
    id int,
    name varchar(100),
    age int check (age >= 18)
);

insert into users (name, age)
values ('prithiii', 20);

-- invalid 

insert into users (name, age)
values ('ram', 15);

create table orders (
    id int,
    status varchar(20) check (status in ('pending','shipped', 'delivered'))

);

insert into orders
values(1,'pending');

-- invalid

insert into orders
values(1,'cancel');

-- multipleline column 

create table products (
    id  int,
    price decimal,
    discount decimal,
    check (discount <= price)
);

insert into products (price, discount)
values (1000, 200);

-- invalid
insert into products (price, discount)
values (1000, 1500);


create table items (
    i_id int,
    i_name varchar(30),
    price decimal(6,2),
    constraint check_price check (price < 100)
);

insert into items
values(22,'shoe',20.00);

insert into items
values (1, 'pen', 50.00);

insert into items
insert into items
values (2, 'bag', 150.00);


alter table items 
drop constraints checkprice;

alter table items
add constraints f_price check(price >100);



