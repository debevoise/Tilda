import React from 'react';

export default class OptionsDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.closeDropdown = this.closeDropdown.bind(this);
    }

    componentDidUpdate() {
        if (this.props.position) {
            document.addEventListener('click', this.closeDropdown)
            document.addEventListener('contextmenu', this.closeDropdown)
        } else {
            document.removeEventListener('click', this.closeDropdown)
            document.removeEventListener('contextmenu', this.closeDropdown)
        }
    }

    closeDropdown(e) {
        e.stopPropagation();
        if (!this.dropdownRef.contains(e.target)) {
            this.props.handleClose(e);
        }
    }

    render() {
        const {position} = this.props;

        if (!position) return null;
        const { x, y } = position
        
        const style = {
            position: 'fixed',
            top: y,
            left: x
        }

        return (
            <ul 
                className='options-dropdown'
                style={style}
                ref = {element =>  this.dropdownRef = element }
            >
                {this.props.children}
            </ul>
        )
    }
}