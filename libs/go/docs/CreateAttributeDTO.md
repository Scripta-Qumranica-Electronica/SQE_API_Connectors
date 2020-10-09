# CreateAttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **string** |  | 
**Values** | [**[]CreateAttributeValueDTO**](CreateAttributeValueDTO.md) |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**Editable** | Pointer to **bool** |  | [optional] 
**Removable** | Pointer to **bool** |  | [optional] 
**Repeatable** | Pointer to **bool** |  | [optional] 
**BatchEditable** | Pointer to **bool** |  | [optional] 

## Methods

### NewCreateAttributeDTO

`func NewCreateAttributeDTO(attributeName string, values []CreateAttributeValueDTO, ) *CreateAttributeDTO`

NewCreateAttributeDTO instantiates a new CreateAttributeDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAttributeDTOWithDefaults

`func NewCreateAttributeDTOWithDefaults() *CreateAttributeDTO`

NewCreateAttributeDTOWithDefaults instantiates a new CreateAttributeDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *CreateAttributeDTO) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *CreateAttributeDTO) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *CreateAttributeDTO) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.


### GetValues

`func (o *CreateAttributeDTO) GetValues() []CreateAttributeValueDTO`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *CreateAttributeDTO) GetValuesOk() (*[]CreateAttributeValueDTO, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *CreateAttributeDTO) SetValues(v []CreateAttributeValueDTO)`

SetValues sets Values field to given value.


### GetDescription

`func (o *CreateAttributeDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateAttributeDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateAttributeDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateAttributeDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *CreateAttributeDTO) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *CreateAttributeDTO) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetEditable

`func (o *CreateAttributeDTO) GetEditable() bool`

GetEditable returns the Editable field if non-nil, zero value otherwise.

### GetEditableOk

`func (o *CreateAttributeDTO) GetEditableOk() (*bool, bool)`

GetEditableOk returns a tuple with the Editable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditable

`func (o *CreateAttributeDTO) SetEditable(v bool)`

SetEditable sets Editable field to given value.

### HasEditable

`func (o *CreateAttributeDTO) HasEditable() bool`

HasEditable returns a boolean if a field has been set.

### GetRemovable

`func (o *CreateAttributeDTO) GetRemovable() bool`

GetRemovable returns the Removable field if non-nil, zero value otherwise.

### GetRemovableOk

`func (o *CreateAttributeDTO) GetRemovableOk() (*bool, bool)`

GetRemovableOk returns a tuple with the Removable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovable

`func (o *CreateAttributeDTO) SetRemovable(v bool)`

SetRemovable sets Removable field to given value.

### HasRemovable

`func (o *CreateAttributeDTO) HasRemovable() bool`

HasRemovable returns a boolean if a field has been set.

### GetRepeatable

`func (o *CreateAttributeDTO) GetRepeatable() bool`

GetRepeatable returns the Repeatable field if non-nil, zero value otherwise.

### GetRepeatableOk

`func (o *CreateAttributeDTO) GetRepeatableOk() (*bool, bool)`

GetRepeatableOk returns a tuple with the Repeatable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatable

`func (o *CreateAttributeDTO) SetRepeatable(v bool)`

SetRepeatable sets Repeatable field to given value.

### HasRepeatable

`func (o *CreateAttributeDTO) HasRepeatable() bool`

HasRepeatable returns a boolean if a field has been set.

### GetBatchEditable

`func (o *CreateAttributeDTO) GetBatchEditable() bool`

GetBatchEditable returns the BatchEditable field if non-nil, zero value otherwise.

### GetBatchEditableOk

`func (o *CreateAttributeDTO) GetBatchEditableOk() (*bool, bool)`

GetBatchEditableOk returns a tuple with the BatchEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchEditable

`func (o *CreateAttributeDTO) SetBatchEditable(v bool)`

SetBatchEditable sets BatchEditable field to given value.

### HasBatchEditable

`func (o *CreateAttributeDTO) HasBatchEditable() bool`

HasBatchEditable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


