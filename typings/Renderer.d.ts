declare namespace Todo {
    class Renderer {
        private element : HTMLElement;
        constructor(element: HTMLElement);
        render(items: Item[]): void;
        renderItem(item: Item): HTMLElement;
    }
}