fetch("data.json")
.then((response) =>response.json())
.then((data) =>{
  console.log(data.section);

    console.log(data.section[0].h2);
    document.querySelector(".title").innerHTML = data.section[0].h2;
    console.log(data.section[0].h5);
    document.querySelector(".projec").innerHTML = data.section[0].h5;
    console.log(data.section[1].h2);
    document.querySelector(".title1").innerHTML = data.section[1].h2;
    console.log(data.section[1].h5);
    document.querySelector(".tech-proj").innerHTML = data.section[1].h5;
    console.log(data.section[2].h2);
    document.querySelector(".threadd").innerHTML = data.section[2].h2;
    console.log(data.section[2].h5);
    document.querySelector(".threadbuild").innerHTML = data.section[2].h5;
    console.log(data.section[3].h2);
    document.querySelector(".struct").innerHTML = data.section[3].h2;
    console.log(data.section[3].h5);
    document.querySelector(".struct-descp").innerHTML = data.section[3].h5;
    console.log(data.section[4].h1);
    document.querySelector(".4sa-method").innerHTML = data.section[4].h1;
    console.log(data.section[4].h2);
    document.querySelector(".4sa-descp").innerHTML = data.section[4].h2;
    const iframe =(document.getElementById('vedio').src =
    data.selection[1].ylink);
    console.log(data.section[4].a);
    document.querySelector(".intro").innerHTML = data.selection[4].a;
 

  const contentdiv = document.getElementById("content");
});
const contentdiv = document.getElementById("content");
