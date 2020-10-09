# SignInterpretationDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignInterpretationId** | **int32** |  | 
**NextSignInterpretations** | [**[]NextSignInterpretationDTO**](NextSignInterpretationDTO.md) |  | 
**Attributes** | [**[]InterpretationAttributeDTO**](InterpretationAttributeDTO.md) |  | 
**Rois** | [**[]InterpretationRoiDTO**](InterpretationRoiDTO.md) |  | 
**Commentary** | Pointer to [**NullableCommentaryDTO**](CommentaryDTO.md) |  | [optional] 
**Character** | Pointer to **NullableString** |  | [optional] 
**IsVariant** | **bool** |  | 

## Methods

### NewSignInterpretationDTO

`func NewSignInterpretationDTO(signInterpretationId int32, nextSignInterpretations []NextSignInterpretationDTO, attributes []InterpretationAttributeDTO, rois []InterpretationRoiDTO, isVariant bool, ) *SignInterpretationDTO`

NewSignInterpretationDTO instantiates a new SignInterpretationDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignInterpretationDTOWithDefaults

`func NewSignInterpretationDTOWithDefaults() *SignInterpretationDTO`

NewSignInterpretationDTOWithDefaults instantiates a new SignInterpretationDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignInterpretationId

`func (o *SignInterpretationDTO) GetSignInterpretationId() int32`

GetSignInterpretationId returns the SignInterpretationId field if non-nil, zero value otherwise.

### GetSignInterpretationIdOk

`func (o *SignInterpretationDTO) GetSignInterpretationIdOk() (*int32, bool)`

GetSignInterpretationIdOk returns a tuple with the SignInterpretationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignInterpretationId

`func (o *SignInterpretationDTO) SetSignInterpretationId(v int32)`

SetSignInterpretationId sets SignInterpretationId field to given value.


### GetNextSignInterpretations

`func (o *SignInterpretationDTO) GetNextSignInterpretations() []NextSignInterpretationDTO`

GetNextSignInterpretations returns the NextSignInterpretations field if non-nil, zero value otherwise.

### GetNextSignInterpretationsOk

`func (o *SignInterpretationDTO) GetNextSignInterpretationsOk() (*[]NextSignInterpretationDTO, bool)`

GetNextSignInterpretationsOk returns a tuple with the NextSignInterpretations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextSignInterpretations

`func (o *SignInterpretationDTO) SetNextSignInterpretations(v []NextSignInterpretationDTO)`

SetNextSignInterpretations sets NextSignInterpretations field to given value.


### GetAttributes

`func (o *SignInterpretationDTO) GetAttributes() []InterpretationAttributeDTO`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SignInterpretationDTO) GetAttributesOk() (*[]InterpretationAttributeDTO, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SignInterpretationDTO) SetAttributes(v []InterpretationAttributeDTO)`

SetAttributes sets Attributes field to given value.


### GetRois

`func (o *SignInterpretationDTO) GetRois() []InterpretationRoiDTO`

GetRois returns the Rois field if non-nil, zero value otherwise.

### GetRoisOk

`func (o *SignInterpretationDTO) GetRoisOk() (*[]InterpretationRoiDTO, bool)`

GetRoisOk returns a tuple with the Rois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRois

`func (o *SignInterpretationDTO) SetRois(v []InterpretationRoiDTO)`

SetRois sets Rois field to given value.


### GetCommentary

`func (o *SignInterpretationDTO) GetCommentary() CommentaryDTO`

GetCommentary returns the Commentary field if non-nil, zero value otherwise.

### GetCommentaryOk

`func (o *SignInterpretationDTO) GetCommentaryOk() (*CommentaryDTO, bool)`

GetCommentaryOk returns a tuple with the Commentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentary

`func (o *SignInterpretationDTO) SetCommentary(v CommentaryDTO)`

SetCommentary sets Commentary field to given value.

### HasCommentary

`func (o *SignInterpretationDTO) HasCommentary() bool`

HasCommentary returns a boolean if a field has been set.

### SetCommentaryNil

`func (o *SignInterpretationDTO) SetCommentaryNil(b bool)`

 SetCommentaryNil sets the value for Commentary to be an explicit nil

### UnsetCommentary
`func (o *SignInterpretationDTO) UnsetCommentary()`

UnsetCommentary ensures that no value is present for Commentary, not even an explicit nil
### GetCharacter

`func (o *SignInterpretationDTO) GetCharacter() string`

GetCharacter returns the Character field if non-nil, zero value otherwise.

### GetCharacterOk

`func (o *SignInterpretationDTO) GetCharacterOk() (*string, bool)`

GetCharacterOk returns a tuple with the Character field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharacter

`func (o *SignInterpretationDTO) SetCharacter(v string)`

SetCharacter sets Character field to given value.

### HasCharacter

`func (o *SignInterpretationDTO) HasCharacter() bool`

HasCharacter returns a boolean if a field has been set.

### SetCharacterNil

`func (o *SignInterpretationDTO) SetCharacterNil(b bool)`

 SetCharacterNil sets the value for Character to be an explicit nil

### UnsetCharacter
`func (o *SignInterpretationDTO) UnsetCharacter()`

UnsetCharacter ensures that no value is present for Character, not even an explicit nil
### GetIsVariant

`func (o *SignInterpretationDTO) GetIsVariant() bool`

GetIsVariant returns the IsVariant field if non-nil, zero value otherwise.

### GetIsVariantOk

`func (o *SignInterpretationDTO) GetIsVariantOk() (*bool, bool)`

GetIsVariantOk returns a tuple with the IsVariant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVariant

`func (o *SignInterpretationDTO) SetIsVariant(v bool)`

SetIsVariant sets IsVariant field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


