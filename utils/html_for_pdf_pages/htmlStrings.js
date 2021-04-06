export const headerString = `
  <!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">

    <title>Crash Form Cover</title>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif|Roboto:300,400,500" rel="stylesheet">
    <style>
      body {
        padding: 0in;
        width: 99%;
        height: 100%;
      }

      hr {
        border-top: 0.5px solid black;
      }

      h1, h3 {
        font-family: "Roboto";
      }

      h1 {
        font-size: 1.5em;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0.25em;
      }

      h4 {
        margin: 4px 0;
        font-family: "Droid Serif";
        color: black;
      }

      h1, h3 {
        text-transform: uppercase;
      }

      h3 {
        font-weight: 500;
        font-size: 1em;
        margin: 0;
      }

      table {
        border-collapse: collapse;
        margin:0;
      }

      .break-after {
        page-break-after: always;
      }

      .break-before {
        page-break-before: always;
      }

      .avoid-break {
        page-break-inside: avoid;
      }

      .sig-box {
        padding: 0.25em;
        border: 0.5px solid black;
      }

      .page-header {
      	display: flex;
      	flex-direction: column;
      }

      .row {
        flex-direction: row;
      }

      .column {
        flex-direction: column;
        float: left;
      }

      .right {
        float: right;
        flex-grow: 1;
        text-align: right;
      }

      .tright {
      	text-align: right;
      }

      .left {
        float: left;
      }

      .half {
        width:50%;
      }

      .sixth {
      	width: 16.66%;
      	border:none;
      }

      .boxheader.tight {
        margin-top: 0;
      }

      .twothird {
        width: 66.66%;
      }

      .inline {
        display: inline-block;
      }

      .boxheader {
        background-color: black;
        color: white;
        text-align: center;
        padding: 0.5em 0;
      }

      .datasection {
        display: table;
        margin-top: 1em;
      }

      table {
      	margin: 1em 0;
      }

      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }

      .contactbox th, .contactbox td {
      	border:none;
      }

      td {
      	padding: .25em;
      	vertical-align: top;
      	width: 33.33%;
      }

      .field {
        font-weight: bold;
      }

      .third {
        width: 33.33%;
      }

      p {
        margin: 0.25em 0;
      }
    </style>

  </head>

  <body>
`

export const coverPageHeaderString = `
  <div class="page-header">
    <div class="row">
      <h4 class="inline right"> Page ### of ###</h4>
      <h1 class="inline">Ruina Motor Vehicle Crash Report</h1>

      <hr>
    </div>

    <div class="row">
      <div class="column left half">
        <h4># Motor Vehicles</h4>
        <h4># Non-motorists</h4>
        <h4 id="8dY73Yzs">Crash Severity: ###</h4>
        <h4 id="IGD5NNyh">Reporting *Officer or Citizen*: ###</h4>
      </div>
      <div class="column right half">
        <h4 id="gNkzJih5">Crash Identifier: ###</h4>
        <h4 id="qfge7d3g">Agency Crash Identifier: ###</h4>
        <h4 id="VwPfe11r">Reporting Agency: ###</h4>
        <h4 class="sig-box">signature</h4>
      </div>
    </div>
  </div>
`

