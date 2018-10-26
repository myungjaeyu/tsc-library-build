declare namespace Todo {
    class APP {
        private _service : IService;
        private _renderer : Renderer;
        constructor(element: HTMLElement, items: string[]);
        getAll(): Item[];
        add(item: any): void;
        toggle(id: number): void;
        remove(id: number): void;
        render(): void;
        private _initialize(element);
    }
}