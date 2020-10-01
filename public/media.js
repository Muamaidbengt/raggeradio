
export function Songs() { 
    var id = 0;
    function Song (name, context, imgsrc) { return { name: name, context: context, imgsrc: imgsrc, id: ++id }};

    return [
        new Song('Elvis', 'spotify:artist:43ZHCT0cAZBISjO8DG9PnE', 'elvis.jpg'),
        new Song('Roy Orbinson', 'spotify:artist:0JDkhL4rjiPNEp92jAgJnS', 'roy-orbinson.jpg'),
        new Song('Julmusik', 'spotify:album:4bpM7VVbCVefDLKI0XFvvq', 'jul.jpg'),
        new Song('Jerry Williams', 'spotify:artist:1PJOXqvEZQjdDAV1R5rS07', 'jerry.jpg')
    ];
};