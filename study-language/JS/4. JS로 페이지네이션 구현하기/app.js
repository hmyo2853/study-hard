let _totalCount = 0;
let _fetchData = [];

const fetchData = async () => {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000").then(
    async (_res) => {
      const _json = await _res.json();
      _totalCount = _json.count;
      _fetchData = _json.results;
      console.log(_totalCount, _fetchData);

      return _totalCount, _fetchData;
    }
  );
};

fetchData();

// currentPage === 버튼을 눌렀을때 target.value
const renderPagination = (currentPage) => {
  if (_totalCount <= 20) return;
  let totalPage = Math.ceil(_totalCount / 20); //출력할 총 페이지
  let pageGroup = Math.ceil(currentPage / 10); // 현재 눌려있는 페이지 그룹 ex) 1~10

  let last = pageGroup * 10; // 지금 눌려있는 그룹의 마지막 페이지 ex) 1~10이면 10
  // if (last > totalPage) { // 만약 last가
  //   last = totalPage;
  // }
  let first = last - 9; // 지금 눌려있는 그룹의 첫 페이지 ex) 1~10이면 1
  if (first <= 0) {
    // last가 9 이하 경우
    first = 1;
  }

  const fragmentPage = document.createDocumentFragment();

  // prev btn 먼저 생성하여 넣기
  if (prev > 0) {
    let allpreli = document.createElement("li"); // <<
    allpreli.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom' id='allprev'>&lt;&lt;</a>`
    );
    let preli = document.createElement("li"); // <
    preli.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom' id='prev'>&lt;</a>`
    );

    fragmentPage.appendChild(allpreli);
    fragmentPage.appendChild(preli);
  }

  // first 부터 last까지 버튼 중앙에 생성 ex) 1,2,3,...,10
  for (let i = first; i <= last; i++) {
    const li = document.createElement("li");
    li.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom' id='page-${i}' data-num='${i}'>${i}</a>`
    );

    fragmentPage.appendChild(li);
  }

  if (last < totalPage) {
    let allendli = document.createElement("li");
    allendli.insertAdjacentHTML(
      "beforeend",
      `<a href='#js-bottom'  id='allnext'>&gt;&gt;</a>`
    );
    let endli = document.createElement("li");
    endli.insertAdjacentHTML(
      "beforeend",
      `<a  href='#js-program-detail-bottom'  id='next'>&gt;</a>`
    );

    fragmentPage.appendChild(endli);
    fragmentPage.appendChild(allendli);
  }

  document.getElementById("js-pagination").appendChild(fragmentPage);
};
