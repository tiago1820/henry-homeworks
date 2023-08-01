const layout = [
    [
        { type: 'VIP', booked: false },
        { type: 'VIP', booked: true },
        { type: 'VIP', booked: true },
        { type: 'VIP', booked: false },
    ],
    [
        { type: 'NORMAL', booked: false },
        { type: 'VIP', booked: true },
        { type: 'VIP', booked: false },
        { type: 'NORMAL', booked: false },
    ],
    [
        { type: 'NORMAL', booked: false },
        { type: 'NORMAL', booked: true },
        { type: 'NORMAL', booked: true },
        { type: 'NORMAL', booked: false },
    ],
    [
        { type: 'ECONOMIC', booked: true },
        { type: 'NORMAL', booked: true },
        { type: 'NORMAL', booked: true },
        { type: 'ECONOMIC', booked: false },
    ],
    [
        { type: 'ECONOMIC', booked: false },
        { type: 'ECONOMIC', booked: true },
        { type: 'ECONOMIC', booked: false },
        { type: 'ECONOMIC', booked: false },
    ],
];

module.exports = { layout }