import { useEffect } from "react";
import { useState } from "react";
import styles from "../App.module.css";

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    const scrollToBottom = () => {
        window.scrollTo({
            bottom: 0,
            behavior: "smooth"
        })
    };

    useEffect(() => {
        const handleShowButton = () => {
            window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
        };
        const timer = setInterval(() => {
            window.addEventListener('scroll', handleShowButton);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleShowButton);
        };     
    }, []);

    return (
        showButton && (
            <div className={styles.scrollToTopFixed}>
                <button id="scrollToTop"
                        onClick={scrollToTop} 
                        className={styles.topButton}>
                    Top
                </button>
            </div>
        )
    );
};

export default ScrollToTop;