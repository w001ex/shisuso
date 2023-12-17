async function main() {
	//""つける
	DrawText("ああ", 300, 500)

	//数字はつけなくても大丈夫
	DrawText(1247809734, 300, 550)

	//色はHEX(16進数）を#から始める
	//https://htmlcolorcodes.com/
	DrawText("いい", 300, 100)
	SetColor("#4EB72E") //緑
	DrawText("ああ", 300, 200)
}
