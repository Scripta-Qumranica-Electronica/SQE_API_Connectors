# BatchEditRoiDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateRois** | Pointer to [**[]SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md) |  | [optional] 
**UpdateRois** | Pointer to [**[]UpdateInterpretationRoiDTO**](UpdateInterpretationRoiDTO.md) |  | [optional] 
**DeleteRois** | Pointer to **[]int32** |  | [optional] 

## Methods

### NewBatchEditRoiDTO

`func NewBatchEditRoiDTO() *BatchEditRoiDTO`

NewBatchEditRoiDTO instantiates a new BatchEditRoiDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchEditRoiDTOWithDefaults

`func NewBatchEditRoiDTOWithDefaults() *BatchEditRoiDTO`

NewBatchEditRoiDTOWithDefaults instantiates a new BatchEditRoiDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateRois

`func (o *BatchEditRoiDTO) GetCreateRois() []SetInterpretationRoiDTO`

GetCreateRois returns the CreateRois field if non-nil, zero value otherwise.

### GetCreateRoisOk

`func (o *BatchEditRoiDTO) GetCreateRoisOk() (*[]SetInterpretationRoiDTO, bool)`

GetCreateRoisOk returns a tuple with the CreateRois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateRois

`func (o *BatchEditRoiDTO) SetCreateRois(v []SetInterpretationRoiDTO)`

SetCreateRois sets CreateRois field to given value.

### HasCreateRois

`func (o *BatchEditRoiDTO) HasCreateRois() bool`

HasCreateRois returns a boolean if a field has been set.

### SetCreateRoisNil

`func (o *BatchEditRoiDTO) SetCreateRoisNil(b bool)`

 SetCreateRoisNil sets the value for CreateRois to be an explicit nil

### UnsetCreateRois
`func (o *BatchEditRoiDTO) UnsetCreateRois()`

UnsetCreateRois ensures that no value is present for CreateRois, not even an explicit nil
### GetUpdateRois

`func (o *BatchEditRoiDTO) GetUpdateRois() []UpdateInterpretationRoiDTO`

GetUpdateRois returns the UpdateRois field if non-nil, zero value otherwise.

### GetUpdateRoisOk

`func (o *BatchEditRoiDTO) GetUpdateRoisOk() (*[]UpdateInterpretationRoiDTO, bool)`

GetUpdateRoisOk returns a tuple with the UpdateRois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateRois

`func (o *BatchEditRoiDTO) SetUpdateRois(v []UpdateInterpretationRoiDTO)`

SetUpdateRois sets UpdateRois field to given value.

### HasUpdateRois

`func (o *BatchEditRoiDTO) HasUpdateRois() bool`

HasUpdateRois returns a boolean if a field has been set.

### SetUpdateRoisNil

`func (o *BatchEditRoiDTO) SetUpdateRoisNil(b bool)`

 SetUpdateRoisNil sets the value for UpdateRois to be an explicit nil

### UnsetUpdateRois
`func (o *BatchEditRoiDTO) UnsetUpdateRois()`

UnsetUpdateRois ensures that no value is present for UpdateRois, not even an explicit nil
### GetDeleteRois

`func (o *BatchEditRoiDTO) GetDeleteRois() []int32`

GetDeleteRois returns the DeleteRois field if non-nil, zero value otherwise.

### GetDeleteRoisOk

`func (o *BatchEditRoiDTO) GetDeleteRoisOk() (*[]int32, bool)`

GetDeleteRoisOk returns a tuple with the DeleteRois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteRois

`func (o *BatchEditRoiDTO) SetDeleteRois(v []int32)`

SetDeleteRois sets DeleteRois field to given value.

### HasDeleteRois

`func (o *BatchEditRoiDTO) HasDeleteRois() bool`

HasDeleteRois returns a boolean if a field has been set.

### SetDeleteRoisNil

`func (o *BatchEditRoiDTO) SetDeleteRoisNil(b bool)`

 SetDeleteRoisNil sets the value for DeleteRois to be an explicit nil

### UnsetDeleteRois
`func (o *BatchEditRoiDTO) UnsetDeleteRois()`

UnsetDeleteRois ensures that no value is present for DeleteRois, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


