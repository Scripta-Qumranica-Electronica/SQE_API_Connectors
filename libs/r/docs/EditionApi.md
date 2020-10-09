# EditionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EditionsAdminShareRequestsGet**](EditionApi.md#V1EditionsAdminShareRequestsGet) | **GET** /v1/editions/admin-share-requests | Get a list of requests issued by the current user for other users  to become editors of a shared edition
[**V1EditionsConfirmEditorshipTokenPost**](EditionApi.md#V1EditionsConfirmEditorshipTokenPost) | **POST** /v1/editions/confirm-editorship/{token} | Confirm addition of an editor to the specified edition
[**V1EditionsEditionIdAddEditorRequestPost**](EditionApi.md#V1EditionsEditionIdAddEditorRequestPost) | **POST** /v1/editions/{editionId}/add-editor-request | Adds an editor to the specified edition
[**V1EditionsEditionIdDelete**](EditionApi.md#V1EditionsEditionIdDelete) | **DELETE** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**V1EditionsEditionIdEditorsEditorEmailIdPut**](EditionApi.md#V1EditionsEditionIdEditorsEditorEmailIdPut) | **PUT** /v1/editions/{editionId}/editors/{editorEmailId} | Changes the rights for an editor of the specified edition
[**V1EditionsEditionIdGet**](EditionApi.md#V1EditionsEditionIdGet) | **GET** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**V1EditionsEditionIdPost**](EditionApi.md#V1EditionsEditionIdPost) | **POST** /v1/editions/{editionId} | Creates a copy of the specified edition
[**V1EditionsEditionIdPut**](EditionApi.md#V1EditionsEditionIdPut) | **PUT** /v1/editions/{editionId} | Updates data for the specified edition
[**V1EditionsEditionIdScriptCollectionGet**](EditionApi.md#V1EditionsEditionIdScriptCollectionGet) | **GET** /v1/editions/{editionId}/script-collection | Provides spatial data for all letters in the edition
[**V1EditionsEditionIdScriptLinesGet**](EditionApi.md#V1EditionsEditionIdScriptLinesGet) | **GET** /v1/editions/{editionId}/script-lines | Provides spatial data for all letters in the edition organized and oriented  by lines.
[**V1EditionsEditorInvitationsGet**](EditionApi.md#V1EditionsEditorInvitationsGet) | **GET** /v1/editions/editor-invitations | Get a list of invitations issued to the current user to become an editor of a shared edition
[**V1EditionsGet**](EditionApi.md#V1EditionsGet) | **GET** /v1/editions | Provides a listing of all editions accessible to the current user


# **V1EditionsAdminShareRequestsGet**
> AdminEditorRequestListDTO V1EditionsAdminShareRequestsGet()

Get a list of requests issued by the current user for other users  to become editors of a shared edition

### Example
```R
library(openapi)


#Get a list of requests issued by the current user for other users  to become editors of a shared edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsAdminShareRequestsGet()
dput(result)
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsConfirmEditorshipTokenPost**
> DetailedEditorRightsDTO V1EditionsConfirmEditorshipTokenPost(token)

Confirm addition of an editor to the specified edition

### Example
```R
library(openapi)

var.token <- 'token_example' # character | JWT for verifying the request confirmation

#Confirm addition of an editor to the specified edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsConfirmEditorshipTokenPost(var.token)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **character**| JWT for verifying the request confirmation | 

### Return type

[**DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdAddEditorRequestPost**
> V1EditionsEditionIdAddEditorRequestPost(edition.id, invite.editor.dto=var.invite.editor.dto)

Adds an editor to the specified edition

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.invite.editor.dto <- InviteEditorDTO$new("email_example", "mayLock_example", "mayRead_example", "mayWrite_example", "isAdmin_example") # InviteEditorDTO | JSON object with the attributes of the new editor

#Adds an editor to the specified edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
api.instance$V1EditionsEditionIdAddEditorRequestPost(var.edition.id, invite.editor.dto=var.invite.editor.dto)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **invite.editor.dto** | [**InviteEditorDTO**](InviteEditorDTO.md)| JSON object with the attributes of the new editor | [optional] 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdDelete**
> DeleteTokenDTO V1EditionsEditionIdDelete(edition.id, optional=var.optional, token=var.token)

Provides details about the specified edition and all accessible alternate editions

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.optional <- list("inner_example") # array[character] | Optional parameters: 'deleteForAllEditors'
var.token <- 'token_example' # character | token required when using optional 'deleteForAllEditors'

#Provides details about the specified edition and all accessible alternate editions
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdDelete(var.edition.id, optional=var.optional, token=var.token)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **optional** | list( **character** )| Optional parameters: &#39;deleteForAllEditors&#39; | [optional] 
 **token** | **character**| token required when using optional &#39;deleteForAllEditors&#39; | [optional] 

### Return type

[**DeleteTokenDTO**](DeleteTokenDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdEditorsEditorEmailIdPut**
> DetailedEditorRightsDTO V1EditionsEditionIdEditorsEditorEmailIdPut(edition.id, editor.email.id, update.editor.rights.dto=var.update.editor.rights.dto)

Changes the rights for an editor of the specified edition

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.editor.email.id <- 'editor.email.id_example' # character | Email address of the editor whose permissions are being changed
var.update.editor.rights.dto <- UpdateEditorRightsDTO$new("mayLock_example", "mayRead_example", "mayWrite_example", "isAdmin_example") # UpdateEditorRightsDTO | JSON object with the attributes of the new editor

#Changes the rights for an editor of the specified edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdEditorsEditorEmailIdPut(var.edition.id, var.editor.email.id, update.editor.rights.dto=var.update.editor.rights.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **editor.email.id** | **character**| Email address of the editor whose permissions are being changed | 
 **update.editor.rights.dto** | [**UpdateEditorRightsDTO**](UpdateEditorRightsDTO.md)| JSON object with the attributes of the new editor | [optional] 

### Return type

[**DetailedEditorRightsDTO**](DetailedEditorRightsDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdGet**
> EditionGroupDTO V1EditionsEditionIdGet(edition.id)

Provides details about the specified edition and all accessible alternate editions

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition

#Provides details about the specified edition and all accessible alternate editions
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 

### Return type

[**EditionGroupDTO**](EditionGroupDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdPost**
> EditionDTO V1EditionsEditionIdPost(edition.id, edition.copy.dto=var.edition.copy.dto)

Creates a copy of the specified edition

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.edition.copy.dto <- EditionCopyDTO$new("name_example", "copyrightHolder_example", "collaborators_example") # EditionCopyDTO | JSON object with the attributes to be changed in the copied edition

#Creates a copy of the specified edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdPost(var.edition.id, edition.copy.dto=var.edition.copy.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **edition.copy.dto** | [**EditionCopyDTO**](EditionCopyDTO.md)| JSON object with the attributes to be changed in the copied edition | [optional] 

### Return type

[**EditionDTO**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdPut**
> EditionDTO V1EditionsEditionIdPut(edition.id, edition.update.request.dto=var.edition.update.request.dto)

Updates data for the specified edition

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition
var.edition.update.request.dto <- EditionUpdateRequestDTO$new(UpdateEditionManuscriptMetricsDTO$new(123, 123, 123, 123), "name_example", "copyrightHolder_example", "collaborators_example") # EditionUpdateRequestDTO | JSON object with the attributes to be updated

#Updates data for the specified edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdPut(var.edition.id, edition.update.request.dto=var.edition.update.request.dto)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 
 **edition.update.request.dto** | [**EditionUpdateRequestDTO**](EditionUpdateRequestDTO.md)| JSON object with the attributes to be updated | [optional] 

### Return type

[**EditionDTO**](EditionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdScriptCollectionGet**
> EditionScriptCollectionDTO V1EditionsEditionIdScriptCollectionGet(edition.id)

Provides spatial data for all letters in the edition

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition

#Provides spatial data for all letters in the edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdScriptCollectionGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 

### Return type

[**EditionScriptCollectionDTO**](EditionScriptCollectionDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditionIdScriptLinesGet**
> EditionScriptLinesDTO V1EditionsEditionIdScriptLinesGet(edition.id)

Provides spatial data for all letters in the edition organized and oriented  by lines.

### Example
```R
library(openapi)

var.edition.id <- 56 # integer | Unique Id of the desired edition

#Provides spatial data for all letters in the edition organized and oriented  by lines.
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditionIdScriptLinesGet(var.edition.id)
dput(result)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition.id** | **integer**| Unique Id of the desired edition | 

### Return type

[**EditionScriptLinesDTO**](EditionScriptLinesDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsEditorInvitationsGet**
> EditorInvitationListDTO V1EditionsEditorInvitationsGet()

Get a list of invitations issued to the current user to become an editor of a shared edition

### Example
```R
library(openapi)


#Get a list of invitations issued to the current user to become an editor of a shared edition
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsEditorInvitationsGet()
dput(result)
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

# **V1EditionsGet**
> EditionListDTO V1EditionsGet()

Provides a listing of all editions accessible to the current user

### Example
```R
library(openapi)


#Provides a listing of all editions accessible to the current user
api.instance <- EditionApi$new()
# Configure API key authorization: Bearer
api.instance$apiClient$apiKeys['Authorization'] <- 'TODO_YOUR_API_KEY';
result <- api.instance$V1EditionsGet()
dput(result)
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |

