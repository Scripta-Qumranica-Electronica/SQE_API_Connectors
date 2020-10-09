# SignInterpretationCreateDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LineId** | Pointer to **int32** |  | [optional] 
**PreviousSignInterpretationIds** | Pointer to **[]int32** |  | [optional] 
**NextSignInterpretationIds** | Pointer to **[]int32** |  | [optional] 
**Attributes** | [**[]InterpretationAttributeCreateDTO**](InterpretationAttributeCreateDTO.md) |  | 
**Rois** | [**[]SetInterpretationRoiDTO**](SetInterpretationRoiDTO.md) |  | 
**Commentary** | Pointer to [**NullableCommentaryCreateDTO**](CommentaryCreateDTO.md) |  | [optional] 
**BreakPreviousAndNextSignInterpretations** | Pointer to **bool** |  | [optional] 
**Character** | Pointer to **NullableString** |  | [optional] 
**IsVariant** | **bool** |  | 

## Methods

### NewSignInterpretationCreateDTO

`func NewSignInterpretationCreateDTO(attributes []InterpretationAttributeCreateDTO, rois []SetInterpretationRoiDTO, isVariant bool, ) *SignInterpretationCreateDTO`

NewSignInterpretationCreateDTO instantiates a new SignInterpretationCreateDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignInterpretationCreateDTOWithDefaults

`func NewSignInterpretationCreateDTOWithDefaults() *SignInterpretationCreateDTO`

NewSignInterpretationCreateDTOWithDefaults instantiates a new SignInterpretationCreateDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLineId

`func (o *SignInterpretationCreateDTO) GetLineId() int32`

GetLineId returns the LineId field if non-nil, zero value otherwise.

### GetLineIdOk

`func (o *SignInterpretationCreateDTO) GetLineIdOk() (*int32, bool)`

GetLineIdOk returns a tuple with the LineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineId

`func (o *SignInterpretationCreateDTO) SetLineId(v int32)`

SetLineId sets LineId field to given value.

### HasLineId

`func (o *SignInterpretationCreateDTO) HasLineId() bool`

HasLineId returns a boolean if a field has been set.

### GetPreviousSignInterpretationIds

`func (o *SignInterpretationCreateDTO) GetPreviousSignInterpretationIds() []int32`

GetPreviousSignInterpretationIds returns the PreviousSignInterpretationIds field if non-nil, zero value otherwise.

### GetPreviousSignInterpretationIdsOk

`func (o *SignInterpretationCreateDTO) GetPreviousSignInterpretationIdsOk() (*[]int32, bool)`

GetPreviousSignInterpretationIdsOk returns a tuple with the PreviousSignInterpretationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousSignInterpretationIds

`func (o *SignInterpretationCreateDTO) SetPreviousSignInterpretationIds(v []int32)`

SetPreviousSignInterpretationIds sets PreviousSignInterpretationIds field to given value.

### HasPreviousSignInterpretationIds

`func (o *SignInterpretationCreateDTO) HasPreviousSignInterpretationIds() bool`

HasPreviousSignInterpretationIds returns a boolean if a field has been set.

### SetPreviousSignInterpretationIdsNil

`func (o *SignInterpretationCreateDTO) SetPreviousSignInterpretationIdsNil(b bool)`

 SetPreviousSignInterpretationIdsNil sets the value for PreviousSignInterpretationIds to be an explicit nil

### UnsetPreviousSignInterpretationIds
`func (o *SignInterpretationCreateDTO) UnsetPreviousSignInterpretationIds()`

UnsetPreviousSignInterpretationIds ensures that no value is present for PreviousSignInterpretationIds, not even an explicit nil
### GetNextSignInterpretationIds

`func (o *SignInterpretationCreateDTO) GetNextSignInterpretationIds() []int32`

GetNextSignInterpretationIds returns the NextSignInterpretationIds field if non-nil, zero value otherwise.

### GetNextSignInterpretationIdsOk

`func (o *SignInterpretationCreateDTO) GetNextSignInterpretationIdsOk() (*[]int32, bool)`

GetNextSignInterpretationIdsOk returns a tuple with the NextSignInterpretationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextSignInterpretationIds

`func (o *SignInterpretationCreateDTO) SetNextSignInterpretationIds(v []int32)`

SetNextSignInterpretationIds sets NextSignInterpretationIds field to given value.

### HasNextSignInterpretationIds

`func (o *SignInterpretationCreateDTO) HasNextSignInterpretationIds() bool`

HasNextSignInterpretationIds returns a boolean if a field has been set.

### SetNextSignInterpretationIdsNil

`func (o *SignInterpretationCreateDTO) SetNextSignInterpretationIdsNil(b bool)`

 SetNextSignInterpretationIdsNil sets the value for NextSignInterpretationIds to be an explicit nil

