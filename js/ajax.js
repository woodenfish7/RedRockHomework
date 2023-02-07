const btn = document.querySelector("button")

btn.addEventListener("click",async()=>{
    const xhr = new XMLHttpRequest();
    xhr.open("post", "http://127.0.0.1:80/study/api.php", true);
    //xhr.setRequestHeader("", "");// 设置请求头
    xhr.send(JSON.stringify({
        username:"派大星",
        content:"红萝卜头"
    }));//发送请求，可携带参数
    xhr.onreadystatechange = () => {
    // 返回存有 XMLHttpRequest 的状态。
    // 从 0 到 4 发生变化。0 未连接 1 打开连接 2 发送请求 3 交互 4 完成交互
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {//返回状态码
          var data = xhr.response;
          console.log(JSON.parse(data));
          return data;
        }
      }
    }


    // const res= await fetch((" https://taskapi.chovrio.club/ "), {
    //     headers: {
    //         "Content-Type":"application:/x-www-form-urlencoded"
    //     },
        
    //   })
    //   const data = await res.json();
    //   console.log(data);
})