import React from 'react';
//css imports
import shared from '../sharedStyle/Style.module.css';
import classes from './Home.module.css';
//comp imports
import Product from '../../components/product/Product';

const wine = "https://assets.langtons.com.au/images/B0403108.png";
const beer = "https://media.danmurphys.com.au/dmo/product/839496-1.png";
const spirits = "https://media.danmurphys.com.au/dmo/product/907623-1.png";

function Home() {
  return (
    <div className={shared.Page}>
        <div className={classes.Home}>
            <div className={classes.Type}>
                <Product img={wine} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={wine} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={wine} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={wine} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
            </div>
            <div className={classes.Type}>
                <Product img={beer} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={beer} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={beer} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={beer} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
            </div>
            <div className={classes.Type}>
                <Product img={spirits} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={spirits} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={spirits} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
                <Product img={spirits} brand={'testBrand'} details={'sdfsfsfsdf dsfsfsdf dss fsdfdfds'} price={'$56.30'}/>
            </div>
        </div>    
    </div>
  );
}

export default Home;
