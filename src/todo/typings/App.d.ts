declare namespace todo {
    class APP {
        private _service : IService;
        constructor(items: Item[]);
        getAll(): Item[];
        add(item: any): void;
        toggle(id: number): void;
        remove(id: number): void;
    }
}