export const headerString = `
  <!doctype html>

  <html lang="en">
  <head>
    <meta charset="utf-8">

    <title>Crash Form Cover</title>

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


      .sig-box {
        padding: 0.25em;
        border: 0.5px solid black;
      }

      .container {
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

      .left {
        float: left;
      }

      .half {
        width:50%;
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

      .databox {
        border: 0.5px solid black;
        border-top: 0;
        padding: 0.25em;
        background: white;
      }

      .datasection {
        display: table;
        background: black;
        margin-top: 1em;
        align-content: center;
      }

      .datasection .column {
        height: 100%;
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
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif|Roboto:300,400,500" rel="stylesheet">

  </head>

  <body>

  <div class="container">
`

export const coverPageHeaderString = `
  <div class="row">
    <h4 class="inline right"> Page 1 of ###</h4>
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
`

export const crashDataSectionString = `
  <div class="datasection">
    <div class="row boxheader">
      <h3> Crash date, time, and location</h3>
    </div>
    <div class="row">
      <div class="column third">
        <div class="databox">
          <p class="field">Crash Date and Time</p>
          <p class="fieldresponse" id="FQ2cYAHj"></p>
        </div>
        <div class="databox">
          <p class="field">Time of Roadway Clearance</p>
          <p class="fieldresponse" id="zyHP4WbS"></p>
        </div>
        <div class="databox">
          <p class="field">Ownership</p>
          <p class="fieldresponse" id="pT0Wq1RO"></p>
        </div>
        <div class="databox">
          <p class="field">Characteristics</p>
          <p class="fieldresponse" id="zUUpOYVy"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Crash County</p>
          <p class="fieldresponse" id="8V2H4hT4"></p>
        </div>
        <div class="databox">
          <p class="field">Crash City/Place</p>
          <p class="fieldresponse" id="JDBENf0A"></p>
        </div>
        <div class="databox">
          <p class="field">Latitude</p>
          <p class="fieldresponse" id="Y0UeyBYf"></p>
        </div>
        <div class="databox">
          <p class="field">Longitude</p>
          <p class="fieldresponse" id="eFXNchTA"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Within Interchange Area</p>
          <p class="fieldresponse" id="2cnmGpDV"></p>
        </div>
        <div class="databox">
          <p class="field">Specific Location</p>
          <p class="fieldresponse" id="OeRyvF4v"></p>
        </div>
        <div class="databox">
          <p class="field">Number of Approaches</p>
          <p class="fieldresponse" id="fvIxja95"></p>
        </div>
        <div class="databox">
          <p class="field">Overall Intersection Geometry</p>
          <p class="fieldresponse" id="UwUUqXFT"></p>
        </div>
        <div class="databox">
          <p class="field">Overall Traffic Control Device</p>
          <p class="fieldresponse" id="Rq1LXZwZ"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="datasection break-after">
    <div class="row boxheader">
      <h3> Crash factors and conditions</h3>
    </div>
    <div class="row">
      <div class="column third">
        <div class="databox">
          <p class="field">Secondary Crash</p>
          <p class="fieldresponse" id="A6uoXDGb"></p>
        </div>
        <div class="databox">
          <p class="field">First Harmful Event</p>
          <p class="fieldresponse" id="Anwspdcw"></p>
        </div>
        <div class="databox">
          <p class="field">Location of First Harmful Event Relative to the Trafficway</p>
          <p class="fieldresponse" id="oRhCbvy6"></p>
        </div>
        <div class="databox">
          <p class="field"> Manner of Crash/Collision Impact</p>
          <p class="fieldresponse" id="KXoL8mdI"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Weather Condition</p>
          <p class="fieldresponse" id="u07WbEUL"></p>
        </div>
        <div class="databox">
          <p class="field">Light Condition</p>
          <p class="fieldresponse" id="DMwKNwQA"></p>
        </div>
        <div class="databox">
          <p class="field">Roadway Surface Condition</p>
          <p class="fieldresponse" id="psx5cEXm"></p>
        </div>
        <div class="databox">
          <p class="field">Contributing Circumstances - Roadway Environment</p>
          <p class="fieldresponse" id="ms4OGVRF"></p>
        </div>
      </div>
      <div class="column third">

        <div class="databox">
          <p class="field">Number of Non-Fatally Injured Persons</p>
          <p class="fieldresponse" id="PPxIpVat"></p>
        </div>
        <div class="databox">
          <p class="field">Alcohol Involvement</p>
          <p class="fieldresponse" id="8pdkF3He"></p>
        </div>
        <div class="databox">
          <p class="field">Drug Involvement</p>
          <p class="fieldresponse" id="tJhmN6cf"></p>
        </div>
      </div>
    </div>
  </div>
</div>
`

export const vehicleHeaderString = `
  <div class="container">
  	<div class="row break-before">
  		<div class="column left half">
  			<h4>Motor Vehicle #</h4>
  			<h4># Occupants</h4>
  		</div>
  		<div class="column right half">
  			<h4>Page # of ##</h4>
  			<h4>Case Number: ######</h4>
  		</div>
  	</div>
`

export const vehicleDataSectionString = `
  <div class="datasection">
    <div class="row boxheader">
      <h3>ownership and insurance</h3>
    </div>
    <div class="row">
      <div class="column third">
        <div class="databox">
          <p class="field"></p>
          <p class="fieldresponse"></p>
        </div>
      </div>
      <div class="column third"></div>
      <div class="column third"></div>
    </div>
  </div>

  <div class="datasection break-after">
    <div class="row boxheader">
      <h3>Vehicle Information</h3>
    </div>
    <div class="row">
      <div class="column">
        <div class="databox">
          <p class="field"></p>
          <p class="fieldresponse"></p>
        </div>
      </div>
      <div class="column"></div>
      <div class="column"></div>
    </div>
  </div>
  </div>
`

export const tailString = `
  </body>
  </html>
`
