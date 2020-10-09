# SqeApi.EditionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EditionsAdminShareRequestsGet**](EditionApi.md#v1EditionsAdminShareRequestsGet) | **GET** /v1/editions/admin-share-requests | Get a list of requests issued by the current user for other users  to become editors of a shared edition
[**v1EditionsConfirmEditorshipTokenPost**](EditionApi.md#v1EditionsConfirmEditorshipTokenPost) | **POST** /v1/editions/confirm-editorship/{token} | Confirm addition of an editor to the specified edition
[**v1EditionsEditionIdAddEditorRequestPost**](EditionApi.md#v1EditionsEditionIdAddEditorRequestPost) | **POST** /v1/editions/{editionId}/add-editor-request | Adds an editor to the specified edition
[**v1EditionsEditionIdDelete**](EditionApi.md#v1EditionsEditionIdDelete) | **DELETE** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**v1EditionsEditionIdEditorsEditorEmailIdPut**](EditionApi.md#v1EditionsEditionIdEditorsEditorEmailIdPut) | **PUT** /v1/editions/{editionId}/editors/{editorEmailId} | Changes the rights for an editor of the specified edition
[**v1EditionsEditionIdGet**](EditionApi.md#v1EditionsEditionIdGet) | **GET** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**v1EditionsEditionIdPost**](EditionApi.md#v1EditionsEditionIdPost) | **POST** /v1/editions/{editionId} | Creates a copy of the specified edition
[**v1EditionsEditionIdPut**](EditionApi.md#v1EditionsEditionIdPut) | **PUT** /v1/editions/{editionId} | Updates data for the specified edition
[**v1EditionsEditionIdScriptCollectionGet**](EditionApi.md#v1EditionsEditionIdScriptCollectionGet) | **GET** /v1/editions/{editionId}/script-collection | Provides spatial data for all letters in the edition
[**v1EditionsEditionIdScriptLinesGet**](EditionApi.md#v1EditionsEditionIdScriptLinesGet) | **GET** /v1/editions/{editionId}/script-lines | Provides spatial data for all letters in the edition organized and oriented  by lines.
[**v1EditionsEditorInvitationsGet**](EditionApi.md#v1EditionsEditorInvitationsGet) | **GET** /v1/editions/editor-invitations | Get a list of invitations issued to the current user to become an editor of a shared edition
[**v1EditionsGet**](EditionApi.md#v1EditionsGet) | **GET** /v1/editions | Provides a listing of all editions accessible to the current user



## v1EditionsAdminShareRequestsGet

> AdminEditorRequestListDTO v1EditionsAdminShareRequestsGet()

Get a list of requests issued by the current user for other users  to become editors of a shared edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
apiInstance.v1EditionsAdminShareRequestsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AdminEditorRequestListDTO**](AdminEditorRequestListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsConfirmEditorshipTokenPost

> DetailedEditorRightsDTO v1EditionsConfirmEditorshipTokenPost(token)

Confirm addition of an editor to the specified edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let token = "token_example"; // String | JWT for verifying the request confirmation
apiInstance.v1EditionsConfirmEditorshipTokenPost(token, (error, data, response) => {
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
 **token** | **String**| JWT for verifying the request confirmation | 

### Return type

[**DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdAddEditorRequestPost

> v1EditionsEditionIdAddEditorRequestPost(editionId, opts)

Adds an editor to the specified edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'inviteEditorDTO': new SqeApi.InviteEditorDTO() // InviteEditorDTO | JSON object with the attributes of the new editor
};
apiInstance.v1EditionsEditionIdAddEditorRequestPost(editionId, opts, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 
 **inviteEditorDTO** | [**InviteEditorDTO**](InviteEditorDTO.md)| JSON object with the attributes of the new editor | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## v1EditionsEditionIdDelete

> DeleteTokenDTO v1EditionsEditionIdDelete(editionId, opts)

Provides details about the specified edition and all accessible alternate editions

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'optional': ["null"], // [String] | Optional parameters: 'deleteForAllEditors'
  'token': "token_example" // String | token required when using optional 'deleteForAllEditors'
};
apiInstance.v1EditionsEditionIdDelete(editionId, opts, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 
 **optional** | [**[String]**](String.md)| Optional parameters: &#39;deleteForAllEditors&#39; | [optional] 
 **token** | **String**| token required when using optional &#39;deleteForAllEditors&#39; | [optional] 

### Return type

[**DeleteTokenDTO**](DeleteTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdEditorsEditorEmailIdPut

> DetailedEditorRightsDTO v1EditionsEditionIdEditorsEditorEmailIdPut(editionId, editorEmailId, opts)

Changes the rights for an editor of the specified edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
let editorEmailId = "editorEmailId_example"; // String | Email address of the editor whose permissions are being changed
let opts = {
  'updateEditorRightsDTO': new SqeApi.UpdateEditorRightsDTO() // UpdateEditorRightsDTO | JSON object with the attributes of the new editor
};
apiInstance.v1EditionsEditionIdEditorsEditorEmailIdPut(editionId, editorEmailId, opts, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 
 **editorEmailId** | **String**| Email address of the editor whose permissions are being changed | 
 **updateEditorRightsDTO** | [**UpdateEditorRightsDTO**](UpdateEditorRightsDTO.md)| JSON object with the attributes of the new editor | [optional] 

### Return type

[**DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdGet

> EditionGroupDTO v1EditionsEditionIdGet(editionId)

Provides details about the specified edition and all accessible alternate editions

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
apiInstance.v1EditionsEditionIdGet(editionId, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 

### Return type

[**EditionGroupDTO**](EditionGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdPost

> EditionDTO v1EditionsEditionIdPost(editionId, opts)

Creates a copy of the specified edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'editionCopyDTO': new SqeApi.EditionCopyDTO() // EditionCopyDTO | JSON object with the attributes to be changed in the copied edition
};
apiInstance.v1EditionsEditionIdPost(editionId, opts, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 
 **editionCopyDTO** | [**EditionCopyDTO**](EditionCopyDTO.md)| JSON object with the attributes to be changed in the copied edition | [optional] 

### Return type

[**EditionDTO**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdPut

> EditionDTO v1EditionsEditionIdPut(editionId, opts)

Updates data for the specified edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'editionUpdateRequestDTO': new SqeApi.EditionUpdateRequestDTO() // EditionUpdateRequestDTO | JSON object with the attributes to be updated
};
apiInstance.v1EditionsEditionIdPut(editionId, opts, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 
 **editionUpdateRequestDTO** | [**EditionUpdateRequestDTO**](EditionUpdateRequestDTO.md)| JSON object with the attributes to be updated | [optional] 

### Return type

[**EditionDTO**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdScriptCollectionGet

> EditionScriptCollectionDTO v1EditionsEditionIdScriptCollectionGet(editionId)

Provides spatial data for all letters in the edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
apiInstance.v1EditionsEditionIdScriptCollectionGet(editionId, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 

### Return type

[**EditionScriptCollectionDTO**](EditionScriptCollectionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdScriptLinesGet

> EditionScriptLinesDTO v1EditionsEditionIdScriptLinesGet(editionId)

Provides spatial data for all letters in the edition organized and oriented  by lines.

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
let editionId = 56; // Number | Unique Id of the desired edition
apiInstance.v1EditionsEditionIdScriptLinesGet(editionId, (error, data, response) => {
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
 **editionId** | **Number**| Unique Id of the desired edition | 

### Return type

[**EditionScriptLinesDTO**](EditionScriptLinesDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditorInvitationsGet

> EditorInvitationListDTO v1EditionsEditorInvitationsGet()

Get a list of invitations issued to the current user to become an editor of a shared edition

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
apiInstance.v1EditionsEditorInvitationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EditorInvitationListDTO**](EditorInvitationListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsGet

> EditionListDTO v1EditionsGet()

Provides a listing of all editions accessible to the current user

### Example

```javascript
import SqeApi from 'sqe_api';
let defaultClient = SqeApi.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new SqeApi.EditionApi();
apiInstance.v1EditionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EditionListDTO**](EditionListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

