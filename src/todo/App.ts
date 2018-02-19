namespace todo
{

    export class APP
    {
        private _service : IService;


        constructor(items : Item[])
        {
            this._service = new Service(items);
            // console.log('app constructor', this._service);
        }

        public getAll() : Item[]
        {
            return this._service.getAll();
        }

        public add(item : any) : void
        {
            this._service.add(item);
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