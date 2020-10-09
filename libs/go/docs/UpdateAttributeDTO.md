# UpdateAttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateValues** | [**[]CreateAttributeValueDTO**](CreateAttributeValueDTO.md) |  | 
**UpdateValues** | [**[]UpdateAttributeValueDTO**](UpdateAttributeValueDTO.md) |  | 
**DeleteValues** | **[]int32** |  | 
**Editable** | Pointer to **bool** |  | [optional] 
**Removable** | Pointer to **bool** |  | [optional] 
**Repeatable** | Pointer to **bool** |  | [optional] 
**BatchEditable** | Pointer to **bool** |  | [optional] 

## Methods

### NewUpdateAttributeDTO

`func NewUpdateAttributeDTO(createValues []CreateAttributeValueDTO, updateValues []UpdateAttributeValueDTO, deleteValues []int32, ) *UpdateAttributeDTO`

NewUpdateAttributeDTO instantiates a new UpdateAttributeDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateAttributeDTOWithDefaults

`func NewUpdateAttributeDTOWithDefaults() *UpdateAttributeDTO`

NewUpdateAttributeDTOWithDefaults instantiates a new UpdateAttributeDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateValues

`func (o *UpdateAttributeDTO) GetCreateValues() []CreateAttributeValueDTO`

GetCreateValues returns the CreateValues field if non-nil, zero value otherwise.

### GetCreateValuesOk

`func (o *UpdateAttributeDTO) GetCreateValuesOk() (*[]CreateAttributeValueDTO, bool)`

GetCreateValuesOk returns a tuple with the CreateValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateValues

`func (o *UpdateAttributeDTO) SetCreateValues(v []CreateAttributeValueDTO)`

SetCreateValues sets CreateValues field to given value.


### GetUpdateValues

`func (o *UpdateAttributeDTO) GetUpdateValues() []UpdateAttributeValueDTO`

GetUpdateValues returns the UpdateValues field if non-nil, zero value otherwise.

### GetUpdateValuesOk

`func (o *UpdateAttributeDTO) GetUpdateValuesOk() (*[]UpdateAttributeValueDTO, bool)`

GetUpdateValuesOk returns a tuple with the UpdateValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateValues

`func (o *UpdateAttributeDTO) SetUpdateValues(v []UpdateAttributeValueDTO)`

SetUpdateValues sets UpdateValues field to given value.


### GetDeleteValues

`func (o *UpdateAttributeDTO) GetDeleteValues() []int32`

GetDeleteValues returns the DeleteValues field if non-nil, zero value otherwise.

### GetDeleteValuesOk

`func (o *UpdateAttributeDTO) GetDeleteValuesOk() (*[]int32, bool)`

GetDeleteValuesOk returns a tuple with the DeleteValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteValues

`func (o *UpdateAttributeDTO) SetDeleteValues(v []int32)`

SetDeleteValues sets DeleteValues field to given value.


### GetEditable

`func (o *UpdateAttributeDTO) GetEditable() bool`

GetEditable returns the Editable field if non-nil, zero value otherwise.

### GetEditableOk

`func (o *UpdateAttributeDTO) GetEditableOk() (*bool, bool)`

GetEditableOk returns a tuple with the Editable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditable

`func (o *UpdateAttributeDTO) SetEditable(v bool)`

SetEditable sets Editable field to given value.

### HasEditable

`func (o *UpdateAttributeDTO) HasEditable() bool`

HasEditable returns a boolean if a field has been set.

### GetRemovable

`func (o *UpdateAttributeDTO) GetRemovable() bool`

GetRemovable returns the Removable field if non-nil, zero value otherwise.

### GetRemovableOk

`func (o *UpdateAttributeDTO) GetRemovableOk() (*bool, bool)`

GetRemovableOk returns a tuple with the Removable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovable

`func (o *UpdateAttributeDTO) SetRemovable(v bool)`

SetRemovable sets Removable field to given value.

### HasRemovable

`func (o *UpdateAttributeDTO) HasRemovable() bool`

HasRemovable returns a boolean if a field has been set.

### GetRepeatable

`func (o *UpdateAttributeDTO) GetRepeatable() bool`

GetRepeatable returns the Repeatable field if non-nil, zero value otherwise.

### GetRepeatableOk

`func (o *UpdateAttributeDTO) GetRepeatableOk() (*bool, bool)`

GetRepeatableOk returns a tuple with the Repeatable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatable

`func (o *UpdateAttributeDTO) SetRepeatable(v bool)`

SetRepeatable sets Repeatable field to given value.

### HasRepeatable

`func (o *UpdateAttributeDTO) HasRepeatable() bool`

HasRepeatable returns a boolean if a field has been set.

### GetBatchEditable

`func (o *UpdateAttributeDTO) GetBatchEditable() bool`

GetBatchEditable returns the BatchEditable field if non-nil, zero value otherwise.

### GetBatchEditableOk

`func (o *UpdateAttributeDTO) GetBatchEditableOk() (*bool, bool)`

GetBatchEditableOk returns a tuple with the BatchEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchEditable

`func (o *UpdateAttributeDTO) SetBatchEditable(v bool)`

SetBatchEditable sets BatchEditable field to given value.

### HasBatchEditable

`func (o *UpdateAttributeDTO) HasBatchEditable() bool`

HasBatchEditable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


