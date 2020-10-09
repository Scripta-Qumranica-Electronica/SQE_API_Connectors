# openapi_client.RoiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_editions_edition_id_rois_batch_edit_post**](RoiApi.md#v1_editions_edition_id_rois_batch_edit_post) | **POST** /v1/editions/{editionId}/rois/batch-edit | Processes a series of create/update/delete ROI requests in the given edition of a scroll
[**v1_editions_edition_id_rois_batch_post**](RoiApi.md#v1_editions_edition_id_rois_batch_post) | **POST** /v1/editions/{editionId}/rois/batch | Creates new sign ROI&#39;s in the given edition of a scroll
[**v1_editions_edition_id_rois_batch_put**](RoiApi.md#v1_editions_edition_id_rois_batch_put) | **PUT** /v1/editions/{editionId}/rois/batch | Update existing sign ROI&#39;s in the given edition of a scroll
[**v1_editions_edition_id_rois_post**](RoiApi.md#v1_editions_edition_id_rois_post) | **POST** /v1/editions/{editionId}/rois | Creates new sign ROI in the given edition of a scroll
[**v1_editions_edition_id_rois_roi_id_delete**](RoiApi.md#v1_editions_edition_id_rois_roi_id_delete) | **DELETE** /v1/editions/{editionId}/rois/{roiId} | Deletes a sign ROI from the given edition of a scroll
[**v1_editions_edition_id_rois_roi_id_get**](RoiApi.md#v1_editions_edition_id_rois_roi_id_get) | **GET** /v1/editions/{editionId}/rois/{roiId} | Get the details for a ROI in the given edition of a scroll
[**v1_editions_edition_id_rois_roi_id_put**](RoiApi.md#v1_editions_edition_id_rois_roi_id_put) | **PUT** /v1/editions/{editionId}/rois/{roiId} | Update an existing sign ROI in the given edition of a scroll


# **v1_editions_edition_id_rois_batch_edit_post**
> BatchEditRoiResponseDTO v1_editions_edition_id_rois_batch_edit_post(edition_id, batch_edit_roi_dto=batch_edit_roi_dto)

Processes a series of create/update/delete ROI requests in the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
batch_edit_roi_dto = openapi_client.BatchEditRoiDTO() # BatchEditRoiDTO | A JSON object with all the roi edits to be performed (optional)

    try:
        # Processes a series of create/update/delete ROI requests in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_rois_batch_edit_post(edition_id, batch_edit_roi_dto=batch_edit_roi_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_batch_edit_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **batch_edit_roi_dto** | [**BatchEditRoiDTO**](BatchEditRoiDTO.md)| A JSON object with all the roi edits to be performed | [optional] 

### Return type

[**BatchEditRoiResponseDTO**](BatchEditRoiResponseDTO.md)

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

# **v1_editions_edition_id_rois_batch_post**
> InterpretationRoiDTOList v1_editions_edition_id_rois_batch_post(edition_id, set_interpretation_roi_dto_list=set_interpretation_roi_dto_list)

Creates new sign ROI's in the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
set_interpretation_roi_dto_list = openapi_client.SetInterpretationRoiDTOList() # SetInterpretationRoiDTOList | A JSON object with an array of the new ROI's to be created (optional)

    try:
        # Creates new sign ROI's in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_rois_batch_post(edition_id, set_interpretation_roi_dto_list=set_interpretation_roi_dto_list)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_batch_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **set_interpretation_roi_dto_list** | [**SetInterpretationRoiDTOList**](SetInterpretationRoiDTOList.md)| A JSON object with an array of the new ROI&#39;s to be created | [optional] 

### Return type

[**InterpretationRoiDTOList**](InterpretationRoiDTOList.md)

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

# **v1_editions_edition_id_rois_batch_put**
> UpdatedInterpretationRoiDTOList v1_editions_edition_id_rois_batch_put(edition_id, update_interpretation_roi_dto_list=update_interpretation_roi_dto_list)

Update existing sign ROI's in the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
update_interpretation_roi_dto_list = openapi_client.UpdateInterpretationRoiDTOList() # UpdateInterpretationRoiDTOList | A JSON object with an array of the updated ROI details (optional)

    try:
        # Update existing sign ROI's in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_rois_batch_put(edition_id, update_interpretation_roi_dto_list=update_interpretation_roi_dto_list)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_batch_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **update_interpretation_roi_dto_list** | [**UpdateInterpretationRoiDTOList**](UpdateInterpretationRoiDTOList.md)| A JSON object with an array of the updated ROI details | [optional] 

### Return type

[**UpdatedInterpretationRoiDTOList**](UpdatedInterpretationRoiDTOList.md)

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

# **v1_editions_edition_id_rois_post**
> InterpretationRoiDTO v1_editions_edition_id_rois_post(edition_id, set_interpretation_roi_dto=set_interpretation_roi_dto)

Creates new sign ROI in the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
set_interpretation_roi_dto = openapi_client.SetInterpretationRoiDTO() # SetInterpretationRoiDTO | A JSON object with the new ROI to be created (optional)

    try:
        # Creates new sign ROI in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_rois_post(edition_id, set_interpretation_roi_dto=set_interpretation_roi_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **set_interpretation_roi_dto** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md)| A JSON object with the new ROI to be created | [optional] 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

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

# **v1_editions_edition_id_rois_roi_id_delete**
> v1_editions_edition_id_rois_roi_id_delete(edition_id, roi_id)

Deletes a sign ROI from the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
roi_id = 56 # int | Id of the ROI to be deleted

    try:
        # Deletes a sign ROI from the given edition of a scroll
        api_instance.v1_editions_edition_id_rois_roi_id_delete(edition_id, roi_id)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_roi_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **roi_id** | **int**| Id of the ROI to be deleted | 

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

# **v1_editions_edition_id_rois_roi_id_get**
> InterpretationRoiDTO v1_editions_edition_id_rois_roi_id_get(edition_id, roi_id)

Get the details for a ROI in the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
roi_id = 56 # int | A JSON object with the new ROI to be created

    try:
        # Get the details for a ROI in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_rois_roi_id_get(edition_id, roi_id)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_roi_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **roi_id** | **int**| A JSON object with the new ROI to be created | 

### Return type

[**InterpretationRoiDTO**](InterpretationRoiDTO.md)

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

# **v1_editions_edition_id_rois_roi_id_put**
> UpdatedInterpretationRoiDTO v1_editions_edition_id_rois_roi_id_put(edition_id, roi_id, set_interpretation_roi_dto=set_interpretation_roi_dto)

Update an existing sign ROI in the given edition of a scroll

### Example

* Api Key Authentication (Bearer):
```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
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
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RoiApi(api_client)
    edition_id = 56 # int | Id of the edition
roi_id = 56 # int | Id of the ROI to be updated
set_interpretation_roi_dto = openapi_client.SetInterpretationRoiDTO() # SetInterpretationRoiDTO | A JSON object with the updated ROI details (optional)

    try:
        # Update an existing sign ROI in the given edition of a scroll
        api_response = api_instance.v1_editions_edition_id_rois_roi_id_put(edition_id, roi_id, set_interpretation_roi_dto=set_interpretation_roi_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling RoiApi->v1_editions_edition_id_rois_roi_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edition_id** | **int**| Id of the edition | 
 **roi_id** | **int**| Id of the ROI to be updated | 
 **set_interpretation_roi_dto** | [**SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md)| A JSON object with the updated ROI details | [optional] 

### Return type

[**UpdatedInterpretationRoiDTO**](UpdatedInterpretationRoiDTO.md)

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

