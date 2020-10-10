# QumranicaApiConnector.CatalogueApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete**](CatalogueApi.md#v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete) | **DELETE** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Remove an existing imaged object and text fragment match, which is not correct
[**v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost**](CatalogueApi.md#v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost) | **POST** /v1/catalogue/confirm-match/{iaaEditionCatalogToTextFragmentId} | Confirm the correctness of an existing imaged object and text fragment match
[**v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet**](CatalogueApi.md#v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet) | **GET** /v1/catalogue/editions/{editionId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition
[**v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet**](CatalogueApi.md#v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet) | **GET** /v1/catalogue/imaged-objects/{imagedObjectId}/text-fragments | Get a listing of all text fragments matches that correspond to an imaged object
[**v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet**](CatalogueApi.md#v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet) | **GET** /v1/catalogue/manuscripts/{manuscriptId}/imaged-object-text-fragment-matches | Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript
[**v1CataloguePost**](CatalogueApi.md#v1CataloguePost) | **POST** /v1/catalogue | Create a new matched pair for an imaged object and a text fragment along with the edition princeps information
[**v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet**](CatalogueApi.md#v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet) | **GET** /v1/catalogue/text-fragments/{textFragmentId}/imaged-objects | Get a listing of all imaged objects that matches that correspond to a transcribed text fragment



## v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete

> v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(iaaEditionCatalogToTextFragmentId)

Remove an existing imaged object and text fragment match, which is not correct

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let iaaEditionCatalogToTextFragmentId = 56; // Number | The unique id of the match to confirm
apiInstance.v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdDelete(iaaEditionCatalogToTextFragmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iaaEditionCatalogToTextFragmentId** | **Number**| The unique id of the match to confirm | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost

> v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(iaaEditionCatalogToTextFragmentId)

Confirm the correctness of an existing imaged object and text fragment match

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let iaaEditionCatalogToTextFragmentId = 56; // Number | The unique id of the match to confirm
apiInstance.v1CatalogueConfirmMatchIaaEditionCatalogToTextFragmentIdPost(iaaEditionCatalogToTextFragmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iaaEditionCatalogToTextFragmentId** | **Number**| The unique id of the match to confirm | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet

> CatalogueMatchListDTO v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(editionId)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified edition

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let editionId = 56; // Number | Unique Id of the edition to search for imaged objects to text fragment matches
apiInstance.v1CatalogueEditionsEditionIdImagedObjectTextFragmentMatchesGet(editionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the edition to search for imaged objects to text fragment matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet

> CatalogueMatchListDTO v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(imagedObjectId)

Get a listing of all text fragments matches that correspond to an imaged object

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let imagedObjectId = "imagedObjectId_example"; // String | Id of imaged object to search for transcription matches
apiInstance.v1CatalogueImagedObjectsImagedObjectIdTextFragmentsGet(imagedObjectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imagedObjectId** | **String**| Id of imaged object to search for transcription matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet

> CatalogueMatchListDTO v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(manuscriptId)

Get a listing of all corresponding imaged objects and transcribed text fragment in a specified manuscript

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let manuscriptId = 56; // Number | Unique Id of the manuscript to search for imaged objects to text fragment matches
apiInstance.v1CatalogueManuscriptsManuscriptIdImagedObjectTextFragmentMatchesGet(manuscriptId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manuscriptId** | **Number**| Unique Id of the manuscript to search for imaged objects to text fragment matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1CataloguePost

> v1CataloguePost(opts)

Create a new matched pair for an imaged object and a text fragment along with the edition princeps information

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let opts = {
  'catalogueMatchInputDTO': new QumranicaApiConnector.CatalogueMatchInputDTO() // CatalogueMatchInputDTO | The details of the new match
};
apiInstance.v1CataloguePost(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogueMatchInputDTO** | [**CatalogueMatchInputDTO**](CatalogueMatchInputDTO.md)| The details of the new match | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet

> CatalogueMatchListDTO v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(textFragmentId)

Get a listing of all imaged objects that matches that correspond to a transcribed text fragment

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.CatalogueApi();
let textFragmentId = 56; // Number | Unique Id of the text fragment to search for imaged object matches
apiInstance.v1CatalogueTextFragmentsTextFragmentIdImagedObjectsGet(textFragmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textFragmentId** | **Number**| Unique Id of the text fragment to search for imaged object matches | 

### Return type

[**CatalogueMatchListDTO**](CatalogueMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

