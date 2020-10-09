# UpdatedInterpretationRoiDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldInterpretationRoiId** | **int32** |  | 
**CreatorId** | **int32** |  | 
**EditorId** | **int32** |  | 
**InterpretationRoiId** | **int32** |  | 
**ArtefactId** | **int32** |  | 
**SignInterpretationId** | **int32** |  | 
**Shape** | **string** |  | 
**Translate** | [**TranslateDTO**](TranslateDTO.md) |  | 
**StanceRotation** | Pointer to **int32** |  | [optional] 
**Exceptional** | **bool** |  | 
**ValuesSet** | **bool** |  | 

## Methods

### NewUpdatedInterpretationRoiDTO

`func NewUpdatedInterpretationRoiDTO(oldInterpretationRoiId int32, creatorId int32, editorId int32, interpretationRoiId int32, artefactId int32, signInterpretationId int32, shape string, translate TranslateDTO, exceptional bool, valuesSet bool, ) *UpdatedInterpretationRoiDTO`

NewUpdatedInterpretationRoiDTO instantiates a new UpdatedInterpretationRoiDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatedInterpretationRoiDTOWithDefaults

`func NewUpdatedInterpretationRoiDTOWithDefaults() *UpdatedInterpretationRoiDTO`

NewUpdatedInterpretationRoiDTOWithDefaults instantiates a new UpdatedInterpretationRoiDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOldInterpretationRoiId

`func (o *UpdatedInterpretationRoiDTO) GetOldInterpretationRoiId() int32`

GetOldInterpretationRoiId returns the OldInterpretationRoiId field if non-nil, zero value otherwise.

### GetOldInterpretationRoiIdOk

`func (o *UpdatedInterpretationRoiDTO) GetOldInterpretationRoiIdOk() (*int32, bool)`

GetOldInterpretationRoiIdOk returns a tuple with the OldInterpretationRoiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldInterpretationRoiId

`func (o *UpdatedInterpretationRoiDTO) SetOldInterpretationRoiId(v int32)`

SetOldInterpretationRoiId sets OldInterpretationRoiId field to given value.


### GetCreatorId

`func (o *UpdatedInterpretationRoiDTO) GetCreatorId() int32`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *UpdatedInterpretationRoiDTO) GetCreatorIdOk() (*int32, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *UpdatedInterpretationRoiDTO) SetCreatorId(v int32)`

SetCreatorId sets CreatorId field to given value.


### GetEditorId

`func (o *UpdatedInterpretationRoiDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *UpdatedInterpretationRoiDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *UpdatedInterpretationRoiDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetInterpretationRoiId

`func (o *UpdatedInterpretationRoiDTO) GetInterpretationRoiId() int32`

GetInterpretationRoiId returns the InterpretationRoiId field if non-nil, zero value otherwise.

### GetInterpretationRoiIdOk

`func (o *UpdatedInterpretationRoiDTO) GetInterpretationRoiIdOk() (*int32, bool)`

GetInterpretationRoiIdOk returns a tuple with the InterpretationRoiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretationRoiId

`func (o *UpdatedInterpretationRoiDTO) SetInterpretationRoiId(v int32)`

SetInterpretationRoiId sets InterpretationRoiId field to given value.


### GetArtefactId

`func (o *UpdatedInterpretationRoiDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *UpdatedInterpretationRoiDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *UpdatedInterpretationRoiDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetSignInterpretationId

`func (o *UpdatedInterpretationRoiDTO) GetSignInterpretationId() int32`

GetSignInterpretationId returns the SignInterpretationId field if non-nil, zero value otherwise.

### GetSignInterpretationIdOk

`func (o *UpdatedInterpretationRoiDTO) GetSignInterpretationIdOk() (*int32, bool)`

GetSignInterpretationIdOk returns a tuple with the SignInterpretationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignInterpretationId

`func (o *UpdatedInterpretationRoiDTO) SetSignInterpretationId(v int32)`

SetSignInterpretationId sets SignInterpretationId field to given value.


### GetShape

`func (o *UpdatedInterpretationRoiDTO) GetShape() string`

GetShape returns the Shape field if non-nil, zero value otherwise.

### GetShapeOk

`func (o *UpdatedInterpretationRoiDTO) GetShapeOk() (*string, bool)`

GetShapeOk returns a tuple with the Shape field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShape

`func (o *UpdatedInterpretationRoiDTO) SetShape(v string)`

SetShape sets Shape field to given value.


### GetTranslate

`func (o *UpdatedInterpretationRoiDTO) GetTranslate() TranslateDTO`

GetTranslate returns the Translate field if non-nil, zero value otherwise.

### GetTranslateOk

`func (o *UpdatedInterpretationRoiDTO) GetTranslateOk() (*TranslateDTO, bool)`

GetTranslateOk returns a tuple with the Translate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslate

`func (o *UpdatedInterpretationRoiDTO) SetTranslate(v TranslateDTO)`

SetTranslate sets Translate field to given value.


### GetStanceRotation

`func (o *UpdatedInterpretationRoiDTO) GetStanceRotation() int32`

GetStanceRotation returns the StanceRotation field if non-nil, zero value otherwise.

### GetStanceRotationOk

`func (o *UpdatedInterpretationRoiDTO) GetStanceRotationOk() (*int32, bool)`

GetStanceRotationOk returns a tuple with the StanceRotation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStanceRotation

`func (o *UpdatedInterpretationRoiDTO) SetStanceRotation(v int32)`

SetStanceRotation sets StanceRotation field to given value.

### HasStanceRotation

`func (o *UpdatedInterpretationRoiDTO) HasStanceRotation() bool`

HasStanceRotation returns a boolean if a field has been set.

### GetExceptional

`func (o *UpdatedInterpretationRoiDTO) GetExceptional() bool`

GetExceptional returns the Exceptional field if non-nil, zero value otherwise.

### GetExceptionalOk

`func (o *UpdatedInterpretationRoiDTO) GetExceptionalOk() (*bool, bool)`

GetExceptionalOk returns a tuple with the Exceptional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptional

`func (o *UpdatedInterpretationRoiDTO) SetExceptional(v bool)`

SetExceptional sets Exceptional field to given value.


### GetValuesSet

`func (o *UpdatedInterpretationRoiDTO) GetValuesSet() bool`

GetValuesSet returns the ValuesSet field if non-nil, zero value otherwise.

### GetValuesSetOk

`func (o *UpdatedInterpretationRoiDTO) GetValuesSetOk() (*bool, bool)`

GetValuesSetOk returns a tuple with the ValuesSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuesSet

`func (o *UpdatedInterpretationRoiDTO) SetValuesSet(v bool)`

SetValuesSet sets ValuesSet field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


