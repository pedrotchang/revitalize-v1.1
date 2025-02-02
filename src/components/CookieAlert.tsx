import React, { useState, useEffect } from "react";

const CookieAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#402E32]/95 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            We use cookies to enhance your browsing experience and analyze our
            traffic. By clicking Accept, you consent to our use of
            cookies.
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAccept}
              className="bg-[#AB7132] hover:bg-[#FBC000] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-transparent border border-[#B9A89A] hover:border-[#DFE0DF] text-[#B9A89A] hover:text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieAlert;
