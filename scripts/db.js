(function () {
    const db = {
        photos: [
            {
                thumb: 'https://picsum.photos/300/150?image=10',
                image: 'https://picsum.photos/600/300?image=10',
            },
            {
                thumb: 'https://picsum.photos/300/150?image=15',
                image: 'https://picsum.photos/600/300?image=15',
            },
            {
                thumb: 'https://picsum.photos/300/150?image=20',
                image: 'https://picsum.photos/600/300?image=20',
            },
        ]
    };
    window.gallery = window.gallery || {};
    window.gallery.db = db;

})();