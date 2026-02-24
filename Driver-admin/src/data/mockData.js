export const drivers = [
    { name: 'Senthil Kumar', id: 'DR-9921', vehicle: 'Tata Ace (4-Wheeler)', status: 'Online', rating: 4.8, wallet: 1200 },
    { name: 'Priya Raj', id: 'DR-8801', vehicle: 'Bajaj Auto (3-Wheeler)', status: 'Offline', rating: 4.9, wallet: 4500 },
    // ... paste the rest of your drivers array here
];

export const ordersData = [
    { id: 'TID-8821', type: 'Construction Material', from: 'Anna Nagar', to: 'Velachery', driver: 'Senthil Kumar', status: 'In Progress', priority: 'High', price: '₹1,240', eta: '18 min' },
    // ... paste the rest of your ordersData array here
];

// Add stats data for the Dashboard cards
export const stats = [
    { label: 'Fleet Active', value: '1,242', icon: 'UsersThree', color: 'cyan' },
    { label: 'Live Orders', value: '486', icon: 'Moped', color: 'green' },
    { label: 'Avg ETA', value: '12.4m', icon: 'ClockCountdown', color: 'orange' },
    { label: 'Critical Alerts', value: '03', icon: 'WarningDiamond', color: 'red' },
];