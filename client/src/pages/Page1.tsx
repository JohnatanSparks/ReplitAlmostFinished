
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFollow from "@/components/SocialFollow";
import BookmarkletButton from "@/components/BookmarkletButton";

export default function Page1() {
  return (
    <div className="min-h-screen flex flex-col fade-in">
      <Navbar onOpenModal={() => {}} />
      
      <main className="flex-grow pt-24">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="/assets/claimsolana.png" 
                  alt="Setup Instructions" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
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
                  <BookmarkletButton title="Get referral" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <SocialFollow />
      </main>
      
      <Footer />
    </div>
  );
}
