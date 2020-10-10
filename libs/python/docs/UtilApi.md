# qumranica_api_connector.UtilApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_utils_repair_wkt_polygon_post**](UtilApi.md#v1_utils_repair_wkt_polygon_post) | **POST** /v1/utils/repair-wkt-polygon | Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.


# **v1_utils_repair_wkt_polygon_post**
> WktPolygonDTO v1_utils_repair_wkt_polygon_post(wkt_polygon_dto=wkt_polygon_dto)

Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.

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
configuration = qumranica_api_connector.Configuration(
    host = "http://localhost",
    api_key = {
        'Authorization': 'YOUR_API_KEY'
    }
)
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with qumranica_api_connector.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = qumranica_api_connector.UtilApi(api_client)
    wkt_polygon_dto = qumranica_api_connector.WktPolygonDTO() # WktPolygonDTO | JSON object with the WKT polygon to validate (optional)

    try:
        # Checks a WKT polygon to ensure validity. If the polygon is invalid,  it attempts to construct a valid polygon that matches the original  as closely as possible.
        api_response = api_instance.v1_utils_repair_wkt_polygon_post(wkt_polygon_dto=wkt_polygon_dto)
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling UtilApi->v1_utils_repair_wkt_polygon_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wkt_polygon_dto** | [**WktPolygonDTO**](WktPolygonDTO.md)| JSON object with the WKT polygon to validate | [optional] 

### Return type

[**WktPolygonDTO**](WktPolygonDTO.md)

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

