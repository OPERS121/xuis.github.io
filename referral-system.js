let lastId = 0;

function generateIncrementalId() {
    let usercard = document.getElementById("usercard"); //получаем блок usercard 

    let profName = document.createElement('p'); //создаем параграф
    profName.innerText = `${tg.initDataUnsafe.user.first_name}
    ${tg.initDataUnsafe.user.last_name}
    ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
    //выдем имя, "фамилию", через тире username и код языка
    usercard.appendChild(profName); //добавляем 
 
    let userid = document.createElement('p'); //создаем еще параграф 
    userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
    usercard.appendChild(userid); //добавляем
}

// Использование:
const userPromo = generateIncrementalId();

let tg = window.Telegram.WebApp;


function initReferralSystem(userPromo) {
    // Вспомогательная функция для генерации реферальной ссылки
    function generateReferralLink(userPromo) {
        return `https://t.me/BirdsTonBot?start=${userPromo}`;
    }

    // Вспомогательная функция для получения количества рефералов из localStorage
    function getReferralCount(userPromo) {
        const count = localStorage.getItem(`referralCount_${userPromo}`);
        return count ? parseInt(count, 10) : 0;
    }

    // Вспомогательная функция для увеличения количества рефералов
    function incrementReferralCount(userPromo) {
        const currentCount = getReferralCount(userPromo);
        localStorage.setItem(`referralCount_${userPromo}`, (currentCount + 1).toString());
    }

    // Генерация реферальной ссылки для текущего пользователя
    const referralLink = generateReferralLink(userPromo);

    // Получение текущего количества рефералов
    const referralCount = getReferralCount(userPromo);

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
        incrementReferralCount(userPromo);
        const newCount = getReferralCount(userPromo);
        document.getElementById('referralCount').textContent = newCount.toString();
        alert('Реферал смоделирован! Количество увеличилось.');
    });
}