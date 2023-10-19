async function main() {
    await Sleep(1000);

    DrawText("Hello World!", 100, 100);

    await Sleep(1000);
    
    SetColor("red");
    SetFont("50px serif");
    DrawText("Let's Coding!", 100, 200);

    await Sleep(1000);

    const chick = (await LoadImages(["/Assets/twimoji_chick.png"]))[0];
    DrawImage(chick, 100, 300, 100, 100);

}