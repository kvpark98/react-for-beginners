import { useHistory } from "react-router-dom";

function BackButton() {
    const history = useHistory();

    const state = history.location.state;

    const onClickHomeBtn = () => {
        history.replace("/react-for-beginners");
    };

    const onClickBackBtn = () => {
        history.goBack();
    };

    console.log(state);

    return (
        <div className="d-flex flex-row-reverse mt-4">
            <button 
                className={(window.localStorage.getItem("theme") === "lightTheme") ? "btn btn-dark me-2" : "btn btn-light me-2"} 
                onClick={(state !== undefined) ? onClickBackBtn : onClickHomeBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                <span className="ps-2 align-middle">Back</span>
            </button>
        </div>
    );
};

export default BackButton;