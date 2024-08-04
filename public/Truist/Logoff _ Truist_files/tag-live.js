(function(networkId) {
var automaticIntegrations = {};

var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("business_unit", "Last", "URLParam", ""); }, paramName: "business_unit", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("business_unit_name", "Unique", "URLParam", ""); }, paramName: "business_unit_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "URLParam", ""); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("campaign_name", "Last", "URLParam", ""); }, paramName: "campaign_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("cid", "Last", "URLParam", ""); }, paramName: "cid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("currentPage", "Last", "JavascriptDataLayer", "window.location.href.split('?')[0]"); }, paramName: "currentPage", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("icid", "Last", "URLParam", ""); }, paramName: "icid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("irid", "Last", "URLParam", ""); }, paramName: "irid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("location", "Last", "URLParam", ""); }, paramName: "location", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mcvid", "Last", "URLParam", ""); }, paramName: "mcvid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("referrer", "Last", "JavascriptDataLayer", "document.referrer || \"Direct\""); }, paramName: "referrer", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("sid", "Last", "URLParam", ""); }, paramName: "sid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("s_vi", "Last", "Cookie", "s_vi"); }, paramName: "s_vi", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ua", "Last", "JavascriptDataLayer", "navigator.userAgent"); }, paramName: "ua", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("url", "Last", "URLParam", ""); }, paramName: "url", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("us", "Last", "URLParam", ""); }, paramName: "us", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_keyword", "Last", "URLParam", ""); }, paramName: "utm_keyword", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } }
];

var defaultCampaignId = "1234567890";

var destinationSettings = {
  paramName: "invoca_detected_destination"
};

var numbersToReplace = {
  "+18339380964": "MMA_Deepening_Campaign"
};

var organicSources = true;

var reRunAfter = null;

var requiredParams = null;

var resetCacheOn = ['gclid', 'utm_source', 'utm_medium'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    options.integrations = {
   adobeAnalytics: {
     username: "AA7A3BC75245B3BC0A490D4D@AdobeOrg",
     paramName: "s_vi"
   }
 };
 
 options.onPhoneNumberFound=function(node, requestData){
  Invoca.Client.checkUrlToTrack = function(){
    var newLocationToTrack = ["/small-business/banking/savings-account/mma-nbcstate-offer", "/small-business/banking/savings-account/mma-nbc-offer"];
    return newLocationToTrack.find(value => location.pathname.includes(value))
  }
     
  if((window.location.href.includes("https://www.truist.com/mortgage")&&cid.startsWith("PS")) || Invoca.Client.checkUrlToTrack()){
      return true;
  };
    return false;
}
 
return options;
  };

  return true;
})();

var generatedOptions = {
  active:              true,
  autoSwap:            true,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  dataSilo:            "us",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    [],
  doNotSwap:           ["844-4TRUIST", "844-487-8478", "855-411-2372", "877-807-1043"],
  integrations:        automaticIntegrations,
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(944);
