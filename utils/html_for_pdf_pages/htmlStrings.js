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
        background: white;
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
<div class="break-after"></div>
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
`

export const vehicleDataSectionString = `
  <div class="datasection">
    <div class="row boxheader">
      <h3>ownership and insurance</h3>
    </div>
    <div class="row">
      <div class="column third">
        <div class="databox">
          <p class="field">Owner's First Name</p>
          <p class="fieldresponse" id="YyQ6jMwd"></p>
        </div>
        <div class="databox">
          <p class="field">Owner's Middle Initial</p>
          <p class="fieldresponse" id="SulL32si"></p>
        </div>
        <div class="databox">
          <p class="field">Owner's Last Name</p>
          <p class="fieldresponse" id="zOGjRlMJ"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Insurance Company Name</p>
          <p class="fieldresponse" id="TDkAb1u9"></p>
        </div>
        <div class="databox">
          <p class="field">NAIC #</p>
          <p class="fieldresponse" id="iWGTReJ5"></p>
        </div>
        <div class="databox">
          <p class="field">Policy #</p>
          <p class="fieldresponse" id="RGPLYKWA"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Owner's Street Address</p>
          <p class="fieldresponse" id="ywUJNXkj"></p>
        </div>
        <div class="databox">
          <p class="field">Owner's City/Town</p>
          <p class="fieldresponse" id="4G5ht6pl"></p>
        </div>
        <div class="databox">
          <p class="field">Owner's State</p>
          <p class="fieldresponse" id="3g8Oxu93"></p>
        </div>
        <div class="databox">
          <p class="field">Owner's ZIP Code</p>
          <p class="fieldresponse" id="crxPGHSm"></p>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="datasection break-after">
    <div class="row boxheader">
      <h3>Vehicle Information</h3>
    </div>
    <div class="row">
      <div class="column third">
        <div class="databox">
          <p class="field">Vehicle Identification Number</p>
          <p class="fieldresponse" id="Bw7d2KTr"></p>
        </div>
        <div class="databox">
          <p class="field">Vehicle Registration Identifier</p>
          <p class="fieldresponse" id="d7zJ5NIq"></p>
        </div>
        <div class="databox">
          <p class="field">Vehicle Registration Year</p>
          <p class="fieldresponse" id="QoX1IOdG"></p>
        </div>
        <div class="databox">
          <p class="field">License Plate Number</p>
          <p class="fieldresponse" id="vDnyDl5t"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Vehicle Unit Type </p>
          <p class="fieldresponse" id="Dpk0wqnI"></p>
        </div>
        <div class="databox">
          <p class="field">Vehicle Make</p>
          <p class="fieldresponse" id="eZglw8FV"></p>
        </div>
        <div class="databox">
          <p class="field">Vehicle Model</p>
          <p class="fieldresponse" id="29h5OiPC"></p>
        </div>
        <div class="databox">
          <p class="field">Vehicle Model Year</p>
          <p class="fieldresponse" id="C0rbnXHC"></p>
        </div>
      </div>
      <div class="column third">
        <div class="databox">
          <p class="field">Body Type Category</p>
          <p class="fieldresponse" id="MMkwgaog"></p>
        </div>
        <div class="databox">
          <p class="field">Vehicle Size</p>
          <p class="fieldresponse" id="CynWHwxP"></p>
        </div>
        <div class="databox">
          <p class="field">Number of Trailing Units</p>
          <p class="fieldresponse" id="ovVntlnU"></p>
        </div>
        <div class="databox">
          <p class="field">Hazardous Materials Placard?</p>
          <p class="fieldresponse" id="sM5HGjcV"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="break-after"></div>
  <div class="page-header">
  	<div class="row">
  		<div class="column right half">
  			<h4>Page ### of ###</h4>
  		</div>
  	</div>
    <div class="datasection">
      <div class="row boxheader">
        <h3>Vehicle Crash Information</h3>
      </div>
      <div class="row">
        <div class="column third">
          <div class="databox">
            <p class="field">Posted/Statutory Speed Limit</p>
            <p class="fieldresponse" id="wAqrAfiG"></p>
          </div>
          <div class="databox">
            <p class="field">Travel Direction Before Crash</p>
            <p class="fieldresponse" id="CP4soemD"></p>
          </div>
          <div class="databox">
            <p class="field">Vehicle Maneuver/Action</p>
            <p class="fieldresponse" id="DJ4YPDuQ"></p>
          </div>
          <div class="databox">
            <p class="field">Initial Point of Contact</p>
            <p class="fieldresponse" id="4KpRmZXB"></p>
          </div>
          <div class="databox">
            <p class="field">Location of Damage Area(s)</p>
            <p class="fieldresponse" id="lZDkbTdw"></p>
          </div>
          <div class="databox">
            <p class="field">Resulting Extent of Damage</p>
            <p class="fieldresponse" id="a1fPOVyS"></p>
          </div>
          <div class="databox">
            <p class="field">Sequence of Events</p>
            <p class="fieldresponse" id="N1NDCJhB"></p>
          </div>
          <div class="databox">
            <p class="field">Vehicle's Most Harmful Event</p>
            <p class="fieldresponse" id="9WuImDSX"></p>
          </div>
          <div class="databox">
            <p class="field">Hit and Run</p>
            <p class="fieldresponse" id="4EHCUQHM"></p>
          </div>
        </div>
        <div class="column third">
          <div class="databox">
            <p class="field">Travel Directions</p>
            <p class="fieldresponse" id="udnyu4F5"></p>
          </div>
          <div class="databox">
            <p class="field">Divided?</p>
            <p class="fieldresponse" id="u5KrpsMu"></p>
          </div>
          <div class="databox">
            <p class="field">Barrier Type</p>
            <p class="fieldresponse" id="4P4o8TWH"></p>
          </div>
          <div class="databox">
            <p class="field">HOV/HOT Lanes</p>
            <p class="fieldresponse" id="Gk088QR4"></p>
          </div>
          <div class="databox">
            <p class="field">Crash Related to HOV/HOT?</p>
            <p class="fieldresponse" id="Uzw63nI0"></p>
          </div>
          <div class="databox">
            <p class="field">Total Through Lanes</p>
            <p class="fieldresponse" id="FdF7XvAQ"></p>
          </div>
          <div class="databox">
            <p class="field">Total Auxiliary Lanes</p>
            <p class="fieldresponse" id="JwQN2ENk"></p>
          </div>
          <div class="databox">
            <p class="field">Horizontal Alignment</p>
            <p class="fieldresponse" id="UigT0ygk"></p>
          </div>
          <div class="databox">
            <p class="field">Grade</p>
            <p class="fieldresponse" id="tFYqNzmA"></p>
          </div>
        </div>
        <div class="column third">
          <div class="databox">
            <p class="field">Traffic Control Devices (TCDs)</p>
            <p class="fieldresponse" id="xBm1Bisf"></p>
          </div>
          <div class="databox">
            <p class="field">Inoperative or Missing TCDs</p>
            <p class="fieldresponse" id="YLcktHvs"></p>
          </div>
          <div class="databox">
            <p class="field">Towed Due to Disabling Damage</p>
            <p class="fieldresponse" id="pTV8x6So"></p>
          </div>
          <div class="databox">
            <p class="field">Contributing Circumstances from Vehicle</p>
            <p class="fieldresponse" id="PzKUFMw0"></p>
          </div>
          <div class="databox">
            <p class="field">Special Function in Transport</p>
            <p class="fieldresponse" id="4vrmnvfC"></p>
          </div>
          <div class="databox">
            <p class="field">Emergency Motor Vehicle Use</p>
            <p class="fieldresponse" id="CFa8RCtt"></p>
          </div>
          <div class="databox">
            <p class="field">Has Automated System(s)?</p>
            <p class="fieldresponse" id="krQbh0po"></p>
          </div>
          <div class="databox">
            <p class="field">Automated System Levels (ASLs)</p>
            <p class="fieldresponse" id="d4OE8GnI"></p>
          </div>
          <div class="databox">
            <p class="field">ASLs Engaged during Crash</p>
            <p class="fieldresponse" id="zk6QtmkD"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="break-after"></div>
`

export const tailString = `
  </body>
  </html>
`
