# QumranicaApiConnector.RoiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EditionsEditionIdRoisBatchEditPost**](RoiApi.md#v1EditionsEditionIdRoisBatchEditPost) | **POST** /v1/editions/{editionId}/rois/batch-edit | Processes a series of create/update/delete ROI requests in the given edition of a scroll
[**v1EditionsEditionIdRoisBatchPost**](RoiApi.md#v1EditionsEditionIdRoisBatchPost) | **POST** /v1/editions/{editionId}/rois/batch | Creates new sign ROI&#39;s in the given edition of a scroll
[**v1EditionsEditionIdRoisBatchPut**](RoiApi.md#v1EditionsEditionIdRoisBatchPut) | **PUT** /v1/editions/{editionId}/rois/batch | Update existing sign ROI&#39;s in the given edition of a scroll
[**v1EditionsEditionIdRoisPost**](RoiApi.md#v1EditionsEditionIdRoisPost) | **POST** /v1/editions/{editionId}/rois | Creates new sign ROI in the given edition of a scroll
[**v1EditionsEditionIdRoisRoiIdDelete**](RoiApi.md#v1EditionsEditionIdRoisRoiIdDelete) | **DELETE** /v1/editions/{editionId}/rois/{roiId} | Deletes a sign ROI from the given edition of a scroll
[**v1EditionsEditionIdRoisRoiIdGet**](RoiApi.md#v1EditionsEditionIdRoisRoiIdGet) | **GET** /v1/editions/{editionId}/rois/{roiId} | Get the details for a ROI in the given edition of a scroll
[**v1EditionsEditionIdRoisRoiIdPut**](RoiApi.md#v1EditionsEditionIdRoisRoiIdPut) | **PUT** /v1/editions/{editionId}/rois/{roiId} | Update an existing sign ROI in the given edition of a scroll



## v1EditionsEditionIdRoisBatchEditPost

> BatchEditRoiResponseDTO v1EditionsEditionIdRoisBatchEditPost(editionId, opts)

Processes a series of create/update/delete ROI requests in the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let opts = {
  'batchEditRoiDTO': new QumranicaApiConnector.BatchEditRoiDTO() // BatchEditRoiDTO | A JSON object with all the roi edits to be performed
};
apiInstance.v1EditionsEditionIdRoisBatchEditPost(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **batchEditRoiDTO** | [**BatchEditRoiDTO**](BatchEditRoiDTO.md)| A JSON object with all the roi edits to be performed | [optional] 

### Return type

[**BatchEditRoiResponseDTO**](BatchEditRoiResponseDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdRoisBatchPost

> InterpretationRoiDTOList v1EditionsEditionIdRoisBatchPost(editionId, opts)

Creates new sign ROI&#39;s in the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let opts = {
  'setInterpretationRoiDTOList': new QumranicaApiConnector.SetInterpretationRoiDTOList() // SetInterpretationRoiDTOList | A JSON object with an array of the new ROI's to be created
};
apiInstance.v1EditionsEditionIdRoisBatchPost(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **setInterpretationRoiDTOList** | [**SetInterpretationRoiDTOList**](SetInterpretationRoiDTOList.md)| A JSON object with an array of the new ROI&#39;s to be created | [optional] 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdRoisBatchPut

> UpdatedInterpretationRoiDTOList v1EditionsEditionIdRoisBatchPut(editionId, opts)

Update existing sign ROI&#39;s in the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let opts = {
  'updateInterpretationRoiDTOList': new QumranicaApiConnector.UpdateInterpretationRoiDTOList() // UpdateInterpretationRoiDTOList | A JSON object with an array of the updated ROI details
};
apiInstance.v1EditionsEditionIdRoisBatchPut(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **updateInterpretationRoiDTOList** | [**UpdateInterpretationRoiDTOList**](UpdateInterpretationRoiDTOList.md)| A JSON object with an array of the updated ROI details | [optional] 

### Return type

[**UpdatedInterpretationRoiDTOList**](UpdatedInterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdRoisPost

> InterpretationRoiDTO v1EditionsEditionIdRoisPost(editionId, opts)

Creates new sign ROI in the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let opts = {
  'setInterpretationRoiDTO': new QumranicaApiConnector.SetInterpretationRoiDTO() // SetInterpretationRoiDTO | A JSON object with the new ROI to be created
};
apiInstance.v1EditionsEditionIdRoisPost(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **setInterpretationRoiDTO** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md)| A JSON object with the new ROI to be created | [optional] 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdRoisRoiIdDelete

> v1EditionsEditionIdRoisRoiIdDelete(editionId, roiId)

Deletes a sign ROI from the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let roiId = 56; // Number | Id of the ROI to be deleted
apiInstance.v1EditionsEditionIdRoisRoiIdDelete(editionId, roiId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **roiId** | **Number**| Id of the ROI to be deleted | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1EditionsEditionIdRoisRoiIdGet

> InterpretationRoiDTO v1EditionsEditionIdRoisRoiIdGet(editionId, roiId)

Get the details for a ROI in the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let roiId = 56; // Number | A JSON object with the new ROI to be created
apiInstance.v1EditionsEditionIdRoisRoiIdGet(editionId, roiId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **roiId** | **Number**| A JSON object with the new ROI to be created | 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdRoisRoiIdPut

> UpdatedInterpretationRoiDTO v1EditionsEditionIdRoisRoiIdPut(editionId, roiId, opts)

Update an existing sign ROI in the given edition of a scroll

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.RoiApi();
let editionId = 56; // Number | Id of the edition
let roiId = 56; // Number | Id of the ROI to be updated
let opts = {
  'setInterpretationRoiDTO': new QumranicaApiConnector.SetInterpretationRoiDTO() // SetInterpretationRoiDTO | A JSON object with the updated ROI details
};
apiInstance.v1EditionsEditionIdRoisRoiIdPut(editionId, roiId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **roiId** | **Number**| Id of the ROI to be updated | 
 **setInterpretationRoiDTO** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md)| A JSON object with the updated ROI details | [optional] 

### Return type

[**UpdatedInterpretationRoiDTO**](UpdatedInterpretationRoiDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

