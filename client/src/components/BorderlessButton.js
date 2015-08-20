import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './BorderlessButton.scss';

export default class BorderlessButton extends Component {

    render() {
        let { style, visible, text, onClick } = this.props;
        let classes = classNames(
            'borderless-button',
            { 'borderless-button-hidden ': !visible }
        );

        return (
            <button style={style} className={classes} onClick={onClick}>{text}</button>
        );
    }
}

BorderlessButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    visible: PropTypes.bool,
    style: PropTypes.object
};

BorderlessButton.defaultProps = {
    visible: true
};