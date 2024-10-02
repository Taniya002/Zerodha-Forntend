import React from 'react';

function Universe() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row text-center">
                    <h1>The Zerodha Universe</h1>
                    <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>

                    <div className="col-4 p-3 mt-5 ">
                        <img src="media/smallcaseLogo.png" alt="" />
                        <p className='text-small text-muted mt-3'>Thematic investing platform. </p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                    <img src="media/streakLogo.png" alt="" style={{width:"50%"}}/>
                        <p className='text-small text-muted mt-3'> Algo & stragty problam</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                    <img src="media/sensibullLogo.svg" alt="" style={{width:"50%"}}/>
                        <p className='text-small text-muted mt-5'>Option tranding plateform </p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src="media\zerodhafundhouse.png" alt="" style={{width:"50%"}}/>
                        <p className='text-small text-muted mt-3'>Assest management</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                    <img src="media/goldenpiLogo.png" alt="" style={{width:"50%"}}/>
                        <p className='text-small text-muted mt-3'> Bondes tranding plateform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                    <img src="media/dittoLogo.png" alt=""style={{width:"40%"}} />
                        <p className='text-small text-muted mt-3'>Insureance </p>
                    </div>
                    <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
                </div>
            </div>
            
        </>
     );
}

export default Universe;