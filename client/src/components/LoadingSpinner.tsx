
import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
