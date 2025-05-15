import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Enhanced smooth scroll to element with better animation
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    // Offset for navbar height
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    // Add animation class to body to indicate scrolling state
    document.body.classList.add('is-scrolling');
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    
    // Remove animation class after scrolling completes
    const scrollDuration = 1000; // Approximate time for smooth scroll in ms
    setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, scrollDuration);
  }
}
