module.exports = async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!code) {
    return res.status(400).send("No code provided.");
  }

  if (!clientId || !clientSecret) {
    return res.status(500).send("OAuth Client ID or Secret is not configured.");
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
    });
    
    const data = await response.json();
    const token = data.access_token;
    
    if (!token) {
        throw new Error(data.error_description || data.error || "No token received from GitHub");
    }

    const message = JSON.stringify({
      token: token,
      provider: 'github'
    });
    
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Authentication Success</title></head>
      <body>
        <p>Authorization successful. You can close this window.</p>
        <script>
          (function() {
            function receiveMessage(e) {
              console.log("receiveMessage %o", e);
              window.opener.postMessage(
                'authorization:github:success:${message}',
                e.origin
              );
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage("authorizing:github", "*");
          })();
        </script>
      </body>
      </html>
    `);

  } catch (error) {
    console.error("OAuth Callback Error:", error);
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
      <head><title>Authentication Failed</title></head>
      <body>
        <p>Authentication failed: ${error.message}</p>
        <script>
            window.opener.postMessage(
              'authorization:github:error:' + JSON.stringify({ message: "${error.message}" }),
              "*"
            );
        </script>
      </body>
      </html>
    `);
  }
}
