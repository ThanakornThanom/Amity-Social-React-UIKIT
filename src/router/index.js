import React, { useEffect } from 'react'


//router
import { Switch, Route } from 'react-router'

//layoutpages
import Default from '../layouts/dashboard/default'
import WithoutLeftSidebar from '../layouts/dashboard/without-leftsidebar'
import WithoutRightSidebar from '../layouts/dashboard/without-rightsidebar'
import Layout1 from '../layouts/dashboard/layout-1'
import Simple from '../layouts/dashboard/simple'
import ASCClient from '@amityco/js-sdk';

const IndexRouters = () => {
    
    useEffect(() => {
        console.log("PLease check api key "+ process.env.REACT_APP_API_KEY);
        const ascClient = new ASCClient({ apiKey: process.env.REACT_APP_API_KEY });
        ascClient.registerSession({ userId: process.env.REACT_APP_USERID, displayName: process.env.REACT_APP_DISPLAYNAME })
    }, [])

    return (
        <>
            <Switch>
                <Route path="/without-leftsidebar" component={WithoutLeftSidebar}></Route>
                <Route path="/without-rightsidebar" component={WithoutRightSidebar}></Route>
                <Route path="/auth" component={Simple}></Route>
                <Route path="/errors" component={Simple}></Route>
                <Route path="/extra-pages" component={Simple}></Route>
                <Route path="/dashboards" component={Layout1}></Route>
                <Route path="/" component={Default}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
