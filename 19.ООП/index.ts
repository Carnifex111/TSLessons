class Student {
    fullname: string;
    group: string;

    protected printName() {
        if(this.fullname.length > 5){
            console.log(this.fullname.toLocaleUpperCase())
        }
    }

    returnStudent(fullname: string, group: string): string {
        return fullname + " " + group
    }

    constructor(fullname: string, group: string){
        this.fullname = fullname;
        this.group = group;
    }

    
}

class StudentPerformance extends Student{
    private _gradePointAverage: number;

    get gradePointAverage() {
        return this._gradePointAverage
    }

    set gradePointAverage(point: number) {
        this._gradePointAverage = point + 1;
    }

    override returnStudent(fullname: string, group: string): string {
        console.log(this._gradePointAverage)
        return `hello ${fullname}`
    }
    
    constructor(fullname: string, group: 
        string, gradePointAverage: number) {
        super(fullname, group);
        this._gradePointAverage = gradePointAverage;
        this.printName();
    }
}


interface IPrintError {
    printError: (s: string) => void
}

class ErrOne implements IPrintError {
    public printError(s: string) {
        console.log(s)
    }

    private printName() {
        console.log(22)
    } 
}

abstract class CatName{
    printName(s: string) {
        console.log(s)
    }

    abstract printAge(age: number): number;
}


class ExtendCatName extends CatName {
    printAge(age: number): number {
        return age
    }

}

const cat = new ExtendCatName();
cat.printName('Барсик')

class Animal {
    name: string;
}

class Cat {
    name: string;
    age: number;
}