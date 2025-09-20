export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const authHeader = req.headers['authorization'];
    const VALID_AUTH = 'Bearer VanityStayTfUnTracable1824'; 

    if (!authHeader || authHeader !== VALID_AUTH) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { key } = req.body;

    const VALID_KEYS = ['developer-ajwnfg-pwnahd-3n1s8g-vanity', 'developer-kwmeah-oenajcu-3l9a8f4-vanity']; 
    if (VALID_KEYS.includes(key)) {
        return res.status(200).json({ result: 'validKey' });
    } else {
        return res.status(200).json({ result: 'Incorrect' });
    }
}
