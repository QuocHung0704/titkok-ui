import Header from "../component/Header";

/* eslint-disable react/prop-types */
function HeaderOnly({ children }) {
    return (
        <div>
            <Header  />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default HeaderOnly;