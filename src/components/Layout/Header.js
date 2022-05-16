import {Fragment} from 'react';
import mealsImage from '../../assets/kebapcheta.jpg';

const Header = props => {
    return <Fragment>
        <header>
            <h1>
                Meals
            </h1>
            <button>

            </button>
        </header>
        <div>
    <img src={mealsImage} alt='kebapcheta'/>
        </div>
    </Fragment>
} 

export default Header;