import React, { useEffect, useRef } from "react";

const TranslateComponent = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "ar,zh-CN,id,ko,en,hi,fr,ja", // Language codes
          layout:
            window.google.translate.TranslateElement.InlineLayout.VERTICAL,
          autoDisplay: false,
        },
        googleTranslateRef.current
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div style={{ position: "fixed", bottom: 0, right: 0, zIndex: 1000 }}>
      <div ref={googleTranslateRef}></div>
    </div>
  );
};

export default TranslateComponent;
