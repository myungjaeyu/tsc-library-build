namespace todo
{

    export class APP
    {
        private _service : IService;


        constructor(items : Item[])
        {
            this._service = new Service(items);
            console.log('app constructor', this._service);
        }


        public add(item : any)
        {
            this._service.add(item);
        }


        public toggle(id : number)
        {
            this._service.toggle(id);
        }


        public remove(id : number)
        {
            this._service.remove(id);
        }

    }

}