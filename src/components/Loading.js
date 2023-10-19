import { Spinner } from "react-bootstrap";

function Loading() {
    return (
        <Spinner 
            animation="border" 
            role="status" 
            className="ms-2 mt-2">
        </Spinner> 
    );
};

export default Loading;