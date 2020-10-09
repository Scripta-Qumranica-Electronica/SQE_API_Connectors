# qumranica_api_connector.ArtefactApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_editions_edition_id_artefact_groups_artefact_group_id_delete**](ArtefactApi.md#v1_editions_edition_id_artefact_groups_artefact_group_id_delete) | **DELETE** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Deletes the specified artefact group.
[**v1_editions_edition_id_artefact_groups_artefact_group_id_get**](ArtefactApi.md#v1_editions_edition_id_artefact_groups_artefact_group_id_get) | **GET** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Gets the details of a specific artefact group in the edition
[**v1_editions_edition_id_artefact_groups_artefact_group_id_put**](ArtefactApi.md#v1_editions_edition_id_artefact_groups_artefact_group_id_put) | **PUT** /v1/editions/{editionId}/artefact-groups/{artefactGroupId} | Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
[**v1_editions_edition_id_artefact_groups_get**](ArtefactApi.md#v1_editions_edition_id_artefact_groups_get) | **GET** /v1/editions/{editionId}/artefact-groups | Gets a listing of all artefact groups in the edition
[**v1_editions_edition_id_artefact_groups_post**](ArtefactApi.md#v1_editions_edition_id_artefact_groups_post) | **POST** /v1/editions/{editionId}/artefact-groups | Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
[**v1_editions_edition_id_artefacts_artefact_id_delete**](ArtefactApi.md#v1_editions_edition_id_artefacts_artefact_id_delete) | **DELETE** /v1/editions/{editionId}/artefacts/{artefactId} | Deletes the specified artefact
[**v1_editions_edition_id_artefacts_artefact_id_get**](ArtefactApi.md#v1_editions_edition_id_artefacts_artefact_id_get) | **GET** /v1/editions/{editionId}/artefacts/{artefactId} | Provides a listing of all artefacts that are part of the specified edition
[**v1_editions_edition_id_artefacts_artefact_id_put**](ArtefactApi.md#v1_editions_edition_id_artefacts_artefact_id_put) | **PUT** /v1/editions/{editionId}/artefacts/{artefactId} | Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \&quot;\&quot; will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
[**v1_editions_edition_id_artefacts_artefact_id_rois_get**](ArtefactApi.md#v1_editions_edition_id_artefacts_artefact_id_rois_get) | **GET** /v1/editions/{editionId}/artefacts/{artefactId}/rois | Provides a listing of all rois belonging to an artefact in the specified edition
[**v1_editions_edition_id_artefacts_artefact_id_text_fragments_get**](ArtefactApi.md#v1_editions_edition_id_artefacts_artefact_id_text_fragments_get) | **GET** /v1/editions/{editionId}/artefacts/{artefactId}/text-fragments | Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \&quot;suggested\&quot;, this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
[**v1_editions_edition_id_artefacts_batch_transformation_post**](ArtefactApi.md#v1_editions_edition_id_artefacts_batch_transformation_post) | **POST** /v1/editions/{editionId}/artefacts/batch-transformation | Updates the positional data for a batch of artefacts
[**v1_editions_edition_id_artefacts_get**](ArtefactApi.md#v1_editions_edition_id_artefacts_get) | **GET** /v1/editions/{editionId}/artefacts | Provides a listing of all artefacts that are part of the specified edition
[**v1_editions_edition_id_artefacts_post**](ArtefactApi.md#v1_editions_edition_id_artefacts_post) | **POST** /v1/editions/{editionId}/artefacts | Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \&quot;POLYGON((0 0,1 1,1 0,0 0))\&quot; (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.


# **v1_editions_edition_id_artefact_groups_artefact_group_id_delete**
> DeleteDTO v1_editions_edition_id_artefact_groups_artefact_group_id_delete(edition_id, artefact_group_id)

Deletes the specified artefact group.

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_group_id = 56 # int | Unique Id of the artefact group to be deleted

    try:
        # Deletes the specified artefact group.
        api_response = api_instance.v1_editions_edition_id_artefact_groups_artefact_group_id_delete(edition_id, artefact_group_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefact_groups_artefact_group_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_group_id** | **int**| Unique Id of the artefact group to be deleted | 

### Return type

[**DeleteDTO**](DeleteDTO.md)

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

# **v1_editions_edition_id_artefact_groups_artefact_group_id_get**
> ArtefactGroupDTO v1_editions_edition_id_artefact_groups_artefact_group_id_get(edition_id, artefact_group_id)

Gets the details of a specific artefact group in the edition

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_group_id = 56 # int | Id of the desired artefact group

    try:
        # Gets the details of a specific artefact group in the edition
        api_response = api_instance.v1_editions_edition_id_artefact_groups_artefact_group_id_get(edition_id, artefact_group_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefact_groups_artefact_group_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_group_id** | **int**| Id of the desired artefact group | 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

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

# **v1_editions_edition_id_artefact_groups_artefact_group_id_put**
> ArtefactGroupDTO v1_editions_edition_id_artefact_groups_artefact_group_id_put(edition_id, artefact_group_id, update_artefact_group_dto=update_artefact_group_dto)

Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_group_id = 56 # int | Id of the artefact group to be updated
update_artefact_group_dto = qumranica_api_connector.UpdateArtefactGroupDTO() # UpdateArtefactGroupDTO | Parameters that the artefact group should be changed to (optional)

    try:
        # Updates the details of an artefact group.  The artefact group will now only contain the artefacts listed in the JSON payload.  If the name is null, no change will be made, otherwise the name will also be updated.
        api_response = api_instance.v1_editions_edition_id_artefact_groups_artefact_group_id_put(edition_id, artefact_group_id, update_artefact_group_dto=update_artefact_group_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefact_groups_artefact_group_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_group_id** | **int**| Id of the artefact group to be updated | 
 **update_artefact_group_dto** | [**UpdateArtefactGroupDTO**](UpdateArtefactGroupDTO.md)| Parameters that the artefact group should be changed to | [optional] 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

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

# **v1_editions_edition_id_artefact_groups_get**
> ArtefactGroupListDTO v1_editions_edition_id_artefact_groups_get(edition_id)

Gets a listing of all artefact groups in the edition

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition

    try:
        # Gets a listing of all artefact groups in the edition
        api_response = api_instance.v1_editions_edition_id_artefact_groups_get(edition_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefact_groups_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 

### Return type

[**ArtefactGroupListDTO**](ArtefactGroupListDTO.md)

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

# **v1_editions_edition_id_artefact_groups_post**
> ArtefactGroupDTO v1_editions_edition_id_artefact_groups_post(edition_id, create_artefact_group_dto=create_artefact_group_dto)

Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
create_artefact_group_dto = qumranica_api_connector.CreateArtefactGroupDTO() # CreateArtefactGroupDTO | Parameters of the new artefact group (optional)

    try:
        # Creates a new artefact group with the submitted data.  The new artefact must have a list of artefacts that belong to the group.  It is not necessary to give the group a name.
        api_response = api_instance.v1_editions_edition_id_artefact_groups_post(edition_id, create_artefact_group_dto=create_artefact_group_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefact_groups_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **create_artefact_group_dto** | [**CreateArtefactGroupDTO**](CreateArtefactGroupDTO.md)| Parameters of the new artefact group | [optional] 

### Return type

[**ArtefactGroupDTO**](ArtefactGroupDTO.md)

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

# **v1_editions_edition_id_artefacts_artefact_id_delete**
> v1_editions_edition_id_artefacts_artefact_id_delete(edition_id, artefact_id)

Deletes the specified artefact

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_id = 56 # int | Unique Id of the desired artefact

    try:
        # Deletes the specified artefact
        api_instance.v1_editions_edition_id_artefacts_artefact_id_delete(edition_id, artefact_id)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_artefact_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_id** | **int**| Unique Id of the desired artefact | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_editions_edition_id_artefacts_artefact_id_get**
> ArtefactDTO v1_editions_edition_id_artefacts_artefact_id_get(edition_id, artefact_id, optional=optional)

Provides a listing of all artefacts that are part of the specified edition

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_id = 56 # int | Unique Id of the desired artefact
optional = ['optional_example'] # list[str] | Add \"masks\" to include artefact polygons and \"images\" to include image data (optional)

    try:
        # Provides a listing of all artefacts that are part of the specified edition
        api_response = api_instance.v1_editions_edition_id_artefacts_artefact_id_get(edition_id, artefact_id, optional=optional)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_artefact_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_id** | **int**| Unique Id of the desired artefact | 
 **optional** | [**list[str]**](str.md)| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

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

# **v1_editions_edition_id_artefacts_artefact_id_put**
> ArtefactDTO v1_editions_edition_id_artefacts_artefact_id_put(edition_id, artefact_id, update_artefact_dto=update_artefact_dto)

Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_id = 56 # int | Unique Id of the desired artefact
update_artefact_dto = qumranica_api_connector.UpdateArtefactDTO() # UpdateArtefactDTO | An UpdateArtefactDTO with the desired alterations to the artefact (optional)

    try:
        # Updates the specified artefact.  There are many possible attributes that can be changed for  an artefact.  The caller should only input only those that  should be changed. Attributes with a null value will be ignored.  For instance, setting the mask to null or \"\" will result in  no changes to the current mask, and no value for the mask will  be returned (or broadcast). Likewise, the transformation, name,  or status message may be set to null and no change will be made  to those entities (though any unchanged values will be returned  along with the changed values and also broadcast to co-editors).
        api_response = api_instance.v1_editions_edition_id_artefacts_artefact_id_put(edition_id, artefact_id, update_artefact_dto=update_artefact_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_artefact_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_id** | **int**| Unique Id of the desired artefact | 
 **update_artefact_dto** | [**UpdateArtefactDTO**](UpdateArtefactDTO.md)| An UpdateArtefactDTO with the desired alterations to the artefact | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

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

# **v1_editions_edition_id_artefacts_artefact_id_rois_get**
> InterpretationRoiDTOList v1_editions_edition_id_artefacts_artefact_id_rois_get(edition_id, artefact_id)

Provides a listing of all rois belonging to an artefact in the specified edition

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_id = 56 # int | Unique Id of the desired artefact

    try:
        # Provides a listing of all rois belonging to an artefact in the specified edition
        api_response = api_instance.v1_editions_edition_id_artefacts_artefact_id_rois_get(edition_id, artefact_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_artefact_id_rois_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_id** | **int**| Unique Id of the desired artefact | 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

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

# **v1_editions_edition_id_artefacts_artefact_id_text_fragments_get**
> ArtefactTextFragmentMatchListDTO v1_editions_edition_id_artefacts_artefact_id_text_fragments_get(edition_id, artefact_id, optional=optional)

Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
artefact_id = 56 # int | Unique Id of the desired artefact
optional = ['optional_example'] # list[str] | Add \"suggested\" to include possible matches suggested by the system (optional)

    try:
        # Provides a listing of text fragments that have text in the specified artefact.  With the optional query parameter \"suggested\", this endpoint will also return  any text fragment that the system suggests might have text in the artefact.
        api_response = api_instance.v1_editions_edition_id_artefacts_artefact_id_text_fragments_get(edition_id, artefact_id, optional=optional)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_artefact_id_text_fragments_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **artefact_id** | **int**| Unique Id of the desired artefact | 
 **optional** | [**list[str]**](str.md)| Add \&quot;suggested\&quot; to include possible matches suggested by the system | [optional] 

### Return type

[**ArtefactTextFragmentMatchListDTO**](ArtefactTextFragmentMatchListDTO.md)

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

# **v1_editions_edition_id_artefacts_batch_transformation_post**
> BatchUpdatedArtefactTransformDTO v1_editions_edition_id_artefacts_batch_transformation_post(edition_id, batch_update_artefact_placement_dto=batch_update_artefact_placement_dto)

Updates the positional data for a batch of artefacts

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
batch_update_artefact_placement_dto = qumranica_api_connector.BatchUpdateArtefactPlacementDTO() # BatchUpdateArtefactPlacementDTO | A BatchUpdateArtefactTransformDTO with a list of the desired updates (optional)

    try:
        # Updates the positional data for a batch of artefacts
        api_response = api_instance.v1_editions_edition_id_artefacts_batch_transformation_post(edition_id, batch_update_artefact_placement_dto=batch_update_artefact_placement_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_batch_transformation_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **batch_update_artefact_placement_dto** | [**BatchUpdateArtefactPlacementDTO**](BatchUpdateArtefactPlacementDTO.md)| A BatchUpdateArtefactTransformDTO with a list of the desired updates | [optional] 

### Return type

[**BatchUpdatedArtefactTransformDTO**](BatchUpdatedArtefactTransformDTO.md)

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

# **v1_editions_edition_id_artefacts_get**
> ArtefactListDTO v1_editions_edition_id_artefacts_get(edition_id, optional=optional)

Provides a listing of all artefacts that are part of the specified edition

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
optional = ['optional_example'] # list[str] | Add \"masks\" to include artefact polygons and \"images\" to include image data (optional)

    try:
        # Provides a listing of all artefacts that are part of the specified edition
        api_response = api_instance.v1_editions_edition_id_artefacts_get(edition_id, optional=optional)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **optional** | [**list[str]**](str.md)| Add \&quot;masks\&quot; to include artefact polygons and \&quot;images\&quot; to include image data | [optional] 

### Return type

[**ArtefactListDTO**](ArtefactListDTO.md)

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

# **v1_editions_edition_id_artefacts_post**
> ArtefactDTO v1_editions_edition_id_artefacts_post(edition_id, create_artefact_dto=create_artefact_dto)

Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.

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
    api_instance = qumranica_api_connector.ArtefactApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
create_artefact_dto = qumranica_api_connector.CreateArtefactDTO() # CreateArtefactDTO | A CreateArtefactDTO with the data for the new artefact (optional)

    try:
        # Creates a new artefact with the provided data.  If no mask is provided, a placeholder mask will be created with the values:  \"POLYGON((0 0,1 1,1 0,0 0))\" (the system requires a valid WKT polygon mask for  every artefact). It is not recommended to leave the mask, name, or work status  blank or null. It will often be advantageous to leave the transformation null  when first creating a new artefact.
        api_response = api_instance.v1_editions_edition_id_artefacts_post(edition_id, create_artefact_dto=create_artefact_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ArtefactApi->v1_editions_edition_id_artefacts_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **create_artefact_dto** | [**CreateArtefactDTO**](CreateArtefactDTO.md)| A CreateArtefactDTO with the data for the new artefact | [optional] 

### Return type

[**ArtefactDTO**](ArtefactDTO.md)

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

