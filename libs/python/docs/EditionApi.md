# qumranica_api_connector.EditionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_editions_admin_share_requests_get**](EditionApi.md#v1_editions_admin_share_requests_get) | **GET** /v1/editions/admin-share-requests | Get a list of requests issued by the current user for other users  to become editors of a shared edition
[**v1_editions_confirm_editorship_token_post**](EditionApi.md#v1_editions_confirm_editorship_token_post) | **POST** /v1/editions/confirm-editorship/{token} | Confirm addition of an editor to the specified edition
[**v1_editions_edition_id_add_editor_request_post**](EditionApi.md#v1_editions_edition_id_add_editor_request_post) | **POST** /v1/editions/{editionId}/add-editor-request | Adds an editor to the specified edition
[**v1_editions_edition_id_delete**](EditionApi.md#v1_editions_edition_id_delete) | **DELETE** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**v1_editions_edition_id_editors_editor_email_id_put**](EditionApi.md#v1_editions_edition_id_editors_editor_email_id_put) | **PUT** /v1/editions/{editionId}/editors/{editorEmailId} | Changes the rights for an editor of the specified edition
[**v1_editions_edition_id_get**](EditionApi.md#v1_editions_edition_id_get) | **GET** /v1/editions/{editionId} | Provides details about the specified edition and all accessible alternate editions
[**v1_editions_edition_id_post**](EditionApi.md#v1_editions_edition_id_post) | **POST** /v1/editions/{editionId} | Creates a copy of the specified edition
[**v1_editions_edition_id_put**](EditionApi.md#v1_editions_edition_id_put) | **PUT** /v1/editions/{editionId} | Updates data for the specified edition
[**v1_editions_edition_id_script_collection_get**](EditionApi.md#v1_editions_edition_id_script_collection_get) | **GET** /v1/editions/{editionId}/script-collection | Provides spatial data for all letters in the edition
[**v1_editions_edition_id_script_lines_get**](EditionApi.md#v1_editions_edition_id_script_lines_get) | **GET** /v1/editions/{editionId}/script-lines | Provides spatial data for all letters in the edition organized and oriented  by lines.
[**v1_editions_editor_invitations_get**](EditionApi.md#v1_editions_editor_invitations_get) | **GET** /v1/editions/editor-invitations | Get a list of invitations issued to the current user to become an editor of a shared edition
[**v1_editions_get**](EditionApi.md#v1_editions_get) | **GET** /v1/editions | Provides a listing of all editions accessible to the current user


# **v1_editions_admin_share_requests_get**
> AdminEditorRequestListDTO v1_editions_admin_share_requests_get()

Get a list of requests issued by the current user for other users  to become editors of a shared edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    
    try:
        # Get a list of requests issued by the current user for other users  to become editors of a shared edition
        api_response = api_instance.v1_editions_admin_share_requests_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_admin_share_requests_get: %s\n" % e)
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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_confirm_editorship_token_post**
> DetailedEditorRightsDTO v1_editions_confirm_editorship_token_post(token)

Confirm addition of an editor to the specified edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    token = 'token_example' # str | JWT for verifying the request confirmation

    try:
        # Confirm addition of an editor to the specified edition
        api_response = api_instance.v1_editions_confirm_editorship_token_post(token)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_confirm_editorship_token_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| JWT for verifying the request confirmation | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_add_editor_request_post**
> v1_editions_edition_id_add_editor_request_post(edition_id, invite_editor_dto=invite_editor_dto)

Adds an editor to the specified edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
invite_editor_dto = qumranica_api_connector.InviteEditorDTO() # InviteEditorDTO | JSON object with the attributes of the new editor (optional)

    try:
        # Adds an editor to the specified edition
        api_instance.v1_editions_edition_id_add_editor_request_post(edition_id, invite_editor_dto=invite_editor_dto)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_add_editor_request_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **invite_editor_dto** | [**InviteEditorDTO**](InviteEditorDTO.md)| JSON object with the attributes of the new editor | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_delete**
> DeleteTokenDTO v1_editions_edition_id_delete(edition_id, optional=optional, token=token)

Provides details about the specified edition and all accessible alternate editions

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
optional = ['optional_example'] # list[str] | Optional parameters: 'deleteForAllEditors' (optional)
token = 'token_example' # str | token required when using optional 'deleteForAllEditors' (optional)

    try:
        # Provides details about the specified edition and all accessible alternate editions
        api_response = api_instance.v1_editions_edition_id_delete(edition_id, optional=optional, token=token)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **optional** | [**list[str]**](str.md)| Optional parameters: &#39;deleteForAllEditors&#39; | [optional] 
 **token** | **str**| token required when using optional &#39;deleteForAllEditors&#39; | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_editors_editor_email_id_put**
> DetailedEditorRightsDTO v1_editions_edition_id_editors_editor_email_id_put(edition_id, editor_email_id, update_editor_rights_dto=update_editor_rights_dto)

Changes the rights for an editor of the specified edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
editor_email_id = 'editor_email_id_example' # str | Email address of the editor whose permissions are being changed
update_editor_rights_dto = qumranica_api_connector.UpdateEditorRightsDTO() # UpdateEditorRightsDTO | JSON object with the attributes of the new editor (optional)

    try:
        # Changes the rights for an editor of the specified edition
        api_response = api_instance.v1_editions_edition_id_editors_editor_email_id_put(edition_id, editor_email_id, update_editor_rights_dto=update_editor_rights_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_editors_editor_email_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **editor_email_id** | **str**| Email address of the editor whose permissions are being changed | 
 **update_editor_rights_dto** | [**UpdateEditorRightsDTO**](UpdateEditorRightsDTO.md)| JSON object with the attributes of the new editor | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_get**
> EditionGroupDTO v1_editions_edition_id_get(edition_id)

Provides details about the specified edition and all accessible alternate editions

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition

    try:
        # Provides details about the specified edition and all accessible alternate editions
        api_response = api_instance.v1_editions_edition_id_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_post**
> EditionDTO v1_editions_edition_id_post(edition_id, edition_copy_dto=edition_copy_dto)

Creates a copy of the specified edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
edition_copy_dto = qumranica_api_connector.EditionCopyDTO() # EditionCopyDTO | JSON object with the attributes to be changed in the copied edition (optional)

    try:
        # Creates a copy of the specified edition
        api_response = api_instance.v1_editions_edition_id_post(edition_id, edition_copy_dto=edition_copy_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **edition_copy_dto** | [**EditionCopyDTO**](EditionCopyDTO.md)| JSON object with the attributes to be changed in the copied edition | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_put**
> EditionDTO v1_editions_edition_id_put(edition_id, edition_update_request_dto=edition_update_request_dto)

Updates data for the specified edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
edition_update_request_dto = qumranica_api_connector.EditionUpdateRequestDTO() # EditionUpdateRequestDTO | JSON object with the attributes to be updated (optional)

    try:
        # Updates data for the specified edition
        api_response = api_instance.v1_editions_edition_id_put(edition_id, edition_update_request_dto=edition_update_request_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **edition_update_request_dto** | [**EditionUpdateRequestDTO**](EditionUpdateRequestDTO.md)| JSON object with the attributes to be updated | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_script_collection_get**
> EditionScriptCollectionDTO v1_editions_edition_id_script_collection_get(edition_id)

Provides spatial data for all letters in the edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition

    try:
        # Provides spatial data for all letters in the edition
        api_response = api_instance.v1_editions_edition_id_script_collection_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_script_collection_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_script_lines_get**
> EditionScriptLinesDTO v1_editions_edition_id_script_lines_get(edition_id)

Provides spatial data for all letters in the edition organized and oriented  by lines.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition

    try:
        # Provides spatial data for all letters in the edition organized and oriented  by lines.
        api_response = api_instance.v1_editions_edition_id_script_lines_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_edition_id_script_lines_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_editor_invitations_get**
> EditorInvitationListDTO v1_editions_editor_invitations_get()

Get a list of invitations issued to the current user to become an editor of a shared edition

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    
    try:
        # Get a list of invitations issued to the current user to become an editor of a shared edition
        api_response = api_instance.v1_editions_editor_invitations_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_editor_invitations_get: %s\n" % e)
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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_get**
> EditionListDTO v1_editions_get()

Provides a listing of all editions accessible to the current user

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica_api_connector
from qumranica_api_connector.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.EditionApi(api_client)
    
    try:
        # Provides a listing of all editions accessible to the current user
        api_response = api_instance.v1_editions_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling EditionApi->v1_editions_get: %s\n" % e)
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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