### UnsetNextSignInterpretationIds
`func (o *SignInterpretationCreateDTO) UnsetNextSignInterpretationIds()`

UnsetNextSignInterpretationIds ensures that no value is present for NextSignInterpretationIds, not even an explicit nil
### GetAttributes

`func (o *SignInterpretationCreateDTO) GetAttributes() []InterpretationAttributeCreateDTO`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *SignInterpretationCreateDTO) GetAttributesOk() (*[]InterpretationAttributeCreateDTO, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *SignInterpretationCreateDTO) SetAttributes(v []InterpretationAttributeCreateDTO)`

SetAttributes sets Attributes field to given value.


### GetRois

`func (o *SignInterpretationCreateDTO) GetRois() []SetInterpretationRoiDTO`

GetRois returns the Rois field if non-nil, zero value otherwise.

### GetRoisOk

`func (o *SignInterpretationCreateDTO) GetRoisOk() (*[]SetInterpretationRoiDTO, bool)`

GetRoisOk returns a tuple with the Rois field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRois

`func (o *SignInterpretationCreateDTO) SetRois(v []SetInterpretationRoiDTO)`

SetRois sets Rois field to given value.


### GetCommentary

`func (o *SignInterpretationCreateDTO) GetCommentary() CommentaryCreateDTO`

GetCommentary returns the Commentary field if non-nil, zero value otherwise.

### GetCommentaryOk

`func (o *SignInterpretationCreateDTO) GetCommentaryOk() (*CommentaryCreateDTO, bool)`

GetCommentaryOk returns a tuple with the Commentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentary

`func (o *SignInterpretationCreateDTO) SetCommentary(v CommentaryCreateDTO)`

SetCommentary sets Commentary field to given value.

### HasCommentary

`func (o *SignInterpretationCreateDTO) HasCommentary() bool`

HasCommentary returns a boolean if a field has been set.

### SetCommentaryNil

`func (o *SignInterpretationCreateDTO) SetCommentaryNil(b bool)`

 SetCommentaryNil sets the value for Commentary to be an explicit nil

### UnsetCommentary
`func (o *SignInterpretationCreateDTO) UnsetCommentary()`

UnsetCommentary ensures that no value is present for Commentary, not even an explicit nil
### GetBreakPreviousAndNextSignInterpretations

`func (o *SignInterpretationCreateDTO) GetBreakPreviousAndNextSignInterpretations() bool`

GetBreakPreviousAndNextSignInterpretations returns the BreakPreviousAndNextSignInterpretations field if non-nil, zero value otherwise.

### GetBreakPreviousAndNextSignInterpretationsOk

`func (o *SignInterpretationCreateDTO) GetBreakPreviousAndNextSignInterpretationsOk() (*bool, bool)`

GetBreakPreviousAndNextSignInterpretationsOk returns a tuple with the BreakPreviousAndNextSignInterpretations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreakPreviousAndNextSignInterpretations

`func (o *SignInterpretationCreateDTO) SetBreakPreviousAndNextSignInterpretations(v bool)`

SetBreakPreviousAndNextSignInterpretations sets BreakPreviousAndNextSignInterpretations field to given value.

### HasBreakPreviousAndNextSignInterpretations

`func (o *SignInterpretationCreateDTO) HasBreakPreviousAndNextSignInterpretations() bool`

HasBreakPreviousAndNextSignInterpretations returns a boolean if a field has been set.

### GetCharacter

`func (o *SignInterpretationCreateDTO) GetCharacter() string`

GetCharacter returns the Character field if non-nil, zero value otherwise.

### GetCharacterOk

`func (o *SignInterpretationCreateDTO) GetCharacterOk() (*string, bool)`

GetCharacterOk returns a tuple with the Character field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharacter

`func (o *SignInterpretationCreateDTO) SetCharacter(v string)`

SetCharacter sets Character field to given value.

### HasCharacter

`func (o *SignInterpretationCreateDTO) HasCharacter() bool`

HasCharacter returns a boolean if a field has been set.

### SetCharacterNil

`func (o *SignInterpretationCreateDTO) SetCharacterNil(b bool)`

 SetCharacterNil sets the value for Character to be an explicit nil

### UnsetCharacter
`func (o *SignInterpretationCreateDTO) UnsetCharacter()`

UnsetCharacter ensures that no value is present for Character, not even an explicit nil
### GetIsVariant

`func (o *SignInterpretationCreateDTO) GetIsVariant() bool`

GetIsVariant returns the IsVariant field if non-nil, zero value otherwise.

### GetIsVariantOk

`func (o *SignInterpretationCreateDTO) GetIsVariantOk() (*bool, bool)`

GetIsVariantOk returns a tuple with the IsVariant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsVariant

`func (o *SignInterpretationCreateDTO) SetIsVariant(v bool)`

SetIsVariant sets IsVariant field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


