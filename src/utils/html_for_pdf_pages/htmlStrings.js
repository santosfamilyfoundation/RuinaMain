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

      h1, h3, h2 {
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

      h2 {
      	font-weight: 400;
      	font-size: 1.25em;
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

      .full-width {
        width: 100%;
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
      <h4 class="inline right"></h4>
      <h1 class="inline">Ruina Motor Vehicle Crash Report</h1>

      <hr>
    </div>

    <div class="row">
      <div class="column left half">
        <h4># Motor Vehicles</h4>
        <h4># Non-motorists</h4>
        <h4 id="road-severity">Crash Severity: ###</h4>
        <h4 id="road-sourceInfo">Reporting *Officer or Citizen*: ###</h4>
      </div>
      <div class="column right half">
        <h4 id="road-crashIdentifier">Crash Identifier: ###</h4>
        <h4 id="road-agencyIdentifier">Agency Crash Identifier: ###</h4>
        <h4 id="road-lawEnforcementIdentifier">Reporting Agency: ###</h4>
        <h4 class="sig-box">signature</h4>
      </div>
    </div>
  </div>
`

export const crashDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3> Crash date, time, and location</h3>
    </th>
    <tbody>
			<tr>
				<td>
					<p class="field">Crash Date and Time</p>
					<p class="fieldresponse" id="road-dateTimeMilitary"></p>
				</td>
				<td>
					<p class="field">Crash County</p>
					<p class="fieldresponse" id="road-county"></p>
				</td>
				<td>
					<p class="field">Within Interchange Area</p>
					<p class="fieldresponse" id="road-withinInterchange"></p>
				</td>
			</tr>
			<tr>
        <td>
          <p class="field">Time of Roadway Clearance</p>
          <p class="fieldresponse" id="road-timeClearance"></p>
        </td>
        <td>
          <p class="field">Crash City/Place</p>
          <p class="fieldresponse" id="road-city"></p>
        </td>
        <td>
					<p class="field">Specific Location</p>
					<p class="fieldresponse" id="road-specificLocation"></p>
				</td>
			</tr>
      <tr>
        <td rowspan="2">
          <p class="field">Overall Intersection Geometry</p>
					<p class="fieldresponse" id="road-intersectionGeometry"></p>
        </td>
        <td rowspan="2">
          <p class="field">Overall Traffic Control Device</p>
          <p class="fieldresponse" id="road-overallTCD"></p>
        </td>
        <td>
          <p class="field">Latitude</p>
          <p class="fieldresponse" id="road-latitude"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Longitude</p>
          <p class="fieldresponse" id="road-longitude"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Ownership</p>
          <p class="fieldresponse" id="road-ownership"></p>
        </td>
        <td>
          <p class="field">Characteristics</p>
          <p class="fieldresponse" id="road-characteristics"></p>
        </td>
        <td>
          <p class="field">Number of Approaches</p>
          <p class="fieldresponse" id="road-numApproaches"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
        <h3> Crash factors and conditions</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Secondary Crash</p>
          <p class="fieldresponse" id="road-secondary"></p>
        </td>
        <td>
          <p class="field">Weather Condition</p>
          <p class="fieldresponse" id="road-weatherConditions"></p>
        </td>
        <td>
          <p class="field">Number of Non-Fatally Injured Persons</p>
          <p class="fieldresponse" id="PPxIpVat"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">First Harmful Event</p>
          <p class="fieldresponse" id="road-firstHarmfulEvent"></p>
        </td>
        <td>
          <p class="field">Light Condition</p>
          <p class="fieldresponse" id="road-lightConditions"></p>
        </td>
        <td>
          <p class="field">Alcohol Involvement</p>
          <p class="fieldresponse" id="8pdkF3He"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Location of First Harmful Event Relative to the Trafficway</p>
          <p class="fieldresponse" id="road-locationFirstHarmful"></p>
        </td>
        <td>
          <p class="field">Roadway Surface Condition</p>
          <p class="fieldresponse" id="road-surfaceCondition"></p>
        </td>
        <td>
          <p class="field">Drug Involvement</p>
          <p class="fieldresponse" id="tJhmN6cf"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Contributing Circumstances - Roadway Environment</p>
          <p class="fieldresponse" id="road-roadwayEnvironment"></p>
        </td>
        <td>
          <p class="field">School Bus-Related?</p>
          <p class="fieldresponse" id="road-schoolBus"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field"> Manner of Crash/Collision Impact</p>
          <p class="fieldresponse" id="road-mannerCollision"></p>
        </td>
        <td>
          <p class="field">Construction or Work Zone Related?</p>
          <p class="fieldresponse" id="road-workzoneRelated"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Crash Description</h3>
    </th>
    <tbody>
      <tr>
        <td colspan="3">
          <p class="fieldresponse" id="road-description"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break full-width">
      <th class="boxheader" colspan="3">
        <h3>Crash Diagram</h3>
      </th>
      <tbody>
        <tr>
          <td colspan="3">
            <svg class="fieldresponse" id="crashDiagram"></svg>
          </td>
        </tr>
      </tbody>
    </table>
`

export const constructionDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Construction Information</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Crash Location</p>
          <p class="fieldresponse" id="road-locationWorkZone"></p>
        </td>
        <td rowspan="2">
          <p class="field">Type of Work Zone</p>
          <p class="fieldresponse" id="road-typeWorkZone"></p>
        </td>
        <td>
          <p class="field">Workers Present?</p>
          <p class="fieldresponse" id="road-workersPresent"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Law Enforcement Present?</p>
          <p class="fieldresponse" id="road-lawEnforcementPresent"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const vehicleHeaderString = `
  <div class="page-header">
  	<div class="row">
			<h2>Motor Vehicle ###</h2>
      <h4 id="CTfb8pdV"># Occupants: ###</h4>
  	</div>
  </div>
`

export const vehicleDataSectionString1 = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Ownership and Insurance</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
           <p><span id="vehicle-ownerFirst"></span> <span id="vehicle-ownerMiddle"></span> <span id="vehicle-ownerLast"></span></p>
           <p><span id="vehicle-ownerStreet1"></span></p>
           <p><span id="vehicle-ownerCity"></span>, <span id="vehicle-ownerState"></span> <span id="vehicle-ownerZIP"></span></p>
        </td>
       <td rowspan="2">
          <p class="field">Insurance Company Name</p>
          <p class="fieldresponse" id="vehicle-insuranceCompany"></p>
        </td>
        <td>
          <p class="field">NAIC #</p>
          <p class="fieldresponse" id="vehicle-NAIC"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Policy #</p>
          <p class="fieldresponse" id="vehicle-policy"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Vehicle Details</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Vehicle Identification Number</p>
          <p class="fieldresponse" id="vehicle-VIN"></p>
        </td>
        <td>
          <p class="field">Vehicle Unit Type </p>
          <p class="fieldresponse" id="vehicle-motorUnitType"></p>
        </td>
        <td>
          <p class="field">Body Type Category</p>
          <p class="fieldresponse" id="vehicle-bodyType"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle Registration Identifier</p>
          <p class="fieldresponse" id="vehicle-motorRegistration"></p>
        </td>
        <td>
          <p class="field">Vehicle Make</p>
          <p class="fieldresponse" id="vehicle-make"></p>
        </td>
        <td>
          <p class="field">Vehicle Size</p>
          <p class="fieldresponse" id="vehicle-size"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle Registration Year</p>
          <p class="fieldresponse" id="vehicle-yearRegistration"></p>
        </td>
        <td>
          <p class="field">Vehicle Model</p>
          <p class="fieldresponse" id="vehicle-model"></p>
        </td>
        <td>
          <p class="field">Number of Trailing Units</p>
          <p class="fieldresponse" id="vehicle-numTrailingUnits"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">License Plate Number</p>
          <p class="fieldresponse" id="vehicle-licensePlate"></p>
        </td>
        <td>
          <p class="field">Vehicle Model Year</p>
          <p class="fieldresponse" id="vehicle-modelYear"></p>
        </td>
        <td>
          <p class="field">Hazardous Materials Placard?</p>
          <p class="fieldresponse" id="vehicle-hazardousMaterials"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const vehicleDataSectionString2 = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Factors and conditions</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Posted/Statutory Speed Limit</p>
          <p class="fieldresponse" id="vehicle-speedLimit"></p>
        </td>
        <td>
          <p class="field">Travel Directions</p>
          <p class="fieldresponse" id="vehicle-travelDirections"></p>
        </td>
        <td>
          <p class="field">Travel Direction Before Crash</p>
          <p class="fieldresponse" id="vehicle-directionBefore"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Traffic Control Devices (TCDs)</p>
          <p class="fieldresponse" id="vehicle-TCDTypes"></p>
        </td>
        <td rowspan="2">
          <p class="field">Inoperative or Missing TCDs</p>
          <p class="fieldresponse" id="vehicle-TCDInoperativeMissing"></p>
        </td>
        <td>
          <p class="field">Vehicle Maneuver/Action</p>
          <p class="fieldresponse" id="vehicle-maneuverAction"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Barrier Type</p>
          <p class="fieldresponse" id="vehicle-barrierType"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Divided?</p>
          <p class="fieldresponse" id="vehicle-divided"></p>
        </td>
        <td>
          <p class="field">Towed Due to Disabling Damage</p>
          <p class="fieldresponse" id="vehicled-towed"></p>
        </td>
        <td>
          <p class="field">Contributing Circumstances from Vehicle</p>
          <p class="fieldresponse" id="vehicle-contributingCircumstances"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Location of Damage Area(s)</p>
          <p class="fieldresponse" id="vehicle-damageLocation"></p>
        </td>
        <td>
          <p class="field">Initial Point of Contact</p>
          <p class="fieldresponse" id="vehicle-initialPointContact"></p>
        </td>
        <td>
          <p class="field">Resulting Extent of Damage</p>
          <p class="fieldresponse" id="vehicle-resultingExtentDamage"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">HOV/HOT Lanes</p>
          <p class="fieldresponse" id="vehicle-totalLanes"></p>
        </td>
        <td>
          <p class="field">Crash Related to HOV/HOT?</p>
          <p class="fieldresponse" id="vehicle-crashHovHotRelated"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Sequence of Events</p>
          <p class="fieldresponse" id="vehicle-sequence"></p>
        </td>
        <td>
          <p class="field">Emergency Motor Vehicle Use</p>
          <p class="fieldresponse" id="vehicle-emergencyUse"></p>
        </td>
        <td>
          <p class="field">Special Function in Transport</p>
          <p class="fieldresponse" id="vehicle-specialFunction"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Vehicle's Most Harmful Event</p>
          <p class="fieldresponse" id="vehicle-mostHarmfulEvent"></p>
        </td>
        <td>
          <p class="field">Horizontal Alignment</p>
          <p class="fieldresponse" id="vehicle-horizontalAlignment"></p>
        </td>
        <td>
          <p class="field">Total Through Lanes</p>
          <p class="fieldresponse" id="vehicle-throughLanes"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Hit and Run?</p>
          <p class="fieldresponse" id="vehicle-hitRun"></p>
        </td>
        <td>
          <p class="field">Grade</p>
          <p class="fieldresponse" id="vehicle-grade"></p>
        </td>
        <td>
          <p class="field">Total Auxiliary Lanes</p>
          <p class="fieldresponse" id="vehicle-auxillaryLanes"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Has Automated System(s)?</p>
          <p class="fieldresponse" id="vehicle-automatedSystems"></p>
        </td>
        <td>
          <p class="field">Automated System Levels (ASLs)</p>
          <p class="fieldresponse" id="vehicle-automatedSystemsLevels"></p>
        </td>
        <td>
          <p class="field">ASLs Engaged during Crash</p>
          <p class="fieldresponse" id="vehicle-systemsEngaged"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const firstTrailerDataSectionString =`
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>First Trailer Behind Tractor</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">License Plate Number</p>
          <p class="fieldresponse" id="vehicle-firstTrailerLicense"></p>
        </td>
        <td>
          <p class="field">Make</p>
          <p class="fieldresponse" id="vehicle-firstTrailerMake"></p>
        </td>
        <td rowspan="2">
          <p class="field">Model and Year</p>
          <p class="fieldresponse"><span id="vehicle-firstTrailerModel"></span> <span id="vehicle-firstTrailerModelYear"></span></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">VIN</p>
          <p class="fieldresponse" id="vehicle-firstTrailerVin"></p>
        </td>
        <td>
          <p class="field">Total Number of Axles</p>
          <p class="fieldresponse" id="vehicle-firstTrailerAxles"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const secondTrailerDataSectionString =`
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Second Trailer Behind Tractor</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">License Plate Number</p>
          <p class="fieldresponse" id="vehicle-secondTrailerLicense"></p>
        </td>
        <td>
          <p class="field">Make</p>
          <p class="fieldresponse" id="vehicle-secondTrailerMake"></p>
        </td>
        <td rowspan="2">
          <p class="field">Model and Year</p>
          <p class="fieldresponse"><span id="vehicle-secondTrailerModel"></span> <span id="vehicle-secondTrailerModelYear"></span></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">VIN</p>
          <p class="fieldresponse" id="vehicle-secondTrailerVin"></p>
        </td>
        <td>
          <p class="field">Total Number of Axles</p>
          <p class="fieldresponse" id="vehicle-secondTrailerAxles"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const thirdTrailerDataSectionString =`
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Third Trailer Behind Tractor</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">License Plate Number</p>
          <p class="fieldresponse" id="vehicle-thirdTrailerLicense"></p>
        </td>
        <td>
          <p class="field">Make</p>
          <p class="fieldresponse" id="vehicle-thirdTrailerMake"></p>
        </td>
        <td rowspan="2">
          <p class="field">Model and Year</p>
          <p class="fieldresponse"><span id="vehicle-thirdTrailerModel"></span> <span id="vehicle-thirdTrailerModelYear"></span></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">VIN</p>
          <p class="fieldresponse" id="vehicle-thirdTrailerVin"></p>
        </td>
        <td>
          <p class="field">Total Number of Axles</p>
          <p class="fieldresponse" id="vehicle-thirdTrailerAxles"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const lvhmVehicleDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Motor Carrier Identification</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
        <p><span id="vehicle-carrierName"></span></p>
        <p id="vehicle-carrierStreetAddress"></p>
        <p><span id="vehicle-carrierCityTown"></span>, <span id="vehicle-carrierState"></span> <span id="vehicle-carrierZIP"></span></p>
        </td>
        <td>
          <p class="field">Identification Type</p>
          <p class="fieldresponse" id="vehicle-identificationType"></p>
        </td>
        <td>
          <p class="field">Identification Number</p>
          <p class="fieldresponse" id="vehicle-identificationNum"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Country/State Code</p>
          <p class="fieldresponse" id="vehicle-countryStateCode"></p>
        </td>
        <td>
          <p class="field"> Type of Carrier</p>
          <p class="fieldresponse" id="vehicle-carrierType"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Vehicle Configuration</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Configuration</p>
          <p class="fieldresponse" id="vehicle-configuration"></p>
        </td>
        <td>
          <p class="field">Special Sizing</p>
          <p class="fieldresponse" id="vehicle-specialSizing"></p>
        </td>
        <td>
          <p class="field">Permitted?</p>
          <p class="fieldresponse" id="vehicle-permitted"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Number of Axles on Tractor</p>
          <p class="fieldresponse" id="vehicle-truckAxles"></p>
        </td>
        <td>
          <p class="field">Cargo Body Type</p>
          <p class="fieldresponse" id="vehicle-cargoBodyType"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const hazardousDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Hazardous Materials</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Hazardous Materials ID</p>
          <p class="fieldresponse" id="vehicle-hazardousMaterialsID"></p>
        </td>
        <td>
          <p class="field">Hazardous Materials Class</p>
          <p class="fieldresponse" id="vehicle-hazardousMaterialsClass"></p>
        </td>
        <td>
          <p class="field">Release of hazardous materials from a cargo compartment, container, or package?</p>
          <p class="fieldresponse" id="vehicles-releaseHazardousMaterials"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const driverHeaderString = `
  <div class="page-header">
    <div class="row">
      <div class="column left half">
        <h2>Driver of Motor Vehicle ###</h2>
        <h4 id="driver-injuryStatus">Injury Status: ###</h4>
      </div>
      <div class="column right half">
        <h4><br></h4>
        <h4 id="driver-incidentResponder">Incident Responder?: ###</h4>
      </div>
    </div>
  </div>
`

export const driverDataSectionString1 = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Driver and License Information</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="3">
          <p><span id="driver-firstName"></span> <span id="driver-middleName"></span> <span id="driver-lastName"></span></p>
          <p>DOB:<span id="driver-dob"></span></p>
          <p>Sex: <span id="driver-sex"></span></p>
          <p><span id="driver-streetAddress1"></span></p>
          <p id="driver-streetAddress2"></p>
          <p><span id="driver-city"></span>, <span id="driver-state"></span> <span id="driver-zip"></span></p>
        </td>
        <td>
          <p class="field">License Type</p>
          <p class="fieldresponse" id="driver-jurisdictionType"></p>
        </td>
        <td>
          <p class="field">Name of Jurisdiction</p>
          <p class="fieldresponse" id="driver-jurisdictionName"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">License Number</p>
          <p class="fieldresponse" id="driver-licenseNum"></p>
        </td>
        <td>
          <p class="field">License Endorsements</p>
          <p class="fieldresponse" id="driver-CDLEndorsements"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">License Class</p>
          <p class="fieldresponse" id="driver-licenseClass"></p>
        </td>
         <td>
          <p class="field">Commercial Driver License (CDL)?</p>
          <p class="fieldresponse" id="driver-CDL"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const driverDataSectionString2 = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Factors and Conditions</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">Seating Position</p>
          <p class="fieldresponse" id="driver-seatingPos"></p>
        </td>
        <td>
          <p class="field">Speeding-Related?</p>
          <p class="fieldresponse" id="driver-speeding"></p>
        </td>
        <td>
          <p class="field">Suspected Alcohol Use?</p>
          <p class="fieldresponse" id="driver-suspectedAlcohol"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Restraint Systems or Motorcycle Helmet Use</p>
          <p class="fieldresponse" id="driver-restraintInUse"></p>
        </td>
        <td rowspan="2">
          <p class="field">Actions at Time of Crash</p>
          <p class="fieldresponse" id="driver-actions"></p>
        </td>
        <td>
          <p class="field">Alcohol Test Status</p>
          <p class="fieldresponse" id="driver-alcoholTestStatus"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Alcohol Test Type</p>
          <p class="fieldresponse" id="driver-alcoholTestType"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Indication of Improper Use?</p>
          <p class="fieldresponse" id="driver-improperUse"></p>
        </td>
        <td>
          <p class="field">Violation Codes</p>
          <p class="fieldresponse" id="driver-violationCodes"></p>
        </td>
        <td>
          <p class="field">Suspected Drug Use?</p>
          <p class="fieldresponse" id="driver-suspectedDrug"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Air Bag Deployed?</p>
          <p class="fieldresponse" id="driver-airbag"></p>
        </td>
        <td rowspan="2">
          <p class="field">Condition at Time of Crash</p>
          <p class="fieldresponse" id="driver-condition"></p>
        </td>
        <td>
          <p class="field">Drug Test Status</p>
          <p class="fieldresponse" id="driver-drugTestStatus"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Drug Test Type</p>
          <p class="fieldresponse" id="driver-drugTestType"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Ejection?</p>
          <p class="fieldresponse" id="driver-ejection"></p>
        </td>
        <td rowspan="2">
          <p class="field">Source of Distraction</p>
          <p class="fieldresponse" id="driver-distractionSource"></p>
        </td>
        <td rowspan="2">
          <p class="field">Attempted Avoidance Maneuver</p>
          <p class="fieldresponse" id="driver-attemptedAvoidance"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Distraction Type</p>
          <p class="fieldresponse" id="driver-distractionSource"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const lvhmDriverDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Large Vehicles and Hazardous Material Information</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p class="field">CMV License Status</p>
          <p class="fieldresponse" id="driver-CMVStatus"></p>
        </td>
        <td colspan="2">
          <p class="field">Compliance with CDL Endorsement(s)</p>
          <p class="fieldresponse" id="driver-complianceCDL"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const injuryDriverDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Injury Information</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Transport Source to First Medical Facility</p>
          <p class="fieldresponse" id="driver-transportSource"></p>
        </td>
        <td rowspan="2">
          <p class="field">Medical Facility Receiving Patient</p>
          <p class="fieldresponse" id="driver-medicalFacility"></p>
        </td>
        <td>
          <p class="field">EMS Response Agency Identifier</p>
          <p class="fieldresponse" id="driver-EMSIdentifier"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">EMS Response Run Number</p>
          <p class="fieldresponse" id="driver-EMSRunNum"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const passengerHeaderString = `
  <div class="page-header">
    <div class="row">
      <div class="column left half">
        <h2>Occupant ### of Motor Vehicle ###</h2>
        <h4 id="passenger-injuryStatus">Injury Status: ###</h4>
      </div>
      <div class="column right half">
        <h4>Type: ###</h4>
        <h4 id="passenger-incidentResponder">Incident Responder?: ###</h4>
      </div>
    </div>
  </div>
`

export const passengerDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>occupant identity and crash factors</h3>
    </th>
    <tbody>
      <tr>
        <td>
          <p><span id="passenger-firstName"></span> <span id="passenger-middleName"></span> <span id="passenger-lastName"></span></p>
          <p>DOB:<span id="passenger-dob"></span></p>
          <p>Sex: <span id="passenger-sex"></span></p>
        </td>
        <td>
          <p class="field">Seating Position</p>
          <p class="fieldresponse" id="passenger-seatingPos"></p>
        </td>
        <td>
          <p class="field">Air Bag Deployed?</p>
          <p class="fieldresponse" id="passenger-airbag"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Restraint Systems or Motorcycle Helmet Use</p>
          <p class="fieldresponse" id="passenger-restraintsInUse"></p>
        </td>
        <td>
          <p class="field">Indication of Improper Use?</p>
          <p class="fieldresponse" id="passenger-improperUse"></p>
        </td>
        <td>
          <p class="field">Ejection?</p>
          <p class="fieldresponse" id="passenger-ejection"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const injuryPassengerDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Injury Information</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Medical Facility Receiving Patient</p>
          <p class="fieldresponse" id="passenger-medicalFacility"></p>
        </td>
        <td rowspan="2">
          <p class="field">Transport Source to First Medical Facility</p>
          <p class="fieldresponse" id="passenger-transportSource"></p>
        </td>
        <td>
          <p class="field">EMS Response Agency Identifier</p>
          <p class="fieldresponse" id="passenger-EMSIdentifier"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">EMS Response Run Number</p>
          <p class="fieldresponse" id="passenger-EMSRunNumber"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const nonmotoristHeaderString = `
  <div class="page-header">
    <div class="row">
      <div class="column left half">
        <h2>Non-Motorist ###</h2>
        <h4 id="nonmotorist-injuryStatus">Injury Status: ###</h4>
      </div>
      <div class="column right half">
        <h4 id="nonmotorist-personType">Type: ###</h4>
        <h4 id="nonmotorist-incidentResponder">Incident Responder?: ###</h4>
      </div>
    </div>
  </div>
`

export const nonmotoristDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Contact Information and Crash Involvement</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p><span id="nonmotorist-firstName"></span> <span id="nonmotorist-middleName"></span> <span id="nonmotorist-lastName"></span></p>
          <p>DOB:<span id="nonmotorist-dob"></span></p>
          <p>Sex: <span id="nonmotorist-sex"></span></p>
          <p><span id="nonmotorist-streetAddress1"></span></p>
          <p id="nonmotorist-streetAddress2"></p>
          <p><span id="nonmotorist-city"></span>, <span id="nonmotorist-state"></span> <span id="nonmotorist-zip"></span></p>
        </td>
        <td>
          <p class="field">Motor Vehicle # that Struck Non-Motorist</p>
          <p class="fieldresponse" id="nonmotorist-unitNum"></p>
        </td>
        <td>
          <p class="field">Origin/Destination at Time of Crash</p>
          <p class="fieldresponse" id="nonmotorist-originDestination"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Initial Contact Point on Non-Motorist</p>
          <p class="fieldresponse" id="nonmotorist-initialContactPoint"></p>
        </td>
        <td>
          <p class="field">Location at Time of Crash</p>
          <p class="fieldresponse" id="nonmotorist-locationAtCrash"></p>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Factors and Conditions</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Condition at Time of Crash</p>
          <p class="fieldresponse" id="nonmotorist-condition"></p>
        </td>
        <td rowspan="2">
          <p class="field">Safety Equipment(s)</p>
          <p class="fieldresponse" id="nonmotorist-safetyEquipment"></p>
        </td>
        <td>
          <p class="field">Suspected Alcohol Use?</p>
          <p class="fieldresponse" id="nonmotorist-suspectedAlcohol"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Alcohol Test Status</p>
          <p class="fieldresponse" id="nonmotorist-alcoholTestStatus"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Action/Circumstance at Time of Crash</p>
          <p class="fieldresponse" id="nonmotorist-actionCircumstance"></p>
        </td>
        <td rowspan="2">
          <p class="field">Distraction Type</p>
          <p class="fieldresponse" id="nonmotorist-distractionSource"></p>
        </td>
        <td>
          <p class="field">Alcohol Test Type</p>
          <p class="fieldresponse" id="nonmotorist-alcoholTestType"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Suspected Drug Use?</p>
          <p class="fieldresponse" id="nonmotorist-suspectedDrug"></p>
        </td>
      </tr>
      <tr>
        <td rowspan="2">
          <p class="field">Contributing Circumstances from Non-Motorist</p>
          <p class="fieldresponse" id="nonmotorist-contributingAction"></p>
        </td>
        <td rowspan="2">
          <p class="field">Source of Distraction</p>
          <p class="fieldresponse" id="nonmotorist-distractionSource"></p>
        </td>
        <td>
          <p class="field">Drug Test Status</p>
          <p class="fieldresponse" id="nonmotorist-drugTestStatus"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">Drug Test Type</p>
          <p class="fieldresponse" id="nonmotorist-drugTestType"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const injuryNonmotoristDataSectionString = `
  <table class="avoid-break full-width">
    <th class="boxheader" colspan="3">
      <h3>Injury Information</h3>
    </th>
    <tbody>
      <tr>
        <td rowspan="2">
          <p class="field">Transport Source to First Medical Facility</p>
          <p class="fieldresponse" id="nonmotorist-sourceTransport"></p>
        </td>
        <td rowspan="2">
          <p class="field">Medical Facility Receiving Patient</p>
          <p class="fieldresponse" id="nonmotorist-medicalFacility"></p>
        </td>
        <td>
          <p class="field">EMS Response Agency Identifier</p>
          <p class="fieldresponse" id="nonmotorist-EMSIdentifier"></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="field">EMS Response Run Number</p>
          <p class="fieldresponse" id="nonmotorist-EMSRunNumber"></p>
        </td>
      </tr>
    </tbody>
  </table>
`

export const tailString = `
  </body>
  </html>
`
