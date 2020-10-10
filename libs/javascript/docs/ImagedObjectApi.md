# QumranicaApiConnector.ImagedObjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EditionsEditionIdImagedObjectsGet**](ImagedObjectApi.md#v1EditionsEditionIdImagedObjectsGet) | **GET** /v1/editions/{editionId}/imaged-objects | Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
[**v1EditionsEditionIdImagedObjectsImagedObjectIdGet**](ImagedObjectApi.md#v1EditionsEditionIdImagedObjectsImagedObjectIdGet) | **GET** /v1/editions/{editionId}/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
[**v1ImagedObjectsImagedObjectIdGet**](ImagedObjectApi.md#v1ImagedObjectsImagedObjectIdGet) | **GET** /v1/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object.
[**v1ImagedObjectsImagedObjectIdTextFragmentsGet**](ImagedObjectApi.md#v1ImagedObjectsImagedObjectIdTextFragmentsGet) | **GET** /v1/imaged-objects/{imagedObjectId}/text-fragments | Provides a list of all text fragments that should correspond to the imaged object.
[**v1ImagedObjectsInstitutionsGet**](ImagedObjectApi.md#v1ImagedObjectsInstitutionsGet) | **GET** /v1/imaged-objects/institutions | Provides a list of all institutional image providers.
[**v1ImagedObjectsInstitutionsInstitutionNameGet**](ImagedObjectApi.md#v1ImagedObjectsInstitutionsInstitutionNameGet) | **GET** /v1/imaged-objects/institutions/{institutionName} | Provides a list of all institutional image providers.



## v1EditionsEditionIdImagedObjectsGet

> ImagedObjectListDTO v1EditionsEditionIdImagedObjectsGet(editionId, opts)

Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ImagedObjectApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'optional': ["null"] // [String] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks
};
apiInstance.v1EditionsEditionIdImagedObjectsGet(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **optional** | [**[String]**](String.md)| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | [optional] 

### Return type

[**ImagedObjectListDTO**](ImagedObjectListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdImagedObjectsImagedObjectIdGet

> ImagedObjectDTO v1EditionsEditionIdImagedObjectsImagedObjectIdGet(editionId, imagedObjectId, opts)

Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ImagedObjectApi();
let editionId = 56; // Number | Unique Id of the desired edition
let imagedObjectId = "imagedObjectId_example"; // String | Unique Id of the desired object from the imaging Institution
let opts = {
  'optional': ["null"] // [String] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks
};
apiInstance.v1EditionsEditionIdImagedObjectsImagedObjectIdGet(editionId, imagedObjectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **imagedObjectId** | **String**| Unique Id of the desired object from the imaging Institution | 
 **optional** | [**[String]**](String.md)| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | [optional] 

### Return type

[**ImagedObjectDTO**](ImagedObjectDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ImagedObjectsImagedObjectIdGet

> SimpleImageListDTO v1ImagedObjectsImagedObjectIdGet(imagedObjectId)

Provides information for the specified imaged object.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ImagedObjectApi();
let imagedObjectId = "imagedObjectId_example"; // String | Unique Id of the desired object from the imaging Institution
apiInstance.v1ImagedObjectsImagedObjectIdGet(imagedObjectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imagedObjectId** | **String**| Unique Id of the desired object from the imaging Institution | 

### Return type

[**SimpleImageListDTO**](SimpleImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ImagedObjectsImagedObjectIdTextFragmentsGet

> ImagedObjectTextFragmentMatchListDTO v1ImagedObjectsImagedObjectIdTextFragmentsGet(imagedObjectId)

Provides a list of all text fragments that should correspond to the imaged object.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ImagedObjectApi();
let imagedObjectId = "imagedObjectId_example"; // String | Id of the imaged object
apiInstance.v1ImagedObjectsImagedObjectIdTextFragmentsGet(imagedObjectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imagedObjectId** | **String**| Id of the imaged object | 

### Return type

[**ImagedObjectTextFragmentMatchListDTO**](ImagedObjectTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ImagedObjectsInstitutionsGet

> ImageInstitutionListDTO v1ImagedObjectsInstitutionsGet()

Provides a list of all institutional image providers.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ImagedObjectApi();
apiInstance.v1ImagedObjectsInstitutionsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ImageInstitutionListDTO**](ImageInstitutionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1ImagedObjectsInstitutionsInstitutionNameGet

> InstitutionalImageListDTO v1ImagedObjectsInstitutionsInstitutionNameGet(institutionName)

Provides a list of all institutional image providers.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ImagedObjectApi();
let institutionName = "institutionName_example"; // String | 
apiInstance.v1ImagedObjectsInstitutionsInstitutionNameGet(institutionName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionName** | **String**|  | 

### Return type

[**InstitutionalImageListDTO**](InstitutionalImageListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

