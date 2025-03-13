import express from "express";
import logger from "morgan";
import expressLayouts from "express-ejs-layouts";
import path from "node:path";
import {homeRouter} from "./routes/home";
import {paySplitRouter} from "./routes/pay_split";
import {payTotalRouter} from "./routes/pay_total";

// app.use():Express のミドルウェアを適用

const app = express();
//  Express.jsで"view engine"(テンプレートエンジン)を、EJSに設定
app.set("view engine", "ejs");
// EJSで使う「ビュー（HTML）」の保存場所を設定
  // path.join：path.resolve(ルートディレクトリ)src/views)＋src/views
app.set("views", path.join(path.resolve(), "src/views"));
app.use(expressLayouts);// EJS のレイアウト機能を提供するミドルウェア

app.use(logger("dev"));// ロギングミドルウェア(サーバーへのリクエストをログに記録する)
app.use(express.urlencoded({extended: false}));// URLエンコードされたデータを解析するミドルウェア　ネスト不可
app.use(express.static("public"));// public/フォルダにURLで直接アクセス

app.use("/", homeRouter);
// Express.js ではクライアント（ブラウザやAPIリクエスト）からのアクセスに応じて処理を振り分ける
// /pay-split へのリクエストは paySplitRouter に処理を任せる
app.use("/pay-split", paySplitRouter);
app.use("/pay-total", payTotalRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
