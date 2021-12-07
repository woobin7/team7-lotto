import { Link } from 'react-router-dom';

import imgLogo from './logo.png';

const Header = (props) => {
    const style = {
        position: 'fixed', top: '0px', left: '0px', zIndex: '100',
        width: '100%', height: '60px', overflow: 'hidden',
        background: 'rgb(17,17,17)'
    };
    const styleLogo = {
        height: '40px', margin: '10px', marginLeft: '20px', float: 'left'
    }
    const styleTxt1 = {
        float: 'left', fontSize: '17px', fontWeigh: 300, color: 'white',
        height: '60px', lineHeight: '60px'
    }
    const styleTxt2 = {
        float: 'right', fontSize: '17px', fontWeigh: 300, color: 'white',
        height: '60px', lineHeight: '60px', marginRight: '20px'
    }

    return (
        <div style={ style }>
            <Link to="/">
                <img src={ imgLogo } alt="숭실대학교" style={ styleLogo }/>
                <div style={ styleTxt1 }>AI와 데이터사회 7조</div>
            </Link>
            <div style={ styleTxt2 }>천우빈 정지운 정서진 최재원</div>
        </div>
    )
}

export default Header;