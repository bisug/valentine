export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, response, timestamp } = req.body;

    if (!name || !response) {
        return res.status(400).json({ error: 'Missing name or response' });
    }

    console.log(`[PROPOSAL RESPONSE] ${name} said ${response} at ${timestamp}`);

    return res.status(200).json({ success: true, message: 'Response recorded!' });
}
