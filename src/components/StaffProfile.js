import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/dashboard/staffprofile.module.css'
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function StaffProfile() {
    let name= "Ram";
    return (
        <div className={styles.outer}>
            <div className={styles.title}>
                My Profile
            </div>
            <div className={styles.inouter}>
            
            <div className={styles.details}>

            <div className={styles.row}>
            <div className={styles.fieldName}>Name :</div> <div className={styles.content}>Ram Kumar</div>
            </div>
            
            <div className={styles.row}>
            <div className={styles.fieldName}>Username :</div> <div className={styles.content}>ram</div>
            </div>
            
            <div className={styles.row}>
            <div className={styles.fieldName}>Services :</div> <div className={styles.content}>Dry cleaning</div>
            </div>
            
            <div className={styles.row}>
            <div className={styles.fieldName}>Rating :</div> <div className={styles.content}><Rating style={{fill:"orange"}} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></div>
            </div>
            
            </div>
            <div className={styles.pic}>
            <Avatar sx={{ height: '22vh', width: '10vw' }} src="/broken-image.jpg" /></div>
            </div>
        </div>
    )
}

export default StaffProfile
