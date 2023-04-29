const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

// 요청하는 곳의 포트번호가 다르더라도 허용
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = require('./routes/todo');
app.use('/api', todoRouter); // 기본주소: localhost:PORT/api

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
