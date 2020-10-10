# SignInterpretationCreateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineId** | **int32** |  | [optional] 
**PreviousSignInterpretationIds** | Pointer to **[]int32** |  | [optional] 
**NextSignInterpretationIds** | Pointer to **[]int32** |  | [optional] 
**Attributes** | [**[]InterpretationAttributeCreateDto**](InterpretationAttributeCreateDTO.md) |  | 
**Rois** | [**[]SetInterpretationRoiDto**](SetInterpretationRoiDTO.md) |  | 
**Commentary** | Pointer to [**CommentaryCreateDto**](CommentaryCreateDTO.md) |  | [optional] 
**BreakPreviousAndNextSignInterpretations** | **bool** |  | [optional] 
**Character** | Pointer to **string** |  | [optional] 
**IsVariant** | **bool** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


