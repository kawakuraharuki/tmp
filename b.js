// // 問題:
// // asyncFunctionExampleを実装し、2秒後に文字列 'Done!' を返すようにしてください。
// // 以下のコードのコメントを外すと、期待される出力を確認できます。
// async function asyncFunctionExample() {
//     return await new Promise((resolve) => setTimeout(() => resolve('Done!'), 2000));
// }

// asyncFunctionExample()
// // コードを実装したら、以下の行のコメントを外してテストしてみてください。
// // asyncFunctionExample().then(console.log); // 'Done!' が2秒後にコンソールに表示されるべきです。





// // 問題:
// // asyncFunctionWithErrorを実装し、何らかの処理を行ったあと、エラーをthrowするようにしてください。
// // try/catchブロックを使用してエラーを処理する asyncWithTryCatch() 関数を実装します。
// // スローされたエラーはキャッチしてコンソールに表示してください。

// async function asyncFunctionWithError() {
//     throw new Error('Error');
// }

// async function asyncWithTryCatch() {
// try {
//     await asyncFunctionWithError();
// } catch (error) {
//     console.error('Caught error:', error);
// }
// }

// asyncWithTryCatch()


// // asyncWithTryCatch(); // 'Caught error:' と共にエラーメッセージが表示されるべきです。


// // 問題:
// // 2つの非同期関数 asyncFunc1 と asyncFunc2 を作成します。それぞれ2秒後と3秒後にそれぞれの完成メッセージを返します。
// // 両方の非同期関数を実行し、結果をコンソールに表示する waitBothFunctions 関数を実装してください。

// async function asyncFunc1() {
//     await new Promise((r) => setTimeout(r, 2000));
//     return 'Function 1 Done!';
// }

// async function asyncFunc2() {
//     await new Promise((r) => setTimeout(r, 3000));
//     return 'Function 2 Done!';
// }

// async function waitBothFunctions() {
//     const result1 = asyncFunc1();
//     const result2 = asyncFunc2();
    
//     const allPromises = Promise.all([result1, result2]);   
//     const result = await allPromises;  
//     console.log(result);
// }

// waitBothFunctions()

// // waitBothFunctions(); // 両方の関数の結果が順番に表示されるべきです。

// // 以下の関数を実装してください
// // x2sec:
// //   2秒後に文字 'X' を返す非同期関数 
// // y5sec:
// //   5秒後に文字 'Y' を返す非同期関数 
// // main:
// //   x2sec と y5sec を使用しプログラムを開始してから
// //   2秒後に'X'、プログラムを開始してから5秒後に'Y'を出力する非同期関数
// //   なを 出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること
// async function x2sec() {
//     await new Promise((r) => setTimeout(r, 2000));
//     return 'X';
// }

// async function y5sec() {
//     await new Promise((r) => setTimeout(r, 5000));
//     return 'Y';
// }

// async function main() {
//     const result1 = await x2sec();
//     console.log(result1);

//     const result2 = await y5sec();
//     console.log(result2);
// }

// main();

// コードを実装したら、以下の行のコメントを外してテストしてみてください。
// main()

// 以下の関数を実装してください
// x2sec:
//   2秒後に文字 'X' を返す非同期関数
// y5sec:
//   5秒後に文字 'Y' を返す非同期関数
// main:
//   x2sec と y5sec を使用しプログラムを開始してから
//   5秒後に'X'を出力し、プログラムを開始してから6秒後に 'Y'を出力する。
//   その2秒後に 'Done' を出力する
//   なを 出力する文字 'X', 'Y' はx2secとy5secの戻り値を使用すること



async function x2sec() {
    return await new Promise((resolve) => setTimeout(() => resolve("X"), 2000));
}

async function y5sec() {
return await new Promise((resolve) => setTimeout(() => resolve("Y"), 5000));
}

async function main2() {
const xPromise = x2sec();
const yPromise = y5sec();

setTimeout(async () => {
    const x = await xPromise;
    console.log(x); 
}, 3000);

setTimeout(async () => {
    const y = await yPromise;
    console.log(y); 
}, 1000);


setTimeout(async () => {
    await console.log("Done");
}, 8000);
}


main2();





/*
100個の index*100ミリ秒後に その関数のindex を返す非同期関数の配列を作成し
例)
  - 0個目は 100ミリビョウ後に 0を返す
  - 50個目は 5000ミリビョウ後に 50を返す
それら全て同時に実行する関数 paralleMain 関数と
それら全てを順番に同期的に実行する  serialMain 関数を作成してください
*/

// function alugorithm(index) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(index);
//         }, index * 100);
//     });
// }

// async function parallelMain() {
//     const promises = Array.from({ length: 100 }, (_, index) => alugorithm(index));
//     const results = await Promise.all(promises);
//     console.log(results);
// }

// parallelMain()


// async function serialMain() {
//     const results = [];
//     for (let i = 0; i < 100; i++) {
//         const result = await alugorithm(i);
//         results.push(result);
//         console.log(results);
//     }
// }

// serialMain()


/*
任意の非同期関数の配列asyncFunctionsと数値nを受け取り、
nミリ秒間隔で受け取った非同期関数を実行する関数を実装してください
*/


// async function intervalExecuter(asyncFunctions, n) {
//     for (const asyncFunction of asyncFunctions) {
//         await asyncFunction();
//         await new Promise((resolve) => setTimeout(resolve, n));
//     }
// }


// // 実行例
// const waiter = async (arg, ms) => {
//     await new Promise((r) => setTimeout(r, ms))
//     console.log(arg);
// }
// intervalExecuter(
//     [
//         () => waiter('a', 2000),
//         () => waiter('b', 3000),
//     ],
//     1000
// );
// プログラム開始から2秒後に 'a',
// プログラム開始から6秒後に 'b'
// と出力されるはずです。