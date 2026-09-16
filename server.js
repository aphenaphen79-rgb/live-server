module.exports = function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1 style="text-align:center;margin-top:100px;font-family:sans-serif">Server Online! Berhasil!</h1><p style="text-align:center">Upgrade Required sudah hilang.</p>');
}
