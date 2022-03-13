class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) { }
}

function solution(tickets: string[], criteria: string) {
    let ticketsArr: Array<Ticket> = [];

    tickets.forEach(element => {
        let [destination, price, status] = element.split('|');

        let ticket = new Ticket(destination, Number(price), status);
        ticketsArr.push(ticket);
    });

    switch (criteria) {
        case 'destination':
            ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price': ticketsArr.sort((a, b) => a.price - b.price);
            break;
        case 'status': ticketsArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return ticketsArr;
}

solution([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');