export const crashDataSectionString = `
  <table class="avoid-break">
    <th class="boxheader" colspan="3">
      <h3> Crash date, time, and location</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Crash Date and Time</p>
          <p class="fieldresponse" id="FQ2cYAHj">for visual</p>
        </td>
        <td rowspan="2">
          <p class="field">Crash County</p>
          <p class="fieldresponse" id="8V2H4hT4"></p>
        </td>
        <td>
          <p class="field">Within Interchange Area</p>
          <p class="fieldresponse" id="2cnmGpDV"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Specific Location</p>
          <p class="fieldresponse" id="OeRyvF4v"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Time of Roadway Clearance</p>
          <p class="fieldresponse" id="zyHP4WbS"></p>
        </td>
        <td>
          <p class="field">Crash City/Place</p>
          <p class="fieldresponse" id="JDBENf0A"></p>
        </td>
        <td>
          <p class="field">Number of Approaches</p>
          <p class="fieldresponse" id="fvIxja95"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Ownership</p>
          <p class="fieldresponse" id="pT0Wq1RO"></p>
        </td>
        <td>
          <p class="field">Latitude</p>
          <p class="fieldresponse" id="Y0UeyBYf"></p>
        </td>
        <td class="databox">
          <p class="field">Overall Intersection Geometry</p>
          <p class="fieldresponse" id="UwUUqXFT"></p>
        </td>
      </tr>
      <tr>
        <td class="databox">
          <p class="field">Characteristics</p>
          <p class="fieldresponse" id="zUUpOYVy"></p>
        </td>
        <td class="databox">
          <p class="field">Longitude</p>
          <p class="fieldresponse" id="eFXNchTA"></p>
        </td>
        <td>
          <p class="field">Overall Traffic Control Device</p>
          <p class="fieldresponse" id="Rq1LXZwZ"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break">
    <th class="boxheader" colspan="3">
        <h3> Crash factors and conditions</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Secondary Crash</p>
          <p class="fieldresponse" id="A6uoXDGb"></p>
        </td>
        <td>
          <p class="field">Weather Condition</p>
          <p class="fieldresponse" id="u07WbEUL"></p>
        </td>
        <td>
          <p class="field">Number of Non-Fatally Injured Persons</p>
          <p class="fieldresponse" id="PPxIpVat"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">First Harmful Event</p>
          <p class="fieldresponse" id="Anwspdcw"></p>
        </td>
        <td>
          <p class="field">Light Condition</p>
          <p class="fieldresponse" id="DMwKNwQA"></p>
        </td>
        <td>
          <p class="field">Alcohol Involvement</p>
          <p class="fieldresponse" id="8pdkF3He"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Location of First Harmful Event Relative to the Trafficway</p>
          <p class="fieldresponse" id="oRhCbvy6"></p>
        </td>
        <td>
          <p class="field">Roadway Surface Condition</p>
          <p class="fieldresponse" id="psx5cEXm"></p>
        </td>
        <td>
          <p class="field">Drug Involvement</p>
          <p class="fieldresponse" id="tJhmN6cf"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Contributing Circumstances - Roadway Environment</p>
          <p class="fieldresponse" id="ms4OGVRF"></p>
        </td>
        <td>
          <p class="field">School Bus-Related?</p>
          <p class="fieldresponse" id="gDFQkFn9"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field"> Manner of Crash/Collision Impact</p>
          <p class="fieldresponse" id="KXoL8mdI"></p>
        </td>
        <td>
          <p class="field">Construction or Work Zone Related?</p>
          <p class="fieldresponse" id="34oHCyQs"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="break-after"></div>
`

export const constructionDataSectionString = `
  <div class="page-header">
    <div class="row">
      <div class="column right half">
        <h4>Page ### of ###</h4>
      </div>
    </div>
  </div>
  <table class="avoid-break">
    <th class="boxheader" colspan="3">
      <h3>Construction Information</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Crash Location</p>
          <p class="fieldresponse" id="H8Nc9OMd"></p>
        </td>
        <td rowspan="2">
          <p class="field">Type of Work Zone</p>
          <p class="fieldresponse" id="h6LUiplf"></p>
        </td>
        <td>
          <p class="field">Workers Present?</p>
          <p class="fieldresponse" id="3pIa77uR"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Law Enforcement Present?</p>
          <p class="fieldresponse" id="NvS2JTFP"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const vehicleHeaderString = `
  <div class="page-header">
  	<div class="row">
  		<div class="column left half">
  			<h4>Motor Vehicle ###</h4>
  			<h4 id="CTfb8pdV"># Occupants: ###</h4>
  		</div>
  		<div class="column right half">
  			<h4>Page ### of ###</h4>
  		</div>
  	</div>
  </div>
