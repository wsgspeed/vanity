let keyDatabase = {
    "developer-kwmeah-oenajcu-3l9a8f4-vanity": null, 
    "developer-ajwnfg-pwnahd-3n1s8g-vanity": null
};

export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const authHeader = req.headers['authorization'];
    if (!authHeader || authHeader !== 'Bearer VanityStayTfUnTracable1824')
        return res.status(401).json({ error: 'Unauthorized' });

    const { key, mac } = req.body;

    if (!keyDatabase.hasOwnProperty(key)) return res.json({ result: 'Incorrect' });

    if (!keyDatabase[key]) {
        keyDatabase[key] = mac;
        return res.json({ result: 'validKey' });
    } else if (keyDatabase[key] === mac) {
        return res.json({ result: 'validKey' });
    } else {
        return res.json({ result: 'macMismatch' });
    }
}
