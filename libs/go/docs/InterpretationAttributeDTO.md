# InterpretationAttributeDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterpretationAttributeId** | **int32** |  | 
**AttributeString** | **string** |  | 
**AttributeValueString** | **string** |  | 
**CreatorId** | **int32** |  | 
**EditorId** | **int32** |  | 
**Commentary** | Pointer to [**NullableCommentaryDTO**](CommentaryDTO.md) |  | [optional] 
**Sequence** | Pointer to **NullableInt32** |  | [optional] 
**AttributeId** | **int32** |  | 
**AttributeValueId** | **int32** |  | 

## Methods

### NewInterpretationAttributeDTO

`func NewInterpretationAttributeDTO(interpretationAttributeId int32, attributeString string, attributeValueString string, creatorId int32, editorId int32, attributeId int32, attributeValueId int32, ) *InterpretationAttributeDTO`

NewInterpretationAttributeDTO instantiates a new InterpretationAttributeDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterpretationAttributeDTOWithDefaults

`func NewInterpretationAttributeDTOWithDefaults() *InterpretationAttributeDTO`

NewInterpretationAttributeDTOWithDefaults instantiates a new InterpretationAttributeDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterpretationAttributeId

`func (o *InterpretationAttributeDTO) GetInterpretationAttributeId() int32`

GetInterpretationAttributeId returns the InterpretationAttributeId field if non-nil, zero value otherwise.

### GetInterpretationAttributeIdOk

`func (o *InterpretationAttributeDTO) GetInterpretationAttributeIdOk() (*int32, bool)`

GetInterpretationAttributeIdOk returns a tuple with the InterpretationAttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretationAttributeId

`func (o *InterpretationAttributeDTO) SetInterpretationAttributeId(v int32)`

SetInterpretationAttributeId sets InterpretationAttributeId field to given value.


### GetAttributeString

`func (o *InterpretationAttributeDTO) GetAttributeString() string`

GetAttributeString returns the AttributeString field if non-nil, zero value otherwise.

### GetAttributeStringOk

`func (o *InterpretationAttributeDTO) GetAttributeStringOk() (*string, bool)`

GetAttributeStringOk returns a tuple with the AttributeString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeString

`func (o *InterpretationAttributeDTO) SetAttributeString(v string)`

SetAttributeString sets AttributeString field to given value.


### GetAttributeValueString

`func (o *InterpretationAttributeDTO) GetAttributeValueString() string`

GetAttributeValueString returns the AttributeValueString field if non-nil, zero value otherwise.

### GetAttributeValueStringOk

`func (o *InterpretationAttributeDTO) GetAttributeValueStringOk() (*string, bool)`

GetAttributeValueStringOk returns a tuple with the AttributeValueString field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValueString

`func (o *InterpretationAttributeDTO) SetAttributeValueString(v string)`

SetAttributeValueString sets AttributeValueString field to given value.


### GetCreatorId

`func (o *InterpretationAttributeDTO) GetCreatorId() int32`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *InterpretationAttributeDTO) GetCreatorIdOk() (*int32, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *InterpretationAttributeDTO) SetCreatorId(v int32)`

SetCreatorId sets CreatorId field to given value.


### GetEditorId

`func (o *InterpretationAttributeDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *InterpretationAttributeDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *InterpretationAttributeDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetCommentary

`func (o *InterpretationAttributeDTO) GetCommentary() CommentaryDTO`

GetCommentary returns the Commentary field if non-nil, zero value otherwise.

### GetCommentaryOk

`func (o *InterpretationAttributeDTO) GetCommentaryOk() (*CommentaryDTO, bool)`

GetCommentaryOk returns a tuple with the Commentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentary

`func (o *InterpretationAttributeDTO) SetCommentary(v CommentaryDTO)`

SetCommentary sets Commentary field to given value.

### HasCommentary

`func (o *InterpretationAttributeDTO) HasCommentary() bool`

HasCommentary returns a boolean if a field has been set.

### SetCommentaryNil

`func (o *InterpretationAttributeDTO) SetCommentaryNil(b bool)`

 SetCommentaryNil sets the value for Commentary to be an explicit nil

### UnsetCommentary
`func (o *InterpretationAttributeDTO) UnsetCommentary()`

UnsetCommentary ensures that no value is present for Commentary, not even an explicit nil
### GetSequence

`func (o *InterpretationAttributeDTO) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *InterpretationAttributeDTO) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *InterpretationAttributeDTO) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *InterpretationAttributeDTO) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### SetSequenceNil

`func (o *InterpretationAttributeDTO) SetSequenceNil(b bool)`

 SetSequenceNil sets the value for Sequence to be an explicit nil

### UnsetSequence
`func (o *InterpretationAttributeDTO) UnsetSequence()`

UnsetSequence ensures that no value is present for Sequence, not even an explicit nil
### GetAttributeId

`func (o *InterpretationAttributeDTO) GetAttributeId() int32`

GetAttributeId returns the AttributeId field if non-nil, zero value otherwise.

### GetAttributeIdOk

`func (o *InterpretationAttributeDTO) GetAttributeIdOk() (*int32, bool)`

GetAttributeIdOk returns a tuple with the AttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeId

`func (o *InterpretationAttributeDTO) SetAttributeId(v int32)`

SetAttributeId sets AttributeId field to given value.


### GetAttributeValueId

`func (o *InterpretationAttributeDTO) GetAttributeValueId() int32`

GetAttributeValueId returns the AttributeValueId field if non-nil, zero value otherwise.

### GetAttributeValueIdOk

`func (o *InterpretationAttributeDTO) GetAttributeValueIdOk() (*int32, bool)`

GetAttributeValueIdOk returns a tuple with the AttributeValueId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValueId

`func (o *InterpretationAttributeDTO) SetAttributeValueId(v int32)`

SetAttributeValueId sets AttributeValueId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


