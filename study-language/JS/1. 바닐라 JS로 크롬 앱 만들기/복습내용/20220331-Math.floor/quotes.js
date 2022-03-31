// 랜덤으로 각각의 span에 출력해주기 위해 Math.매서드를 알아본다.

Math.random() // 출력값 0.10061202992603668, 소숫점을 포함한 랜덤 숫자를 가져온다.

Math.floor(1.9) // 출력값 1, 소수점을 버린다.

Math.round(1.1) // 출력값 1, 소수점 반올림
Math.round(1.5) // 출력값 2, 소수점 반올림

Math.ceil(1.9) // 출력값 1, 소수점 내림
Math.ceil(1.5) // 출력값 1, 소수점 내림


///////////////////////////////////////////////


// n개의 명언에서 1개의 명언과 1명의 작가이름 가져오기

const quotes = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'REid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'SEth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
];

// id가 quote인 span을 찾아서 명언과 작가가 들어갈 변수를 선언해준다.
// 첫번째 span에는 명언을, 두번째 span에는 작가명을
const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:last-child");

// 랜덤으로 quotes 배열 요소 n개에서 오브젝트를 1개 가져오기
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quoteSpan.innerHTML = todayQuote.quote; // object key가 "quote"인 요소 값 가져와서 첫번째 span에 출력
authorSpan.innerHTML = todayQuote.author; // object key가 "author"인 요소 값 가져와서 두번째 span

