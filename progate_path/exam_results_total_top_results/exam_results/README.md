# exam_result
与えられた試験結果のデータから成績優秀者を抽出して表示します。

## 抽出結果
- 2年生のうち、総合得点 上位3名の成績優秀者
- 2年生全員の総合得点の平均点を算出

### 処理の流れ
- results.jsからデータを取得
- filterを使って2年生のみを抽出
- mapで総合得点を計算
- sortで降順に並び替え
- slice(0, 3)でトップ3を抽出
- reduceで平均点を計算し、Math.round で四捨五入
- export{ topResults, averageScore };でデータをエクスポート

## 実行
```bash
node ./src/top_results.js
```

実行結果

```bash
# Top 3 of total points
順位 | 学年 | 名前 | 総合得点
1 | 2 | A | n
2 | 2 | B | n
3 | 2 | C | n
2年生全員の総合得点の平均点: n
```

ex.)
```bash
# Top 3 of total points
1 | 2 | Brian | 237
2 | 2 | Ken the Ninja | 234
3 | 2 | John | 233
average: 208
```

## ファイル構成
exam_result/
├── tests/     
    └── top_results.test.js # プロジェクトのテストファイル。各ページや機能を自動テスト。
├── README.md     # このファイル（プロジェクトの説明）
├── package.json # Node.jsプロジェクトの設定ファイル
└── src/　　# プロジェクトのメインフォルダ。主にこのフォルダに実装。
    └── results.js # 本機能処理用ファイルにインポートする生徒データ。
    └── top_results.js　#本機能メイン実装ファイル