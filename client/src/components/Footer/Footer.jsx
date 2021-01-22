import React from 'react';
import '../Footer/footer.scss';

function Footer() {
    return (
        <section className="footer">
            <div className="footer__blocks">
                <div className="footer__block">Shutterstock Music</div>
                <div className="footer__block">Black Representation</div>
            </div>

            <div className="footer__main">

            <div className="footer__main-header">
                <p className="footer__main-heading">We have more than <span className="footer__span">350 million images</span> as of September 30, 2020.</p>
            </div>

            <div className="footer__content">
                <h5 className="footer__link-header">Content</h5>
                <p className="footer__links">Homepage</p>
                <p className="footer__links">Images</p>
                <p className="footer__links">Photos</p>
                <p className="footer__links">Videos</p>
                <p className="footer__links">Vectors</p>
                <p className="footer__links">Music</p>
                <p className="footer__links">Editorial</p>
                <p className="footer__links">Popular Searches</p>
                <p className="footer__links">Coupons</p>
                <p className="footer__links">Pricing</p>
            </div>

            <div className="footer__content">
                <h5 className="footer__link-header">Premium Content</h5>
                <p className="footer__links">Offset stock photos</p>
                <p className="footer__links">Shutterstock Select</p>
                <p className="footer__links">Elements/VFX</p>
                <p className="footer__links">PremiumBeat</p>

                <h5 className="footer__link-header">Tools</h5>
                <p className="footer__links">Mobile apps</p>
                <p className="footer__links">Shutterstock Editor</p>
                <p className="footer__links">Plugins</p>
            </div>

            <div className="footer__content">
                <h5 className="footer__link-header">For your business</h5>
                <p className="footer__links">Shutterstock Premier</p>
                <p className="footer__links">Shutterstock Studios</p>
                <p className="footer__links">Team Experience</p>
                <p className="footer__links">API Integrations</p>

                <h5 className="footer__link-header">For contributors</h5>
                <p className="footer__links">Sell your content</p>
                <p className="footer__links">The Shot List</p>
                <p className="footer__links">Mobile app</p>
            </div>

            <div className="footer__content">
                <h5 className="footer__link-header">Our Company</h5>
                <p className="footer__links">About Us</p>
                <p className="footer__links">Careers</p>
                <p className="footer__links">Press/Media</p>
                <p className="footer__links">Investor relations</p>
                <p className="footer__links">Blog</p>

                <h5 className="footer__link-header">Partner</h5>
                <p className="footer__links">API / Developers</p>
                <p className="footer__links">Affiliate</p>
                <p className="footer__links">Reseller</p>
                <p className="footer__links">Refer and get $50</p>
            </div>

            <div className="footer__content">
            <h5 className="footer__link-header">Support</h5>
            <p className="footer__links">Get help</p>
            <p className="footer__links">Accessibility</p>

            <h5 className="footer__link-header">Legal</h5>
            <p className="footer__links">Terms of Use</p>
            <p className="footer__links">License agreement</p>
            <p className="footer__links">Privacy Policy</p>
            <p className="footer__links">Social media guidelines</p>
        </div>

            </div>
        </section>
    )
}

export default Footer
