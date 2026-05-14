export class MyService {

    private static instance: MyService | null = null;

    private constructor(
        private _name: string
    ) {}

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    static createInstance(name:string){
        if(MyService.instance === null){
            console.log('Creando una nueva instancia');
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}


const service1 = MyService.createInstance("Service 1");
const service2 = MyService.createInstance("Service 2");

console.log(service1.name);
console.log(service2.name);

console.log(service1 === service2);