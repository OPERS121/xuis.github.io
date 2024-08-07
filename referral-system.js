let tg = window.Telegram.WebApp;
// Использование:
const userId = `${tg.initDataUnsafe.user.id}`;

function initReferralSystem(userId) {
    // Вспомогательная функция для генерации реферальной ссылки
    function generateReferralLink(userId) {
        return `https://t.me/BirdsTonBot?start=${userId}`;
    }

    // Вспомогательная функция для получения количества рефералов из localStorage
    function getReferralCount(userId) {
        const count = localStorage.getItem(`referralCount_${userId}`);
        return count ? parseInt(count, 10) : 0;
    }

    // Вспомогательная функция для увеличения количества рефералов
    function incrementReferralCount(userId) {
        const currentCount = getReferralCount(userId);
        localStorage.setItem(`referralCount_${userId}`, (currentCount + 1).toString());
    }

    // Генерация реферальной ссылки для текущего пользователя
    const referralLink = generateReferralLink(userId);

    // Получение текущего количества рефералов
    const referralCount = getReferralCount(userId);

    // Создание HTML-контента
    const htmlContent = `
        <div id="referralSystem">
            <h2>Реферальная система Telegram</h2>
            <p>Ваша реферальная ссылка: <strong id="referralLink">${referralLink}</strong></p>
            <p>Ваше количество рефералов: <span id="referralCount">${referralCount}</span></p>
            <button id="copyLink">Скопировать реферальную ссылку</button>
            <button id="simulateReferral">Симулировать реферал</button>
        </div>
    `;

    // Добавление HTML-контента в элемент с id "app"
    document.getElementById('app').innerHTML = htmlContent;

    // Добавление обработчиков событий
    document.getElementById('copyLink').addEventListener('click', () => {
        navigator.clipboard.writeText(referralLink).then(() => {
            alert('Реферальная ссылка скопирована в буфер обмена!');
        });
    });

    document.getElementById('simulateReferral').addEventListener('click', () => {
        incrementReferralCount(userId);
        const newCount = getReferralCount(userId);
        document.getElementById('referralCount').textContent = newCount.toString();
        alert('Реферал смоделирован! Количество увеличилось.');
    });
}