import React from 'react';

function SchoolInfo(props){
    return(
        <div className="text-center">

            <h1>
                {props.name}
            </h1>

            <h2>
                {props.website}
            </h2>

            <h3>
                {props.city + ", " + props.state + " " + props.zip}
            </h3>

        </div>
    );
}

export default SchoolInfo;