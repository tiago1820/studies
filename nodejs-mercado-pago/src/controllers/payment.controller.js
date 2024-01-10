import mercadopago from "mercadopago";
import { HOST, MERCADOPAGO_API_KEY } from "../config.js";

export const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token: MERCADOPAGO_API_KEY,
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Lapicera azul",
                unit_price: 150,
                currency_id: "ARS",
                quantity: 1,
            }
        ],
        back_urls: {
            success: `${HOST}/success`,
            failure: `${HOST}/failure`,
            pending: `${HOST}/pending`,
        },
        notification_url: "https://ea9a-2803-9800-9013-b4eb-fb80-9a99-3608-9c48.ngrok-free.app/webhook",
    })

    console.log(result);


    res.send(result.body)
};

export const receiveWebhook = async (req, res) => {
    const payment = req.query;

    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment["data.id"]);

            console.log(data);
            // store in database
        }

        res.sendStatus(204);
    } catch (error) {
        return res.sendStatus(500).json({ error: error.message });
    }

}