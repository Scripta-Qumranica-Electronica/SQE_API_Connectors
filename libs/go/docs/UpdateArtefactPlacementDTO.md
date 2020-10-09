# UpdateArtefactPlacementDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArtefactId** | **int32** |  | 
**IsPlaced** | **bool** |  | 
**Placement** | Pointer to [**NullablePlacementDTO**](PlacementDTO.md) |  | [optional] 

## Methods

### NewUpdateArtefactPlacementDTO

`func NewUpdateArtefactPlacementDTO(artefactId int32, isPlaced bool, ) *UpdateArtefactPlacementDTO`

NewUpdateArtefactPlacementDTO instantiates a new UpdateArtefactPlacementDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateArtefactPlacementDTOWithDefaults

`func NewUpdateArtefactPlacementDTOWithDefaults() *UpdateArtefactPlacementDTO`

NewUpdateArtefactPlacementDTOWithDefaults instantiates a new UpdateArtefactPlacementDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArtefactId

`func (o *UpdateArtefactPlacementDTO) GetArtefactId() int32`

GetArtefactId returns the ArtefactId field if non-nil, zero value otherwise.

### GetArtefactIdOk

`func (o *UpdateArtefactPlacementDTO) GetArtefactIdOk() (*int32, bool)`

GetArtefactIdOk returns a tuple with the ArtefactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArtefactId

`func (o *UpdateArtefactPlacementDTO) SetArtefactId(v int32)`

SetArtefactId sets ArtefactId field to given value.


### GetIsPlaced

`func (o *UpdateArtefactPlacementDTO) GetIsPlaced() bool`

GetIsPlaced returns the IsPlaced field if non-nil, zero value otherwise.

### GetIsPlacedOk

`func (o *UpdateArtefactPlacementDTO) GetIsPlacedOk() (*bool, bool)`

GetIsPlacedOk returns a tuple with the IsPlaced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPlaced

`func (o *UpdateArtefactPlacementDTO) SetIsPlaced(v bool)`

SetIsPlaced sets IsPlaced field to given value.


### GetPlacement

`func (o *UpdateArtefactPlacementDTO) GetPlacement() PlacementDTO`

GetPlacement returns the Placement field if non-nil, zero value otherwise.

### GetPlacementOk

`func (o *UpdateArtefactPlacementDTO) GetPlacementOk() (*PlacementDTO, bool)`

GetPlacementOk returns a tuple with the Placement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlacement

`func (o *UpdateArtefactPlacementDTO) SetPlacement(v PlacementDTO)`

SetPlacement sets Placement field to given value.

### HasPlacement

`func (o *UpdateArtefactPlacementDTO) HasPlacement() bool`

HasPlacement returns a boolean if a field has been set.

### SetPlacementNil

`func (o *UpdateArtefactPlacementDTO) SetPlacementNil(b bool)`

 SetPlacementNil sets the value for Placement to be an explicit nil

### UnsetPlacement
`func (o *UpdateArtefactPlacementDTO) UnsetPlacement()`

UnsetPlacement ensures that no value is present for Placement, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


