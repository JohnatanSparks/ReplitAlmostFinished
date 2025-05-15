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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-xl font-bold mb-2">Referral Link Required</h2>
        <p className="mb-4">
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
              "w-full p-3 bg-[#a9a9a9] border border-gray-300 rounded mb-4 focus:outline-none",
              error && "shake border-red-500 border-2"
            )}
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 border border-black rounded transition hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded transition hover:bg-gray-800"
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
