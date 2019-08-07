import React from 'react';

function ButtonRow(props){
    return(
        <div className="col-8">

            <div className="col-4">
                <button className="">Download</button>
            </div>

            <div className="col-4">
                <button className="" onClick={() => window.print()}>Print</button>
            </div>

        </div>
    );
}
export default ButtonRow;