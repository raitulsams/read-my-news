import React from 'react';
import SocialLogin from './SocialLogin';
import SocialLinks from './SocialLinks';
import Qzone from './Qzone';
import Blankbg from './Blankbg';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <SocialLinks></SocialLinks>
            <Qzone></Qzone>
            <Blankbg></Blankbg>
        </div>
    );
};

export default RightAside;