import React,{useState, useEffect} from 'react'

const ScrollArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    
    }, []);
  return (
    <div>
        <a href="/"  className={`uparrow`} style={{display: isVisible ? "block" : "none"}} id="UpArrow"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16" onClick={(e) => {e.preventDefault();handleScrollToTop();}}>
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg></a>
      </div>
  )
}

export default ScrollArrow