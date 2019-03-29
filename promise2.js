// https://wcc723.github.io/life/2017/05/25/promise/

// 調用 Promise 的方法:
// all()  : 同時執行大量 Promise 物件 && 僅回傳最快回應的結果
// race() : 同時執行大量 Promise 物件 && "全部"完成後回傳 []



// 宣告 promise 建構式
let newPromise1 = new Promise((resolve, reject) => {
  let ran = parseInt(Math.random() * 5000); // 隨機成功或失敗
  setTimeout(function(){
    resolve('隨機時間完成');
  }, ran);
});

let newPromise2 = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve('2 秒完成');
  }, 2000);
});

let newPromise3 = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve('3 秒完成');
  }, 3000);
});

let newPromise4 = new Promise((resolve, reject) => {
  reject('失敗');
});


// 法1
Promise.all([newPromise1, newPromise2, newPromise3, newPromise4]).then((data)=> {
  // 一次性同時回傳成功訊息，回傳以上三個數值的陣列
  console.log(data);
}).catch( err => {
  // 失敗訊息 (立即)
  console.log(err)
});

// 法2
Promise.race([newPromise1, newPromise2, newPromise3]).then((data)=> {
  // 僅會回傳一個最快完成的 resolve 或 reject
  console.log('race', data);
}).catch( err => {
  // 失敗訊息 (立即)
  console.log(err)
});