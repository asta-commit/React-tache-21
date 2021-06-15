import React, { PureComponent } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';

export class Dashboard extends PureComponent {
    render() {
        return (
            <>
               <Navbar /> 
               <Sidebar />
            </>
        )
    }
}

export default Dashboard;
