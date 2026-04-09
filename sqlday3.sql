--primary key
create table product (
    id  int primary key,
    price decimal,
    discount decimal
);
insert into product
values(21,20.00,33.1)

insert into product
values(22,20.00,33.1)

--error

insert into product
values(21,20.00,33.1)

insert into product(price,discount)
values(20.00,33.1)

select * from product

-- if not declared in the table ,we can using alter

alter table product
add constraint primary key (id);

drop table product

--auto increament

create table product (
    id  int primary key auto_increament,
    price decimal,
    discount decimal
);
insert into product(price,discount)
values(20.00,33.1)

alter table product 
add constraint primary key(id);

alter table product
modify id int auto_increament

alter table product
auto_increament=100;

create table customer (
    id int primary key,
    name varchar(50)
);

create table orders (
    order_id int primary key,
    customer_id int,
    foreign key (customer_id) references customer(id)
);
insert into customer values (1, 'ram');
insert into orders values (101, 1);

--delete foreign key
alter table orders
drop foreign key customer_id;

-- add foreign key
alter table order 
add constraint fk_c_id
foreign key (customer_id) references customer(c_id)


// joins
select * from customer 
inner join orders 
on customer.id = orders.customer_id;

select * from customer 
left join orders 
on customer.id = orders.customer_id;

select * from customer 
outer join orders 
on customer.id = orders.customer_id;


--describe -it will describe about the table
describe orders;
