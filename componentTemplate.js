// #region  H E A D E R
// <copyright file="componentTemplate.js" company="MicroCODE Incorporated">Copyright © 2022 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  P R E A M B L E
// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Common React Component Template
 *      Module:   Modules (./componentTemplate.js)
 *      Project:  MicroCODE Common Code
 *      Customer: Internal
 *      Creator:  MicroCODE Incorporated
 *      Date:     June 2022
 *      Author:   Timothy J McGuire
 *
 *      Designed and Coded: 2022 MicroCODE Incorporated
 *
 *      This software and related materials are the property of
 *      MicroCODE Incorporated and contain confidential and proprietary
 *      information. This software and related materials shall not be
 *      duplicated, disclosed to others, or used in any way without the
 *      written of MicroCODE Incorported.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common React Component Template.
 *      This file is copied to start all MicroCODE React Component files.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MicroCODE JavaScript Style Guide
 *         Local File: MCX-S02 (Internal JS Style Guide).docx
 *         https://github.com/MicroCODEIncorporated/JavaScriptSG
 *
 *
 *
 *      DEMONSTRATION VIDEOS:
 *      ---------------------
 *
 *      1. ...
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:     Description:
 *
 *  02-Jun-2022   TJM-MCODE  {0001}    New module for common reusable React Components.
 *
 *
 */
"use strict";

// #endregion
// #endregion
// #endregion

// #region  J A V A S C R I P T
// #region  C O D E   F O L D I N G

// #region  C O N S T A N T S

const MIN_VALUE = 1;
const MAX_VALUE = 999;
const COMPONENT_TYPE = 'Example';

// #endregion

// #region  P R I V A T E   F I E L D S

var field1 = 0.00;
var field2 = '';

// #endregion

// #region  E N U M E R A T I O N S

/**
 * @enum namedEnum1 - a description of this enum, its use, and meaning.
 */
const namedEnum1 = Object.freeze
    ({
        name1: 0,
        name2: 1,
        name3: 2,
        name4: 3,
        name5: 4,
        name6: 5,
        name7: 6
    });

// #endregion

// #region  C O M P O N E N T – P U B L I C

/**
 * ComponentTemplate() – description of the public component.
 *
 * @api public
 *
 * @param {type} props component properties.
 *
 * @returns JavaScript Extension (JSX) code representing the current state of the component.
 *
 * @example
 *
 *      ComponentTemplate(props);
 *
 */
function ComponentTemplate(props)
{
    // valid PROPS input(s)

    // initialize STATE and define acessors...

    // access CONTEXT for reference...

    // #region  P R I V A T E   F U N C T I O N S

    // #endregion

    // #region  E V E N T   H A N D L E R S
    /*
     * *_Click() - 'on click' event handlers for UI elements.
     */

    // #endregion

    // perform component COMPUTATION to generate output

    // OUTPUT the Component's JavaScript Extension (JSX) code...
    return (
        <>
            <h1>Component JSX Code</h1>
        </>
    );
}

// #endregion

// #region  C O M P O N E N T - E X P O R T S

if (typeof module !== 'undefined')
{
    module.exports = {ComponentTemplate};
}

// #endregion

// #endregion
// #endregion