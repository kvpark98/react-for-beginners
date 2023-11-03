import { useEffect } from "react";
import { useState } from "react";
import styles from "../App.module.css";

function ScrollDetail() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    const scrollToBottom = () => {
        window.scroll(0, document.body.scrollHeight);
    };

    useEffect(() => {
        const handleShowButton = () => {
            const scrollLocation = window.scrollY;
            scrollLocation > 100 ? setShowButton(true) : setShowButton(false);
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
                <button id="scrollToBottom"
                        onClick={scrollToBottom} 
                        className={styles.BottomButton}>
                    Bottom
                </button>
            </div>
        )
    );
};

export default ScrollDetail;