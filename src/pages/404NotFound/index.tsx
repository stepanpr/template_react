import React from 'react';
import classnames from 'classnames';
import './styles.css';

const NotFound: React.FunctionComponent = (props) => {
    // const notFound = classnames({
    //     notFound: true,
    // });

    return (
        <div className="notFoundWrapper">
            <div className={'notFound'}>
                <p>404 Not found</p>
            </div>
        </div>
    );
};

export default NotFound;
