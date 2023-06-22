const cds = require('@sap/cds');
module.exports = cds.service.impl(async function () {

    this.on("READ", "AccrualsData", readAccuralsData);

});
const readAccuralsData = async (req) => {
        
    let rate = getRateContractor("CID1")
    return {} ;
    
};

async function getRateContractor(contractor){
    const srv = await cds.connect.to('db') ;
    let query = SELECT.from(`MasterData`).where(`ContractorID = '${contractor}'`);
    let masterDataResultfilterContractor = await srv.run(query) ;
    if(masterDataResultfilterContractor.length > 0){
        let ContractorRate = masterDataResultfilterContractor.reduce((total, next) => ( total + Number(next.RatePerHour) ), 0) / masterDataResultfilterContractor.length ;
    }
}