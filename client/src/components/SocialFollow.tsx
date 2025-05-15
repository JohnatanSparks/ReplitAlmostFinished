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
            href="https://x.com/stakepads" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors"
          >
            {/* Modern X icon */}
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
              <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
              <path d="M8 8.5 16.3 16" />
              <path d="M16 8.5 7.7 16" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}