import header_classes from './header.module.css';
import logo from './img/logotype_2.png';

const Header = function () {
    const activ = header_classes.activ + " " + header_classes.button;
    return (
        <header
            className={header_classes.header}>
            <div className= {header_classes.container}>
                <img
                    className={header_classes.img}
                    src={logo}
                    alt='header__logo__img'
                />

            </div>
            <div className={header_classes.menu}>
                <ul>
                    <li className={header_classes.button}>Мой профиль</li>
                    <li className={header_classes.button}>Новости</li>
                    <li className={header_classes.button}>Сообщения</li>
                    <li className={activ}>Друзья</li>
                    <li className={header_classes.button}>Настройки</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;