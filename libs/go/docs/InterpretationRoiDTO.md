# InterpretationRoiDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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

### NewInterpretationRoiDTO

`func NewInterpretationRoiDTO(creatorId int32, editorId int32, interpretationRoiId int32, artefactId int32, signInterpretationId int32, shape string, translate TranslateDTO, exceptional bool, valuesSet bool, ) *InterpretationRoiDTO`

NewInterpretationRoiDTO instantiates a new InterpretationRoiDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterpretationRoiDTOWithDefaults

`func NewInterpretationRoiDTOWithDefaults() *InterpretationRoiDTO`

NewInterpretationRoiDTOWithDefaults instantiates a new InterpretationRoiDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatorId

`func (o *InterpretationRoiDTO) GetCreatorId() int32`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *InterpretationRoiDTO) GetCreatorIdOk() (*int32, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *InterpretationRoiDTO) SetCreatorId(v int32)`

SetCreatorId sets CreatorId field to given value.


### GetEditorId

`func (o *InterpretationRoiDTO) GetEditorId() int32`

GetEditorId returns the EditorId field if non-nil, zero value otherwise.

### GetEditorIdOk

`func (o *InterpretationRoiDTO) GetEditorIdOk() (*int32, bool)`

GetEditorIdOk returns a tuple with the EditorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorId

`func (o *InterpretationRoiDTO) SetEditorId(v int32)`

SetEditorId sets EditorId field to given value.


### GetInterpretationRoiId

`func (o *InterpretationRoiDTO) GetInterpretationRoiId() int32`

GetInterpretationRoiId returns the InterpretationRoiId field if non-nil, zero value otherwise.

### GetInterpretationRoiIdOk

`func (o *InterpretationRoiDTO) GetInterpretationRoiIdOk() (*int32, bool)`

GetInterpretationRoiIdOk returns a tuple with the InterpretationRoiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretationRoiId

`func (o *InterpretationRoiDTO) SetInterpretationRoiId(v int32)`

SetInterpretationRoiId sets InterpretationRoiId field to given value.


### GetArtefactId

`func (o *InterpretationRoiDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *InterpretationRoiDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *InterpretationRoiDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetSignInterpretationId

`func (o *InterpretationRoiDTO) GetSignInterpretationId() int32`

GetSignInterpretationId returns the SignInterpretationId field if non-nil, zero value otherwise.

### GetSignInterpretationIdOk

`func (o *InterpretationRoiDTO) GetSignInterpretationIdOk() (*int32, bool)`

GetSignInterpretationIdOk returns a tuple with the SignInterpretationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignInterpretationId

`func (o *InterpretationRoiDTO) SetSignInterpretationId(v int32)`

SetSignInterpretationId sets SignInterpretationId field to given value.


### GetShape

`func (o *InterpretationRoiDTO) GetShape() string`

GetShape returns the Shape field if non-nil, zero value otherwise.

### GetShapeOk

`func (o *InterpretationRoiDTO) GetShapeOk() (*string, bool)`

GetShapeOk returns a tuple with the Shape field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShape

`func (o *InterpretationRoiDTO) SetShape(v string)`

SetShape sets Shape field to given value.


### GetTranslate

`func (o *InterpretationRoiDTO) GetTranslate() TranslateDTO`

GetTranslate returns the Translate field if non-nil, zero value otherwise.

### GetTranslateOk

`func (o *InterpretationRoiDTO) GetTranslateOk() (*TranslateDTO, bool)`

GetTranslateOk returns a tuple with the Translate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslate

`func (o *InterpretationRoiDTO) SetTranslate(v TranslateDTO)`

SetTranslate sets Translate field to given value.


### GetStanceRotation

`func (o *InterpretationRoiDTO) GetStanceRotation() int32`

GetStanceRotation returns the StanceRotation field if non-nil, zero value otherwise.

### GetStanceRotationOk

`func (o *InterpretationRoiDTO) GetStanceRotationOk() (*int32, bool)`

GetStanceRotationOk returns a tuple with the StanceRotation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStanceRotation

`func (o *InterpretationRoiDTO) SetStanceRotation(v int32)`

SetStanceRotation sets StanceRotation field to given value.

### HasStanceRotation

`func (o *InterpretationRoiDTO) HasStanceRotation() bool`

HasStanceRotation returns a boolean if a field has been set.

### GetExceptional

`func (o *InterpretationRoiDTO) GetExceptional() bool`

GetExceptional returns the Exceptional field if non-nil, zero value otherwise.

### GetExceptionalOk

`func (o *InterpretationRoiDTO) GetExceptionalOk() (*bool, bool)`

GetExceptionalOk returns a tuple with the Exceptional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptional

`func (o *InterpretationRoiDTO) SetExceptional(v bool)`

SetExceptional sets Exceptional field to given value.


### GetValuesSet

`func (o *InterpretationRoiDTO) GetValuesSet() bool`

GetValuesSet returns the ValuesSet field if non-nil, zero value otherwise.

### GetValuesSetOk

`func (o *InterpretationRoiDTO) GetValuesSetOk() (*bool, bool)`

GetValuesSetOk returns a tuple with the ValuesSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuesSet

`func (o *InterpretationRoiDTO) SetValuesSet(v bool)`

SetValuesSet sets ValuesSet field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


