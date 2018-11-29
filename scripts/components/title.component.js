class TitleComponent {
    render() {

        const $el = document.createElement('h1');
        $el.textContent = "Galeria";
        const $app = document.querySelector('#app');
        $app.append($el);
    }

}
module.exports = { TitleComponent };
