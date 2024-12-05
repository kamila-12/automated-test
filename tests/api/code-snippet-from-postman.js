    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json, text/plain, */*");
    myHeaders.append("country-id", "12");
    myHeaders.append("device", "pc");
    myHeaders.append("experiment", "novalue");
    myHeaders.append("language", "ru_RU");
    myHeaders.append("referer", "https://lalafo.kg/bishkek/mebel-2/mebel/q-%D0%9E%D1%84%D0%B8%D1%81%D0%BD%D1%8B%D0%B5%20%D1%81%D1%82%D0%BE%D0%BB%D1%8B?sort_by=default&price[from]=10000&price[to]=20000");
    myHeaders.append("request-id", "react-client_7c19e2dc-d514-4857-97d7-51def66d0829");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");
    myHeaders.append("user-hash", "52942bc2-60ed-4bd0-a9e0-2da1b5332443");
    myHeaders.append("x-cache-bypass", "yes");
    myHeaders.append("Cookie", "affinity=1733419689.884.141.727550|77d10e9a236642c6efd4b9ec0942933d");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://lalafo.kg/api/search/v3/feed/search?expand=url&per-page=20&category_id=4327&q=Офисные столы&city_id=103184&sort_by=default&price[from]=10000&price[to]=20000&with_feed_banner=true", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));