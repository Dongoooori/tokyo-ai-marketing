import FacebookIcon from "../../assets/Facebook.jpg";
import InstagramIcon from "../../assets/Instagram.jpg";
import TwitterIcon from "../../assets/Twitter.jpg";
import YoutubeIcon from "../../assets/Youtube.jpg";
import XIcon from "../../assets/X.jpg";
import GoogleIcon from "../../assets/Google.jpg";

const Footer = () => {
  return (
    <footer className='w-full flex flex-col mt-20 py-20 bg-black text-white font-serif'>
      <div className='w-full flex flex-col md:flex-row gap-10 px-4 md:px-10'>
        <div className='flex items-start gap-1'>
          <img src='/vite.svg' alt='logo' className='size-6'/>
          <p className='font-bold text-xl'>BRAND UP</p>
        </div>
        {/* Company */}
        <div className='space-y-2'>
          <p className='font-bold text-lg'>Company</p>
          <ul className='text-sm space-y-2'>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Partners</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* Products */}
        <div className='space-y-2'>
          <p className='font-bold text-lg'>Products</p>
          <ul className='text-sm space-y-2'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>API</li>
            <li>Demo</li>
            <li>New Releases</li>
          </ul>
        </div>

        {/* Resources */}
        <div className='space-y-2'>
          <p className='font-bold text-lg'>Resources</p>
          <ul className='text-sm space-y-2'>
            <li>Documentation</li>
            <li>Tutorials</li>
            <li>Community</li>
            <li>Webinars</li>
            <li>Case Studies</li>
            <li>Developer Tools</li>
          </ul>
        </div>

        {/* Support */}
        <div className='space-y-2'>
          <p className='font-bold text-lg'>Support</p>
          <ul className='text-sm space-y-2'>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>Status</li>
            <li>Report a Bug</li>
            <li>FAQ</li>
            <li>Live Chat</li>
          </ul>
        </div>

        {/* Legal */}
        <div className='space-y-2'>
          <p className='font-bold text-lg'>Legal</p>
          <ul className='text-sm space-y-2'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Security</li>
            <li>GDPR</li>
            <li>Licenses</li>
          </ul>
        </div>

        {/* Social */}
        <div className='space-y-2'>
          <p className='font-bold text-lg'>Follow Us</p>
          <ul className='text-sm space-y-2'>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <div className='px-4 md:px-10 mt-20 text-xs flex flex-col md:flex-row justify-between'>
        <div className='flex'>
          <ul className='flex gap-4'>
            <li>
              @ 2025 Brand Up. All rights reserved
            </li>
            <li>
              Privacy Policy
            </li>
            <li>
              Terms of Service
            </li>
            <li>
              Sitemap
            </li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <img src={FacebookIcon} alt='facebook' className='size-6 rounded-full'/>
          <img src={InstagramIcon} alt='instagram' className='size-6 rounded-full'/>
          <img src={TwitterIcon} alt='twitter' className='size-6 rounded-full'/>
          <img src={YoutubeIcon} alt='youtube' className='size-6 rounded-full'/>
          <img src={XIcon} alt='x' className='size-6 rounded-full'/>
          <img src={GoogleIcon} alt='google' className='size-6 rounded-full'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer