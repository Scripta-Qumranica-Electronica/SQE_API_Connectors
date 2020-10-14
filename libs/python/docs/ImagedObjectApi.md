# qumranica.ImagedObjectApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_editions_edition_id_imaged_objects_get**](ImagedObjectApi.md#v1_editions_edition_id_imaged_objects_get) | **GET** /v1/editions/{editionId}/imaged-objects | Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
[**v1_editions_edition_id_imaged_objects_imaged_object_id_get**](ImagedObjectApi.md#v1_editions_edition_id_imaged_objects_imaged_object_id_get) | **GET** /v1/editions/{editionId}/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
[**v1_imaged_objects_imaged_object_id_get**](ImagedObjectApi.md#v1_imaged_objects_imaged_object_id_get) | **GET** /v1/imaged-objects/{imagedObjectId} | Provides information for the specified imaged object.
[**v1_imaged_objects_imaged_object_id_text_fragments_get**](ImagedObjectApi.md#v1_imaged_objects_imaged_object_id_text_fragments_get) | **GET** /v1/imaged-objects/{imagedObjectId}/text-fragments | Provides a list of all text fragments that should correspond to the imaged object.
[**v1_imaged_objects_institutions_get**](ImagedObjectApi.md#v1_imaged_objects_institutions_get) | **GET** /v1/imaged-objects/institutions | Provides a list of all institutional image providers.
[**v1_imaged_objects_institutions_institution_name_get**](ImagedObjectApi.md#v1_imaged_objects_institutions_institution_name_get) | **GET** /v1/imaged-objects/institutions/{institutionName} | Provides a list of all institutional image providers.


# **v1_editions_edition_id_imaged_objects_get**
> ImagedObjectListDTO v1_editions_edition_id_imaged_objects_get(edition_id, optional=optional)

Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.ImagedObjectApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
optional = ['optional_example'] # list[str] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks (optional)

    try:
        # Provides a listing of imaged objects related to the specified edition, can include images and also their masks with  optional.
        api_response = api_instance.v1_editions_edition_id_imaged_objects_get(edition_id, optional=optional)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ImagedObjectApi->v1_editions_edition_id_imaged_objects_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **optional** | [**list[str]**](str.md)| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | [optional] 

### Return type

[**ImagedObjectListDTO**](ImagedObjectListDTO.md)

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

# **v1_editions_edition_id_imaged_objects_imaged_object_id_get**
> ImagedObjectDTO v1_editions_edition_id_imaged_objects_imaged_object_id_get(edition_id, imaged_object_id, optional=optional)

Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.ImagedObjectApi(api_client)
    edition_id = 56 # int | Unique Id of the desired edition
imaged_object_id = 'imaged_object_id_example' # str | Unique Id of the desired object from the imaging Institution
optional = ['optional_example'] # list[str] | Set 'artefacts' to receive related artefact data and 'masks' to include the artefact masks (optional)

    try:
        # Provides information for the specified imaged object related to the specified edition, can include images and also  their masks with optional.
        api_response = api_instance.v1_editions_edition_id_imaged_objects_imaged_object_id_get(edition_id, imaged_object_id, optional=optional)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ImagedObjectApi->v1_editions_edition_id_imaged_objects_imaged_object_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Unique Id of the desired edition | 
 **imaged_object_id** | **str**| Unique Id of the desired object from the imaging Institution | 
 **optional** | [**list[str]**](str.md)| Set &#39;artefacts&#39; to receive related artefact data and &#39;masks&#39; to include the artefact masks | [optional] 

### Return type

[**ImagedObjectDTO**](ImagedObjectDTO.md)

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

# **v1_imaged_objects_imaged_object_id_get**
> SimpleImageListDTO v1_imaged_objects_imaged_object_id_get(imaged_object_id)

Provides information for the specified imaged object.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.ImagedObjectApi(api_client)
    imaged_object_id = 'imaged_object_id_example' # str | Unique Id of the desired object from the imaging Institution

    try:
        # Provides information for the specified imaged object.
        api_response = api_instance.v1_imaged_objects_imaged_object_id_get(imaged_object_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ImagedObjectApi->v1_imaged_objects_imaged_object_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imaged_object_id** | **str**| Unique Id of the desired object from the imaging Institution | 

### Return type

[**SimpleImageListDTO**](SimpleImageListDTO.md)

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

# **v1_imaged_objects_imaged_object_id_text_fragments_get**
> ImagedObjectTextFragmentMatchListDTO v1_imaged_objects_imaged_object_id_text_fragments_get(imaged_object_id)

Provides a list of all text fragments that should correspond to the imaged object.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.ImagedObjectApi(api_client)
    imaged_object_id = 'imaged_object_id_example' # str | Id of the imaged object

    try:
        # Provides a list of all text fragments that should correspond to the imaged object.
        api_response = api_instance.v1_imaged_objects_imaged_object_id_text_fragments_get(imaged_object_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ImagedObjectApi->v1_imaged_objects_imaged_object_id_text_fragments_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imaged_object_id** | **str**| Id of the imaged object | 

### Return type

[**ImagedObjectTextFragmentMatchListDTO**](ImagedObjectTextFragmentMatchListDTO.md)

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

# **v1_imaged_objects_institutions_get**
> ImageInstitutionListDTO v1_imaged_objects_institutions_get()

Provides a list of all institutional image providers.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.ImagedObjectApi(api_client)
    
    try:
        # Provides a list of all institutional image providers.
        api_response = api_instance.v1_imaged_objects_institutions_get()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ImagedObjectApi->v1_imaged_objects_institutions_get: %s\n" % e)
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v1_imaged_objects_institutions_institution_name_get**
> InstitutionalImageListDTO v1_imaged_objects_institutions_institution_name_get(institution_name)

Provides a list of all institutional image providers.

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import qumranica
from qumranica.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = qumranica.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration = qumranica.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica.ImagedObjectApi(api_client)
    institution_name = 'institution_name_example' # str | 

    try:
        # Provides a list of all institutional image providers.
        api_response = api_instance.v1_imaged_objects_institutions_institution_name_get(institution_name)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ImagedObjectApi->v1_imaged_objects_institutions_institution_name_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institution_name** | **str**|  | 

### Return type

[**InstitutionalImageListDTO**](InstitutionalImageListDTO.md)

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

