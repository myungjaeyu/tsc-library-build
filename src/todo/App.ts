namespace Todo
{

    export class APP
    {
        private _service : IService;
        private _renderer : Renderer;


        constructor(element : HTMLElement, items : string[])
        {
            this._renderer = new Renderer(element);
            this._service = new Service(items);

            this._initialize(element);
        }


        public getAll() : Item[]
        {
            return this._service.getAll();
        }


        public add(content : string) : void
        {
            this._service.add(content);
            this.render();
        }


        public toggle(id : number) : void
        {
            this._service.toggle(id);
            this.render();
        }


        public remove(id : number) : void
        {
            this._service.remove(id);
            this.render();
        }


        public render() : void
        {
            this._renderer.render( this._service.getAll() );
        }


        private _initialize(element : HTMLElement) : void
        {

            element.addEventListener('click', (e : any) => {
                if (e.target.parentElement.className === 'Todo__Item')
                    this[e.target['className'].replace('Item__', '')]( +e.target.parentElement.dataset.itemId );
            });

        }

    }

}