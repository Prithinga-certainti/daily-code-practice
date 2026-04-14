const express = require('express');
const app = express();
app.use(express.json());

let orders = [];

async function createOrder(data) {
    const order = {
        id: orders.length + 1,
        item: data.item,
        quantity: data.quantity,
        status: 'pending'
    };
    orders.push(order);
    return order;
}

async function getOrders() {
    return orders;
}

async function updateOrder(id, data) {
    const order = orders.find(o => o.id == id);
    if (!order) return null;

    order.item = data.item || order.item;
    order.quantity = data.quantity || order.quantity;

    return order;
}

async function deleteOrder(id) {
    const index = orders.findIndex(o => o.id == id);
    if (index === -1) return false;

    orders.splice(index, 1);
    return true;
}

app.post('/orders', async (req, res) => {
    const order = await createOrder(req.body);
    res.send(order);
});

app.get('/orders', async (req, res) => {
    const data = await getOrders();
    res.send(data);
});

app.put('/orders/:id', async (req, res) => {
    const updated = await updateOrder(req.params.id, req.body);

    if (!updated) {
        return res.send("Order not found");
    }

    res.send(updated);
});


app.delete('/orders/:id', async (req, res) => {
    const deleted = await deleteOrder(req.params.id);

    if (!deleted) {
        return res.send("Order not found");
    }

    res.send("Deleted successfully");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});