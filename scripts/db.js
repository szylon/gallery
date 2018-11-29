(function () {
    const db = {
        photos: [
            {
                thumb: 'https://picsum.photos/300/150',
                image: 'https://picsum.photos/600/300',
            },
            {
                thumb: 'https://picsum.photos/300/150',
                image: 'https://picsum.photos/600/300',
            },
            {
                thumb: 'https://picsum.photos/300/150',
                image: 'https://picsum.photos/600/300',
            },
        ]
    };
    window.gallery = window.gallery || {};
    window.gallery.db = db;

})();