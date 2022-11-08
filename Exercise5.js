let data1 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo1') 
        ans1.innerHTML = "Initialiging Hack Program......"
    }, 2000);
}
let data2 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo2') 
        ans1.innerHTML = "Hacking User device......"
    }, 3000);
}
let data3 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo3') 
        ans1.innerHTML = "Device is stored in Data base"
    }, 4000);
}
let data4 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo4') 
        ans1.innerHTML = "Hacking User All Social media......"
    }, 5000);
}
let data5 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo5') 
        ans1.innerHTML = "All Data Stored in Database"
    }, 6000);
}
let data6 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo6') 
        ans1.innerHTML = "Your Data is sending to Hacker man server office....."
    }, 9000);
}
let data7 = async () =>{
    setTimeout(() => {
       let ans1 =  document.getElementById('demo7') 
        ans1.innerHTML = "Divice is Hacked Data hase been Send Your hacked :)"
    }, 11000);
}

let call = async () =>{
    let call1 =  await data1();
    let call2 =  await data2();
    let call3 =  await data3();
    let call4 =  await data4();
    let call5 =  await data5();
    let call6 =  await data6();
    let call7 =  await data7();
}
call()