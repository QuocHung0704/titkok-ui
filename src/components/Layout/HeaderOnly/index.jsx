import Header from "../component/Header";

/* eslint-disable react/prop-types */
function DefaultLayout({ children }) {
    return (
        <div>
            <Header  />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;