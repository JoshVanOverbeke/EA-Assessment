import React from 'react';

function ButtonRow(){
    return(
        <div className="row text-center">

            <div className="col-4">
                <button className="">Download</button>
            </div>
            <div className="col-4">
                <button>Save as PDF</button>
            </div>
            <div className="col-4">
                <button className="">Print</button>
            </div>

        </div>
    );
}
export default ButtonRow;