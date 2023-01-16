// function log(obj: string | number): string | number{
//     console.log(obj);
//     return obj;
// }

// function logNum(obj: number): number {
//     console.log(obj);
//     return obj;
// }

// function logString(obj: string): string {
//     console.log(obj);
//     return obj;
// }

interface IHasLength {
    length: number;
}

function log <T extends IHasLength, K> (obj: T, arr: K[]): K[] {
     obj.length
     console.log(obj);
     return arr;
}

log<string, number>("hello", [1, 2, 3, 4, 5])