`

export const vehicleDataSectionString = `
  <table class="avoid-break">
    <th class="boxheader" colspan="4">
      <h3>Ownership and Insurance</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="3" class="sixth">
      <p><span id="YyQ6jMwd"></span> <span id="SulL32si"></span> <span id="zOGjRlMJ"></span></p>
    </td>
    <td rowspan="3" class="sixth">
      <p class="tright" id="ywUJNXkj"></p>
      <p class="tright"><span id="4G5ht6pl"></span>, <span id="3g8Oxu93"></span> <span id="crxPGHSm"></span></p>
    </td>
       <td rowspan="2">
        <p class="field">Insurance Company Name</p>
        <p class="fieldresponse" id="TDkAb1u9"></p>
      </td>
      <td>
          <p class="field">NAIC #</p>
          <p class="fieldresponse" id="iWGTReJ5"></p>
       </td>
      </tr>
      <tr>
      <td>
        <p class="field">Policy #</p>
        <p class="fieldresponse" id="RGPLYKWA"></p>
      </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break">
    <th class="boxheader" colspan="3">
      <h3>Vehicle Details</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Vehicle Identification Number</p>
          <p class="fieldresponse" id="Bw7d2KTr"></p>
        </td>
        <td>
          <p class="field">Vehicle Unit Type </p>
          <p class="fieldresponse" id="Dpk0wqnI"></p>
        </td>
        <td>
          <p class="field">Body Type Category</p>
          <p class="fieldresponse" id="MMkwgaog"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle Registration Identifier</p>
          <p class="fieldresponse" id="d7zJ5NIq"></p>
        </td>
        <td>
          <p class="field">Vehicle Make</p>
          <p class="fieldresponse" id="eZglw8FV"></p>
        </td>
        <td>
          <p class="field">Vehicle Size</p>
          <p class="fieldresponse" id="CynWHwxP"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle Registration Year</p>
          <p class="fieldresponse" id="QoX1IOdG"></p>
        </td>
        <td>
          <p class="field">Vehicle Model</p>
          <p class="fieldresponse" id="29h5OiPC"></p>
        </td>
        <td>
          <p class="field">Number of Trailing Units</p>
          <p class="fieldresponse" id="ovVntlnU"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">License Plate Number</p>
          <p class="fieldresponse" id="vDnyDl5t"></p>
        </td>
        <td>
          <p class="field">Vehicle Model Year</p>
          <p class="fieldresponse" id="C0rbnXHC"></p>
        </td>
        <td>
          <p class="field">Hazardous Materials Placard?</p>
          <p class="fieldresponse" id="sM5HGjcV"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="break-after"></div>
  <div class="page-header">
  	<div class="row">
  		<div class="column right half">
  			<h4>Page ### of ###</h4>
  		</div>
  	</div>
  </div>
  <table class="avoid-break">
    <th class="boxheader" colspan="3">
      <h3>Factors and conditions</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Posted/Statutory Speed Limit</p>
          <p class="fieldresponse" id="wAqrAfiG"></p>
        </td>
        <td>
          <p class="field">Travel Directions</p>
          <p class="fieldresponse" id="udnyu4F5"></p>
        </td>
        <td>
          <p class="field">Traffic Control Devices (TCDs)</p>
          <p class="fieldresponse" id="xBm1Bisf"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Travel Direction Before Crash</p>
          <p class="fieldresponse" id="CP4soemD"></p>
        </td>
        <td>
          <p class="field">Divided?</p>
          <p class="fieldresponse" id="u5KrpsMu"></p>
        </td>
        <td>
          <p class="field">Inoperative or Missing TCDs</p>
          <p class="fieldresponse" id="YLcktHvs"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle Maneuver/Action</p>
          <p class="fieldresponse" id="DJ4YPDuQ"></p>
        </td>
        <td>
          <p class="field">Barrier Type</p>
          <p class="fieldresponse" id="4P4o8TWH"></p>
        </td>
        <td>
          <p class="field">Towed Due to Disabling Damage</p>
          <p class="fieldresponse" id="pTV8x6So"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Initial Point of Contact</p>
          <p class="fieldresponse" id="4KpRmZXB"></p>
        </td>
        <td>
          <p class="field">HOV/HOT Lanes</p>
          <p class="fieldresponse" id="Gk088QR4"></p>
        </td>
        <td>
          <p class="field">Contributing Circumstances from Vehicle</p>
          <p class="fieldresponse" id="PzKUFMw0"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Location of Damage Area(s)</p>
          <p class="fieldresponse" id="lZDkbTdw"></p>
        </td>
        <td>
          <p class="field">Crash Related to HOV/HOT?</p>
          <p class="fieldresponse" id="Uzw63nI0"></p>
        </td>
        <td>
          <p class="field">Special Function in Transport</p>
          <p class="fieldresponse" id="4vrmnvfC"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Resulting Extent of Damage</p>
          <p class="fieldresponse" id="a1fPOVyS"></p>
        </td>
        <td>
          <p class="field">Total Through Lanes</p>
          <p class="fieldresponse" id="FdF7XvAQ"></p>
        </td>
        <td>
          <p class="field">Emergency Motor Vehicle Use</p>
          <p class="fieldresponse" id="CFa8RCtt"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Sequence of Events</p>
          <p class="fieldresponse" id="N1NDCJhB"></p>
        </td>
        <td>
          <p class="field">Total Auxiliary Lanes</p>
          <p class="fieldresponse" id="JwQN2ENk"></p>
        </td>
        <td>
          <p class="field">Has Automated System(s)?</p>
          <p class="fieldresponse" id="krQbh0po"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle's Most Harmful Event</p>
          <p class="fieldresponse" id="9WuImDSX"></p>
        </td>
        <td>
          <p class="field">Horizontal Alignment</p>
          <p class="fieldresponse" id="UigT0ygk"></p>
        </td>
        <td>
          <p class="field">Automated System Levels (ASLs)</p>
          <p class="fieldresponse" id="d4OE8GnI"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Hit and Run?</p>
          <p class="fieldresponse" id="4EHCUQHM"></p>
        </td>
        <td>
          <p class="field">Grade</p>
          <p class="fieldresponse" id="tFYqNzmA"></p>
        </td>
        <td>
          <p class="field">ASLs Engaged during Crash</p>
          <p class="fieldresponse" id="zk6QtmkD"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="break-after"></div>
`

export const tailString = `
  </body>
  </html>
`
