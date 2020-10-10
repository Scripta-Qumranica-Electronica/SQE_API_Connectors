# EditionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**EditionDataEditorId** | **int32** |  | 
**Permission** | [**PermissionDto**](PermissionDTO.md) |  | 
**Owner** | [**UserDto**](UserDTO.md) |  | 
**ThumbnailUrl** | Pointer to **string** |  | [optional] 
**Shares** | [**[]DetailedEditorRightsDto**](DetailedEditorRightsDTO.md) |  | 
**Metrics** | [**EditionManuscriptMetricsDto**](EditionManuscriptMetricsDTO.md) |  | 
**Locked** | **bool** |  | 
**IsPublic** | **bool** |  | 
**LastEdit** | Pointer to [**time.Time**](time.Time.md) |  | [optional] 
**Copyright** | **string** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


