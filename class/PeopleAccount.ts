import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
    doc_id: number

    constructor(doc_id: number, name:string, accountnumber:number, acrescimo:boolean){
        super(name, accountnumber, acrescimo)
        this.doc_id = doc_id
    }
}