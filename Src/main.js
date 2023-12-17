async function main() {
	// //""つける
	// DrawText("ああ", 300, 500)

	// //数字はつけなくても大丈夫
	// DrawText(1247809734, 300, 550)

	// //色はHEX(16進数）を#から始める
	// //https://htmlcolorcodes.com/
	// DrawText("いい", 300, 100)
	// SetColor("#4EB72E") //緑
	// DrawText("ああ", 300, 200)

	//計算
	// DrawText(1 + 1, 300, 300)
	// DrawText(1 - 1, 300, 350)
	// DrawText(1 * 1, 300, 400)
	// DrawText(1 / 2, 300, 450)
	// DrawText(3 % 2, 300, 500)

	//変数
	SetFont("100px arial")
	let a = 1 //変数を作るときは"let"
	DrawText(a, 300, 300)

	a = 2
	DrawText(a, 300, 400)

	a += 1 //=の左に演算子で変数の中身を計算
	DrawText(a, 300, 500)
}
