import React from 'react'
import logo from './images/logo.png';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, switchLoading } from './actions'
import { Menu } from './components/Menu';
import { HomeContainer } from './pages/HomePage/HomePageContainer';
import { ReportsContainer } from './pages/ReportsPage/ReportsPageContainer';
import { RoomsContainer } from './pages/RoomsPage/RoomsPageContainer';
import { SettingsContainer } from './pages/SettingsPage/SettingsPageContainer';

function App() {
    const isLoading = useSelector(state => state.isLoading)
    const currentPage = useSelector(state => state.currentPage)
    console.log(currentPage);
    return (
        <div className="App">
          <section className="page-bg">
              <div className="bg-img"></div>
              <div className="bg-overlay"></div>
          </section>
          <header className="fixed-bar top">
              <div className="page-header">
                  <p>
                      <img src={logo} alt=""/>
                      <span className="name">Claire React</span>
                  </p>
              </div>
          </header>
          <main id="main-container" className="main-container">
          	<div className={`page ${currentPage} `}>
			    {(() => {
		           switch (currentPage) {
			        case 0:
			            console.log('currentPage is 0 for Home page');
			            return (
							<HomeContainer />
		                  )
			            break;
			        case 1:
			            console.log('currentPage is 1 for Reports page');
			    //         return (
							// <ReportsContainer />
		     //              )
			            break;
			        case 2:
			            console.log('currentPage is 2 for Rooms page');
			    //         return (
							// <RoomsContainer />
		     //              )
			            break;
			        case 3:
			            console.log('currentPage is 3 for Settings page');
			    //         return (
							// <SettingsContainer />
		     //              )
			            break;
			        default:
			            console.log('currentPage is default for Home page');
			            return (
							<HomeContainer />
		                  )
				    }
		        	})()}
        		</div>
	    	{isLoading ? <Loading /> : ''}

            <Menu/>

          </main>
        </div>
    )
}

const Loading = () => {
    const dispatch = useDispatch()
    return (
        <div id="loader-bg" className="loader-bg">
            <div className="loader">
                <div className="loader-container">
                    <div className="ball red"></div>
                    <div className="ball orange"></div>
                    <div className="ball green"></div>
                    <div className="ball blue"></div>
                </div>
            </div>
      		<button onClick={() => dispatch(switchLoading())}>-</button>
        </div>
    );
}

export default App