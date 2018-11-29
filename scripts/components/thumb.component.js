(function () {


    class Thumb {
        constructor(url) {
            EventEmitter.mixin(this);
 
            this.url = url;
        }
 
        render() {
            const $el = document.createElement('img');
            const $app = document.querySelector('#app');
 
            $el.addEventListener('click', () => {
                this.trigger('click');
            });
 
            $el.setAttribute('src', this.url);
            $app.append($el);
        }
 
    }
 
    window.gallery = window.gallery || {};
    gallery.Thumb = Thumb;
 })();