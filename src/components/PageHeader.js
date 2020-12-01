import logo from '../images/logo.png';

const PageHeader = () => (
    <header className="fixed-bar top">
        <div className="page-header">
            <p>
                <img src={logo} alt="" />
                <span className="name">Claire React</span>
            </p>
        </div>
    </header>
);

export default PageHeader