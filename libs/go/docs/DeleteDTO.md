# DeleteDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entity** | [**EditionEntities**](EditionEntities.md) |  | 
**Ids** | **[]int32** |  | 

## Methods

### NewDeleteDTO

`func NewDeleteDTO(entity EditionEntities, ids []int32, ) *DeleteDTO`

NewDeleteDTO instantiates a new DeleteDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteDTOWithDefaults

`func NewDeleteDTOWithDefaults() *DeleteDTO`

NewDeleteDTOWithDefaults instantiates a new DeleteDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntity

`func (o *DeleteDTO) GetEntity() EditionEntities`

GetEntity returns the Entity field if non-nil, zero value otherwise.

### GetEntityOk

`func (o *DeleteDTO) GetEntityOk() (*EditionEntities, bool)`

GetEntityOk returns a tuple with the Entity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntity

`func (o *DeleteDTO) SetEntity(v EditionEntities)`

SetEntity sets Entity field to given value.


### GetIds

`func (o *DeleteDTO) GetIds() []int32`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *DeleteDTO) GetIdsOk() (*[]int32, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *DeleteDTO) SetIds(v []int32)`

SetIds sets Ids field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


