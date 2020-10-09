# UpdateInterpretationRoiDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterpretationRoiId** | **int32** |  | 
**ArtefactId** | **int32** |  | 
**SignInterpretationId** | **int32** |  | 
**Shape** | **string** |  | 
**Translate** | [**TranslateDTO**](TranslateDTO.md) |  | 
**StanceRotation** | Pointer to **int32** |  | [optional] 
**Exceptional** | **bool** |  | 
**ValuesSet** | **bool** |  | 

## Methods

### NewUpdateInterpretationRoiDTO

`func NewUpdateInterpretationRoiDTO(interpretationRoiId int32, artefactId int32, signInterpretationId int32, shape string, translate TranslateDTO, exceptional bool, valuesSet bool, ) *UpdateInterpretationRoiDTO`

NewUpdateInterpretationRoiDTO instantiates a new UpdateInterpretationRoiDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateInterpretationRoiDTOWithDefaults

`func NewUpdateInterpretationRoiDTOWithDefaults() *UpdateInterpretationRoiDTO`

NewUpdateInterpretationRoiDTOWithDefaults instantiates a new UpdateInterpretationRoiDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterpretationRoiId

`func (o *UpdateInterpretationRoiDTO) GetInterpretationRoiId() int32`

GetInterpretationRoiId returns the InterpretationRoiId field if non-nil, zero value otherwise.

### GetInterpretationRoiIdOk

`func (o *UpdateInterpretationRoiDTO) GetInterpretationRoiIdOk() (*int32, bool)`

GetInterpretationRoiIdOk returns a tuple with the InterpretationRoiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterpretationRoiId

`func (o *UpdateInterpretationRoiDTO) SetInterpretationRoiId(v int32)`

SetInterpretationRoiId sets InterpretationRoiId field to given value.


### GetArtefactId

`func (o *UpdateInterpretationRoiDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *UpdateInterpretationRoiDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *UpdateInterpretationRoiDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetSignInterpretationId

`func (o *UpdateInterpretationRoiDTO) GetSignInterpretationId() int32`

GetSignInterpretationId returns the SignInterpretationId field if non-nil, zero value otherwise.

### GetSignInterpretationIdOk

`func (o *UpdateInterpretationRoiDTO) GetSignInterpretationIdOk() (*int32, bool)`

GetSignInterpretationIdOk returns a tuple with the SignInterpretationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignInterpretationId

`func (o *UpdateInterpretationRoiDTO) SetSignInterpretationId(v int32)`

SetSignInterpretationId sets SignInterpretationId field to given value.


### GetShape

`func (o *UpdateInterpretationRoiDTO) GetShape() string`

GetShape returns the Shape field if non-nil, zero value otherwise.

### GetShapeOk

`func (o *UpdateInterpretationRoiDTO) GetShapeOk() (*string, bool)`

GetShapeOk returns a tuple with the Shape field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShape

`func (o *UpdateInterpretationRoiDTO) SetShape(v string)`

SetShape sets Shape field to given value.


### GetTranslate

`func (o *UpdateInterpretationRoiDTO) GetTranslate() TranslateDTO`

GetTranslate returns the Translate field if non-nil, zero value otherwise.

### GetTranslateOk

`func (o *UpdateInterpretationRoiDTO) GetTranslateOk() (*TranslateDTO, bool)`

GetTranslateOk returns a tuple with the Translate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslate

`func (o *UpdateInterpretationRoiDTO) SetTranslate(v TranslateDTO)`

SetTranslate sets Translate field to given value.


### GetStanceRotation

`func (o *UpdateInterpretationRoiDTO) GetStanceRotation() int32`

GetStanceRotation returns the StanceRotation field if non-nil, zero value otherwise.

### GetStanceRotationOk

`func (o *UpdateInterpretationRoiDTO) GetStanceRotationOk() (*int32, bool)`

GetStanceRotationOk returns a tuple with the StanceRotation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStanceRotation

`func (o *UpdateInterpretationRoiDTO) SetStanceRotation(v int32)`

SetStanceRotation sets StanceRotation field to given value.

### HasStanceRotation

`func (o *UpdateInterpretationRoiDTO) HasStanceRotation() bool`

HasStanceRotation returns a boolean if a field has been set.

### GetExceptional

`func (o *UpdateInterpretationRoiDTO) GetExceptional() bool`

GetExceptional returns the Exceptional field if non-nil, zero value otherwise.

### GetExceptionalOk

`func (o *UpdateInterpretationRoiDTO) GetExceptionalOk() (*bool, bool)`

GetExceptionalOk returns a tuple with the Exceptional field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExceptional

`func (o *UpdateInterpretationRoiDTO) SetExceptional(v bool)`

SetExceptional sets Exceptional field to given value.


### GetValuesSet

`func (o *UpdateInterpretationRoiDTO) GetValuesSet() bool`

GetValuesSet returns the ValuesSet field if non-nil, zero value otherwise.

### GetValuesSetOk

`func (o *UpdateInterpretationRoiDTO) GetValuesSetOk() (*bool, bool)`

GetValuesSetOk returns a tuple with the ValuesSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValuesSet

`func (o *UpdateInterpretationRoiDTO) SetValuesSet(v bool)`

SetValuesSet sets ValuesSet field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


