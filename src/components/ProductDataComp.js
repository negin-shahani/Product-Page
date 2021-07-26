import React from 'react'
import classes from './ProductData.module.css'

const ProductDataComp = (props) => {
    const colorOption = props.data.colorOptions.map((item,pos) =>{
        const styleArr = [classes.productImage]
        if(pos === props.Currentpos){
            styleArr.push(classes.selected);
        }
        return(
            <img className={styleArr.join(' ')} key={pos} onClick={() => props.OnClickChangeColor(pos)} src={item.imageUrl} alt={item.styleName} />
        );
       
    })

    const Buttons = props.data.featureList.map((item,pos) =>{
        const classButton = [classes.featureItem];
        if(pos === props.currentFeaturepos){
            classButton.push(classes.selectedFeatureItem);
        }
        return(
            <button className={classButton.join(' ')} onClick={()=>props.onClickchangeFeature(pos)} key={pos} >{item} </button>
        );
    })
    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.description} </p>
            <h3>Select Color</h3>
            <div>
                {colorOption}
            </div>
            <h3>Features</h3>
            <div>
                {Buttons}
            </div>
            <button className={classes.BuyButton}>Buy Now</button>
        </div>
    );
}

export default ProductDataComp;