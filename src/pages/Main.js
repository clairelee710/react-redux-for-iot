import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Loading } from '../components/Loading';
import { Menu } from '../components/Menu';
import { HomeContainer } from './HomePage/HomePageContainer';
import { ReportsContainer } from './ReportsPage/ReportsPageContainer';
import { RoomsContainer } from './RoomsPage/RoomsPageContainer';
import { SettingsContainer } from './SettingsPage/SettingsPageContainer';

const MainContainer = () => {
    const isLoading = useSelector(state => state.isLoading)
    const currentPage = useSelector(state => state.currentPage)
    return (
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
			            return (
							<ReportsContainer />
		                  )
			            break;
			        case 2:
			            console.log('currentPage is 2 for Rooms page');
			            return (
							<RoomsContainer />
		                )
			            break;
			        case 3:
			            console.log('currentPage is 3 for Settings page');
			            return (
							<SettingsContainer />
		                  )
			            break;
			        default:
			            console.log('currentPage is default for Home page');
			            return (
							<HomeContainer />
		                  )
				    }
	        	})()}
    		</div>
        	<Menu/>
    		{isLoading ? <Loading /> : ''}
        </main>
    )
}

export default MainContainer
