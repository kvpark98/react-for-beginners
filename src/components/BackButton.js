import { useHistory } from "react-router-dom";

function BackButton() {
    const history = useHistory();
    const onClickBackBtn = () => {
        history.goBack();
    };
    return (
        <div className="d-flex flex-row-reverse mt-4">
            <button 
                className={(window.localStorage.getItem("theme") === "lightTheme") ? "btn btn-outline-dark" : "btn btn-outline-light"} 
                onClick={onClickBackBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <span className="ps-2">Back</span>
            </button>
        </div>
    );
};

export default BackButton;