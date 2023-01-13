export class Button {
    constructor(type) {
        this.button     = document.querySelector(`.button--${type}`);
        this.label      = this.button.childNodes[1];
        this.iconStatic = this.button.childNodes[3];
        this.iconLoader = this.button.childNodes[5];
        this.iconCheck  = this.button.childNodes[7];
        this.iconXmark  = this.button.childNodes[9];
    }

    success() {
        this.button.classList.add('button--success');
        this.label.style.display      = 'none';
        this.iconStatic.style.display = 'none';
        this.iconXmark.style.display  = 'none';
        this.iconLoader.style.display = 'none';
        this.iconCheck.style.display  = 'flex';

        setTimeout(() => {

            this.button.classList.remove('button--success');
            this.label.style.display      = 'block';
            this.iconStatic.style.display = 'block';
            this.iconXmark.style.display  = 'none';
            this.iconLoader.style.display = 'none';
            this.iconCheck.style.display  = 'none';

        }, 4000);
    }

    failure() {
        this.button.classList.add('button--failure');
        this.label.style.display      = 'none';
        this.iconStatic.style.display = 'none';
        this.iconXmark.style.display  = 'flex';
        this.iconLoader.style.display = 'none';
        this.iconCheck.style.display  = 'none';

        setTimeout(() => {
            this.button.classList.remove('button--failure');
            this.label.style.display      = 'block';
            this.iconStatic.style.display = 'block';
            this.iconXmark.style.display  = 'none';
            this.iconLoader.style.display = 'none';
            this.iconCheck.style.display  = 'none';
        }, 2000);
    }

    loader() {
        this.iconStatic.style.display = 'none';
        this.iconXmark.style.display  = 'none';
        this.iconLoader.style.display = 'flex';
        this.iconCheck.style.display  = 'none';
    }
}