import React from 'react';

function RightSection({
    imageURL,
    productName,
    ProductDescription ,
    tryDemo ,
    learnMore ,
    googlePlay,
     appstore
}) {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{ProductDescription}</p>
                    <a href="">Learn More</a>
                    </div>
                <div className="col-6 ">
                        <img src={imageURL} style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default RightSection;