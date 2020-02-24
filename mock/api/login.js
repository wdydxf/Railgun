module.exports = (req, res) => {
  const { username, password } = req.body;

  if (username === 'Railgun' && password === 'bilibili') {
    res.end(JSON.stringify({
      success: true,
      message: '登录成功',
      data: {
        token: 'MisakaMikoto'
      },
      time: Date.now()
    }));
  } else {
    res.status(401).end(JSON.stringify({
      success: false,
      message: '用户名或密码错误',
      data: null,
      time: Date.now()
    }));
  }
};
