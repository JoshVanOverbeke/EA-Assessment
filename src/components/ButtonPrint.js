import React from 'react';

function ButtonPrint(props){
    return(
        <div className="col-4">
            <button className="" onClick={() => window.print()}>Print</button>

        </div>
    );
}
export default ButtonPrint;