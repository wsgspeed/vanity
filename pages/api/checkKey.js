let keyDatabase = {
  "developer-kwmeah-oenajcu-3l9a8f5": false, // S_0
  "developer-ajwnfg-pwnahd-3n1s8gf": false,   // ROSARY
  "vanity-bvhncpral-9f2e6a3c-mt7q1yus": false, // bablo
  "vanity-sjffwjada-192fad74-fnaw35gfa": false, // name
  "vanity-rxqplmzsh-4b7c1d9e-zk2v8twh": false, // xen
  "vanity-qswdivelf-2a8k5r0b-hz9n4gxm": false, // bappo
  "vanity-kdprlqvzm-7f3a9b2e-xn6t4wsy": false // policyterms
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







