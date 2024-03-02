import React, { Fragment, useEffect, useLayoutEffect } from "react";

const OutputBase = () => {

    function a() {
        this.site = 'Ayush';

        function b() {
            console.log(this.site);
        }

        b();
    }

    var site = 'Wikipedia';
    a();


    return (
        <Fragment>
            <div>

            </div>
        </Fragment>
    );
}

export default OutputBase
