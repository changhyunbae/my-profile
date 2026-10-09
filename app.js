
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const profile = {
        name: '홍길동',
        school: '인하공업전문대학',
        major: '정보통신공학과',
        intro: '안녕하세요? 웹개발실습 수업을 듣는 A반 배창현입니다.',
        hobby: '운동, 음악 감상',
        food: '삼겹살, 치킨, 카레'
    };

    res.render('index', profile);
});

app.listen(3000, () => {
    console.log('서버 실행: http://localhost:3000');
});
