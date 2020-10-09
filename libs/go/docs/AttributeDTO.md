# AttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeId** | **int32** |  | 
**AttributeName** | **string** |  | 
**Values** | [**[]AttributeValueDTO**](AttributeValueDTO.md) |  | 
**CreatorId** | **int32** |  | 
**EditorId** | **int32** |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**Editable** | Pointer to **bool** |  | [optional] 
**Removable** | Pointer to **bool** |  | [optional] 
**Repeatable** | Pointer to **bool** |  | [optional] 
**BatchEditable** | Pointer to **bool** |  | [optional] 

## Methods

### NewAttributeDTO

`func NewAttributeDTO(attributeId int32, attributeName string, values []AttributeValueDTO, creatorId int32, editorId int32, ) *AttributeDTO`

NewAttributeDTO instantiates a new AttributeDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeDTOWithDefaults

`func NewAttributeDTOWithDefaults() *AttributeDTO`

NewAttributeDTOWithDefaults instantiates a new AttributeDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeId

`func (o *AttributeDTO) GetAttributeId() int32`

GetAttributeId returns the AttributeId field if non-nil, zero value otherwise.

### GetAttributeIdOk

`func (o *AttributeDTO) GetAttributeIdOk() (*int32, bool)`

GetAttributeIdOk returns a tuple with the AttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeId

`func (o *AttributeDTO) SetAttributeId(v int32)`

SetAttributeId sets AttributeId field to given value.


### GetAttributeName

`func (o *AttributeDTO) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *AttributeDTO) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *AttributeDTO) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.


### GetValues

`func (o *AttributeDTO) GetValues() []AttributeValueDTO`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *AttributeDTO) GetValuesOk() (*[]AttributeValueDTO, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *AttributeDTO) SetValues(v []AttributeValueDTO)`

SetValues sets Values field to given value.


### GetCreatorId

`func (o *AttributeDTO) GetCreatorId() int32`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *AttributeDTO) GetCreatorIdOk() (*int32, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *AttributeDTO) SetCreatorId(v int32)`

SetCreatorId sets CreatorId field to given value.


### GetEditorId

`func (o *AttributeDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *AttributeDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *AttributeDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetDescription

`func (o *AttributeDTO) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AttributeDTO) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AttributeDTO) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AttributeDTO) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AttributeDTO) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AttributeDTO) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetEditable

`func (o *AttributeDTO) GetEditable() bool`

GetEditable returns the Editable field if non-nil, zero value otherwise.

### GetEditableOk

`func (o *AttributeDTO) GetEditableOk() (*bool, bool)`

GetEditableOk returns a tuple with the Editable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditable

`func (o *AttributeDTO) SetEditable(v bool)`

SetEditable sets Editable field to given value.

### HasEditable

`func (o *AttributeDTO) HasEditable() bool`

HasEditable returns a boolean if a field has been set.

### GetRemovable

`func (o *AttributeDTO) GetRemovable() bool`

GetRemovable returns the Removable field if non-nil, zero value otherwise.

### GetRemovableOk

`func (o *AttributeDTO) GetRemovableOk() (*bool, bool)`

GetRemovableOk returns a tuple with the Removable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemovable

`func (o *AttributeDTO) SetRemovable(v bool)`

SetRemovable sets Removable field to given value.

### HasRemovable

`func (o *AttributeDTO) HasRemovable() bool`

HasRemovable returns a boolean if a field has been set.

### GetRepeatable

`func (o *AttributeDTO) GetRepeatable() bool`

GetRepeatable returns the Repeatable field if non-nil, zero value otherwise.

### GetRepeatableOk

`func (o *AttributeDTO) GetRepeatableOk() (*bool, bool)`

GetRepeatableOk returns a tuple with the Repeatable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatable

`func (o *AttributeDTO) SetRepeatable(v bool)`

SetRepeatable sets Repeatable field to given value.

### HasRepeatable

`func (o *AttributeDTO) HasRepeatable() bool`

HasRepeatable returns a boolean if a field has been set.

### GetBatchEditable

`func (o *AttributeDTO) GetBatchEditable() bool`

GetBatchEditable returns the BatchEditable field if non-nil, zero value otherwise.

### GetBatchEditableOk

`func (o *AttributeDTO) GetBatchEditableOk() (*bool, bool)`

GetBatchEditableOk returns a tuple with the BatchEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchEditable

`func (o *AttributeDTO) SetBatchEditable(v bool)`

SetBatchEditable sets BatchEditable field to given value.

### HasBatchEditable

`func (o *AttributeDTO) HasBatchEditable() bool`

HasBatchEditable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


