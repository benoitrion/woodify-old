
function getParcels() {
    return [
        { 
            id: 'haut-courroi-A834', 
            title: 'SAINT-VINCENT "Haut du Corroi" - A834',
            date: '20110510', 
            cadastralNb: 'A834', 
            type:'Bois', 
            seller:'Seller 1', 
            area: 21.4, 
            price: 3581, 
            notaryFees: 447.68, 
            expenses: 4028.63,
            revenues: 0,
            tasks: [
                {
                    id:"task1",
                    date: '19-03-2019',
                    description: 'Elagage'
                },
                {
                    id:"task2",
                    date: '20-03-2019',
                    description: 'Debrousaillage'
                }
            ]
        },
        { 
            id: 'au-chenois-E834B7', 
            title: 'SAINT-VINCENT "Au Chenois" - E834B7', 
            date: '20101103', 
            cadastralNb: 'E834B7', 
            type:'Bois', 
            seller:'Seller 2', 
            area: 538.3, 
            price: 63000, 
            notaryFees: 7875, 
            expenses: 95875,
            revenues: 0,
            tasks: [
                {
                    id:"task3",
                    date: '19-03-2019',
                    description: 'Elagage'
                },
                {
                    id:"task4",
                    date: '20-03-2019',
                    description: 'Debrousaillage'
                }
            ]
        },
    ]
}
export default getParcels