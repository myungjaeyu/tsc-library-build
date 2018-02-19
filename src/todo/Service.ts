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
            console.log('service add', item, Service._Id);

            let _item : Item = {
                id      : Service._genId(),
                content : null,
                state   : ItemState.NOT
            };

            if(typeof item === 'string')
                _item.content = item;

            else if (typeof item.content === 'string') 
                _item.content = item.content;

                if(typeof item.state === 'number')
                    _item.state = item.state ? ItemState.OK : ItemState.NOT;

            else throw 'invalid param';


            this.items.push(_item);
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