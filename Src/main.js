async function main() {
	SetFont("100px arial")
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
	//
	// let a = 1 //変数を作るときは"let"
	// DrawText(a, 300, 300)
	// a = 2
	// DrawText(a, 300, 400)
	// a += 1 //=の左に演算子で変数の中身を計算
	// DrawText(a, 300, 500)

	//ループ
	//cntとカウンターを用意して、cnt < 3を満たす限り、cntを1増やしながらループ
	// for (let cnt = 0; cnt < 3 /* 繰り返す回数*/; cnt++) {
	// 	DrawText(cnt, 300, 300 + cnt * 100)
	// }

	//待て
	//aaaaaaaaaaaaaaaaaaaaaaaaaaaa
	// DrawText("待って", 300, 300)
	// await Sleep(2000) //一時停止、ミリ秒 1000ms -> 1s
	// DrawText("待った", 300, 400)

	// //無限ループ
	// for (let cnt = 0; ; cnt++) {
	// 	//消去
	// 	SetColor("white")
	// 	DrawRect(0, 0, 800, 600)

	// 	SetColor("black")
	// 	DrawText("無限ループ", 300, 300 + cnt) //これだと長引く

	// 	await Sleep(1) //休憩時間、冷却時間
	// }

	// //四角形表示
	// SetColor("red")
	// DrawRect(100, 150, 300, 200)

	// await Sleep(1000)

	// //消えたように見せる
	// SetColor("white")
	// DrawRect(0, 0, 800, 600)
	class Bullet{
		constructor(x,y){
			this.x = x
			this.y = y
		}
	}

	let x = 300
	let y = 300
	let vx = 1
	let vy = 1
	let bullets = []
	let bulletSpeed = 1
	for (let cnt = 0; ; cnt++) {
		//消去
		SetColor("white")
		DrawRect(0, 0, 800, 600)
		
		//player
		SetColor("black")
		DrawText("a", x, y)
		
		//bullets
		SetColor("red")
		for(let i = 0; i < bullets.length; i++){
			DrawCircle(bullets[i].x, bullets[i].y, 10)
		}
		//gene
		if(Math.random() < 0.1){
			let x = Math.random()*800
			bullets.push(new Bullet(x, 0))
		}
		//move
		for(let i = 0; i < bullets.length; i++){
			bullets[i].y += bulletSpeed
		}


		
		if(GetKey("ArrowRight")){
			x += vx
		}
		if(GetKey("ArrowLeft")){
			x -= vx
		}
		if(GetKey("ArrowUp")){
			y -= vy
		}
		if(GetKey("ArrowDown")){
			y += vy
		}
		await Sleep(1) //休憩時間、冷却時間
	}
	
}

