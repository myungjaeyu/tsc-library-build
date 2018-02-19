namespace todo
{

    export class APP
    {
        private _service : IService;


        constructor(items : string[])
        {
            this._service = new Service(items);
        }


        public getAll() : Item[]
        {
            return this._service.getAll();
        }


        public add(content : string) : void
        {
            this._service.add(content);
        }


        public toggle(id : number) : void
        {
            this._service.toggle(id);
        }


        public remove(id : number) : void
        {
            this._service.remove(id);
        }

    }

}