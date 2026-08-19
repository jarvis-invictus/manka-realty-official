module.exports = function handler(req, res) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const scope = "repo,user";
  
  if (!clientId) {
    return res.status(500).send("GITHUB_OAUTH_CLIENT_ID is not set in environment variables.");
  }
  
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;
  
  res.redirect(302, url);
}
