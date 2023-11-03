export abstract class DioAccount {
    private readonly name: string 
    private readonly accountNumber: number
    private balance: number = 1000
    private deposito:number = 500
    private saque:number = 500
    private status:boolean = true
    private acrescimo: boolean
    

    constructor(name:string, accountNumber: number, acrescimo:boolean){
        this.name = name
        this.accountNumber = accountNumber
        this.acrescimo = acrescimo
    }



    getName = (): string =>{
        return this.name
    }


    deposit = ():void => {
        if(this.validadeStatus()){
            if(this.acrescimo){
                console.log(this.deposito + 10)
                console.log(this.balance = this.balance + this.deposito + 10) 
            } else{
                console.log(this.balance = this.balance + this.deposito) 
            } 
        }
    }

    withdraw = ():void => {
        if(this.validadeStatus()){
            if(this.balance > this.saque){
              console.log(this.balance = this.balance - this.saque)   
            } 
        
        }

    }

    getdeposito = ():number => {
        return this.balance
    }   

    getBalance = ():number => {
        return this.deposito
    }   


    validadeStatus = ():boolean => {
        if(this.status){
            return this.status
        }
        throw new Error('conta invalida');
    }
}