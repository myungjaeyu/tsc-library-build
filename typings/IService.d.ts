declare namespace Todo {
    interface IService {
        getAll(): Item[];
        add(content: string): void;
        toggle(id: number): void;
        remove(id: number): void;
    }
}