import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function DarkLightMode({checked, toggleTheme}) {
    return (
        <Form id="darkLight">
            <Form.Check
                type="switch"
                id="custom-switch"
                onClick={toggleTheme}
                {...((checked === "true") ? {defaultChecked:true} : {defaultChecked:false})}/>
        </Form>
    );
};

DarkLightMode.propTypes = {
    checked: PropTypes.string,
    toggleTheme: PropTypes.func.isRequired
};

export default DarkLightMode;