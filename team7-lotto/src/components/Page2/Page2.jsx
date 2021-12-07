import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header'

import imgPaper from './paper.png';

const Input = (props) => {
    const style = {
        position: 'absolute', top: '175px',
        left: `${ 65 + 55 * props.index }px`,
        width: '40px', height: '30px',
        border: '2px solid rgba(0,0,0,0.6)', borderRadius: '5px',
        fontSize: '18px', fontWeight: 900, textAlign: 'center'
    }

    const onChange = (e) => {
        if(props.set) props.set(e.target.value);
    }

    return (
        <input style={ style } value={ props.value } onChange={ (e) => onChange(e) }/>
    )
}
const Print = (props) => {
    const style = {
        position: 'absolute', top: '175px',
        left: `${ 65 + 55 * props.index }px`,
        width: '40px', height: '30px', lineHeight: '30px',
        fontSize: '18px', fontWeight: 900, textAlign: 'center',
        color: (props.color ? 'blue' : 'black')
    }
    return (
        <div style={ style }>{ props.num }</div>
    )
}
const Page = (props) => {
    const [v1, sv1] = useState('');
    const [v2, sv2] = useState('');
    const [v3, sv3] = useState('');
    const [v4, sv4] = useState('');
    const [v5, sv5] = useState('');
    const [v6, sv6] = useState('');
    const [isNext, setNext] = useState(false);
    const num = useRef([]);
    const numColor = useRef([]);

    const stylePaper = {
        position: 'absolute', top: '0px', left: '0px',
        width: '500px'
    }
    const styleBtn = {
        float: 'right', fontSize: '17px', border: '2.5px solid gray',
        color: 'gray', height: '30px', lineHeight: '30px', borderRadius: '16px', fontWeight: 900,
        paddingLeft: '20px', paddingRight: '20px'
    }
    const onClick = () => {
        const list = [];
        const Push = (x) => {
            if(x !== '' && 1 <= parseInt(x) && parseInt(x) <= 45){
                list.push( parseInt(x) );
            }
            else list.push(0);
        }
        Push(v1); Push(v2); Push(v3);
        Push(v4); Push(v5); Push(v6);

        for(let i=0; i<6; i++){
            for(let j=0; j<i; j++){
                if(list[i] == list[j]) list[i] = 0;
            }
        }

        const color = [];
        for(let i=0; i<6; i++){
            if(list[i] == 0) color.push(true);
            else color.push(false);

            if(list[i] == 0){
                while(true){
                    const num = Math.floor(Math.random() * 45) + 1;
                    if(list.indexOf(num) === -1){
                        list[i] = num;
                        break;
                    }
                }
            }
        }

        num.current = list;
        numColor.current = color;
        setNext(true);
    }

    return (
        <>
            <Header/>
            <div style={{ height: '90px' }}/>
            <div className="MID_FRAME">
                <div style={{ width: '500px', height: '400px', margin: 'auto', position: 'relative' }}>
                    <img src={ imgPaper } style={ stylePaper }/>
                    { isNext ? 
                        <>
                            <Print index={ 1 } num={ num.current[0] } color={ numColor.current[0] }/>
                            <Print index={ 2 } num={ num.current[1] } color={ numColor.current[1] }/>
                            <Print index={ 3 } num={ num.current[2] } color={ numColor.current[2] }/>
                            <Print index={ 4 } num={ num.current[3] } color={ numColor.current[3] }/>
                            <Print index={ 5 } num={ num.current[4] } color={ numColor.current[4] }/>
                            <Print index={ 6 } num={ num.current[5] } color={ numColor.current[5] }/>
                        </> :
                        <>
                            <Input index={ 1 } num={ v1 } set={ sv1 }/>
                            <Input index={ 2 } num={ v2 } set={ sv2 }/>
                            <Input index={ 3 } num={ v3 } set={ sv3 }/>
                            <Input index={ 4 } num={ v4 } set={ sv4 }/>
                            <Input index={ 5 } num={ v5 } set={ sv5 }/>
                            <Input index={ 6 } num={ v6 } set={ sv6 }/>
                        </>
                    }
                </div>
                { !isNext ? 
                    <div style={ styleBtn } className="BTNC" onClick={ onClick }>다음</div>
                    : ''
                }
            </div>
            <div style={{ height: '80px' }}/>
        </>
    )
}

export default Page;