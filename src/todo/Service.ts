namespace todo
{

    export interface Item
    {
        id : number;
        content : string;
        state : ItemState;
    }


    export enum ItemState
    {
        NOT = 0,
        OK  = 1
    }


    export interface IService
    {
        add(item : Item)   : void;
        add(item : string) : void;

        toggle(id : number) : void;

        remove(id : number) : void;
    }


    export class Service implements IService
    {

        private static _Id = 0;
        private static _genId  = () : number => Service._Id ++;

        private items : Item[] = [];


        constructor(items : Item[])
        {
            console.log('service constructor', items);

            if (items) {
                items.forEach(v => this.add(v));
            }

        }

        add(item : Item) : void
        add(item : string) : void
        add(item : any) : void
        {
            console.log('service add', item, Service._genId());
        }


        toggle(id : number) : void
        {
            console.log('service toggle', id);
        }


        remove(id : number) : void
        {
            console.log('service remove', id);
        }

    }

}