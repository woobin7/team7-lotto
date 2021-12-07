import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'

const Input = (props) => {
    const [isFocus, setFocus] = useState(false);
    const borderFocus = 'gray';
    const borderDefault = 'rgb(200,200,200)';
    const border = useSpring({
        border: `2px solid ${ isFocus ? borderFocus : borderDefault }`
    }).border

    const onChange = (e) => {
        if(props.onChange) props.onChange(e.target.value);
    }

    return (
        <animated.div style={{ paddingBottom: '5px', paddingTop: '5px', borderBottom: border }}>
            <input type="text" onFocus={ () => setFocus(true) } onBlur={ () => setFocus(false) }
            style={{ width: 'calc(100% - 14px)', border: 'none', outline: 'none', paddingLeft: '7px', paddingRight: '7px', background: 'none',
            fontSize: '16px', fontWeight: 300 }}
            value={ props.value } onChange={ (e) => onChange(e) }/>
        </animated.div>
    )
}

const Page = (props) => {
    const [value, setValue] = useState('');
    const styleTxt = {
        fontSize: '18px'
    }
    const styleBtn = {
        float: 'right', fontSize: '17px', border: '2.5px solid gray',
        color: 'gray', height: '30px', lineHeight: '30px', borderRadius: '16px', fontWeight: 900,
        paddingLeft: '20px', paddingRight: '20px'
    }

    return (
        <>
            <Header/>
            <div style={{ height: '90px' }}/>
            <div className="MID_FRAME">
                <div style={ styleTxt }>추천 받을 횟수를 입력해주세요.</div>
                <div style={{ height: '10px' }}/>
                <Input value={ value } onChange={ (x) => setValue(x) }/>
                <div style={{ height: '10px' }}/>
                { value !== '' && parseInt(value) ?
                <div>
                    <Link to={ `/page1/${ parseInt(value) }` }>
                    <div style={ styleBtn }>다음</div>
                    </Link>
                </div>
                : '' }
            </div>
            <div style={{ height: '80px' }}/>
        </>
    )
}

export default Page;