import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useParams, Link } from 'react-router-dom';
import Header from '../Header/Header'

const getLotto = (list) => {
    while (list.length < 6){
        const num = Math.floor(Math.random() * 45) + 1;
        if(list.indexOf(num) === -1) list.push(num);
    }
    list.sort((x,y) => x-y);
    return list;
}
const getLottoList = (x) => {
    const lists = [];
    for(let i=0; i<x; i++) lists.push(getLotto([]));
    return lists;
}

const ListLine = (props) => {
    const style = useSpring({
        height: '60px', position: 'relative',
        borderBottom: '1px solid rgb(200,200,200)'
    })
    const styleTxt1 = {
        position: 'absolute', top: '0px', left: '20px',
        height: '60px', lineHeight: '60px'
    }
    const styleB = {
        position: 'absolute', top: '10px',
        height: '40px', width: '40px',
        background: 'gray',  borderRadius: '20px'
    }
    const styleBI = {
        position: 'absolute', top: '8px', left: '8px',
        width: '24px', height: '24px',
        background: 'white', borderRadius: '10px',
        lineHeight: '24px', textAlign: 'center'
    }
    return (
        <animated.div style={ style }>
            <div style={ styleTxt1 }>{ props.num }</div>
            <div style={{ ...styleB, left: '70px', background: 'rgb(255,76,76)' }}>
                <div style={{ ...styleBI }}>{ props.list[0] }</div>
            </div>
            <div style={{ ...styleB, left: '120px', background: 'rgb(255,142,79)' }}>
                <div style={{ ...styleBI }}>{ props.list[1] }</div>
            </div>
            <div style={{ ...styleB, left: '170px', background: 'rgb(252,209,83)' }}>
                <div style={{ ...styleBI }}>{ props.list[2] }</div>
            </div>
            <div style={{ ...styleB, left: '220px', background: 'rgb(60,188,255)' }}>
                <div style={{ ...styleBI }}>{ props.list[3] }</div>
            </div>
            <div style={{ ...styleB, left: '270px', background: 'rgb(141,112,218)' }}>
                <div style={{ ...styleBI }}>{ props.list[4] }</div>
            </div>
            <div style={{ ...styleB, left: '320px', background: 'rgb(119,119,119)' }}>
                <div style={{ ...styleBI }}>{ props.list[5] }</div>
            </div>
        </animated.div>
    )
}

const Page = (props) => {
    const repeat = parseInt(useParams().repeat);
    const lotto = useRef(getLottoList(repeat));

    return (
        <>
            <Header/>
            <div style={{ height: '90px' }}/>
            <div className="MID_FRAME">
                <div>
                    { lotto.current.map((item, index) => {
                        return (
                            <ListLine key={ index } num={ index } list={ item }/>
                        )
                    }) }
                </div>
            </div>
            <div style={{ height: '80px' }}/>
        </>
    )
}

export default Page;