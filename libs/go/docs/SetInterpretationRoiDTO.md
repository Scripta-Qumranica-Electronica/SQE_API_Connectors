# SetInterpretationRoiDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArtefactId** | **int32** |  | 
**SignInterpretationId** | **int32** |  | 
**Shape** | **string** |  | 
**Translate** | [**TranslateDTO**](TranslateDTO.md) |  | 
**StanceRotation** | Pointer to **int32** |  | [optional] 
**Exceptional** | **bool** |  | 
**ValuesSet** | **bool** |  | 

## Methods

### NewSetInterpretationRoiDTO

`func NewSetInterpretationRoiDTO(artefactId int32, signInterpretationId int32, shape string, translate TranslateDTO, exceptional bool, valuesSet bool, ) *SetInterpretationRoiDTO`

NewSetInterpretationRoiDTO instantiates a new SetInterpretationRoiDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetInterpretationRoiDTOWithDefaults

`func NewSetInterpretationRoiDTOWithDefaults() *SetInterpretationRoiDTO`

NewSetInterpretationRoiDTOWithDefaults instantiates a new SetInterpretationRoiDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArtefactId

`func (o *SetInterpretationRoiDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *SetInterpretationRoiDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *SetInterpretationRoiDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetSignInterpretationId

`func (o *SetInterpretationRoiDTO) GetSignInterpretationId() int32`

GetSignInterpretationId returns the SignInterpretationId field if non-nil, zero value otherwise.

### GetSignInterpretationIdOk

`func (o *SetInterpretationRoiDTO) GetSignInterpretationIdOk() (*int32, bool)`

GetSignInterpretationIdOk returns a tuple with the SignInterpretationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignInterpretationId

`func (o *SetInterpretationRoiDTO) SetSignInterpretationId(v int32)`

SetSignInterpretationId sets SignInterpretationId field to given value.


### GetShape

`func (o *SetInterpretationRoiDTO) GetShape() string`

GetShape returns the Shape field if non-nil, zero value otherwise.

### GetShapeOk

`func (o *SetInterpretationRoiDTO) GetShapeOk() (*string, bool)`

GetShapeOk returns a tuple with the Shape field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShape

`func (o *SetInterpretationRoiDTO) SetShape(v string)`

SetShape sets Shape field to given value.


### GetTranslate

`func (o *SetInterpretationRoiDTO) GetTranslate() TranslateDTO`

GetTranslate returns the Translate field if non-nil, zero value otherwise.

### GetTranslateOk

`func (o *SetInterpretationRoiDTO) GetTranslateOk() (*TranslateDTO, bool)`

GetTranslateOk returns a tuple with the Translate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslate

`func (o *SetInterpretationRoiDTO) SetTranslate(v TranslateDTO)`

SetTranslate sets Translate field to given value.


### GetStanceRotation

`func (o *SetInterpretationRoiDTO) GetStanceRotation() int32`

GetStanceRotation returns the StanceRotation field if non-nil, zero value otherwise.

### GetStanceRotationOk

`func (o *SetInterpretationRoiDTO) GetStanceRotationOk() (*int32, bool)`

GetStanceRotationOk returns a tuple with the StanceRotation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStanceRotation

`func (o *SetInterpretationRoiDTO) SetStanceRotation(v int32)`

SetStanceRotation sets StanceRotation field to given value.

### HasStanceRotation

`func (o *SetInterpretationRoiDTO) HasStanceRotation() bool`

HasStanceRotation returns a boolean if a field has been set.

### GetExceptional

`func (o *SetInterpretationRoiDTO) GetExceptional() bool`

GetExceptional returns the Exceptional field if non-nil, zero value otherwise.

### GetExceptionalOk

`func (o *SetInterpretationRoiDTO) GetExceptionalOk() (*bool, bool)`

GetExceptionalOk returns a tuple with the Exceptional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptional

`func (o *SetInterpretationRoiDTO) SetExceptional(v bool)`

SetExceptional sets Exceptional field to given value.


### GetValuesSet

`func (o *SetInterpretationRoiDTO) GetValuesSet() bool`

GetValuesSet returns the ValuesSet field if non-nil, zero value otherwise.

### GetValuesSetOk

`func (o *SetInterpretationRoiDTO) GetValuesSetOk() (*bool, bool)`

GetValuesSetOk returns a tuple with the ValuesSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuesSet

`func (o *SetInterpretationRoiDTO) SetValuesSet(v bool)`

SetValuesSet sets ValuesSet field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


