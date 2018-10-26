namespace Todo
{

    export class Service implements IService
    {

        private static _Id = 1;
        private static _genId  = () : number => Service._Id ++;

        private items : Item[] = [];


        constructor(items : string[])
        {

            if (items) 
                items.forEach(v => this.add(v));
        }


        getAll() : Item[]
        {

            return this.items;
        }


        add(content : string) : void
        {

            if(!content) 
                throw 'invalid param';

            let item : Item = {
                id      : Service._genId(),
                content : content,
                state   : false
            };


            this.items.push(item);
        }


        toggle(id : number) : void
        {

            let item = this.items.filter(v => v.id === id)[0];

            if (item)
                item.state = !item.state;

            else throw 'invalid param';
        }


        remove(id : number) : void
        {

            if(!id) 
                throw 'invalid param';

            this.items = this.items.filter(v => v.id !== id);
        }

    }

}