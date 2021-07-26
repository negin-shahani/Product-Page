import React, { Component } from 'react'
import classes from '../App.module.css';
import ProductPreview from './productPreview'
import ProductDataComp from './ProductDataComp'
import ProductData from './ProductData'

class Main extends Component {
    state = {
        productData: ProductData,
        Currentpos: 0 ,
        currentFeaturepos:0
    }

    OnClickChangeColor = (pos) =>{
        const updatedImage = pos;
        this.setState({Currentpos: updatedImage});
    }

    onClickchangeFeature = (pos) =>{
        this.setState({currentFeaturepos: pos });
    }

    render() {

        return (
            <div className={classes.mainContainer} >
                <div className={classes.productPreview} >
                    <ProductPreview CurrentImage={this.state.productData.colorOptions[this.state.Currentpos].imageUrl} 
                    currentFeaturepos={this.state.currentFeaturepos} />
                </div>
                <div className={classes.productData} >
                    <ProductDataComp data={this.state.productData} OnClickChangeColor={this.OnClickChangeColor}
                     Currentpos={this.state.Currentpos} onClickchangeFeature={this.onClickchangeFeature}
                     currentFeaturepos={this.state.currentFeaturepos} />
                </div> 
            </div>
        );
    }
}

export default Main;