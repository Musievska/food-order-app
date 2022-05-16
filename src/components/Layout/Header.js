import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/kebapcheta.jpg';
import classes from './Header.modules.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>
                Meals
            </h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='kebapcheta' />
        </div>
    </Fragment>
}

export default Header;