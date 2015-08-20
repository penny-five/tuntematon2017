import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';

import './Avatar.scss';

export default class Avatar extends Component {

    render() {
        let { src, size, isSelected, onClick } = this.props;
        let classes = classNames(
            'avatar',
            {'avatar-large' : size == 'large'},
            {'avatar-is-selected': isSelected}
        );
        return (
            <img className={classes} src={src} onClick={onClick} />
        );
    }
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};

Avatar.defaultProps = {
    isSelected: false,
    size: 'small'
};