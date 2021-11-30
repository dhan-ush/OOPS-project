import React, { useState } from 'react'
import styles from '../styles/dashboard/staff.module.css'
import Button from '@mui/material/Button';
import AddWorker from './AddWorker';
import LogoutIcon from '@mui/icons-material/Logout';
import StaffProfile from './StaffProfile';
import Default from './Default';

function AdminDash() {
    const [active, setactive] = useState(<StaffProfile />);
    return (
        //     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        //   rel="stylesheet"></link>
        <div className={styles.outer}>
            <div className={styles.topNav}>
                <div className={styles.navHead}>Staff</div>
                <div className={styles.logout}>
                    <Button variant="outlined" startIcon={<LogoutIcon style={{ fill: "white" }} />} style={{ backgroundColor:"black" ,fontWeight: "bolder", fontFamily: 'Ubuntu', minWidth: "100%", color: "white", textTransform: "none", fontSize: "1.1em" }} >
                        Logout
                    </Button>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.leftNav}>
                    <div className={styles.dashTop}>
                        <Button onClick={() => {
                            setactive(<StaffProfile />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>View Profile</Button>
                    </div>
                    <div className={styles.dashItems}>
                        <Button onClick={() => {
                            setactive(<AddWorker />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Select Slot/Date</Button>
                    </div>
                    <div className={styles.dashItems}>
                        <Button onClick={() => {
                            setactive(<AddWorker />)
                        }} variant="text" style={{ fontWeight: "bolder", fontFamily: "Ubuntu", minWidth: "100%", justifyContent: "flex-start", color: "white", textTransform: "none", fontSize: "1.1em" }}
                            sx={{ ':hover': { bgcolor: 'rgb(60,60,60)' } }}>Select Services</Button>
                    </div>

                </div>
                <div className={styles.display}>
                    {active}
                </div>
            </div>
        </div>
    )
}

export default AdminDash
