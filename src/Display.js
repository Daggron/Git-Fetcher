import React from 'react';



const Display = ({view ,repos , name  ,imgsrc , followers , following , bio })=>{
    if(!view){
        return (
            <h1 className="text-white">
                Go Ahead And Fetch Someone's  Data
            </h1>
        )
    }
    return (
        <div className="Display mx-auto">
            <div className="card mx-auto" style={{width: '18rem'}}>

                <img className="card-img-top" src={imgsrc} alt="Card cap" />
                <div className="card-body">
                      <h5 className="card-title">Name:&nbsp;&nbsp;{name}</h5>
                      <h5 className="card-title"> Bio: &nbsp;&nbsp;{bio}</h5>
                    <h5 className="card-title">Public Repos : {repos}</h5>
                    <p className="card-text">followers : {followers} </p>
                    <p className="card-text">following : {following} </p>
                    
                </div>
            </div>
        </div>
    )
}


export default Display;