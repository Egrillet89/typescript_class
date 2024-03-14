//npm init para inizializar el server


console.log("hola desde ts")

let log = console.log;

let nombre = "foo";
log(nombre)

//alias_variable : datatype + valor

let nome:string = "foozi";
let age:number = 35;
let vivo:boolean = true;
let skills:(string | number) [] = ["js","python","sql","aws", 1000]

log(nome,age,vivo,skills)

function fn(name:string,age:number): void{
    log("function fn: ", name,age)
}

let r = fn("eleazar",35)
log(r)

function fu(name:string, age:number): string{
    return nombre
}

let w:string = fu("foo",20)
log(w)


function fo(name:string, age:number): number{
    return age
}

let a:number = fo("foo",20)
log(a)


function fe(name:string, age:number): () => number{
    return function(){
        return age
    }
}

let e:any = fe("foo",55);
log(e())


function fi(): (age:number) => (string|number)[]{
    return (age) => {
        return ["hod",33]
    }
}

let j:any = fi();
log(j(age))


//implementar una interfaz con una clase
interface Helper{
    server: string,
    database: string,
    startServer:()=>void
}

class Computer{
    port:number;
    constructor(port:number){
        this.port = port;
    }
}

class init extends Computer implements Helper{
    server:string;
    database:string;

    constructor(port:number, server:string, database:string){
        super(port);
        this.server = server;
        this.database = database;
    }

    startServer(){
        log("start server")
    }
}

let s = new init(5000,"aws server","products-database");
s.startServer()

