import React from 'react';
import "react-popupify/dist/bundle.css";
import { Popup } from 'react-popupify';
import ShareOnSocial from "react-share-on-social";
const SocialSharePopup = () => {
    return (
        <Popup
            popupId="socials-popup"
            animation="bounce"
            // open={false}
            closeOnEscape={true}
            closeOnOutsideClick={true}
            closeButton={true}
        >
            <div>
                <ShareOnSocial
                    textToShare="Check out this new wardrobe I just found from IKEA!"
                    link="https://ikea.com/wardrobes/kalle"
                    linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
                    linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
                    // linkFavicon={favicon}
                    // noReferer
                    shareTo={['Facebook', 'Linkedin', 'Reddit', 'Pocket', 'Tumblr', 'Whatsapp', 'Telegram', 'Email']}
                    showIcons={true}
                >
                    <button>Share this product</button>
                </ShareOnSocial>
            </div>

        </Popup>
    );
};

export default SocialSharePopup;