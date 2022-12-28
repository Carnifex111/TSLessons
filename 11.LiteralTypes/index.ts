
let lastName: "ivan" = "ivan";
const flag: true | false = true;

// можем поместить только строку "ivan"
//lastName = 'qwerty' //ошибка

function startServer(protocol: 'http' | 'https', port: 3000 | 5000): "Server Start" {
    console.log(`Server started in ${protocol}://server:${port}`)
    return "Server Start"
}

// не работает
//startServer('руддщ', 546545343);

//работает
//startServer('http', 3000);


function createAnimatiom (
    id: string | number, 
    animationName: string, 
    timingFunc: 'ease' | 'ease-out' | 'ease-in' = "ease",
    duration: number,
    iterCount: "infinite" | number
    ) : void {
    //const elem = document.querySelector(`#${id}`) as HTMLElement; // явно говорим что это будет html элемент из дом структуры
    
    //if (elem) {
    console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
    //    elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
    //}
}

createAnimatiom('id', 'name', 'ease-in', 0.3, 'infinite')