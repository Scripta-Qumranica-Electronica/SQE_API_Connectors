# SqeApi.TextApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EditionsEditionIdLinesLineIdGet**](TextApi.md#v1EditionsEditionIdLinesLineIdGet) | **GET** /v1/editions/{editionId}/lines/{lineId} | Retrieves all signs and their data from the given line
[**v1EditionsEditionIdTextFragmentsGet**](TextApi.md#v1EditionsEditionIdTextFragmentsGet) | **GET** /v1/editions/{editionId}/text-fragments | Retrieves the ids of all Fragments of all fragments in the given edition of a scroll
[**v1EditionsEditionIdTextFragmentsPost**](TextApi.md#v1EditionsEditionIdTextFragmentsPost) | **POST** /v1/editions/{editionId}/text-fragments | Creates a new text fragment in the given edition of a scroll
[**v1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet**](TextApi.md#v1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId}/artefacts | Retrieves the ids of all Artefacts in the given textFragmentName
[**v1EditionsEditionIdTextFragmentsTextFragmentIdGet**](TextApi.md#v1EditionsEditionIdTextFragmentsTextFragmentIdGet) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Retrieves all signs and their data from the given textFragmentName
[**v1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet**](TextApi.md#v1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet) | **GET** /v1/editions/{editionId}/text-fragments/{textFragmentId}/lines | Retrieves the ids of all lines in the given textFragmentName
[**v1EditionsEditionIdTextFragmentsTextFragmentIdPut**](TextApi.md#v1EditionsEditionIdTextFragmentsTextFragmentIdPut) | **PUT** /v1/editions/{editionId}/text-fragments/{textFragmentId} | Updates the specified text fragment with the submitted properties



## v1EditionsEditionIdLinesLineIdGet

> LineTextDTO v1EditionsEditionIdLinesLineIdGet(editionId, lineId)

Retrieves all signs and their data from the given line

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Id of the edition
let lineId = 56; // Number | Id of the line
apiInstance.v1EditionsEditionIdLinesLineIdGet(editionId, lineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **lineId** | **Number**| Id of the line | 

### Return type

[**LineTextDTO**](LineTextDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdTextFragmentsGet

> TextFragmentDataListDTO v1EditionsEditionIdTextFragmentsGet(editionId)

Retrieves the ids of all Fragments of all fragments in the given edition of a scroll

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Id of the edition
apiInstance.v1EditionsEditionIdTextFragmentsGet(editionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 

### Return type

[**TextFragmentDataListDTO**](TextFragmentDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdTextFragmentsPost

> TextFragmentDataDTO v1EditionsEditionIdTextFragmentsPost(editionId, opts)

Creates a new text fragment in the given edition of a scroll

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Id of the edition
let opts = {
  'createTextFragmentDTO': new SqeApi.CreateTextFragmentDTO() // CreateTextFragmentDTO | A JSON object with the details of the new text fragment to be created
};
apiInstance.v1EditionsEditionIdTextFragmentsPost(editionId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **createTextFragmentDTO** | [**CreateTextFragmentDTO**](CreateTextFragmentDTO.md)| A JSON object with the details of the new text fragment to be created | [optional] 

### Return type

[**TextFragmentDataDTO**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet

> ArtefactDataListDTO v1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(editionId, textFragmentId)

Retrieves the ids of all Artefacts in the given textFragmentName

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Id of the edition
let textFragmentId = 56; // Number | Id of the text fragment
apiInstance.v1EditionsEditionIdTextFragmentsTextFragmentIdArtefactsGet(editionId, textFragmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **textFragmentId** | **Number**| Id of the text fragment | 

### Return type

[**ArtefactDataListDTO**](ArtefactDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdTextFragmentsTextFragmentIdGet

> TextEditionDTO v1EditionsEditionIdTextFragmentsTextFragmentIdGet(editionId, textFragmentId)

Retrieves all signs and their data from the given textFragmentName

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Id of the edition
let textFragmentId = 56; // Number | Id of the text fragment
apiInstance.v1EditionsEditionIdTextFragmentsTextFragmentIdGet(editionId, textFragmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **textFragmentId** | **Number**| Id of the text fragment | 

### Return type

[**TextEditionDTO**](TextEditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet

> LineDataListDTO v1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(editionId, textFragmentId)

Retrieves the ids of all lines in the given textFragmentName

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Id of the edition
let textFragmentId = 56; // Number | Id of the text fragment
apiInstance.v1EditionsEditionIdTextFragmentsTextFragmentIdLinesGet(editionId, textFragmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Id of the edition | 
 **textFragmentId** | **Number**| Id of the text fragment | 

### Return type

[**LineDataListDTO**](LineDataListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdTextFragmentsTextFragmentIdPut

> TextFragmentDataDTO v1EditionsEditionIdTextFragmentsTextFragmentIdPut(editionId, textFragmentId, opts)

Updates the specified text fragment with the submitted properties

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.TextApi();
let editionId = 56; // Number | Edition of the text fragment being updates
let textFragmentId = 56; // Number | Id of the text fragment being updates
let opts = {
  'updateTextFragmentDTO': new SqeApi.UpdateTextFragmentDTO() // UpdateTextFragmentDTO | Details of the updated text fragment
};
apiInstance.v1EditionsEditionIdTextFragmentsTextFragmentIdPut(editionId, textFragmentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Edition of the text fragment being updates | 
 **textFragmentId** | **Number**| Id of the text fragment being updates | 
 **updateTextFragmentDTO** | [**UpdateTextFragmentDTO**](UpdateTextFragmentDTO.md)| Details of the updated text fragment | [optional] 

### Return type

[**TextFragmentDataDTO**](TextFragmentDataDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

