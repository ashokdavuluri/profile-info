export class VariableData {
    static SubscribedEmailList: string[] =[];
    
    static getEmailList(): string[]{
        return this.SubscribedEmailList;
    }

    static addEmail(email: string){
        this.SubscribedEmailList.push(email);
    }
}