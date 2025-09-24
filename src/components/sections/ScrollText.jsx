import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
  const textRefs = useRef([]);

  
  textRefs.current = [];

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    textRefs.current.forEach((line) => {
      gsap.fromTo(
        line,
        { scale: 2, opacity: 0 }, 
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 70%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

 
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "200vh",
        minHeight: "100vh",
        paddingBottom: 0,
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#0891b2",
        fontFamily: "'Helvetica Neue', sans-serif",
      }}
    >
      <h1
        ref={addToRefs}
        style={{
          fontSize: "10em",
          fontWeight: 700,
          marginTop: "20vh",
          textAlign: "center",
          transformOrigin: "center center",
        }}
      >
        Detect
      </h1>
      <h1
        ref={addToRefs}
        style={{
          fontSize: "10em",
          fontWeight: 700,
          marginTop: "15vh",
          textAlign: "center",
          transformOrigin: "center center",
        }}
      >
        opioid risk
      </h1>
      <h1
        ref={addToRefs}
        style={{
          fontSize: "10em",
          fontWeight: 700,
          marginTop: "15vh",
          textAlign: "center",
          transformOrigin: "center center",
        }}
      >
        with real‑time
      </h1>
      <h1
        ref={addToRefs}
        style={{
          fontSize: "10em",
          fontWeight: 700,
          marginTop: "15vh",
          textAlign: "center",
          transformOrigin: "center center",
        }}
      >
        analytics &
      </h1>
      <h1
        ref={addToRefs}
        style={{
          fontSize: "10em",
          fontWeight: 700,
          marginTop: "15vh",
          marginBottom: 0,
          textAlign: "center",
          transformOrigin: "center center",
        }}
      >
        insights
      </h1>
      
    </div>
  );
};

export default ScrollText;


