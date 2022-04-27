import React from 'react';
import styles from '../staticComponent/Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer_container}>
      <section className={styles.footer_subscription}>
        <p className={styles.footer_subscription_text}>
          Thanks for your Visiting!
        </p>
        <p className={styles.footer_subscription_text}>
          -Run Together-
        </p>
      </section>
      <div className={styles.footer_links}>
        <div className={styles.footer_link_wrapper}>
          <div className={styles.footer_link_items}>
            <h2>About Us</h2>
            <Link to='/about'>Introduction</Link>
            <Link to='/about'>Roles</Link>
            <Link to='/about'>How it works</Link>
            {/* <Link to='/'>Terms of Service</Link> ->서비스 약관 */}
          </div>
          <div className={styles.footer_link_items}>
            <h2>Contact Us</h2>
            <Link to='/about'>Contact</Link>
            <Link to='/about'>Support</Link>
            <Link to='/about'>Destinations</Link>
          </div>
        </div>
        {/* <div className='footer-link-wrapper'>
        
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div> */}
      </div>
      <section className={styles.social_media}>
        <div className={styles.social_media_wrap}>
          <div className={styles.footer_logo}>
            <Link to='/' className={styles.social_logo}>
              Run Together
            </Link>
          </div>
          <small className={styles.website_rights}>Run Together © 2022</small>
          {/* <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
