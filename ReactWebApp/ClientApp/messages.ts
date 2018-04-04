interface IMessage { [index:string] : any }  

const clientResources : IMessage = {
    'en-GB': {
        'counter.title': 'Counter (resourced)',
        'counter.currentcount': 'Current count (resourced): <strong>{mycount}</strong>'
    },
    'fr-FR': {
        'counter.title': 'Compte ',
        'counter.currentcount': 'Compte actuel: <strong>{mycount}</strong>'
    }
};

export default clientResources;