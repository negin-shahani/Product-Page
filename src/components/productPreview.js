import React from 'react'
import classes from './ProductPreview.module.css'

const ProductPreview = (props) => {
    const hours = new Date().getHours() > 9 ? new Date().getHours() : "0" + new Date().getHours();
    const minutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : "0" + new Date().getMinutes();
    return (
        <div>
            <img src={props.CurrentImage} alt="Product preview" />
            {props.currentFeaturepos===1 ?
                <div className={classes.HeartRateFeature}>
                    <i className="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>
                :
                <div className={classes.TimeFeature}>
                    <p>{`${hours}:${minutes}`}</p>
                </div>
            }



        </div>
    );
}

export default ProductPreview;