// This is a serverless function for Vercel / Netlify
// It handles POST requests and logs the response.
// In a real scenario, you'd save this to a database or send a webhook.

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, response, timestamp } = req.body;

    if (!name || !response) {
        return res.status(400).json({ error: 'Missing name or response' });
    }

    // LOGGING (Visible in Vercel/Netlify dashboard)
    console.log(`[PROPOSAL RESPONSE] ${name} said ${response} at ${timestamp}`);

    // OPTIONAL: Send to a Discord/Slack Webhook
    // const webhookURL = process.env.WEBHOOK_URL;
    // if (webhookURL) {
    //     await fetch(webhookURL, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ content: `🔔 NEW PROPOSAL RESPONSE: **${name}** said **${response}**!` })
    //     });
    // }

    return res.status(200).json({ success: true, message: 'Response recorded!' });
}
