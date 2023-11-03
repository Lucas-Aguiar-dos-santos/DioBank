
import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"

/* instancias sem o acrescimo*/
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lucas', 10, false) 
peopleAccount.deposit()
peopleAccount.withdraw()

/*instancia com acrescimo*/
const peopleAccountAcrescimo: PeopleAccount = new PeopleAccount(1, 'Carlos', 2, true)
peopleAccountAcrescimo.deposit()


/*emprestimo da companyAccount*/
const companyAccount: CompanyAccount = new CompanyAccount('Dio', 5, false)
companyAccount.getLoan()

