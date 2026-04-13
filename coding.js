const express = require('express');
const app = express();
app.use(express.json());

let orders = [];
function createOrder(data) {
    const newOrder = {
        id: orders.length + 1,
        item: data.item,
        quantity: data.quantity,
        status: data.status || 'pending'
    };
    orders.push(newOrder);
    return newOrder;
}

function getOrders() {
    return orders;
}

// update order
function updateOrder(id, data) {
    const order = orders.find(o => o.id == id);
    if (!order) return null;
    order.item = data.item || order.item;
    order.quantity = data.quantity || order.quantity;
    return order;
}

// delete order
function deleteOrder(id) {
    const index = orders.findIndex(o => o.id == id);
    if (index === -1) return false;
    orders.splice(index, 1);
    return true;
}

// validate status
function isValidStatus(status) {
    const validStatus = ['pending', 'shipped', 'delivered'];
    return validStatus.includes(status);
}

// validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex(email);
}

// create order
app.post('/orders', (req, res) => {
    const order = createOrder(req.body);
    res.status(201).send(order);
});

// get orders
app.get('/orders', (req, res) => {
    res.send(getOrders());
});

// update order
app.put('/orders/:id', (req, res) => {
    const updated = updateOrder(req.params.id, req.body);

    if (!updated) {
        res.status(404).send({ message: 'Order not found' });
    } else {
        res.send(updated);
    }
});

// delete order
app.delete('/orders/:id', (req, res) => {
    const deleted = deleteOrder(req.params.id);
    if (!deleted) {
        res.status(404).send({ message: 'Order not found' });
    } else {
        res.send({ message: 'Order deleted successfully' });
    }
});

// update status
app.put('/orders/:id/status', (req, res) => {
    const { status } = req.body;
    if (!isValidStatus(status)) {
        return res.status(400).send({ message: 'Invalid status' });
    }
    const order = orders.find(o => o.id == req.params.id);
    if (!order) {
        return res.status(404).send({ message: 'Order not found' });
    }
    order.status = status;
    res.send(order);
});

// user validation
app.post('/users', (req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
        return res.status(400).send({ message: 'Username and email required' });
    }
    res.send({ message: 'User created successfully' });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});