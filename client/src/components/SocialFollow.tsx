export default function SocialFollow() {
  return (
    <section className="py-8 bg-black text-white">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Follow us</h3>
        <div className="flex justify-center space-x-8">
          <a 
            href="http://t.me/stakepads" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M22 3L2 10l7 4 4 7 9-18z" />
              <path d="M22 3L11 14" />
            </svg>
          </a>
          <a 
            href="https://twitter.com/stakepads" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}