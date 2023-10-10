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
                    <div class="thumbnail-item">
                        <span class="label">${resto.city}</span>
                        <img src="${resto.pictureId}" alt="Gambar ${
    resto.name
}"/>
                    </div>
                    <div class="desc">
                        <span class="rating">${resto.rating}</span>
                        <h3 tabindex="7" aria-label="${resto.name +
                            ',' +
                            resto.city}" class="title">${resto.name}</h3>
                        <p id="restoDesc">${restoDesc}</p>
                    </div>
                </div>
            `;
        });
    };

    const hamburgerMenu = () => {
        const hamburger = document.getElementById('hamburger');
        const navLink = document.getElementById('navLinks');
        const skipLink = document.querySelector('.skip-link');

        hamburger.addEventListener('click', () => {
            navLink.classList.toggle('showNav');

            if (navLink.classList.contains('showNav')) {
                const firstNavLink = navLink.querySelector('a');
                if (firstNavLink) {
                    firstNavLink.focus();
                }
            }
        });

        skipLink.addEventListener('click', () => {
            hamburger.focus();
        });
    };

    hamburgerMenu();
    getMenu();
};

export default main;
