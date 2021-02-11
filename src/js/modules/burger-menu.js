const burgerMenu = () => {
    function bindBurgerMenu(btnSelector) {
        const burgerBtn = document.querySelector(`.${btnSelector}`);
        const nav = document.querySelector(".nav");
        const headerWrapper = document.querySelector(".main-header__wrapper");

        burgerBtn.addEventListener('click', (evt) => {
            evt.preventDefault();
            nav.classList.toggle('nav--opened');
            burgerBtn.classList.toggle('btn-burger--pressed');
            headerWrapper.classList.toggle("main-header__wrapper--position-right");
            }
        )
    }

    bindBurgerMenu('btn-burger');
}

export default burgerMenu;