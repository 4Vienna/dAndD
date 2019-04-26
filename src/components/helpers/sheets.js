export default {
  apiKey: "AIzaSyCs_Dn5AVyDIpYyPjcJ91VZAfunX6iOOaQ",
  discoveryDocs: ["AIzaSyCs-l_G1at39kJAZZGbYXcDF63caKehzQw"],
  spreadsheetId: "1xy8AfcbIeyP0FLQFmscVbvl1STeL--mghk-VnCCVjBU"
};

const { google } = require("googleapis");
var sheets = google.sheets("v4");

authorize(function(authClient) {
  var request = {
    spreadsheetId: "1xy8AfcbIeyP0FLQFmscVbvl1STeL--mghk-VnCCVjBU",
    range: "Characters B3:B50",
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: "ValueRenderOption.FORMATTED_VALUE",
    auth: authClient
  };

  sheets.spreadsheets.values.get(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response.values, 2));
  });
});

function authorize(callback) {
  var authClient = "https://www.googleapis.com/auth/spreadsheets.readonly";
  if (authClient == null) {
    console.log("authentication failed");
    return;
  }
  callback(authClient);
}
