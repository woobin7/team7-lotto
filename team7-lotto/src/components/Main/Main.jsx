import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header'

import imgLotto from './lotto.png';

const Btn = (props) => {
    const [isHover, setHover] = useState(false);
    const style = useSpring({
        width: '32%', height: '150px', borderRadius: '15px', overflow: 'hidden',
        background: `rgba(120,120,120,${ isHover ? 0.5 : 0.3 })`,
        config: { duration: 100 }
    })

    return (
        <animated.div style={{ ...style }} className="BTNC" onClick={ props.onClick }
        onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }>
            <div>{ props.children }</div>
        </animated.div>
     )
}

const Main = (props) => {
    const styleImg = {
        position: 'absolute', top: '0px', left: '0px',
        height: '200px', width: '193px'
    };
    const styleTxt1 = {
        marginTop: '40px',
        fontSize: '40px', fontWeight: 700,
        fontFamily: 'Do Hyeon, sans-serif'
    }
    const styleTxt2 = {
        fontSize: '18px', fontWeight: 700,
    }

    const history = useNavigate();
    const onClick = (to) => {
        history(to);
    }
    const onClickBtn1 = () => {
        window.location.href = 'https://www.dhlottery.co.kr';
    }

    return (
        <>
            <Header/>
            <div style={{ height: '90px' }}/>
            <div className="MID_FRAME">
                <div style={{ height: '30px' }}>
                    <img src={ imgLotto } alt="LOTTO" style={ styleImg }/>
                </div>
                <div style={{ position: 'absolute', top: '0px', right: '0px', left: '220px' }}>
                    <div style={ styleTxt1 }>로또 번호 추천 프로그램</div>
                    <div style={ styleTxt2 }>당신의 로또 번호를 추천해 드립니다.</div>
                </div>
                <div style={{ height: '200px' }}/>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                    <Btn onClick={ () => onClick("/page1") }>자동 추천 번호</Btn>
                    <Btn onClick={ () => onClick("/page2") }>반자동 추천 번호</Btn>
                    <Btn onClick={ onClickBtn1 }>로또 구매하러 가기</Btn>
                </div>
                <div style={{ height: '80px' }}/>
            </div>
        </>
    )
}

export default Main;