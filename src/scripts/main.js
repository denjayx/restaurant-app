import { baseUrl } from '../utils/constanta';
const main = () => {
    const getMenu = async () => {
        try {
            const response = await fetch(baseUrl);
            const responseJson = await response.json();
            if (responseJson.error) {
                console.log('Gagal Memuat Data');
            } else {
                showMenu(responseJson.restaurants);
            }
        } catch (error) {
            console.log(`Error : ${error}`);
        }
    };

    const showMenu = restos => {
        const restoCards = document.getElementById('restoCards');

        restos.forEach(resto => {
            const restoDesc =
                resto.description.length > 50
                    ? resto.description.substr(0, 100) + ' ...'
                    : resto.description;
            restoCards.innerHTML += `
                <div id="restoItem" class="resto-item">
                    <img src="${resto.pictureId}" />
                    <div class="desc">
                        <span class="rating">${resto.rating}</span>
                        <h3>${resto.name}</h3>
                        <p id="restoDesc">${restoDesc}</p>
                    </div>
                </div>
            `;
        });
    };

    getMenu();
};

export default main;
