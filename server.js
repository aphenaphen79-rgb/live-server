module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <h1 style="font-family:sans-serif;text-align:center;margin-top:50px">🚀 Server Kamu Online!</h1>
    <p style="text-align:center">Error Upgrade Required sudah hilang.</p>
    <p style="text-align:center">Deploy berhasil di Vercel!</p>
  `);
};
