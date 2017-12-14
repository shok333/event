const domain = 'http://server.localhost/web/';

export function ajaxRequest(path, method, data) {

    // let options = null;
    // if(data){
    //     let dataObject = new FormData();
    //     dataObject.append('json', JSON.stringify(data));
    //     options = {
    //         method: method,
    //         mode: 'cors',
    //         body: dataObject,
    //     };
    // }
    // else {
    //     options = {
    //         method: method,
    //         mode: 'cors',
    //     };
    // }
    // return fetch('http://server.localhost/web/'+path, options)
    //     .then(response => response.json())
    //     .then(response => response)
    //     .catch(error => error);

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    if(method === 'GET' && path.indexOf('event') === 0){
        let previous = 0;
        let next = 1
        let split = path.split('?');
        if(split.length>1){
            let split2= split[1].split('&');
            next = +split2[1].split('=')[1];
        }
        if(next > 100){
            return [];
        }

        let results = [];

        for( let i=next; i<next+9;i++){
           if(randomInteger(0,1) === 1){
               results.push(
                   {
                       id: i,
                       photo: '/test.jpg',
                       title: `title ${i}`,
                       review: {
                           id: i,
                           rating: randomInteger(1,5),
                           text: 'Text.'
                       }
                   }
               )
           }
           else {
               results.push(
                   {
                       id: i,
                       photo: '/test2.jpg',
                       title: `title ${i}`
                   }
               )
           }
        }
        let response = {
            count: 10,
            next: next+9,
            previous: next-1,
            results: results
        }
        return response;
    }

    if(method === 'POST' && path.indexOf('reviews') === 0){
        return {
            eventId: data.eventId,
            review: {
                id: 100500,
                rating: data.rating,
                text: data.text
            }
        }
    }

    if(method === 'PATCH' && path.indexOf('reviews') === 0){
        if(data.rating){
            return {
                eventId: data.eventId,
                review: {
                    id: 100500,
                    rating: data.rating,
                    text: 'Text.'
                }
            }
        }
        if(data.text){
            return {
                eventId: data.eventId,
                review: {
                    id: 100500,
                    rating: randomInteger(1,5),
                    text: data.text,
                }
            }
        }
    }
}