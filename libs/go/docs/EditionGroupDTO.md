# EditionGroupDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | [**EditionDTO**](EditionDTO.md) |  | 
**Others** | [**[]EditionDTO**](EditionDTO.md) |  | 

## Methods

### NewEditionGroupDTO

`func NewEditionGroupDTO(primary EditionDTO, others []EditionDTO, ) *EditionGroupDTO`

NewEditionGroupDTO instantiates a new EditionGroupDTO object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEditionGroupDTOWithDefaults

`func NewEditionGroupDTOWithDefaults() *EditionGroupDTO`

NewEditionGroupDTOWithDefaults instantiates a new EditionGroupDTO object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimary

`func (o *EditionGroupDTO) GetPrimary() EditionDTO`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *EditionGroupDTO) GetPrimaryOk() (*EditionDTO, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *EditionGroupDTO) SetPrimary(v EditionDTO)`

SetPrimary sets Primary field to given value.


### GetOthers

`func (o *EditionGroupDTO) GetOthers() []EditionDTO`

GetOthers returns the Others field if non-nil, zero value otherwise.

### GetOthersOk

`func (o *EditionGroupDTO) GetOthersOk() (*[]EditionDTO, bool)`

GetOthersOk returns a tuple with the Others field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOthers

`func (o *EditionGroupDTO) SetOthers(v []EditionDTO)`

SetOthers sets Others field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


