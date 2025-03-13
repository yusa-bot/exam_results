import allResults from "./results.js"; // results.js からデータをインポート

// 2年生のデータを抽出
// filterでallResultにアクセス //studentは引数(allResults の各要素が student に入る)
const secondGraders = allResults.filter(student => student.grade === 2);

// 各生徒の総合得点を計算
// .mapでsecondGradersを使って配列を作る
// secondGraders の各生徒データを、name,grade,totalScoreのオブジェクトに変換して、新しい配列を作る
const studentsWithTotalScores = secondGraders.map(student => ({
  name: student.name,
  grade: student.grade,
  totalScore: student.points.Japanese + student.points.Mathematics + student.points.Physics
}));

// 総合得点の降順でソート
// b - a の計算結果が 正の値（> 0）なら、b を a より前にする（降順）
studentsWithTotalScores.sort((a, b) => b.totalScore - a.totalScore);

// 上位3名を取得
// 0, 1, 2 の3つ
const topResults = studentsWithTotalScores.slice(0, 3);

// 平均総合得点を計算（四捨五入）
// array.reduce((累積値, 現在の要素( 配列の各要素)) => { 処理 }, 初期値);
// studentは各要素
const totalSum = studentsWithTotalScores.reduce((sum, student) => sum + student.totalScore, 0);
const averageScore = Math.round(totalSum / secondGraders.length);

console.log("# Top 3 of total points");
topResults.forEach((student, index) => {
  console.log(`${index + 1} | ${student.grade} | ${student.name} | ${student.totalScore}`);
});
console.log(`average: ${averageScore}`);

// 結果をエクスポート
// 他のファイルで topResults と averageScore を使えるようにする
export { topResults, averageScore };