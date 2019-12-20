import React from 'react';
import NavArrows from './nav_arrows';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom'
import SearchBar from '../search/search_bar';

class GreetingBar extends React.Component {
    
    
    componentDidMount() {
        const content = document.getElementsByClassName('content')[0];
        
        content.onscroll = () => {
            const { scrollTop } = content;
            if (scrollTop < 180) {
                this.setState({ scrollHeight: content.scrollTop })
            }
        }
    }


    
    render() {
        let a = 0;
        if (this.state) {
            let {scrollHeight} = this.state;
            a = (scrollHeight > 175) ? 1 : (scrollHeight / 175);
        } 
        const style = { backgroundColor: `rgba(14,26,32,${a})` };
        
        return (
            <header className='greeting-bar' style={style}>
                <div className='gb-left'>
                    <NavArrows />
                    <Route path='/search/:query?' component={SearchBar}/>
                </div>
                <GreetingContainer />
            </header>
        )
    }
}

export default GreetingBar;