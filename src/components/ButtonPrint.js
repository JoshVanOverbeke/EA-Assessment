import React from 'react';

function ButtonPrint(){
    return(
        <div className="col-4">
            <button className="btn btn-outline-blue-grey waves-effect" onClick={() => window.print()}><span title="Print"><i class="fas fa-print"></i></span></button>

        </div>
    );
}
export default ButtonPrint;