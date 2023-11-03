import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{

    private saldoCompany:number = 500
    private emprestimo: number = 1000


    constructor(name:string, accountnumber:number, acrescimo:boolean){
        super(name, accountnumber, acrescimo)
    }

    getLoan = ():void =>{
        if(this.validadeStatus()){
            console.log(this.saldoCompany = this.saldoCompany + this.emprestimo) 
        }   
    }

}