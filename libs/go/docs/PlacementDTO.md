# PlacementDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scale** | **float64** |  | 
**Rotate** | **float64** |  | 
**ZIndex** | **int32** |  | 
**Translate** | Pointer to [**NullableTranslateDTO**](TranslateDTO.md) |  | [optional] 

## Methods

### NewPlacementDTO

`func NewPlacementDTO(scale float64, rotate float64, zIndex int32, ) *PlacementDTO`

NewPlacementDTO instantiates a new PlacementDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlacementDTOWithDefaults

`func NewPlacementDTOWithDefaults() *PlacementDTO`

NewPlacementDTOWithDefaults instantiates a new PlacementDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScale

`func (o *PlacementDTO) GetScale() float64`

GetScale returns the Scale field if non-nil, zero value otherwise.

### GetScaleOk

`func (o *PlacementDTO) GetScaleOk() (*float64, bool)`

GetScaleOk returns a tuple with the Scale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScale

`func (o *PlacementDTO) SetScale(v float64)`

SetScale sets Scale field to given value.


### GetRotate

`func (o *PlacementDTO) GetRotate() float64`

GetRotate returns the Rotate field if non-nil, zero value otherwise.

### GetRotateOk

`func (o *PlacementDTO) GetRotateOk() (*float64, bool)`

GetRotateOk returns a tuple with the Rotate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotate

`func (o *PlacementDTO) SetRotate(v float64)`

SetRotate sets Rotate field to given value.


### GetZIndex

`func (o *PlacementDTO) GetZIndex() int32`

GetZIndex returns the ZIndex field if non-nil, zero value otherwise.

### GetZIndexOk

`func (o *PlacementDTO) GetZIndexOk() (*int32, bool)`

GetZIndexOk returns a tuple with the ZIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZIndex

`func (o *PlacementDTO) SetZIndex(v int32)`

SetZIndex sets ZIndex field to given value.


### GetTranslate

`func (o *PlacementDTO) GetTranslate() TranslateDTO`

GetTranslate returns the Translate field if non-nil, zero value otherwise.

### GetTranslateOk

`func (o *PlacementDTO) GetTranslateOk() (*TranslateDTO, bool)`

GetTranslateOk returns a tuple with the Translate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslate

`func (o *PlacementDTO) SetTranslate(v TranslateDTO)`

SetTranslate sets Translate field to given value.

### HasTranslate

`func (o *PlacementDTO) HasTranslate() bool`

HasTranslate returns a boolean if a field has been set.

### SetTranslateNil

`func (o *PlacementDTO) SetTranslateNil(b bool)`

 SetTranslateNil sets the value for Translate to be an explicit nil

### UnsetTranslate
`func (o *PlacementDTO) UnsetTranslate()`

UnsetTranslate ensures that no value is present for Translate, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


