# BatchEditRoiResponseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateRois** | [**[]InterpretationRoiDTO**](InterpretationRoiDTO.md) |  | 
**UpdateRois** | [**[]UpdatedInterpretationRoiDTO**](UpdatedInterpretationRoiDTO.md) |  | 
**DeleteRois** | **[]int32** |  | 

## Methods

### NewBatchEditRoiResponseDTO

`func NewBatchEditRoiResponseDTO(createRois []InterpretationRoiDTO, updateRois []UpdatedInterpretationRoiDTO, deleteRois []int32, ) *BatchEditRoiResponseDTO`

NewBatchEditRoiResponseDTO instantiates a new BatchEditRoiResponseDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchEditRoiResponseDTOWithDefaults

`func NewBatchEditRoiResponseDTOWithDefaults() *BatchEditRoiResponseDTO`

NewBatchEditRoiResponseDTOWithDefaults instantiates a new BatchEditRoiResponseDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateRois

`func (o *BatchEditRoiResponseDTO) GetCreateRois() []InterpretationRoiDTO`

GetCreateRois returns the CreateRois field if non-nil, zero value otherwise.

### GetCreateRoisOk

`func (o *BatchEditRoiResponseDTO) GetCreateRoisOk() (*[]InterpretationRoiDTO, bool)`

GetCreateRoisOk returns a tuple with the CreateRois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateRois

`func (o *BatchEditRoiResponseDTO) SetCreateRois(v []InterpretationRoiDTO)`

SetCreateRois sets CreateRois field to given value.


### GetUpdateRois

`func (o *BatchEditRoiResponseDTO) GetUpdateRois() []UpdatedInterpretationRoiDTO`

GetUpdateRois returns the UpdateRois field if non-nil, zero value otherwise.

### GetUpdateRoisOk

`func (o *BatchEditRoiResponseDTO) GetUpdateRoisOk() (*[]UpdatedInterpretationRoiDTO, bool)`

GetUpdateRoisOk returns a tuple with the UpdateRois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateRois

`func (o *BatchEditRoiResponseDTO) SetUpdateRois(v []UpdatedInterpretationRoiDTO)`

SetUpdateRois sets UpdateRois field to given value.


### GetDeleteRois

`func (o *BatchEditRoiResponseDTO) GetDeleteRois() []int32`

GetDeleteRois returns the DeleteRois field if non-nil, zero value otherwise.

### GetDeleteRoisOk

`func (o *BatchEditRoiResponseDTO) GetDeleteRoisOk() (*[]int32, bool)`

GetDeleteRoisOk returns a tuple with the DeleteRois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteRois

`func (o *BatchEditRoiResponseDTO) SetDeleteRois(v []int32)`

SetDeleteRois sets DeleteRois field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


