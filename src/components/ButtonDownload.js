import React from 'react';

function ButtonDownload(props){

    return(
        <div className="col-4">

            <button className="btn btn-outline-success waves-effect" onClick={() => props.handleDownload(props.obj)}><span title="Download Data"><i class="fas fa-download"></i></span></button>

        </div>
    );
}
export default ButtonDownload;