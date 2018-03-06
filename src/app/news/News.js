import React from 'react';

import './style.scss'

import GeneralBlock from '../../components/generalBlock/GeneralBlock';
import AddNews from './addNews/AddNews';

export default class News extends React.Component {
    render() {
        return (<section className='news'>
            <GeneralBlock>
                <AddNews/>
                <p>______________oooo_____________oo_______ooo_________</p>

            </GeneralBlock>
        </section>);
    }
}