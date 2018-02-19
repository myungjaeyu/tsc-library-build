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

        private items : Item[] = [];


        constructor(items : Item[])
        {
            console.log('service constructor', items);
        }

        add(item : Item) : void
        add(item : string) : void
        add(item : any) : void
        {
            console.log('service add', item);
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