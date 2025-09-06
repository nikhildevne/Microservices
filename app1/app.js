import express from "express";
import axios from "axios";

const app = express();

app.get('/', async (req, res) => {
    try {
        // Connect to App2 using service name and container port
        const response = await axios.get('http://app2:3000/');
        res.send(`First microservice received: "${response.data}"`);
    } catch (error) {
        res.status(500).send('Error connecting to second microservice');
    }
});

app.listen(3000, () => {
    console.log('First microservice running on port 3000');
});
