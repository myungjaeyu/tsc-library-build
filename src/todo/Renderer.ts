namespace Todo
{

    export class Renderer
    {

        private element : HTMLElement;


        constructor(element : HTMLElement)
        {
            this.element = element;
        }

        
        render(items : Item[]) : void
        {
            this.element.innerHTML = '';

            items.reduce( (elem, v) => {
                
                elem.appendChild( this.renderItem(v) );

                return elem;
            }, this.element);
        }


        renderItem(item : Item) : HTMLElement
        {
            let elem = document.createElement('div');

            elem.dataset.itemId = item.id.toString();
            elem.innerHTML = `
                ${ item.id } -
                ${ item.content }
                ${ item.state }
                <button class='Item__toggle'>state</button>
                <button class='Item__remove'>remove</button>
            `;
            
            elem.className = 'Todo__Item';
            return elem;
        }

    }

}