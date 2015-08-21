import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';

import './Avatar.scss';

export default class Avatar extends Component {

    render() {
        let { src, size, isSelected, isEnabled, onClick } = this.props;
        let classes = classNames(
            'avatar',
            {'avatar-large' : size == 'large'},
            {'avatar-is-selected': isSelected},
            {'avatar-is-disabled' : !isEnabled}
        );
        return (
            <div className={classes} onClick={isEnabled ? onClick : null}>
                <div className="overlay" />
                <img src={src} />
            </div>
        );
    }
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    isSelected: PropTypes.bool,
    isEnabled: PropTypes.bool,
    onClick: PropTypes.func
};

Avatar.defaultProps = {
    isSelected: false,
    isEnabled: true,
    size: 'small'
};