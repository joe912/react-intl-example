interface IMessage { [index:string] : any }  

const clientResources : IMessage = {
    'en-GB': {
        'counter.title': 'Counter (resourced)',
        'counter.currentcount': 'Current count (resourced): <strong>{mycount}</strong>',
        'counter.placeholder': 'This is resourced placeholder ...',
    },
    'fr-FR': {
        'counter.title': 'Compte ',
        'counter.currentcount': 'Compte actuel: <strong>{mycount}</strong>',
        'counter.placeholder': "C'est une placeholder resourced ...",
    }
};

export default clientResources;