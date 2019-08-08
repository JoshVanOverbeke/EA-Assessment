import React from 'react';

function SchoolInfo(props){
    return(

        <div className="row text-center">
            <div className="col-12 mb-4">
                <div className="card card-image">
                    <div className="text-white text-center align-items-center rgba-black-strong py-5 px-4">
                        <div>
                            <h1 className="card-title py-3 font-weight-bold"><strong>{props.name}</strong></h1>
                            <h3 className="pb-3"><strong>Current Enrollment:</strong> {props.stuTotal}</h3>
                            <h3 className="pb-3"><strong>Location:</strong> {props.city + ", " + props.state + " " + props.zip}</h3>
                            <h3 className="pb-3"><strong>Website:</strong> {props.website}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SchoolInfo;