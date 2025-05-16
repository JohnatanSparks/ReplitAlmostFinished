import { useState, FormEvent, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReferralModal({ isOpen, onClose }: ReferralModalProps) {
  const [referralLink, setReferralLink] = useState("");
  const [error, setError] = useState(false);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const validateReferral = (link: string): boolean => {
    return link.includes('axiom.trade/');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateReferral(referralLink)) {
      // Valid referral link, redirect to page1.html
      navigate('/page1.html');
    } else {
      // Invalid referral link, show error
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-black border-2 border-white text-white">
      <div>
        <h2 className="text-xl font-bold mb-2 text-white">Referral Link Required</h2>
        <p className="mb-4 text-white">
          Enter your complete referral link, including the full URL, to continue. 
          Make sure it's accurate to ensure proper tracking.
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            ref={inputRef}
            type="text"
            value={referralLink}
            onChange={(e) => setReferralLink(e.target.value)}
            placeholder="https://axiom.trade/@referral"
            className={cn(
              "w-full p-3 bg-black border border-white rounded mb-4 focus:outline-none text-white",
              error && "shake border-red-500 border-2"
            )}
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 mr-2 bg-black border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-black border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

// Add the CSS for shake animation
const shakeAnimation = `
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  20%, 60% {
    transform: translateX(-5px);
  }
  40%, 80% {
    transform: translateX(5px);
  }
}

.shake {
  animation: shake 0.3s ease-in-out;
}
`;

// Add the CSS to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = shakeAnimation;
document.head.appendChild(styleSheet);
