//задаем текст
let а='Как ни тяжело было княжне Марье выйти из того мира уединенного созерцания, в котором она жила до сих пор, как ни жалко и как будто совестно было покинуть Наташу одну, - заботы жизни требовали ее участия, и она невольно отдалась им';
//считаем число букв
function count (b:string):number {
    let n: number = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] == "о" || b[i] == "О") {
            n++;
        }
    }
    return n;
}
console.log(count(а));