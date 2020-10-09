# SqeApi.SignInterpretationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete) | **DELETE** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Delete an attribute from an edition
[**v1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut) | **PUT** /v1/editions/{editionId}/sign-interpretations-attributes/{attributeId} | Change the details of an attribute in an edition
[**v1EditionsEditionIdSignInterpretationsAttributesGet**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsAttributesGet) | **GET** /v1/editions/{editionId}/sign-interpretations-attributes | Retrieve a list of all possible attributes for an edition
[**v1EditionsEditionIdSignInterpretationsAttributesPost**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsAttributesPost) | **POST** /v1/editions/{editionId}/sign-interpretations-attributes | Create a new attribute for an edition
[**v1EditionsEditionIdSignInterpretationsPost**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsPost) | **POST** /v1/editions/{editionId}/sign-interpretations | Creates a new sign interpretation
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete) | **DELETE** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This deletes the specified attribute value from the specified sign interpretation.
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut) | **PUT** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes/{attributeValueId} | This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/attributes | This adds a new attribute to the specified sign interpretation.
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut) | **PUT** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/commentary | Updates the commentary of a sign interpretation
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete) | **DELETE** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign&#39;s next and previous nodes.
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdGet**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdGet) | **GET** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId} | Retrieve the details of a sign interpretation in an edition
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/link-to/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream
[**v1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost**](SignInterpretationApi.md#v1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost) | **POST** /v1/editions/{editionId}/sign-interpretations/{signInterpretationId}/unlink-from/{nextSignInterpretationId} | Links two sign interpretations in the edition&#39;s sign stream



## v1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete

> v1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(editionId, attributeId)

Delete an attribute from an edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | The ID of the edition being edited
let attributeId = 56; // Number | The ID of the attribute to delete
apiInstance.v1EditionsEditionIdSignInterpretationsAttributesAttributeIdDelete(editionId, attributeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| The ID of the edition being edited | 
 **attributeId** | **Number**| The ID of the attribute to delete | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut

> AttributeDTO v1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(editionId, attributeId, opts)

Change the details of an attribute in an edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | The ID of the edition being edited
let attributeId = 56; // Number | The ID of the attribute to update
let opts = {
  'updateAttributeDTO': new SqeApi.UpdateAttributeDTO() // UpdateAttributeDTO | The details of the updated attribute
};
apiInstance.v1EditionsEditionIdSignInterpretationsAttributesAttributeIdPut(editionId, attributeId, opts, (error, data, response) => {
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
 **editionId** | **Number**| The ID of the edition being edited | 
 **attributeId** | **Number**| The ID of the attribute to update | 
 **updateAttributeDTO** | [**UpdateAttributeDTO**](UpdateAttributeDTO.md)| The details of the updated attribute | [optional] 

### Return type

[**AttributeDTO**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsAttributesGet

> AttributeListDTO v1EditionsEditionIdSignInterpretationsAttributesGet(editionId)

Retrieve a list of all possible attributes for an edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | The ID of the edition being searched
apiInstance.v1EditionsEditionIdSignInterpretationsAttributesGet(editionId, (error, data, response) => {
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
 **editionId** | **Number**| The ID of the edition being searched | 

### Return type

[**AttributeListDTO**](AttributeListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsAttributesPost

> AttributeDTO v1EditionsEditionIdSignInterpretationsAttributesPost(editionId, opts)

Create a new attribute for an edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | The ID of the edition being edited
let opts = {
  'createAttributeDTO': new SqeApi.CreateAttributeDTO() // CreateAttributeDTO | The details of the new attribute
};
apiInstance.v1EditionsEditionIdSignInterpretationsAttributesPost(editionId, opts, (error, data, response) => {
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
 **editionId** | **Number**| The ID of the edition being edited | 
 **createAttributeDTO** | [**CreateAttributeDTO**](CreateAttributeDTO.md)| The details of the new attribute | [optional] 

### Return type

[**AttributeDTO**](AttributeDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsPost

> SignInterpretationListDTO v1EditionsEditionIdSignInterpretationsPost(editionId, opts)

Creates a new sign interpretation

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let opts = {
  'signInterpretationCreateDTO': new SqeApi.SignInterpretationCreateDTO() // SignInterpretationCreateDTO | New sign interpretation data to be added
};
apiInstance.v1EditionsEditionIdSignInterpretationsPost(editionId, opts, (error, data, response) => {
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
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationCreateDTO** | [**SignInterpretationCreateDTO**](SignInterpretationCreateDTO.md)| New sign interpretation data to be added | [optional] 

### Return type

[**SignInterpretationListDTO**](SignInterpretationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete

> v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(editionId, signInterpretationId, attributeValueId)

This deletes the specified attribute value from the specified sign interpretation.

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | ID of the sign interpretation being altered
let attributeValueId = 56; // Number | Id of the attribute being removed
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdDelete(editionId, signInterpretationId, attributeValueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| ID of the sign interpretation being altered | 
 **attributeValueId** | **Number**| Id of the attribute being removed | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut

> SignInterpretationDTO v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(editionId, signInterpretationId, attributeValueId, opts)

This changes the values of the specified sign interpretation attribute,  mainly used to change commentary.

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | ID of the sign interpretation being altered
let attributeValueId = 56; // Number | Id of the attribute value to be altered
let opts = {
  'interpretationAttributeCreateDTO': new SqeApi.InterpretationAttributeCreateDTO() // InterpretationAttributeCreateDTO | New details of the attribute
};
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesAttributeValueIdPut(editionId, signInterpretationId, attributeValueId, opts, (error, data, response) => {
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
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| ID of the sign interpretation being altered | 
 **attributeValueId** | **Number**| Id of the attribute value to be altered | 
 **interpretationAttributeCreateDTO** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md)| New details of the attribute | [optional] 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost

> SignInterpretationDTO v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(editionId, signInterpretationId, opts)

This adds a new attribute to the specified sign interpretation.

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | ID of the sign interpretation for adding a new attribute
let opts = {
  'interpretationAttributeCreateDTO': new SqeApi.InterpretationAttributeCreateDTO() // InterpretationAttributeCreateDTO | Details of the attribute to be added
};
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdAttributesPost(editionId, signInterpretationId, opts, (error, data, response) => {
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
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| ID of the sign interpretation for adding a new attribute | 
 **interpretationAttributeCreateDTO** | [**InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md)| Details of the attribute to be added | [optional] 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut

> SignInterpretationDTO v1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(editionId, signInterpretationId, opts)

Updates the commentary of a sign interpretation

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | ID of the sign interpretation whose commentary is being changed
let opts = {
  'commentaryCreateDTO': new SqeApi.CommentaryCreateDTO() // CommentaryCreateDTO | The new commentary for the sign interpretation
};
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdCommentaryPut(editionId, signInterpretationId, opts, (error, data, response) => {
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
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| ID of the sign interpretation whose commentary is being changed | 
 **commentaryCreateDTO** | [**CommentaryCreateDTO**](CommentaryCreateDTO.md)| The new commentary for the sign interpretation | [optional] 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete

> v1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(editionId, signInterpretationId)

Deletes the sign interpretation in the route. The endpoint automatically manages the sign stream  by connecting all the deleted sign&#39;s next and previous nodes.

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | ID of the sign interpretation being deleted
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdDelete(editionId, signInterpretationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| ID of the sign interpretation being deleted | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdGet

> SignInterpretationDTO v1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(editionId, signInterpretationId)

Retrieve the details of a sign interpretation in an edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | The ID of the edition being searched
let signInterpretationId = 56; // Number | The desired sign interpretation id
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdGet(editionId, signInterpretationId, (error, data, response) => {
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
 **editionId** | **Number**| The ID of the edition being searched | 
 **signInterpretationId** | **Number**| The desired sign interpretation id | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost

> SignInterpretationDTO v1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(editionId, signInterpretationId, nextSignInterpretationId)

Links two sign interpretations in the edition&#39;s sign stream

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | The sign interpretation to be linked to the nextSignInterpretationId
let nextSignInterpretationId = 56; // Number | The sign interpretation to become the new next sign interpretation
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdLinkToNextSignInterpretationIdPost(editionId, signInterpretationId, nextSignInterpretationId, (error, data, response) => {
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
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| The sign interpretation to be linked to the nextSignInterpretationId | 
 **nextSignInterpretationId** | **Number**| The sign interpretation to become the new next sign interpretation | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost

> SignInterpretationDTO v1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(editionId, signInterpretationId, nextSignInterpretationId)

Links two sign interpretations in the edition&#39;s sign stream

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.SignInterpretationApi();
let editionId = 56; // Number | ID of the edition being changed
let signInterpretationId = 56; // Number | The sign interpretation to be unlinked from the nextSignInterpretationId
let nextSignInterpretationId = 56; // Number | The sign interpretation to removed as next sign interpretation
apiInstance.v1EditionsEditionIdSignInterpretationsSignInterpretationIdUnlinkFromNextSignInterpretationIdPost(editionId, signInterpretationId, nextSignInterpretationId, (error, data, response) => {
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
 **editionId** | **Number**| ID of the edition being changed | 
 **signInterpretationId** | **Number**| The sign interpretation to be unlinked from the nextSignInterpretationId | 
 **nextSignInterpretationId** | **Number**| The sign interpretation to removed as next sign interpretation | 

### Return type

[**SignInterpretationDTO**](SignInterpretationDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

