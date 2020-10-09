# ImageStackDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableInt32** |  | [optional] 
**Images** | [**[]ImageDTO**](ImageDTO.md) |  | 
**MasterIndex** | Pointer to **NullableInt32** |  | [optional] 

## Methods

### NewImageStackDTO

`func NewImageStackDTO(images []ImageDTO, ) *ImageStackDTO`

NewImageStackDTO instantiates a new ImageStackDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImageStackDTOWithDefaults

`func NewImageStackDTOWithDefaults() *ImageStackDTO`

NewImageStackDTOWithDefaults instantiates a new ImageStackDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ImageStackDTO) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ImageStackDTO) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ImageStackDTO) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *ImageStackDTO) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ImageStackDTO) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ImageStackDTO) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetImages

`func (o *ImageStackDTO) GetImages() []ImageDTO`

GetImages returns the Images field if non-nil, zero value otherwise.

### GetImagesOk

`func (o *ImageStackDTO) GetImagesOk() (*[]ImageDTO, bool)`

GetImagesOk returns a tuple with the Images field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImages

`func (o *ImageStackDTO) SetImages(v []ImageDTO)`

SetImages sets Images field to given value.


### GetMasterIndex

`func (o *ImageStackDTO) GetMasterIndex() int32`

GetMasterIndex returns the MasterIndex field if non-nil, zero value otherwise.

### GetMasterIndexOk

`func (o *ImageStackDTO) GetMasterIndexOk() (*int32, bool)`

GetMasterIndexOk returns a tuple with the MasterIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterIndex

`func (o *ImageStackDTO) SetMasterIndex(v int32)`

SetMasterIndex sets MasterIndex field to given value.

### HasMasterIndex

`func (o *ImageStackDTO) HasMasterIndex() bool`

HasMasterIndex returns a boolean if a field has been set.

### SetMasterIndexNil

`func (o *ImageStackDTO) SetMasterIndexNil(b bool)`

 SetMasterIndexNil sets the value for MasterIndex to be an explicit nil

### UnsetMasterIndex
`func (o *ImageStackDTO) UnsetMasterIndex()`

UnsetMasterIndex ensures that no value is present for MasterIndex, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


