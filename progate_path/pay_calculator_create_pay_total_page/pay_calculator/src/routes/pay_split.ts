import express from "express";

const title = "PAY SPLIT";

// 新しいルーターオブジェクトを作成
// paySplitRouter という変数にルーターを格納して、支払い分割（paySplit）に関するルートを管理する
const paySplitRouter = express.Router();

// paySplitRouter.get("/", ...) → / に対して GET リクエストを受け付ける
paySplitRouter.get("/", (req, res) => {
  // TODO: No error handling in the code yet. We will do that in the next phase.
  if (req.query.coins && req.query.people) {
    // 数値に変換
    const coins = Number(req.query.coins);
    const people = Number(req.query.people);
    const result = Math.ceil(coins / people);
    // res.render('テンプレート名', データ);
      // テンプレート名 → views フォルダ内にある テンプレートファイル（拡張子は省略）
      // データ（オプション） → テンプレートに渡す値（オブジェクト形式）
    res.render("pay_split/result", {coins, people, result, title});
  } else {
    res.render("pay_split/index", {title});
  }
});

export {paySplitRouter};
