interface IUser {
    login: string;
    password: string;
    fullName?: {
        lastName?: string;
        firstName?: string;
    }
}

const user: IUser = {
    login: 'Ivan2311',
    password: 'qwerty123!'
}

function printUser(obj: IUser, db?: string): void {
    console.log(obj, db?.toLowerCase());
}