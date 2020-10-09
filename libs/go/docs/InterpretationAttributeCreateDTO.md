# InterpretationAttributeCreateDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Commentary** | Pointer to **NullableString** |  | [optional] 
**Sequence** | Pointer to **NullableInt32** |  | [optional] 
**AttributeId** | **int32** |  | 
**AttributeValueId** | **int32** |  | 

## Methods

### NewInterpretationAttributeCreateDTO

`func NewInterpretationAttributeCreateDTO(attributeId int32, attributeValueId int32, ) *InterpretationAttributeCreateDTO`

NewInterpretationAttributeCreateDTO instantiates a new InterpretationAttributeCreateDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterpretationAttributeCreateDTOWithDefaults

`func NewInterpretationAttributeCreateDTOWithDefaults() *InterpretationAttributeCreateDTO`

NewInterpretationAttributeCreateDTOWithDefaults instantiates a new InterpretationAttributeCreateDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentary

`func (o *InterpretationAttributeCreateDTO) GetCommentary() string`

GetCommentary returns the Commentary field if non-nil, zero value otherwise.

### GetCommentaryOk

`func (o *InterpretationAttributeCreateDTO) GetCommentaryOk() (*string, bool)`

GetCommentaryOk returns a tuple with the Commentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentary

`func (o *InterpretationAttributeCreateDTO) SetCommentary(v string)`

SetCommentary sets Commentary field to given value.

### HasCommentary

`func (o *InterpretationAttributeCreateDTO) HasCommentary() bool`

HasCommentary returns a boolean if a field has been set.

### SetCommentaryNil

`func (o *InterpretationAttributeCreateDTO) SetCommentaryNil(b bool)`

 SetCommentaryNil sets the value for Commentary to be an explicit nil

### UnsetCommentary
`func (o *InterpretationAttributeCreateDTO) UnsetCommentary()`

UnsetCommentary ensures that no value is present for Commentary, not even an explicit nil
### GetSequence

`func (o *InterpretationAttributeCreateDTO) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *InterpretationAttributeCreateDTO) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *InterpretationAttributeCreateDTO) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *InterpretationAttributeCreateDTO) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### SetSequenceNil

`func (o *InterpretationAttributeCreateDTO) SetSequenceNil(b bool)`

 SetSequenceNil sets the value for Sequence to be an explicit nil

### UnsetSequence
`func (o *InterpretationAttributeCreateDTO) UnsetSequence()`

UnsetSequence ensures that no value is present for Sequence, not even an explicit nil
### GetAttributeId

`func (o *InterpretationAttributeCreateDTO) GetAttributeId() int32`

GetAttributeId returns the AttributeId field if non-nil, zero value otherwise.

### GetAttributeIdOk

`func (o *InterpretationAttributeCreateDTO) GetAttributeIdOk() (*int32, bool)`

GetAttributeIdOk returns a tuple with the AttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeId

`func (o *InterpretationAttributeCreateDTO) SetAttributeId(v int32)`

SetAttributeId sets AttributeId field to given value.


### GetAttributeValueId

`func (o *InterpretationAttributeCreateDTO) GetAttributeValueId() int32`

GetAttributeValueId returns the AttributeValueId field if non-nil, zero value otherwise.

### GetAttributeValueIdOk

`func (o *InterpretationAttributeCreateDTO) GetAttributeValueIdOk() (*int32, bool)`

GetAttributeValueIdOk returns a tuple with the AttributeValueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValueId

`func (o *InterpretationAttributeCreateDTO) SetAttributeValueId(v int32)`

SetAttributeValueId sets AttributeValueId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


