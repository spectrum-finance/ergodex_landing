import React, { useEffect, useState } from 'react'

const COOKIE_POLICY_KEY = "site-cookie-policy";

export const CookiePolicy = () => {
  // 'accept' as default to remove blinking
  const [hidden, setHidden] = useState("accept");

  useEffect(() => {
    setHidden(localStorage.getItem(COOKIE_POLICY_KEY))
  }, []);

  const reject = () => {
    localStorage.setItem(COOKIE_POLICY_KEY, "reject");
    setHidden("reject");
  };

  const accept = () => {
    localStorage.setItem(COOKIE_POLICY_KEY, "accept");
    setHidden("accept");
  };

  return (
    <div className={`cookie-policy ${hidden ? "cookie-policy_hidden" : ""}`}>
      <span className="cookie-policy__message">
        By clicking “Accept All Cookies”, you agree to the storing of cookies on
        your device to enhance site navigation, analyse site usage, and assist
        in our marketing efforts.
      </span>
      <div className="cookie-policy__buttons">
        <button
          className="button button-md button-primary cookie-policy__button"
          onClick={accept}
        >
          Accept all cookies
        </button>
        <button
          className="button button-md cookie-policy__button"
          onClick={reject}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
