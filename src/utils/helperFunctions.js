// generate default filename
export const getDefaultFilename = () => {
    var date = new Date();
    var localTime = date.toLocaleTimeString().replace(/\W/g, '_');
    var localDate = date.getFullYear() + "_" + (date.getMonth()+1) + "_" + date.getDate();
    return "Crash_Report_" + localDate + "_at_" + localTime;
}
