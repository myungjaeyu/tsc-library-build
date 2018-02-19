namespace todo
{

    export interface Item
    {
        id : number;
        content : string;
        state : boolean;
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

            if (items) 
                items.forEach(v => this.add(v));
        }


        add(item : Item) : void
        add(item : string) : void
        add(item : any) : void
        {
            console.log('service add', item, Service._Id);

            let _item : Item = {
                id      : Service._genId(),
                content : null,
                state   : item.state ? true : false
            };

            if (typeof item === 'string')
                _item.content = item;

            else if (typeof item.content === 'string') 
                _item.content = item.content;

            else throw 'invalid param';


            this.items.push(_item);
        }


        toggle(id : number) : void
        {
            console.log('service toggle', id);

            let item = this.items.filter(v => v.id === id)[0];

            if (item)
                item.state = !item.state;

            else throw 'invalid item';
        }


        remove(id : number) : void
        {
            console.log('service remove', id);

            if(!id) 
                throw 'invalid item';

            this.items = this.items.filter(v => v.id !== id);
        }

    }

}