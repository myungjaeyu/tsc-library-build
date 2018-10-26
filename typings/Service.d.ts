declare namespace todo {
    class Service implements IService {
        private static _Id;
        private static _genId;
        private items;
        constructor(items: string[]);
        getAll(): Item[];
        add(content: string): void;
        toggle(id: number): void;
        remove(id: number): void;
    }
}