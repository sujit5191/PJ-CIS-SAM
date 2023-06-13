const XLSX = require('xlsx');


module.exports = cds.service.impl(async function () {
    this.on("READ", "AccrualsData", readAccuralsData);

});
const readAccuralsData = async (req, next) => {

    const axios = require('axios');
    const xlsx = require('xlsx');
    const spauth = require('node-sp-auth');
    
    async function readExcelFileFromSharePoint(url, username, password) {
      try {
        // //Obtain CSRF token from SharePoint
        // const getTokenUrl = `${url}/_api/contextinfo`;
        // const tokenResponse = await axios.post(getTokenUrl, null, {
        //   auth: {
        //     username: username,
        //     password: password
        //   }
        // });
        let siteUrl = `https://suncor.sharepoint.com/sites/2DayClose/Shared Documents/Forms/AllItems.aspx?RootFolder=/sites/2DayClose` ;
        const credentials = await spauth.getAuth(siteUrl, {
            username: username,
            password: password
          });
    
        //const csrfToken = tokenResponse.data.d.GetContextWebInformation.FormDigestValue;
    
        // Read the Excel file from SharePoint with CSRF token
        //const getFileUrl = `${url}/_api/web/GetFileByServerRelativeUrl('${url}')/$value`;
        const fileResponse = await axios.get(url, {
        //   headers: {
        //     'X-RequestDigest': csrfToken
        //   },
          headers: credentials,
        //   auth: {
        //     username: username,
        //     password: password
        //   },
          responseType: 'arraybuffer'
        });
    
        const workbook = xlsx.read(fileResponse.data, { type: 'buffer' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx.utils.sheet_to_json(worksheet);
    
        return data;
      } catch (error) {
        console.error('Error reading Excel file from SharePoint:', error);
      }
    }
    
    // Specify the SharePoint file URL and authentication credentials
    const fileUrl = 'https://suncor.sharepoint.com/:x:/r/sites/2DayClose/_layouts/15/Doc.aspx?sourcedoc=%7B014C19F9-C439-429D-A641-7B1DB7F5B621%7D&file=Copy%20of%20ESSR_working%20file.xlsx';
    const username = 'skumar@convergentis.com';
    const password = '8dd48d6a#SK';
    
    // Read the Excel file from SharePoint
    readExcelFileFromSharePoint(fileUrl, username, password)
      .then(data => {
        console.log(data);
      });
    
};