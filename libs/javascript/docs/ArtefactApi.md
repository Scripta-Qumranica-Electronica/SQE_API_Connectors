# QumranicaApiConnector.ArtefactApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete**](ArtefactApi.md#v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete) | **DELETE** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Deletes the specified artefact group.
[**v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet**](ArtefactApi.md#v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet) | **GET** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Gets the details of a specific artefact group in the edition
[**v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut**](ArtefactApi.md#v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut) | **PUT** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
[**v1EditionsEditionIdArtefactGroupsGet**](ArtefactApi.md#v1EditionsEditionIdArtefactGroupsGet) | **GET** /v1/editions/{editionId}/artefact-groups | Gets a listing of all artefact groups in the edition
[**v1EditionsEditionIdArtefactGroupsPost**](ArtefactApi.md#v1EditionsEditionIdArtefactGroupsPost) | **POST** /v1/editions/{editionId}/artefact-groups | Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
[**v1EditionsEditionIdArtefactsArtefactIdDelete**](ArtefactApi.md#v1EditionsEditionIdArtefactsArtefactIdDelete) | **DELETE** /v1/editions/{editionId}/artefacts/{artefactId} | Deletes the specified artefact
[**v1EditionsEditionIdArtefactsArtefactIdGet**](ArtefactApi.md#v1EditionsEditionIdArtefactsArtefactIdGet) | **GET** /v1/editions/{editionId}/artefacts/{artefactId} | Provides a listing of all artefacts that are part of the specified edition
[**v1EditionsEditionIdArtefactsArtefactIdPut**](ArtefactApi.md#v1EditionsEditionIdArtefactsArtefactIdPut) | **PUT** /v1/editions/{editionId}/artefacts/{artefactId} | Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \&quot;\&quot; will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
[**v1EditionsEditionIdArtefactsArtefactIdRoisGet**](ArtefactApi.md#v1EditionsEditionIdArtefactsArtefactIdRoisGet) | **GET** /v1/editions/{editionId}/artefacts/{artefactId}/rois | Provides a listing of all rois belonging to an artefact in the specified edition
[**v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet**](ArtefactApi.md#v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet) | **GET** /v1/editions/{editionId}/artefacts/{artefactId}/text-fragments | Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \&quot;suggested\&quot;, this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
[**v1EditionsEditionIdArtefactsBatchTransformationPost**](ArtefactApi.md#v1EditionsEditionIdArtefactsBatchTransformationPost) | **POST** /v1/editions/{editionId}/artefacts/batch-transformation | Updates the positional data for a batch of artefacts
[**v1EditionsEditionIdArtefactsGet**](ArtefactApi.md#v1EditionsEditionIdArtefactsGet) | **GET** /v1/editions/{editionId}/artefacts | Provides a listing of all artefacts that are part of the specified edition
[**v1EditionsEditionIdArtefactsPost**](ArtefactApi.md#v1EditionsEditionIdArtefactsPost) | **POST** /v1/editions/{editionId}/artefacts | Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \&quot;POLYGON((0 0,1 1,1 0,0 0))\&quot; (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.



## v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete

> DeleteDTO v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(editionId, artefactGroupId)

Deletes the specified artefact group.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactGroupId = 56; // Number | Unique Id of the artefact group to be deleted
apiInstance.v1EditionsEditionIdArtefactGroupsArtefactGroupIdDelete(editionId, artefactGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactGroupId** | **Number**| Unique Id of the artefact group to be deleted | 

### Return type

[**DeleteDTO**](DeleteDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet

> ArtefactGroupDTO v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(editionId, artefactGroupId)

Gets the details of a specific artefact group in the edition

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactGroupId = 56; // Number | Id of the desired artefact group
apiInstance.v1EditionsEditionIdArtefactGroupsArtefactGroupIdGet(editionId, artefactGroupId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactGroupId** | **Number**| Id of the desired artefact group | 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut

> ArtefactGroupDTO v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(editionId, artefactGroupId, opts)

Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactGroupId = 56; // Number | Id of the artefact group to be updated
let opts = {
  'updateArtefactGroupDTO': new QumranicaApiConnector.UpdateArtefactGroupDTO() // UpdateArtefactGroupDTO | Parameters that the artefact group should be changed to
};
apiInstance.v1EditionsEditionIdArtefactGroupsArtefactGroupIdPut(editionId, artefactGroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactGroupId** | **Number**| Id of the artefact group to be updated | 
 **updateArtefactGroupDTO** | [**UpdateArtefactGroupDTO**](UpdateArtefactGroupDTO.md)| Parameters that the artefact group should be changed to | [optional] 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactGroupsGet

> ArtefactGroupListDTO v1EditionsEditionIdArtefactGroupsGet(editionId)

Gets a listing of all artefact groups in the edition

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
apiInstance.v1EditionsEditionIdArtefactGroupsGet(editionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 

### Return type

[**ArtefactGroupListDTO**](ArtefactGroupListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactGroupsPost

> ArtefactGroupDTO v1EditionsEditionIdArtefactGroupsPost(editionId, opts)

Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'createArtefactGroupDTO': new QumranicaApiConnector.CreateArtefactGroupDTO() // CreateArtefactGroupDTO | Parameters of the new artefact group
};
apiInstance.v1EditionsEditionIdArtefactGroupsPost(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **createArtefactGroupDTO** | [**CreateArtefactGroupDTO**](CreateArtefactGroupDTO.md)| Parameters of the new artefact group | [optional] 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsArtefactIdDelete

> v1EditionsEditionIdArtefactsArtefactIdDelete(editionId, artefactId)

Deletes the specified artefact

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactId = 56; // Number | Unique Id of the desired artefact
apiInstance.v1EditionsEditionIdArtefactsArtefactIdDelete(editionId, artefactId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactId** | **Number**| Unique Id of the desired artefact | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1EditionsEditionIdArtefactsArtefactIdGet

> ArtefactDTO v1EditionsEditionIdArtefactsArtefactIdGet(editionId, artefactId, opts)

Provides a listing of all artefacts that are part of the specified edition

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactId = 56; // Number | Unique Id of the desired artefact
let opts = {
  'optional': ["null"] // [String] | Add \"masks\" to include artefact polygons and \"images\" to include image data
};
apiInstance.v1EditionsEditionIdArtefactsArtefactIdGet(editionId, artefactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactId** | **Number**| Unique Id of the desired artefact | 
 **optional** | [**[String]**](String.md)| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsArtefactIdPut

> ArtefactDTO v1EditionsEditionIdArtefactsArtefactIdPut(editionId, artefactId, opts)

Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \&quot;\&quot; will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactId = 56; // Number | Unique Id of the desired artefact
let opts = {
  'updateArtefactDTO': new QumranicaApiConnector.UpdateArtefactDTO() // UpdateArtefactDTO | An UpdateArtefactDTO with the desired alterations to the artefact
};
apiInstance.v1EditionsEditionIdArtefactsArtefactIdPut(editionId, artefactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactId** | **Number**| Unique Id of the desired artefact | 
 **updateArtefactDTO** | [**UpdateArtefactDTO**](UpdateArtefactDTO.md)| An UpdateArtefactDTO with the desired alterations to the artefact | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsArtefactIdRoisGet

> InterpretationRoiDTOList v1EditionsEditionIdArtefactsArtefactIdRoisGet(editionId, artefactId)

Provides a listing of all rois belonging to an artefact in the specified edition

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactId = 56; // Number | Unique Id of the desired artefact
apiInstance.v1EditionsEditionIdArtefactsArtefactIdRoisGet(editionId, artefactId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactId** | **Number**| Unique Id of the desired artefact | 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet

> ArtefactTextFragmentMatchListDTO v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(editionId, artefactId, opts)

Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \&quot;suggested\&quot;, this endpoint will also return  any text fragment that the system suggests might have text in the artefact.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let artefactId = 56; // Number | Unique Id of the desired artefact
let opts = {
  'optional': ["null"] // [String] | Add \"suggested\" to include possible matches suggested by the system
};
apiInstance.v1EditionsEditionIdArtefactsArtefactIdTextFragmentsGet(editionId, artefactId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **artefactId** | **Number**| Unique Id of the desired artefact | 
 **optional** | [**[String]**](String.md)| Add \&quot;suggested\&quot; to include possible matches suggested by the system | [optional] 

### Return type

[**ArtefactTextFragmentMatchListDTO**](ArtefactTextFragmentMatchListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsBatchTransformationPost

> BatchUpdatedArtefactTransformDTO v1EditionsEditionIdArtefactsBatchTransformationPost(editionId, opts)

Updates the positional data for a batch of artefacts

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'batchUpdateArtefactPlacementDTO': new QumranicaApiConnector.BatchUpdateArtefactPlacementDTO() // BatchUpdateArtefactPlacementDTO | A BatchUpdateArtefactTransformDTO with a list of the desired updates
};
apiInstance.v1EditionsEditionIdArtefactsBatchTransformationPost(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **batchUpdateArtefactPlacementDTO** | [**BatchUpdateArtefactPlacementDTO**](BatchUpdateArtefactPlacementDTO.md)| A BatchUpdateArtefactTransformDTO with a list of the desired updates | [optional] 

### Return type

[**BatchUpdatedArtefactTransformDTO**](BatchUpdatedArtefactTransformDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsGet

> ArtefactListDTO v1EditionsEditionIdArtefactsGet(editionId, opts)

Provides a listing of all artefacts that are part of the specified edition

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'optional': ["null"] // [String] | Add \"masks\" to include artefact polygons and \"images\" to include image data
};
apiInstance.v1EditionsEditionIdArtefactsGet(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **optional** | [**[String]**](String.md)| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | [optional] 

### Return type

[**ArtefactListDTO**](ArtefactListDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## v1EditionsEditionIdArtefactsPost

> ArtefactDTO v1EditionsEditionIdArtefactsPost(editionId, opts)

Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \&quot;POLYGON((0 0,1 1,1 0,0 0))\&quot; (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.

### Example

```javascript
import QumranicaApiConnector from 'qumranica_api_connector';
let defaultClient = QumranicaApiConnector.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new QumranicaApiConnector.ArtefactApi();
let editionId = 56; // Number | Unique Id of the desired edition
let opts = {
  'createArtefactDTO': new QumranicaApiConnector.CreateArtefactDTO() // CreateArtefactDTO | A CreateArtefactDTO with the data for the new artefact
};
apiInstance.v1EditionsEditionIdArtefactsPost(editionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editionId** | **Number**| Unique Id of the desired edition | 
 **createArtefactDTO** | [**CreateArtefactDTO**](CreateArtefactDTO.md)| A CreateArtefactDTO with the data for the new artefact | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

