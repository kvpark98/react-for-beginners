import PropTypes from "prop-types";

function NoResult({userInput}) {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div>
                <div className="d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <h3 className="mt-3 mb-0 text-center">
                    No movies found for the search term "{userInput}".
                </h3>
            </div>
        </div>
    );
};

NoResult.propTypes = {
    userInput: PropTypes.string
};

export default NoResult;