const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// Имитация данных игроков
let players = [
    { name: "Игрок 1", balance: 1000 },
    { name: "Игрок 2", balance: 1500 },
    { name: "Игрок 3", balance: 800 },
    { name: "Игрок 4", balance: 2000 },
    { name: "Игрок 5", balance: 1200 }
];

wss.on('connection', function connection(ws) {
    console.log('Новое подключение');

    // Отправляем начальные данные при подключении
    ws.send(JSON.stringify(players));

    // Имитация обновления данных каждые 5 секунд
    const interval = setInterval(() => {
        // Обновляем баланс случайного игрока
        const playerIndex = Math.floor(Math.random() * players.length);
        players[playerIndex].balance += Math.floor(Math.random() * 100) - 50;

        // Сортируем игроков по балансу
        players.sort((a, b) => b.balance - a.balance);

        // Отправляем обновленные данные всем подключенным клиентам
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(players));
            }
        });
    }, 5000);

    ws.on('close', () => {
        console.log('Соединение закрыто');
        clearInterval(interval);
    });
});

console.log('WebSocket сервер запущен на порту 8080');