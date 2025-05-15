import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page1() {
  // This component represents the page1.html content
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenModal={() => {}} />
      
      <main className="flex-grow pt-24">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://raw.githubusercontent.com/your-username/your-repo/main/chatgpt-image-may-14-2025-04-30-37-am.png" 
                  alt="Setup Instructions" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h1 className="text-3xl font-bold mb-4">Precision Referral Setup for Smart Traders</h1>
                <p className="mb-4">
                  Gain an edge in the markets with verified Axiom referrals applied instantly through your browser. 
                  Smart traders are already optimizing their fees and rewards.
                </p>
                <p className="mb-6">
                  Referred users are high-volume traders switching from BullX and Photon, mostly from China 
                  and other wealthy Asian hubs such as Singapore, Hong Kong and Seoul.
                </p>
                <p className="font-bold mb-6">
                  To apply the referral, first enable your bookmarks bar (Windows: Ctrl + Shift + B, Mac: Cmd + Shift + B), 
                  click then drag the referral bookmark from this page onto the bar. Finally, go to your Axiom tab and 
                  click the bookmark and your benefits will activate immediately.
                </p>
                <div className="mt-4">
                  <Link href="#referral">
                    <a className="px-6 py-3 bg-black text-white rounded-md inline-block hover:bg-gray-800 transition">
                      Get referral
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="referral" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Follow us</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://mobiri.se/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://mobiri.se/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://mobiri.se/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="http://t.me/stakepads" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <i className="fab fa-telegram text-2xl"></i>
              </a>
              <a href="https://mobiri.se/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <i className="fab fa-twitch text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
