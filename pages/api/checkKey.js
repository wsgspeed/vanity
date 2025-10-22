let keyDatabase = {
  "developer-kwmeah-oenajcu-3l9a8f5": false, // S_0
  "developer-ajwnfg-pwnahd-3n1s8gf": false   // ROSARY
  "vanity-sjffwjada-192fad74-fnaw35gfa": false // name
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { key } = req.body;

  if (!key || typeof key !== 'string') {
    return res.status(400).json({ error: 'Bad Request: missing or invalid key' });
  }

  if (!Object.prototype.hasOwnProperty.call(keyDatabase, key)) {
    return res.json({ result: 'Incorrect' });
  }

  keyDatabase[key] = true;

  return res.json({ result: 'validKey' });
}

